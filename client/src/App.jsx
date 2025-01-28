import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="mockup-phone border-primary max-h-150">
          <div className="mockup-phone-camera"></div>
          <div className="mockup-phone-display relative h-140">
              <h1 className='absolute left-[36.5%] text-3xl text-white top-10'>Asraful </h1>
              <img alt="wallpaper" className=' ' src="https://www.iclarified.com/images/news/94911/453966/453966.jpg" />
          </div>
      </div>
    </>
  )
}

export default App
