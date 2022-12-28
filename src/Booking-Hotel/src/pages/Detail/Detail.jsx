import {
  Breadcrumb,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Table,
} from 'antd';
import Search from 'components/Search/Search';
import { Link } from 'react-router-dom';
import hotelBg from 'assets/images/Hotel2.png';
import icon1 from 'assets/images/icon-no-smoking.png';
import icon2 from 'assets/images/icon-free-parking.png';
import icon3 from 'assets/images/icon-free-wifi.png';
import { formatCurrency } from 'utils/function';

export default function Detail({ vertical }) {
  const facilities = ['1 bathroom', '1 kitchen', '30m²', '1 queen bed'];

  const columns = [
    {
      title: 'Room Type',
      dataIndex: 'roomType',
      onHeaderCell: () => ({ className: 'bg-mainColor-200 text-white' }),
      render: (_, { name, facilities }) => (
        <div className="flex flex-col">
          <span className="font-bold">{name}</span>
          <Breadcrumb separator="•">
            {facilities.map((facility) => (
              <Breadcrumb.Item>{facility}</Breadcrumb.Item>
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
      render: (_, { totalPrice }) => (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <span className="font-bold">{formatCurrency(totalPrice)}</span>
            <span className="opacity-50">Includes taxes and fees</span>
          </div>
          <div className="flex flex-col gap-3">
            <Select placeholder="Coupon code" className="w-full" />
            <Button type="primary" block>
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

  const data = [
    {
      name: 'Standard Double Room',
      facilities,
      price: 2380000,
      quantity: 1,
      totalPrice: 2380000 + 3330000 * 2,
    },
    { name: 'Superior Double Room', facilities, price: 3330000, quantity: 2 },
  ];

  return (
    <div className="mx-5">
      <div className="flex gap-10">
        <div className="mb-5">
          <h3 className="font-bold text-mainColor-150 text-2xl">Search</h3>
          <Search vertical className="" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <span className="text-2xl text-mainColor-200 font-bold mb-2">
              Lucky Star Hotel 266 De Tham Star
            </span>
            <Button type="primary" htmlType="submit" size="large">
              Chat to Hotel ower
            </Button>
          </div>
          <span className="">
            District 1, Ho Chi Minh City -{' '}
            <Link className="text-mainColor-150 no-underline">Show on map</Link>
          </span>
          <div className="">
            <img
              className="p-1 bg-white border rounded w-full h-[273px] mt-1 object-cover"
              src={hotelBg}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="py-5 flex">
        <span className="w-3/4">
          Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed
          diam voluptua at vero eos et accusam et justo duo dolores et ea rebum
          stet clita kasd gubergren no sea takimata sanctus est lorem ipsum
          dolor sit amet. Minim diam at ipsum tempor. Augue feugait luptatum in
          lorem tincidunt sed eros elitr aliquip suscipit. Diam molestie sanctus
          ut. Sadipscing iriure dolor rebum et justo diam nonumy dolore ut sit
          ipsum ut lorem. No nihil eu lorem sea. Erat no euismod diam elitr diam
          erat velit. Diam kasd ipsum sit est laoreet diam commodo laoreet
          exerci congue hendrerit in vel et takimata accusam est. Elitr sanctus
          volutpat id at clita kasd et ut sit te et gubergren sadipscing eos
          takimata sadipscing.
        </span>
        <div className="w-1/4 flex flex-col gap-3">
          <div className="flex gap-3">
            <span className="font-bold text-xl">Very Good</span>
            <span className="text-md text-base">1,195 reviews</span>
            <div className="p-1 bg-mainColor-150 rounded-r-lg rounded-tl-lg rounded-bl-sm">
              8.0
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">Studio</span>
            <Breadcrumb separator="•">
              {facilities.map((facility) => (
                <Breadcrumb.Item>{facility}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </div>
        </div>
      </div>

      <span className="font-bold text-2xl">Most popular facilities</span>

      <div className="flex gap-4 mb-4">
        <div className="text-sm flex items-center gap-1">
          <img src={icon1} alt="" className="w-4 h-4" />
          <span>Non-smoking rooms</span>
        </div>
        <div className="text-sm flex items-center gap-1">
          <img src={icon2} alt="" className="w-4 h-4" />
          <span>Free parking</span>
        </div>
        <div className="text-sm flex items-center gap-1">
          <img src={icon3} alt="" className="w-4 h-4" />
          <span>Free Wifi</span>
        </div>
      </div>

      <Table columns={columns} dataSource={data} bordered />
    </div>
  );
}
