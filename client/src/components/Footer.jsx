import React from 'react'
import android from '../assets/others/android.png'
import ios from '../assets/others/ios.png'
const Footer = () => {
  return (
     <footer className=" flex flex-col md:flex-row md:justify-center md:items-center  text-white bg-[#0B0D17]    xl:px-25 lg:px-20 py-20 px-5">
          <div className='flex flex-col  gap-5  text-[14px] '>
               <ul className='flex justify-center  sm:justify-normal gap-6'>
                    <li >DownLoad Now</li>
                    <li>License</li>
               </ul>
               <nav className='flex gap-6 flex-wrap justify-center  sm:justify-normal'>
                    <a className="link link-hover manrope">About</a>
                    <a className="link link-hover manrope">Features</a>
                    <a className="link link-hover manrope">Pricing</a>
                    <a className="link link-hover manrope">Careers</a>
                    <a className="link link-hover manrope">Help</a>
                    <a className="link link-hover manrope">Privacy Policy</a>
               </nav>
               <p className='manrope text-[#D9DBE1] text-center sm:text-start' >© 2020 bike. All rights reserved</p>
          </div>
          <nav className='md:ml-auto mt-10  md:mt-0 flex flex-col gap-3 items-center sm:items-start'>
               <p className='manrope'>Get the App</p>
               <img src={android} alt="" className='h-[40px] w-[135px] '/>
               <img src={ios} alt="" className='h-[40px] w-[135px]' />
          </nav>
     </footer>
  )
}

export default Footer
