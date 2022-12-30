import { Breadcrumb, Button, InputNumber, Select, Table } from 'antd';
import ImageUpload from 'components/ImagUpload/ImageUpload';
import { AiFillDelete, AiOutlineWifi } from 'react-icons/ai';
import { CiParking1 } from 'react-icons/ci';
import { MdSmokeFree } from 'react-icons/md';

export default function Manage({ update }) {
  const facilities = ['1 bathroom', '1 kitchen', '30m²', '1 queen bed'];

  const columns = [
    {
      title: 'Room Type',
      dataIndex: 'roomType',
      onHeaderCell: () => ({ className: 'bg-mainColor-200 text-white' }),
      render: (_, { name, facilities }) => (
        <div className="flex flex-col gap-2">
          <span className="font-bold">{name}</span>
          <Breadcrumb separator="•">
            {facilities.map((facility, index) => (
              <Breadcrumb.Item key={index}>{facility}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Select
            className="min-w-[200px]"
            placeholder="Facilities"
            mode="multiple"
            showArrow
            dropdownMatchSelectWidth={false}
            options={[
              { label: 'Non-smoking rooms', value: 0 },
              { label: 'Free parking', value: 1 },
              { label: 'Free WiFi', value: 2 },
              { label: 'Family rooms', value: 3 },
            ]}
          />
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      onHeaderCell: () => ({ className: 'bg-mainColor-200 text-white' }),
      render: (text) => (
        <InputNumber
          className="w-full"
          formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        />
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: 75,
      onHeaderCell: () => ({ className: 'bg-mainColor-200 text-white' }),
      render: (_, record) => (
        <AiFillDelete className="cursor-pointer" color="#DC4147" size={20} />
      ),
    },
  ];

  const data = [
    {
      name: 'Standard Double Room',
      facilities,
      price: 2380000,
    },
    { name: 'Superior Double Room', facilities, price: 3330000 },
  ];

  return (
    <div className="mx-5">
      <div className="flex items-center justify-between mb-[50px]">
        <span className="text-3xl font-bold text-mainColor-200">
          {update ? 'Change room details' : 'Create new Room'}
        </span>
        <Button type="primary" className="bg-mainColor-200" size="large">
          {update ? 'Save changes' : 'Create room'}
        </Button>
      </div>
      <div className="flex flex-col mb-10">
        <span className="text-2xl font-bold text-mainColor-200">
          Lucky Star Hotel De Tham St ⭐⭐⭐⭐
        </span>

        <span className="text-lg">
          Lucky Star Hotel De Tham St, District 1, Ho Chi Minh City
        </span>
      </div>
      <ImageUpload multiple />
      <div className="flex gap-5 mb-10">
        <div className="w-3/4 p-5 text-lg break-words border-2 border-solid border-mainColor-100 rounded-xl ">
          Featuring a shared lounge, garden and views of river, Luxury An Phú
          Đông Hotel is located in Ho Chi Minh City, 10 km from Vincom Plaza Thu
          Duc. The property is around 10 km from Tan Dinh Market, 10.9 km from
          Diamond Plaza and 11.1 km from Saigon Central Post Office. The
          property has a 24-hour front desk and free WiFi is available
          throughout the property.
          <br />
          The rooms come with air conditioning, a flat-screen TV with cable
          channels, an electric tea pot, a shower, slippers and a closet. All
          guest rooms have a private bathroom, a hairdryer and bed linen. <br />
          War Remnants Museum is 11.1 km from the hotel, while Saigon Notre Dame
          Cathedral is 11.3 km from the property. The nearest airport is Tan Son
          Nhat International Airport, 6.9 km from Luxury An Phú Đông Hotel.
        </div>
        <div className="flex flex-col gap-4">
          <div className="p-2 text-xl font-bold border-2 border-solid border-mainColor-100 rounded-xl">
            Studio
          </div>
          <div className="p-2 text-lg break-words border-2 border-solid border-mainColor-100 rounded-xl">
            Entire studio • 1 bathroom • 1 kitchen • 30m² 1 queen bed
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-10">
        <span className="text-2xl font-bold">Most popular facilities</span>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <MdSmokeFree />
            <span>Non-smoking rooms</span>
          </div>
          <div className="flex gap-1">
            <CiParking1 />
            <span>Free parking</span>
          </div>
          <div className="flex gap-1">
            <AiOutlineWifi />
            <span>Free WiFi</span>
          </div>
        </div>
        <Select
          className="w-2/3"
          placeholder="Facilities"
          mode="multiple"
          showArrow
          dropdownMatchSelectWidth={false}
          options={[
            { label: 'Non-smoking rooms', value: 0 },
            { label: 'Free parking', value: 1 },
            { label: 'Free WiFi', value: 2 },
            { label: 'Family rooms', value: 3 },
          ]}
        />
      </div>
      <Table columns={columns} dataSource={data} bordered />
    </div>
  );
}
