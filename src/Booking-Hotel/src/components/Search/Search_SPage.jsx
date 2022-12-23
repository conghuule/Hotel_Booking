import React from 'react'
export default function Search() {
    return (
        <div>
            <div className='border text-center bg-mainColor-50 '>
                <p className='pt-2'>Search</p>
            </div>
            <form className='w-[322px] h-[298px]' >
                <div className='flex flex-col my-2'>
                    <label htmlFor="">Address</label>
                    <input className='border rounded-md p-2' type="text" placeholder="Address" />
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor="">Check In date</label>
                    <input className='border rounded-md p-2' type="date" placeholder="CheckIn" />
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor="">Check Out date</label>
                    <input className='border rounded-md p-2' type="date" placeholder="CheckOut" />
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor="">Number People</label>
                    <input className='border rounded-md p-2' type="Number" placeholder="People" />
                </div>
                <button className="text-white bg-mainColor-200">Search</button>
            </form>
        </div>
    )
}