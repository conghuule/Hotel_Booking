import React from 'react';
export default function DestinationCard({ destination, amountHotel }) {
  return (
    <div className="flex flex-col">
      <div className="w-[250px] h-[250px] rounded-xl bg-[url('./assets/images/hotel1.svg')] bg-cover text-white"></div>
      <span className="text-2xl mb-1">{destination}</span>
      <span className="text-xl font-thin">
        {amountHotel.toLocaleString('en-IN')} hotels
      </span>
    </div>
  );
}
