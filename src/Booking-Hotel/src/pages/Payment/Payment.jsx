import { Button, Form, Input, List } from 'antd';
import credit_card_image from 'assets/images/credit_card.png';
import momo_image from 'assets/images/momo.png';
import qr_code_image from 'assets/images/qr_code.png';
import React from 'react';
import { formatCurrency } from 'utils/function';

const ORDER_DETAIL = {
  name: 'Lucky Star Hotel De Tham St ⭐⭐⭐⭐',
  address: 'Lucky Star Hotel De Tham St, District 1, Ho Chi Minh City',
  rooms: [
    {
      name: 'Standard Double Room',
      quantity: 2,
      price: 2380000,
    },
    {
      name: 'Superior Double Room',
      quantity: 2,
      price: 2380000,
    },
    {
      name: 'Delux Double Room',
      quantity: 2,
      price: 2380000,
    },
    {
      name: 'Standard Double Room',
      quantity: 2,
      price: 2380000,
    },
    {
      name: 'Standard Double Room',
      quantity: 2,
      price: 2380000,
    },
  ],
};

export default function Payment({ data = ORDER_DETAIL }) {
  const total = data.rooms.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="flex-1">
      <h2 className="font-extrabold text-mainColor-200 text-3xl">Payment</h2>
      <div className="flex">
        <div className="bg-[#F9F9F9] rounded-[10px] px-[45px] py-[30px] flex-1 mr-[20px]">
          <div className="flex gap-2">
            <div className="flex-1">
              <h3 className="font-bold text-2xl">Payment Methods</h3>
              <div className="flex gap-4">
                <div className="bg-[#fff] border border-solid border-[#DFDFDF] hover:border-[#55D0FF] cursor-pointer px-[36px] py-[10px]">
                  <img
                    className="w-[84px] h-[84px] object-cover"
                    src={credit_card_image}
                    alt="Credit Card"
                  />
                </div>
                <div className="bg-[#fff] border border-solid border-[#DFDFDF] hover:border-[#55D0FF] cursor-pointer px-[36px] py-[10px]">
                  <img
                    className="w-[84px] h-[84px] object-cover"
                    src={momo_image}
                    alt="Momo"
                  />
                </div>
              </div>
            </div>
            <div className="ml-auto cursor-pointer">
              <img
                className="w-[180px] h-[180px] object-cover"
                src={qr_code_image}
                alt="QR Code"
              />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-2xl mt-[28px]">Payment Details</h4>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item label="Fullname" name="fullname">
                <Input className="p-2 max-w-full" />
              </Form.Item>

              <Form.Item label="ID card number" name="id_card_number">
                <Input className="p-2 " />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  className="bg-mainColor-200 min-w-[250px] font-semibold h-auto"
                  htmlType="submit"
                  size="large"
                  block
                >
                  Pay
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="w-[576px] bg-[#F9F9F9] rounded-[10px] px-[34px] py-[30px]">
          <h3 className="font-bold text-xl">{data.name}</h3>
          <p className="text-lg mb-0">{data.address}</p>
          <List
            size="small"
            dataSource={data.rooms}
            className="my-[48px]"
            renderItem={(item) => (
              <List.Item className="px-0 py-1 border-none">
                <span>
                  <span className="font-bold text-lg">{item.name}</span>
                  <span className="text-lg ml-2">x{item.quantity}</span>
                </span>
                <span className="text-lg">
                  {formatCurrency(item.quantity * item.price)}
                </span>
              </List.Item>
            )}
          />
          <p className="flex justify-between">
            <span className="font-bold text-xl">Total: </span>
            <span className="text-xl">{formatCurrency(total)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
