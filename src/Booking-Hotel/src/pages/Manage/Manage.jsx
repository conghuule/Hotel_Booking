import { Button, Form, Input, InputNumber, Select, Table } from 'antd';
import ImageUpload from 'components/ImageUpload/ImageUpload';
import notify from 'components/notify';
import { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addData, addFile, getData, updateData } from 'services/services';

export default function Manage({ isUpdate }) {
  const { id } = useParams();
  const [locationList, setLocationList] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [roomData, setRoomData] = useState([{}]);
  const [iniIialImages, setInitialImages] = useState([]);
  const [form] = Form.useForm();
  const user = useSelector((state) => state.auth.user);

  const rules = [
    {
      required: true,
      message: 'This field is required',
    },
  ];

  useEffect(() => {
    isUpdate &&
      getData({
        docName: 'hotels',
        id,
      }).then((res) => {
        const imagesURL = res.images?.map((image) => ({ url: image }));
        const roomsData = res.rooms?.reduce(
          (obj, room, index) => ({
            ...obj,
            [`roomName-${index}`]: room.name,
            [`price-${index}`]: room.price,
            [`roomFacilities-${index}`]: room.facilities,
          }),
          {}
        );

        setRoomData(res.rooms ? res.rooms?.map(() => ({})) : []);
        setInitialImages(imagesURL);

        form.setFieldsValue({
          address: res.address,
          desc: res.desc,
          facilities: res.facilities,
          images: imagesURL,
          location: res.location,
          name: res.name,
          ...roomsData,
        });
      });
  }, [form, id, isUpdate]);

  useEffect(() => {
    getData({ docName: 'facilities' }).then((res) =>
      setFacilities((prev) => res?.map((v) => v.name))
    );
  }, []);

  useEffect(() => {
    getData({ docName: 'locations' }).then((res) => setLocationList(res));
  }, []);

  const onSubmit = async (values) => {
    try {
      const imagesURL = values.images?.fileList
        ? await Promise.all(
            values.images?.fileList?.map((image) =>
              image?.originFileObj
                ? addFile({ file: image.originFileObj, folder: 'hotels' })
                : image?.url
            )
          )
        : values.images?.map((image) => image.url);

      const room_quantity = Object.keys(values)?.filter((v) =>
        v.includes('price')
      )?.length;
      const rooms = Array(room_quantity)
        .fill()
        ?.map((_, index) => ({
          name: values[`roomName-${index}`],
          price: values[`price-${index}`],
          facilities: values[`roomFacilities-${index}`],
        }));

      const submitData = {
        address: values.address,
        desc: values.desc,
        facilities: values.facilities,
        images: imagesURL,
        location: values.location,
        name: values.name,
        owner: user.uid,
        reviews: [],
        room_available_quantity: room_quantity,
        rooms: rooms,
      };
      console.log(submitData);
      if (isUpdate) {
        await updateData({ docName: 'hotels', data: submitData, id });
      } else {
        await addData({ docName: 'hotels', data: submitData });
        const locationData = await getData({
          docName: 'locations',
          id: values.location,
        });
        await updateData({
          docName: 'locations',
          id: values.location,
          data: { hotel_quantity: locationData.hotel_quantity + 1 },
        });
      }

      notify({
        mess: isUpdate ? 'Update rooms successful' : 'Create rooms successful',
        type: 'success',
      });
    } catch (error) {
      console.log(error);
      notify({
        mess: isUpdate ? 'Update rooms failed' : 'Create rooms failed',
        type: 'error',
      });
    }
  };

  const columns = [
    {
      title: 'Room Type',
      dataIndex: 'roomType',
      onHeaderCell: () => ({ className: 'bg-mainColor-200 text-white' }),
      render: (_, { name, facilities: defaultFacilities }, index) => (
        <div className="flex flex-col gap-2">
          <Form.Item name={`roomName-${index}`} noStyle rules={rules}>
            <Input placeholder="Room name" />
          </Form.Item>
          <Form.Item name={`roomFacilities-${index}`} noStyle rules={rules}>
            <Select
              placeholder="Facilities"
              mode="multiple"
              showArrow
              dropdownMatchSelectWidth={false}
              options={facilities?.map((facility) => ({
                label: facility,
                value: facility,
              }))}
            />
          </Form.Item>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      onHeaderCell: () => ({ className: 'bg-mainColor-200 text-white' }),
      render: (text, _, index) => (
        <Form.Item name={`price-${index}`} noStyle rules={rules}>
          <InputNumber
            className="w-full"
            formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          />
        </Form.Item>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: 75,
      onHeaderCell: () => ({ className: 'bg-mainColor-200 text-white' }),
      render: (_, record, index) => (
        <AiFillDelete
          className="cursor-pointer"
          color="#DC4147"
          size={20}
          onClick={() => {
            const data = form.getFieldsValue();
            delete data[`roomName-${index}`];
            delete data[`roomFacilities-${index}`];

            form.setFieldsValue(data);
            setRoomData((prev) => {
              prev.splice(index, 1);
              return [...prev];
            });
          }}
        />
      ),
    },
  ];

  return (
    <Form.Provider onFormFinish={(_, { values }) => onSubmit(values)}>
      <Form form={form} name="hotelForm" layout="vertical">
        <div className="mx-5">
          <div className="flex items-center justify-between mb-[50px]">
            <span className="text-3xl font-bold text-mainColor-200">
              {isUpdate ? 'Change room details' : 'Create new Room'}
            </span>
            <Button
              type="primary"
              className="bg-mainColor-200"
              size="large"
              htmlType="submit"
            >
              {isUpdate ? 'Save changes' : 'Create room'}
            </Button>
          </div>
          <ImageUpload
            multiple
            size="lg"
            name="images"
            initialValue={iniIialImages}
            required
          />
          <Form.Item
            name="name"
            label={<span className="text-lg font-bold">Hotel name</span>}
            rules={rules}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label={<span className="text-lg font-bold">Address</span>}
            rules={rules}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="location"
            label={<span className="text-lg font-bold">Location</span>}
            rules={rules}
          >
            <Select
              showSearch
              dropdownMatchSelectWidth={false}
              options={locationList?.map((location) => ({
                label: location.name,
                value: location.name,
              }))}
            />
          </Form.Item>
          <Form.Item
            name="desc"
            label={<span className="text-lg font-bold">Description</span>}
            rules={rules}
          >
            <Input.TextArea autoSize={{ minRows: 6 }} showCount />
          </Form.Item>
          <Form.Item
            name="facilities"
            label={
              <span className="text-lg font-bold">Most popular facilities</span>
            }
            rules={rules}
          >
            <Select
              placeholder="Facilities"
              mode="multiple"
              showArrow
              dropdownMatchSelectWidth={false}
              options={facilities?.map((facility) => ({
                label: facility,
                value: facility,
              }))}
            />
          </Form.Item>
          <Button
            type="primary"
            className="mb-1"
            onClick={() => setRoomData((prev) => [...prev, {}])}
          >
            Add room
          </Button>
          <Table
            columns={columns}
            dataSource={roomData}
            bordered
            pagination={false}
          />
        </div>
      </Form>
    </Form.Provider>
  );
}
