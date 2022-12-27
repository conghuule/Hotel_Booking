import React from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
export default function AddPhotoBox() {
  return (
    <div class="relative w-[249px] h-[249px] bg-[#F4F4F4] rounded-[20px] mr-[30px]">
      <AiOutlineCamera class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
    </div>
  );
}
