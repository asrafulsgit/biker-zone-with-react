import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Feature from './Feature'
import Latest_bike from './Latest_bike'
import Testimonial from './Testimonial'

const Landing_page = () => {
  return (
    <div className='xl:px-25 lg:px-20 lg:pt-3 px-5 '>
        <Navbar />
        <Hero />
        <Feature />
        <Latest_bike />
        <Testimonial />
    </div>
  )
}

export default Landing_page
