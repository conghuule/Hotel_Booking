import { Breadcrumb, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { formatCurrency } from 'utils/function';

export default function HotelCard({
  id,
  name,
  address,
  room_available_quantity,
  reviews,
  specs,
  rooms,
  info,
  thumbnail,
  isViewDetail,
}) {
  const navigate = useNavigate();

  return (
    <div className="max-w-[750px] flex justify-between gap-3 border-2 border-solid border-mainColor-50 rounded-xl p-3">
      <div className="">
        <img className="w-[175px] h-[175px]" src={thumbnail} alt="" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-mainColor-200">{name}</span>
          <span className="">
            {address} -{' '}
            <Link className="no-underline text-mainColor-150">Show on map</Link>
          </span>
        </div>
        <div className="">
          <Breadcrumb separator="•">
            {specs?.map((spec, index) => (
              <Breadcrumb.Item key={index}>{spec}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <span className="font-bold text-red-500">
            Only {room_available_quantity} room left at this price on our site
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between ml-2">
        <div className="flex items-center justify-between gap-1">
          <span className="text-md">{reviews?.length} reviews</span>
          <div className="p-2 rounded-r-lg rounded-tl-lg rounded-bl-sm bg-mainColor-200 text-white">
            {reviews?.reduce((total, review) => total + review.rating, 0) /
              reviews?.length}
          </div>
        </div>
        <div className="flex flex-col items-end">
          {info && (
            <span className="text-sm opacity-50">
              {info?.days} nights, {info?.peoples} adults
            </span>
          )}
          <span className="text-2xl font-bold">
            {formatCurrency(rooms[0]?.price)}
          </span>
          <span className="text-sm opacity-50">Includes taxes and fees</span>
          <Button
            className="mt-2"
            type="primary"
            block
            onClick={() =>
              isViewDetail
                ? navigate(`/detail/${id}`)
                : navigate(`/manage/${id}`)
            }
          >
            See more
          </Button>
        </div>
      </div>
    </div>
  );
}
