import React from 'react';
import { Table, Button } from 'antd';
import HotelCard from 'components/Card/HotelCard';
export default function Home() {
  const columns = [
    {
      title: 'Total Revenue',
      dataIndex: 'totalRevenue',
      key: 'totalRevenue',
    },
    {
      title: 'Total Customer',
      dataIndex: 'totalCustomer',
      key: 'totalCustomer',
    },
  ];
  const data = [
    {
      totalRevenue: 2380000 + 3330000 * 2,
      totalCustomer: 102,
    },
  ];
  return (
    <div className="flex flex-col mb-10">
      <div>
        <span className="text-3xl font-extrabold text-mainColor-200">Dashboard</span>
      </div>

      <Table dataSource={data} columns={columns} className="flex-1" />;

      <div className="flex flex-row">
        <span className="flex-1 justify-start text-2xl font-extrabold text-mainColor-200">Your Rooms</span>
        <div><Button className="flex-1 justify-end bg-mainColor-200 text-white">Create New Room</Button></div>
      </div>
      <div className="flex-1 flex flex-col gap-5 justify-center items-center mt-10 w-full">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        </div>
    </div>
  );
}
