import React from 'react'

const Navbar = () => {
  return (
    <nav>
          <div className="navbar bg-base-100">
               <div className="navbar-start">
                    {/* mobile nav */}
                    <div className="dropdown">
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16" />
                         </svg>
                         </div>
                         <ul
                         tabIndex={0}
                         class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[16px] font-medium">
                              <li><a>Home</a></li>
                              <li><a>Shop</a></li>
                              <li><a>News</a></li>
                              <li><a>Contact</a></li>
                         </ul>
                    </div>
                    <a className="text-2xl ml-2 lg:ml-0  sm:text-4xl font-bold">Bike Dekho</a>
               </div>
               <div className='flex gap-10 ml-auto items-center justify-end'>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal space-x-8 px-1 text-[16px] font-medium">
                              <li><a>Home</a></li>
                              <li><a>Shop</a></li>
                              <li><a>News</a></li>
                              <li><a>Contact</a></li>
                         </ul>
                    </div>
                    <div>
                    <a className="btn px-8 py-5 bg-[#E76F51] font-medium text-white text-xl">Login</a>
                    </div>
               </div>
          </div>
    </nav>
  )
}

export default Navbar
