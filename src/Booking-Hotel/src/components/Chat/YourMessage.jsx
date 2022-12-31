import React from 'react';

export default function YourMessage({ Content }) {
  return (
    <div class="inline-block max-w-[70%] self-start rounded-[9px] bg-[#0080BF] p-[10px] mb-[13px]">
      <div class="text-white text-[16px] ">{Content}</div>
    </div>
  );
}
