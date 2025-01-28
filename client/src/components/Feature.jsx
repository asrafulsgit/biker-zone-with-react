import React from 'react'
import feature_bike from '../assets/others/feature-bike.png'
const Feature = () => {
  return (
    <div className='my-8 sm:my-10'>
          <h1 className='text-3xl sm:text-5xl font-semibold text-center'>Fetured Bikes In This Year</h1>
          <div className='sm:grid sm:grid-cols-3 mt-18 flex flex-col items-center gap-10'>
               <div className="card h-[50%] w-[90%] sm:h-[200px] sm:w-[220px]  md:h-[230px] md:w-[250px] mx-auto">
                    <img src={feature_bike} alt="" />
               </div>
               <div className="card h-[50%] w-[90%] sm:h-[200px] sm:w-[220px]  md:h-[230px] md:w-[250px] mx-auto">
                    <img src={feature_bike} className='' alt="" />
               </div>
               <div className="card h-[50%] w-[90%] sm:h-[200px] sm:w-[220px]  md:h-[230px] md:w-[250px] mx-auto">
                    <img src={feature_bike} className='' alt="" />
               </div>
          </div>
    </div>
  )
}

export default Feature
