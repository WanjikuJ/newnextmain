import React from 'react'
import NavigationList from '../constants/NavigationList'
import Link from 'next/link';

export default function Footer() {

  const year = new Date().getFullYear();
  return (
    <footer className='w-full border-t-2 py-2 text-center text-cyan-50 bg-[#0F416F] md:mt-10 flex items-center justify-between flex-col'>
      <br />
      <div className='md:w-2/3 w-full flex items-start justify-between '>
        <div className='md:w-1/3 w-full'>
          <div className='flex items-center ' id="logo">
            <img src="/logo1.png" alt="logo" className='w-[80px]' />
            <h2 className=' md:text-xl text-xl font-normal pl-2 text-white'>
              Chandaria Incubation <br />
              Management System
            </h2>
          </div>
          <br />
          <br />
          <p className='text-slate-200 text-left '>

            The directorate works to foster the culture of innovation and entrepreneurship in Kenyatta University through establishment of innovation and entrepreneurship programmes that have strong links with industry.
          </p>
        </div>
        <div className='md:w-1/4  w-full'>
          <h2 className=' md:text-2xl text-xl font-normal  text-white text-left'>
            Navigations
          </h2>
          <br />
          <br /> 
          <ul className='w-full flex items-left flex-col justify-between '>
            {
              NavigationList.map((list, index) => (
                <Link href={list.link} key={index}>
                  <li className='w-1/2 text-left  navLinkStyle text-slate-300 hover:text-white cursor-pointer duration-200'>

                    {list.name}
                  </li>
                </Link>
              ))
            }
          </ul>
        </div>
        <div className='md:w-1/4 w-full  text-left'>
          <h2 className=' md:text-2xl text-xl font-normal  text-white text-left'>
            Our Contacts
          </h2>
          <br />
          <br />

          <p className="text-slate-200">Hot Line Number Mobile <br/>No.
            +254 700 363 741</p>
          <br />
          <p className=" text-slate-200">
            2nd Floor
            Chandaria Innovation Centre Building
          </p>
        </div>


      </div>
      <br />
      <br />
      <br />
      <div className='w-full mb-5 bg-white h-[1px]' />
      <p>© {year}.  | Chandaria Business Innovation & Incubation Centre Kenyatta University</p>
    </footer>
  )
}
