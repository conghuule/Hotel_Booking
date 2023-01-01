import React from 'react';
import hotelBg from 'assets/images/hotel1.svg';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { formatCurrency } from 'utils/function';

export default function BookingCard({ data, isBooking = false }) {
  const { title, address, time, price } = data;

  return (
    <div className="max-w-[750px] flex gap-3 border-2 border-solid border-mainColor-50 rounded-xl p-6">
      <div>
        <img className="w-[175px] h-[175px]" src={hotelBg} alt="" />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-mainColor-200">{title}</span>
          <span className="">
            {address} -{' '}
            <Link className="inline-block mt-2 no-underline text-mainColor-150">
              Show on map
            </Link>
          </span>
          <p className="text-[16px] font-bold text-mainColor-200 mt-3">
            {time}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[20px]">{formatCurrency(price)}</span>
          {isBooking ? (
            <Button size="large" type="primary" className='min-w-[140px]'>
              View Booking
            </Button>
          ) : (
            <Button size="large" type="primary" className='min-w-[140px]'>
              Add review
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
