import Link from 'next/link'
import React from 'react'
import NavigationList from '../constants/NavigationList'

export default function NavBar() {
  return (
    <nav className='w-full py-5 border-b-[1px] bg-[#0F416F] text-gray-300'>

        <div className='md:w-4/5 w-11/12 mx-auto flex items-center justify-between'>

<div className='flex items-center justify-between' id="logo">
<img src="/logo1.png" alt="logo" className='w-[80px]' />
            <h2 className=' md:text-xl text-xl font-normal pl-2 text-white'>
              Chandaria Incubation <br/>
              Management System
            </h2>
            </div>



            {/* we map through the list we created instead of hard coding it */}
            <ul className='flex items-center justify-between space-x-8'>
              {
                NavigationList.map((list,index)=>(
                  <Link href={list.link} key={index}>
                    <li className='  navLinkStyle text-slate-300 hover:text-white cursor-pointer duration-300'>
{/* thats that */}
{list.name }
                    </li>
                  </Link>
                ))
              }
            </ul>
        </div>

    </nav>
  )
}
// we create a constant folder to hold things such as the navigation list and any thing else that we will reuse
