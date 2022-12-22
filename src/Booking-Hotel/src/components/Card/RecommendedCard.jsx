import React from 'react';
export default function RecommendedCard({ hotelName }) {
  return (
    <div>
      <div class="w-[322px] h-[337px]  rounded-[8px] text-white bg-[url('./assets/images/hotel1.svg')]"></div>
      <div class="text-[40px]">{hotelName}</div>
    </div>
  );
}
