import { Button, Skeleton, Table } from 'antd';
import HotelCard from 'components/Card/HotelCard';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getData } from 'services/services';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [hotelList, setHotelList] = useState({ data: [], isloading: true });

  useEffect(() => {
    getData({
      docName: 'hotels',
      conditionList: [{ field: 'owner', operator: '==', value: user.uid }],
    }).then((res) => {
      setHotelList({ data: res, isLoading: false });
      console.log(res);
    });
  }, [user]);

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
      totalRevenue: user?.data?.total_revenue ? user?.data?.total_revenue : 0,
      totalCustomer: user?.data?.total_customer
        ? user?.data?.total_customer
        : 0,
    },
  ];

  return (
    <div className="flex flex-col mb-10">
      <div className="mb-5">
        <span className="text-3xl font-extrabold text-mainColor-200">
          Dashboard
        </span>
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          className="flex-1"
        />
      </div>
      <div className="flex flex-row justify-between mb-2">
        <span className="text-2xl font-extrabold text-mainColor-200">
          Your Rooms
        </span>
        <div>
          <Button
            className="bg-mainColor-200 text-white"
            onClick={() => navigate('/manage')}
          >
            Create New Room
          </Button>
        </div>
      </div>
      <Skeleton loading={hotelList.isloading}>
        <div className="grid grid-cols-2 gap-5 justify-center items-center w-full">
          {hotelList.data?.map((hotel) => (
            <HotelCard {...hotel} key={hotel.id} />
          ))}
        </div>
      </Skeleton>
    </div>
  );
}
