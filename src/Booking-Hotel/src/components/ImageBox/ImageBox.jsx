import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
export default function ImageBox() {
  return (
    <div class="relative w-[249px] h-[249px] rounded-[20px] bg-[url('./assets/images/room_photo_1.png')] bg-cover mr-[30px]">
      <button class="absolute w-[30px] h-[30px] rounded-[29px] border-0 right-[0] m-[5px]">
        <AiOutlineClose />
      </button>
    </div>
  );
}
