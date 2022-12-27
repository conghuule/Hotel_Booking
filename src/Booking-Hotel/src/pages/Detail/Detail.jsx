
import { Breadcrumb, Button, Form, Input, InputNumber} from 'antd';
import Search from 'components/Search/Search';
import { Link } from 'react-router-dom';
import hotelBg from 'assets/images/hotel2.png';
import icon1 from 'assets/images/icon-no-smoking.png';
import icon2 from 'assets/images/icon-free-parking.png';
import icon3 from 'assets/images/icon-free-wifi.png';

export default function Home({ vertical }) {
  const facilities = ['1 bathroom', '1 kitchen', '30m²', '1 queen bed'];
  return (
    <div className="">

      <div className="grid grid-cols-8 gap-4 mt-8 mb-5">
        <div className="col-start-1 col-end-2 col-span-2">
          <div className="mb-5">
            <h3 className="font-bold text-mainColor-150 text-2xl mb-9">Search</h3>
            <Search vertical className="" />
          </div>
        </div>

        <div className="col-end-9 col-span-6">
          <div className="grid gap-4 grid-cols-6">
            <span className="text-2xl text-mainColor-200 font-bold col-start-1 col-end-4 mb-2">Lucky Star Hotel 266 De Tham Star</span>
            <Button type="primary" htmlType="submit" className="col-end-7 col-span-1">Chat to Hotel ower</Button>
          </div>
          <span className="">
            District 1, Ho Chi Minh City -{' '}
            <Link className="text-mainColor-150 no-underline">Show on map</Link>
          </span>
          <div className="flex flex-wrap justify-left">
            <img className="p-1 bg-white border rounded max-w-2xl h-[273px] mt-1" src={hotelBg} alt="" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-4">
        <span className="col-start-1 col-end-7 col-span-6 text-justify">
          Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren no sea takimata sanctus est lorem ipsum dolor sit amet.

          Minim diam at ipsum tempor. Augue feugait luptatum in lorem tincidunt sed eros elitr aliquip suscipit. Diam molestie sanctus ut. Sadipscing iriure dolor rebum et justo diam nonumy dolore ut sit ipsum ut lorem. No nihil eu lorem sea.

          Erat no euismod diam elitr diam erat velit. Diam kasd ipsum sit est laoreet diam commodo laoreet exerci congue hendrerit in vel et takimata accusam est. Elitr sanctus volutpat id at clita kasd et ut sit te et gubergren sadipscing eos takimata sadipscing.
        </span>

        <div className="col-end-9 col-span-2 flex-col">
          <div className="flex flex-row gap-2">
            <span className="font-bold text-xl">Very Good</span>
            <span className="text-md text-base">1,195 reviews</span>
            <div className="p-1 bg-mainColor-150 rounded-r-lg rounded-tl-lg rounded-bl-sm">8.0</div>
          </div>
          <div className="">
            <span className="font-bold text-xl"> <br />Studio</span>
            <Breadcrumb separator="•">
              {facilities.map((facility) => (
                <Breadcrumb.Item>{facility}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-5 gap-4 mt-5 mb-2">
        <span className="col-start-1 col-end-6 col-span-5 font-bold text-2xl">
          Most popular facilities
        </span>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-4">
        <div className="col-start-1 col-end-1 col-span-1 text-sm">
          <img src={icon1} alt="" className="w-4 h-4" />
          Non-smoking rooms
        </div>
        <div className="col-start-2 col-end-2 col-span-1 text-sm">
          <img src={icon2} alt="" className="w-4 h-4" />
          Free parking
        </div>
        <div className="col-start-3 col-end-3 col-span-1 text-sm">
          <img src={icon3} alt="" className="w-4 h-4" />
          Free Wifi
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-2">
        <Search className="col-start-1 col-end-6 col-span-5 " />
      </div>

      <table className="table-auto min-w-full bg-white border-separate border border-mainColor-50 mb-5">
        <thead className="bg-mainColor-200 h-10">
          <tr>
            <th scope="col" className='uppercase border border-mainColor-50'>Room Type</th>
            <th scope="col" className='uppercase border border-mainColor-50'>Price for 9 days</th>
            <th scope="col" className='uppercase border border-mainColor-50'>Quantity</th>
            <th scope="col" className='uppercase border border-mainColor-50'>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-gray-50">
            <td className='grid grid-row-3 boder-r'>
              <span className='row-1'>Standard Double Room</span>
              <span className='row-2'>1 full bed 🛏️</span>
              <span className='row-3'>Air conditioning & Attached bathroom & Free Wifi</span>
            </td>
            <td className='boder-r text-center'>2.380.000 &#8363;</td>
            <td className='boder-r text-center'>
              <Form.Item className={'m-0'} name="roomQuantity" initialValue={2}>
                <InputNumber
                  className={vertical ? 'w-full' : ''}
                  min={0}
                  formatter={(value) => `${value}`}
                />
              </Form.Item>
            </td>
            <td className='grid grid-row-7'>
              <span className='row-1 text-base mt-1'><b>2</b> Room for</span>
              <span className='row-2 text-xl font-bold'>4.760.000 &#8363;</span>
              <span className='row-3 text-sm mb-3'>Includes does taxes and fees</span>
              <span className='start-row-4 end-row-6 row-span-2 mt-2 mb-1 text-center'>
                <Input className="placeholder-gray-500 m-0 w-3/4 text-center" placeholder="Coupon Code"></Input>
              </span>
              <span className=' text-center'>
                <Button type="primary" htmlType="submit" className="start-row-6 end-row-8 row-span-2 w-3/4 font-bold">Book Now</Button>
              </span>
              <span className="row-8 text-sm text-center">Lets go to the next step!</span>
            </td>
          </tr>
          <tr className="bg-white">
            <td className='grid grid-row-3'>
              <span className='row-1'>Standard Double Room</span>
              <span className='row-2'>1 full bed 🛏️</span>
              <span className='row-3'>Air conditioning & Attached bathroom & Free Wifi</span>
            </td>
            <td className="text-center">2.380.000 &#8363;</td>
            <td className='text-center'>
              <Form.Item className={'m-0'} name="roomQuantity" initialValue={2}>
                <InputNumber
                  className={vertical ? 'w-full' : ''}
                  min={0}
                  formatter={(value) => `${value}`}
                />
              </Form.Item>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}
