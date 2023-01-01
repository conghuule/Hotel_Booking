import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineMinimize } from 'react-icons/md';
import MyMessage from './MyMessage';
import YourMessage from './YourMessage';
import logo from 'assets/images/logo.png';
export default function ChatBox() {
  const [isShowChatbox, setIsShowChatbox] = useState(false);

  return (
    <div className="flex fixed bottom-0 right-10">
      {isShowChatbox && (
        <div className="relative flex flex-col w-[422px] h-[548px] border-solid bg-white border-[#0080BF] rounded-[15px] px-[29px] py-[25px] ">
          <div className="flex justify-between mb-[23px]">
            <div className="text-[24px] text-[#0080BF] font-bold ">
              Luxury hotel
            </div>
            <div className="flex justify-center items-center">
              <MdOutlineMinimize
                className="mr-[15px] stroke-[#0080BF] fill-[#0080BF] cursor-pointer"
                onClick={() => setIsShowChatbox(false)}
              />
              <AiOutlineClose
                className="stroke-[#0080BF] fill-[#0080BF] cursor-pointer"
                onClick={() => setIsShowChatbox(false)}
              />
            </div>
          </div>
          <div className="flex flex-col overflow-y-auto h-[390px]">
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
            className="absolute w-[364px] h-[45px] border-[1px] border-[#55D0FF] outline-0 px-[15px] py-[13px] rounded-[8px] bottom-[25px] left-[29px]"
          />
        </div>
      )}
      <div className="flex flex-col-reverse ml-[37px] cursor-pointer">
        <div className="w-[69px] h-[69px] border-solid border-4 border-[#0080BF] mb-[15px] rounded-[50%] overflow-hidden">
          <img
            className="object-cover w-[100%]"
            src={logo}
            alt=""
            onClick={() => setIsShowChatbox((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}
