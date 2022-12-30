import React from 'react';
import hotelBg from 'assets/images/hotel1.svg';
import { Link } from 'react-router-dom';
import { Breadcrumb, Button } from 'antd';

const facilities = ['1 bathroom', '1 kitchen', '30m²', '1 queen bed'];

export default function HotelCard() {
  return (
    <div className="max-w-[750px] flex justify-between gap-3 border-2 border-solid border-mainColor-50 rounded-xl p-3">
      <div className="">
        <img className="w-[175px] h-[175px]" src={hotelBg} alt="" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-mainColor-200">
            Lucky Star Hotel 266 De Tham St
          </span>
          <span className="">
            District 1, Ho Chi Minh City -{' '}
            <Link className="no-underline text-mainColor-150">Show on map</Link>
          </span>
        </div>
        <div className="">
          <Breadcrumb separator="•">
            {facilities.map((facility, index) => (
              <Breadcrumb.Item key={index}>{facility}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <span className="font-bold text-red-500">
            Only 1 room left at this price on our site
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between ml-2">
        <div className="flex items-center gap-1">
          <div className="flex flex-col">
            <span className="font-bold">Very Good</span>
            <span className="text-md">1,195 reviews</span>
          </div>
          <div className="p-2 rounded-r-lg rounded-tl-lg rounded-bl-sm bg-mainColor-200">
            8.0
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm opacity-50">9 nights, 2 adults</span>
          <span className="text-2xl font-bold">5,628,600 đ</span>
          <span className="text-sm opacity-50">Includes taxes and fees</span>
          <Button className="mt-2" type="primary" block>
            See more
          </Button>
        </div>
      </div>
    </div>
  );
}
