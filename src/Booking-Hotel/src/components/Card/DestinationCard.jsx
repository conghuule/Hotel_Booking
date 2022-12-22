import React from 'react';
export default function DestinationCard({ destination, amountHotel }) {
  return (
    <div>
      <div class="w-[322px] h-[298px]  rounded-[8px] bg-[url('./assets/images/hotel1.svg')] text-white"></div>
      <div class="text-[40px] pb-[10px]">{destination}</div>
      <div class="text-[24px] font-thin">
        {amountHotel.toLocaleString('en-IN')} hotels
      </div>
    </div>
  );
}
