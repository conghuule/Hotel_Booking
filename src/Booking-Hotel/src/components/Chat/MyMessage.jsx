import React from 'react';

export default function MyMessage({ Content }) {
  return (
    <div class="inline-block max-w-[70%] self-end rounded-[9px] bg-[#00ACDF] p-[10px] mb-[13px]">
      <div class="text-white text-[16px] ">{Content}</div>
    </div>
  );
}
