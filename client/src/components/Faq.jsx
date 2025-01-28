import React from 'react'

import faq from '../assets/others/faq.png'
const Faq = () => {
  return (
    <div>
      <div className='my-8 sm:my-10'>
                    <h1 className='text-3xl sm:text-5xl font-semibold text-center'>Frequently  <span className='text-[#E76F51]'>Asked Questions</span></h1>
                <div className=' mt-8 sm:mt-15 flex md:flex-row md:gap-10 lg:gap-30 justify-center items-center flex-col'>
                   <div className='md:w-[40%] w-[100%] flex items-center justify-center'>
                         <img src={faq} alt="" />
                   </div>
                   <div className='md:w-[60%] w-[100%] mt-8 md:mt-0' >
                         <div className="join join-vertical space-y-5">
                              <div className="collapse collapse-arrow join-item border-base-300 rounded-sm border">
                                   <input type="radio" name="my-accordion-4" defaultChecked />
                                   <div className="collapse-title  font-medium md:text-[16px] lg:text-xl">What are the most important things I should
                                   know about riding a bike?</div>
                                   <div className="collapse-content md:text-[14px] lg:text-[16px] text-[#7E848C]">Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. </div>
                              </div>
                              <div className="collapse collapse-arrow join-item border-base-300 rounded-sm border">
                                   <input type="radio" name="my-accordion-4" />
                                   <div className="collapse-title font-medium md:text-[16px] lg:text-xl">How can I tell if my helmet is old and I need a 
                                   new one?</div>
                                   <div className="collapse-content md:text-[14px] lg:text-[16px] text-[#7E848C]">Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider.</div>
                              </div>
                              <div className="collapse collapse-arrow join-item border-base-300 rounded-sm border">
                                   <input type="radio" name="my-accordion-4" />
                                   <div className="collapse-title font-medium md:text-[16px] lg:text-xl">How can I tell if my helmet is old and I need a 
                                   new one?</div>
                                   <div className="collapse-content md:text-[14px] lg:text-[16px] text-[#7E848C]">Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider.</div>
                              </div>
                              <div className="collapse collapse-arrow join-item border-base-300 rounded-sm border">
                                   <input type="radio" name="my-accordion-4" />
                                   <div className="collapse-title font-medium md:text-[16px] lg:text-xl">How can I tell if my helmet is old and I need a 
                                   new one?</div>
                                   <div className="collapse-content md:text-[14px] lg:text-[16px] text-[#7E848C]">Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider.</div>
                              </div>
                         </div>
                   </div>
               </div>
           </div>
    </div>
  )
}

export default Faq
