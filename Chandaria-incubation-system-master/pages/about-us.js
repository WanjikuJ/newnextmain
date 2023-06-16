import React from 'react'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import NavBar from '../components/NavBar'

export default function aboutUs() {
  return (
    <div className='justify-between'>
      <Meta title="About Us" />
      <NavBar />
      <div>

        <div className='md:w-2/3 w-11/12  mx-auto'>
        <div className='w-full mx-auto flex items-center justify-between md:my-20 md:flex-row flex-col'>

          <div className='md:w-[45%]'>
            <img src="/chandaria building.png" className='w-full object-cover' />

          </div>

          <div className='md:w-[45%]  py-10 w-full'>



            <h1 className='text-gray-600 mb-10 text-8xl italic'>ABOUT US...</h1>

            <p className='text-gray-500'>
              Welcome to the Chandaria Incubation System, an innovative platform within Kenyatta University designed to foster and nurture entrepreneurial ideas.
              Our incubation system provides a supportive environment for aspiring entrepreneurs, guiding them through the journey of turning their ideas into successful ventures. We offer a range of resources and services to assist individuals in refining their concepts, developing business models, and acquiring the necessary skills to thrive in today's competitive market. Through mentorship, workshops, networking opportunities, and access to state-of-the-art facilities, we aim to empower the next generation
              of Kenyan entrepreneurs and create a culture of innovation and sustainable growth.
            </p>

          </div>
        </div>


        <br />
            <p className='text-gray-500 '>
              At the Chandaria Incubation System, we believe in the power of collaboration and interdisciplinary thinking.
               We bring together students, faculty members, industry experts, and external partners to create a vibrant ecosystem where ideas flourish. Whether you have a groundbreaking tech startup, a social enterprise, or a creative project, our incubation system offers tailored support and guidance to meet your specific needs. With the backing of Kenyatta University and the Chandaria Foundation, we are committed to nurturing and accelerating the growth of promising ventures, contributing to job creation, economic development, and societal impact. 
               Join us at the Chandaria Incubation System and embark on an exciting journey to transform your ideas into reality.
            </p>
        </div>



        <Footer />
      </div>
    </div>

  )
}
