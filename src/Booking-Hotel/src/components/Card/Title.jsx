import React from 'react';

export default function Title({ primaryTitle, secondTitle }) {
  return (
    <div class="pb-[36px]">
      <div class="text-[40px] pb-[10px] font-bold">{primaryTitle}</div>
      <div class="text-[32px]">{secondTitle}</div>
    </div>
  );
}
