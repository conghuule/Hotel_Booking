import React from 'react';
import bg_promo from 'assets/images/bg_promo.svg';
export default function PromoCard() {
  return (
    <div>
      <div class="w-[692px] h-[275px] p-[3.3rem] rounded-[37px] bg-[url('./assets/images/bg_promo.svg')] text-white">
        <div class="text-[32px]">Save up to 15% with End of Year Promotion</div>
        <div class="text-[24px] font-thin mb-[1.875rem]">#MAGIAMGIA0055</div>
        <button class="bg-gradient-to-r from-cyan-500 to-blue-500 border-0 py-1 px-2">
          Search
        </button>
      </div>
    </div>
  );
}
