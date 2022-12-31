import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineMinimize } from 'react-icons/md';
import MyMessage from './MyMessage';
import YourMessage from './YourMessage';
import logo from 'assets/images/logo.png';
export default function ChatBox() {
  return (
    <div class="flex">
      <div class="relative flex flex-col w-[422px] h-[548px] border-solid border-[#0080BF] rounded-[15px] px-[29px] py-[25px] ">
        <div class="flex justify-between mb-[23px]">
          <div class="text-[24px] text-[#0080BF] font-bold ">Luxury hotel</div>
          <div class="flex justify-center items-center">
            <MdOutlineMinimize class="mr-[15px] stroke-[#0080BF] fill-[#0080BF]" />
            <AiOutlineClose class="stroke-[#0080BF] fill-[#0080BF]" />
          </div>
        </div>
        <div class="flex flex-col overflow-y-auto h-[390px]">
          <MyMessage
            Content={
              'vào nội dung có ý nghĩa. Lorem ipsum có thể được sử dụng làm trình giữ chỗ trước khi có bản sao cuối cùng.'
            }
          />
          <YourMessage
            Content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            }
          />
          <YourMessage
            Content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            }
          />
        </div>

        <input
          type="text"
          placeholder="Message"
          class="absolute w-[364px] h-[45px] border-[1px] border-[#55D0FF] outline-0 px-[15px] py-[13px] rounded-[8px] bottom-[25px] left-[29px]"
        />
      </div>
      <div class="flex flex-col-reverse ml-[37px]">
        <div class="w-[69px] h-[69px] border-solid border-4 border-[#0080BF] mb-[15px] rounded-[50%] overflow-hidden">
          <img class="object-cover w-[100%]" src={logo} />
        </div>
        <div class="w-[69px] h-[69px] border-solid border-4 border-[#55D0FF] mb-[15px] rounded-[50%]">
          <img class="object-cover w-[100%]" src={logo} />
        </div>
        <div class="w-[69px] h-[69px] border-solid border-4 border-[#0080BF] mb-[15px] rounded-[50%]">
          <img class="object-cover w-[100%]" src={logo} />
        </div>
      </div>
    </div>
  );
}
