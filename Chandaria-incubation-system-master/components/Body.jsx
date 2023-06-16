import Link from 'next/link';
import React from 'react'

const Body = () => {
  return (



    <div className='mx-auto md:w-2/3 w-11/12 md:h-[80vh] flex md:flex-row flex-col items-center justify-center '>
      <div className='md:w-1/2 w-full'>

        <img src="/19268.jpg" alt="chandaria incubate management system" className='w-full object-cover' />


      </div>
      <div className='
      md:w-1/2 w-full md:pl-10 text-slate-700'>
        <p>
Welcome to...        </p>
        <br />
        <br />

<h1 className='text-green-600 content-center  md:text-5xl font-black'> Chandaria Incubate<br /> Management System </h1>
       
         <br />
        <br />
        <p className=''>The home of creative innovation.</p>
        <br />
        <br />
        <Link href="/register">

        <button className='bg-[#0F416F] text-white py-2 px-4 rounded-full m-3.5 hover:bg-green-600'>Register</button>
        </Link>

      </div>


    </div>
  )
}

export default Body;