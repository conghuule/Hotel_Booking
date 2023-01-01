import {
  Breadcrumb,
  Button,
  Carousel,
  Form,
  InputNumber,
  Select,
  Skeleton,
  Table,
} from 'antd';
import Search from 'components/Search/Search';
import { useEffect, useMemo, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { getData } from 'services/services';
import { formatCurrency } from 'utils/function';

export default function Detail() {
  const { id } = useParams();
  const [hotelData, setHotelData] = useState({ data: {}, isLoading: true });
  const [promotionList, setPromotionList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);

  useEffect(() => {
    getData({
      docName: 'hotels',
      id,
    }).then((res) => {
      setHotelData({ data: res, isLoading: false });
    });

    getData({
      docName: 'promotions',
    }).then((res) => {
      setPromotionList(res);
    });
  }, [id]);

  const onChangeQuantity = (forms) => {
    const data = forms.getFieldsValue();
    const promotionCode = forms.getFieldValue('promotion');
    const promotion = promotionList.find((v) => v.code === promotionCode);

    const price = Object.values(data)
      .filter((v) => Number.isInteger(v))
      ?.reduce(
        (total, quantity, index) =>
          total + quantity * hotelData.data.rooms?.[index]?.price,
        0
      );

    const amount = !promotion
      ? 0
      : promotion.discount_percent * price > promotion.max_discount_amount
      ? promotion.max_discount_amount
      : promotion.discount_percent;

    setTotalPrice(price);
    setDiscountAmount(amount);
  };

  const columns = [
    {
      title: 'Room Type',
      dataIndex: 'roomType',
      onHeaderCell: () => ({ className: 'bg-mainColor-200 text-white' }),
      render: (_, { name, facilities }) => (
        <div className="flex flex-col">
          <span className="font-bold">{name}</span>
          <Breadcrumb separator="•">
            {facilities?.map((facility, index) => (
              <Breadcrumb.Item key={index}>{facility}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      onHeaderCell: () => ({ className: 'bg-mainColor-200 text-white' }),
      render: (text) => formatCurrency(text),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      onHeaderCell: () => ({ className: 'bg-mainColor-200 text-white' }),
      render: (text, _, index) => (
        <Form.Item name={`quantity-${index}`}>
          <InputNumber min={0} defaultValue={text} />
        </Form.Item>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
      render: () => (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <span className="font-bold">{formatCurrency(totalPrice)}</span>
            <span className="text-red-400">
              -{formatCurrency(discountAmount)}
            </span>
            <span className="opacity-50">Includes taxes and fees</span>
          </div>
          <div className="flex flex-col gap-3">
            <Form.Item name="promotion">
              <Select
                placeholder="Coupon code"
                className="w-full"
                options={promotionList.map((promotion) => ({
                  label: promotion.code,
                  value: promotion.code,
                }))}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Book now
            </Button>
          </div>
        </div>
      ),
      onHeaderCell: () => ({ className: 'bg-mainColor-200 text-white' }),
      onCell: (_, index) => {
        if (index === 0) {
          return {
            rowSpan: data.length,
          };
        }

        return {
          rowSpan: 0,
        };
      },
    },
  ];

  const data = useMemo(
    () => hotelData.data?.rooms?.map((room) => ({ ...room, quantity: 0 })),
    [hotelData]
  );

  return (
    <Skeleton loading={hotelData.isLoading} active>
      <Form.Provider
        onFormChange={(name, info) => onChangeQuantity(info.forms.bookingForm)}
      >
        <div className="mx-5">
          <div className="flex gap-10">
            <div className="mb-5">
              <h3 className="text-2xl font-bold text-mainColor-150">Search</h3>
              <Search vertical className="" />
            </div>
            <div className="flex flex-col w-3/4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-2xl font-bold text-mainColor-200">
                  {hotelData.data?.name}
                </span>
                <Button type="primary" htmlType="submit" size="large">
                  Chat to Hotel ower
                </Button>
              </div>
              <span className="">
                {hotelData.data?.address} -{' '}
                <Link className="no-underline text-mainColor-150">
                  Show on map
                </Link>
              </span>
              <Carousel autoplay>
                {hotelData.data?.images?.map((image) => (
                  <img
                    className="p-1 bg-white border rounded w-full h-[273px] mt-1 object-contain"
                    src={image}
                    alt=""
                  />
                ))}
              </Carousel>
            </div>
          </div>
          <div className="flex flex-col gap-5 py-5">
            <div className="flex flex-col w-1/4 gap-1">
              <div className="flex items-center gap-3">
                <div className="">
                  {hotelData.data?.reviews?.length
                    ? Array(
                        Number.parseInt(
                          hotelData.data?.reviews?.reduce(
                            (total, review) => total + review.rating,
                            0
                          ) / hotelData.data?.reviews?.length
                        )
                      )
                        .fill()
                        .map(() => (
                          <AiFillStar className="text-yellow-300" size={20} />
                        ))
                    : ''}
                </div>
                <span className="text-base text-md">
                  {hotelData.data?.reviews?.length} reviews
                </span>
                <div className="p-2 rounded-r-lg rounded-tl-lg rounded-bl-sm bg-mainColor-150 text-white">
                  {hotelData.data?.reviews?.length
                    ? hotelData.data?.reviews?.reduce(
                        (total, review) => total + review.rating,
                        0
                      ) / hotelData.data?.reviews?.length
                    : 0}
                </div>
              </div>
              <div className="flex flex-col">
                <Breadcrumb separator="•">
                  {hotelData.data?.specs?.map((spec, index) => (
                    <Breadcrumb.Item key={index}>{spec}</Breadcrumb.Item>
                  ))}
                </Breadcrumb>
              </div>
            </div>
            <span>{hotelData.data?.desc}</span>
          </div>
          <div className="mb-5">
            <span className="text-2xl font-bold">Most popular facilities</span>
            <Breadcrumb separator="•">
              {hotelData.data?.facilities?.map((facility, index) => (
                <Breadcrumb.Item key={index}>{facility}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </div>
          <Form name="bookingForm">
            <Table columns={columns} dataSource={data} bordered />
          </Form>
        </div>
      </Form.Provider>
    </Skeleton>
  );
}
