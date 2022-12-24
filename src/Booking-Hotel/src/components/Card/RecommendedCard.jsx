import React from 'react';
export default function RecommendedCard({ hotelName }) {
  return (
    <div>
      <div className="w-[250px] h-[250px] rounded-xl text-white bg-[url('./assets/images/hotel1.svg')] bg-cover mb-1"></div>
      <span className="text-2xl">{hotelName}</span>
    </div>
  );
}
