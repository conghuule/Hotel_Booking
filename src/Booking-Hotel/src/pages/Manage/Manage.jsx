import React from 'react';
import AddPhotoBox from 'components/ImageBox/AddPhotoBox';
import ImageBox from 'components/ImageBox/ImageBox';
import { MdSmokeFree, MdFamilyRestroom } from 'react-icons/md';
import { CiParking1 } from 'react-icons/ci';
import { AiOutlineWifi } from 'react-icons/ai';

export default function Manage() {
  return (
    <div>
      <div class="flex justify-between mb-[50px]">
        <div class="text-[64px] text-[#0080BF] font-bold">Create new Room</div>
        <button class="px-[30px] py-[15px] font-bold rounded-[13px] bg-transparent border-0 bg-[#0080BF] text-[20px] text-white">
          Create room
        </button>
      </div>
      <div class="flex flex-col mb-[30px]">
        <div class="w-[50%] px-[18px] py-[10px] border-solid border-2 border-[#00ACDF] rounded-[16px] text-[36px] text-[#0080BF] font-bold mb-[10px]">
          Lucky Star Hotel De Tham St ⭐⭐⭐⭐
        </div>
        <div class="w-[50%] px-[18px] py-[10px] border-solid border-2 border-[#00ACDF] rounded-[16px]">
          Lucky Star Hotel De Tham St, District 1, Ho Chi Minh City
        </div>
      </div>
      <div class="flex mb-[60px]">
        <AddPhotoBox />
        <ImageBox />
      </div>
      <div class="flex mb-[60px]">
        <div class="w-[1076px] mr-[70px] px-[20px] py-[15px] border-solid border-2 border-[#00ACDF] rounded-[16px]  break-words text-[20px] ">
          Featuring a shared lounge, garden and views of river, Luxury An Phú
          Đông Hotel is located in Ho Chi Minh City, 10 km from Vincom Plaza Thu
          Duc. The property is around 10 km from Tan Dinh Market, 10.9 km from
          Diamond Plaza and 11.1 km from Saigon Central Post Office. The
          property has a 24-hour front desk and free WiFi is available
          throughout the property.
          <br />
          The rooms come with air conditioning, a flat-screen TV with cable
          channels, an electric tea pot, a shower, slippers and a closet. All
          guest rooms have a private bathroom, a hairdryer and bed linen. <br />
          War Remnants Museum is 11.1 km from the hotel, while Saigon Notre Dame
          Cathedral is 11.3 km from the property. The nearest airport is Tan Son
          Nhat International Airport, 6.9 km from Luxury An Phú Đông Hotel.
        </div>
        <div class="w-[320px]">
          <div class="font-bold p-[10px] border-solid border-2 border-[#00ACDF] rounded-[16px] mb-[20px] text-[24px]">
            Studio
          </div>
          <div class="break-words p-[10px] border-solid border-2 border-[#00ACDF] rounded-[16px] text-[20px]">
            Entire studio • 1 bathroom • 1 kitchen • 30m² 1 queen bed
          </div>
        </div>
      </div>
      <div>
        <div class="text-[32px] font-bold mb-[20px]">
          Most popular facilities
        </div>
        <div class="flex text-[20px] mb-[20px]">
          <div class="flex mr-[10px]">
            <MdSmokeFree />
            <div>Non-smoking rooms</div>
          </div>
          <div class="flex mr-[10px]">
            <CiParking1 />
            <div>Free parking</div>
          </div>
          <div class="flex mr-[10px]">
            <AiOutlineWifi />
            <div>Free WiFi</div>
          </div>
          <button class="bg-transparent border-0">
            <a href="">Edit</a>
          </button>
        </div>
        <div class="overflow-auto flex flex-col text-[20px] w-[294px] h-[196px] pl-[20px] pt-[13px] border-solid border-2 border-[#00ACDF] rounded-[16px]">
          <button class="w-[50px] bg-transparent border-0 mb-[18px]">
            <a href="">Done</a>
          </button>
          <ul>
            <li class="flex mb-[12px]">
              <input type="checkbox" name="non-smoking" value="non-smoking" />
              <MdSmokeFree />
              <div>Non-smoking rooms</div>
            </li>
            <li class="flex mb-[12px]">
              <input type="checkbox" name="free-parking" value="free-parking" />
              <CiParking1 />
              <div>Free parking</div>
            </li>
            <li class="flex mb-[12px]">
              <div class="flex mr-[10px]">
                <input type="checkbox" name="free-wifi" value="free-wifi" />
                <AiOutlineWifi />
                <div>Free WiFi</div>
              </div>
            </li>
            <li class="flex mb-[12px]">
              <div class="flex mr-[10px]">
                <input
                  type="checkbox"
                  name="family-rooms"
                  value="family-rooms"
                />
                <MdFamilyRestroom />
                <div>Family rooms</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
