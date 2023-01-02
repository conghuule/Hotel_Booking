import { Button } from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from 'utils/function';

export default function BookingCard({ data }) {
  const { hotel, time_range, total_price } = data;
  const navigate = useNavigate();

  return (
    <div className="max-w-[750px] flex gap-3 border-2 border-solid border-mainColor-50 rounded-xl p-6">
      <div>
        <img className="w-[175px] h-[175px]" src={hotel?.image} alt="" />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-mainColor-200">
            {hotel?.name}
          </span>
          <span className="">
            {hotel?.address} -{' '}
            <a
              className="no-underline text-mainColor-150"
              href={`https://google.com/maps/search/${hotel?.address}`}
              target="_blank"
              rel="noreferrer"
            >
              Show on map
            </a>
          </span>
          <p className="text-[16px] font-bold text-mainColor-200 mt-3">
            {dayjs(time_range?.start_date?.toDate()).format('DD/MM/YYYY')} to{' '}
            {dayjs(time_range?.end_date?.toDate()).format('DD/MM/YYYY')}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[20px]">{formatCurrency(total_price)}</span>
          <Button
            size="large"
            type="primary"
            className="min-w-[140px]"
            onClick={() => navigate(`/add-review/${hotel?.id}`)}
          >
            Add review
          </Button>
        </div>
      </div>
    </div>
  );
}
