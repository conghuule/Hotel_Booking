import React from 'react';
import logo from 'assets/images/logo.png';

export default function Footer() {
  return (
    <div className="flex justify-center bg-mainColor-200 py-5 px-2 text-white">
      <div className="container flex flex-wrap md:flex-nowrap items-stretch">
        <div className="flex flex-col items-center justify-center gap-2 w-full my-2 md:w-1/3 md:my-0">
          <img src={logo} alt="logo" className="w-14 h-14" />
          <span>Copyright BookingHotel by AISE</span>
        </div>
        <div className="md:w-1/3 flex flex-col p-2">
          <span className="font-bold my-2">Hi! We are AISE team.</span>
          <span> We work together.....</span>
          <span>This is a website for everyone to book hotel online.</span>
          <span>Hope you like it!</span>
        </div>
        <div className="md:w-1/3 flex flex-col p-2">
          <span className="font-bold my-2">Contact</span>
          <span>aiseteams.dev@gmail.com</span>
          <span>0123456789</span>
          <span>VNUHCM - University of Science Linh Trung</span>
        </div>
      </div>
    </div>
  );
}
