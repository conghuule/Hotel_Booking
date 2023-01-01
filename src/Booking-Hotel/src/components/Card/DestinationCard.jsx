import React from 'react';
import { Link } from 'react-router-dom';
export default function DestinationCard({ name, hotel_quantity, image }) {
  return (
    <Link to={`/search?location=${name}`} className="no-underline text-inherit">
      <div className="flex flex-col cursor-pointer">
        <img
          src={image}
          alt=""
          className="w-[200px] h-[200px] rounded-xl mb-1"
        />
        <span className="text-xl">{name}</span>
        <span className="text-lg font-thin opacity-60">
          {hotel_quantity.toLocaleString('en-IN')} hotels
        </span>
      </div>
    </Link>
  );
}
