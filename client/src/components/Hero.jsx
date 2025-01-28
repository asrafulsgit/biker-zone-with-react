import React from 'react'

import bike1 from '../assets/slider/bike1.png'
import bike2 from '../assets/slider/bike2.png'
import bike3 from '../assets/slider/bike3.png'
import bike4 from '../assets/slider/bike4.png'

const Hero = () => {
  return (
    <div className='min-h-[75vh] my-8 rounded-sm bg-[#e76f5120] md:flex overflow-hidden'>
        <div className="carousel w-full">
            {/* slide 1 */}
            <div id="slide1" className="carousel-item relative  w-full">
              <div className='md:flex w-full justify-center items-center text-center md:text-left px-15 md:px-30 '>
                    <div className='md:w-[50%]'>
                        <h1 className='lg:text-6xl text-6xl md:text-4xl mt-10 md:mt-0 font-bold'>Ride-on R15 V4 with Smile</h1>
                        <p className='text-[16px] font-light mt-5 '>Amet minim mollit non deserunt ullamco 
                        est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        <a className="btn px-5 py-4 bg-[#E76F51] font-medium text-white text-xl mt-7">Purchase</a>
                    </div>
                    <div className='md:w-[50%] mt-8 md:mt-0'>
                      <img src={bike1} class="w-full" />
                    </div>  
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            {/* slide 2 */}
            <div id="slide2" className="carousel-item relative  w-full">
              <div className='md:flex w-full justify-center items-center text-center md:text-left px-15 md:px-30 '>
                    <div className='md:w-[50%]'>
                        <h1 className='lg:text-6xl text-6xl md:text-4xl mt-10 md:mt-0 font-bold'>Ride-on R15 V4 with Smile</h1>
                        <p className='text-[16px] font-light mt-5 '>Amet minim mollit non deserunt ullamco 
                        est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        <a className="btn px-5 py-4 bg-[#E76F51] font-medium text-white text-xl mt-7">Purchase</a>
                    </div>
                    <div className='md:w-[50%] mt-8 md:mt-0'>
                      <img src={bike2} class="w-full" />
                    </div>  
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
             {/* slide 3 */}
            <div id="slide3" className="carousel-item relative  w-full">
              <div className='md:flex w-full justify-center items-center text-center md:text-left px-15 md:px-30 '>
                    <div className='md:w-[50%]'>
                        <h1 className='lg:text-6xl text-6xl md:text-4xl mt-10 md:mt-0 font-bold'>Ride-on R15 V4 with Smile</h1>
                        <p className='text-[16px] font-light mt-5 '>Amet minim mollit non deserunt ullamco 
                        est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        <a className="btn px-5 py-4 bg-[#E76F51] font-medium text-white text-xl mt-7">Purchase</a>
                    </div>
                    <div className='md:w-[50%] mt-8 md:mt-0'>
                      <img src={bike3} class="w-full" />
                    </div>  
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
             {/* slide 4 */}
            <div id="slide4" className="carousel-item relative  w-full">
              <div className='md:flex w-full justify-center items-center text-center md:text-left px-15 md:px-30 '>
                      <div className='md:w-[50%]'>
                          <h1 className='lg:text-6xl text-6xl md:text-4xl mt-10 md:mt-0 font-bold'>Ride-on R15 V4 with Smile</h1>
                          <p className='text-[16px] font-light mt-5 '>Amet minim mollit non deserunt ullamco 
                          est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                          <a className="btn px-5 py-4 bg-[#E76F51] font-medium text-white text-xl mt-7">Purchase</a>
                      </div>
                      <div className='md:w-[50%] mt-8 md:mt-0'>
                        <img src={bike4} class="w-full" />
                      </div>  
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero
