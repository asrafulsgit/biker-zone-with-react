import React from 'react'
import latest1 from '../assets/others/latest1.png'
import latest2 from '../assets/others/latest2.png'
import latest3 from '../assets/others/latest3.png'
const Latest_bike = () => {
  return (
     <div className='my-8 sm:my-10'>
          <h1 className='text-3xl sm:text-5xl font-semibold text-center'>latest News</h1>
          <div className='sm:grid sm:grid-cols-3 md:gap-3 mt-8 sm:mt-15 space-y-8 sm:space-y-0'>
      <div className="card bg-base-100 lg:w-72 md:w-60 sm:w-45 p-1 md:2 lg:3 xl:4   mx-auto">
          <figure>
          <img
               src={latest1}
               alt="" className='' />
          </figure>
          <div className="mt-6">
          <h2 className="card-title sm:text-[16px] md:text-[20px] font-semibold">Ducati XDIAVEL S-73</h2>
          <p className='mt-2 sm:text-[12px] md:text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
          <div className="card-actions justify-end">
          <a className="btn px-6 py-3 sm:px-4 sm:py-2 md:px-6 md:py-3 mt-6 bg-[#E76F51] mr-auto text-white">Read More</a>
          </div>
          </div>
      </div>
      <div className="card bg-base-100 lg:w-72 md:w-60 sm:w-45 p-1 md:2 lg:3 xl:4   mx-auto">
          <figure>
          <img
               src={latest2}
               alt="" className='' />
          </figure>
          <div className="mt-6">
          <h2 className="card-title sm:text-[16px] md:text-[20px] font-semibold">Motorcycles & Scooters</h2>
          <p className='mt-2 sm:text-[12px] md:text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
          <div className="card-actions justify-end">
          <a className="btn px-6 py-3 sm:px-4 sm:py-2 md:px-6 md:py-3 mt-6 bg-transparent border-1 border-[#E76F51] mr-auto text-[#E76F51]">Read More</a>
          </div>
          </div>
      </div>
      <div className="card bg-base-100 lg:w-72 md:w-60 sm:w-45 p-1 md:2 lg:3 xl:4   mx-auto">
          <figure>
          <img
               src={latest3}
               alt="" className='' />
          </figure>
          <div className="mt-6">
          <h2 className="card-title sm:text-[16px] md:text-[20px] font-semibold">2021 Honda CBR500R</h2>
          <p className='mt-2 sm:text-[12px] md:text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
          <div className="card-actions justify-end">
          <a className="btn px-6 py-3 sm:px-4 sm:py-2 md:px-6 md:py-3 mt-6 bg-transparent border-1 border-[#E76F51] mr-auto text-[#E76F51]">Read More</a>
          </div>
          </div>
      </div>
          </div>
     </div>
    
  )
}

export default Latest_bike
