import React from 'react'
import RegisterForm from '../RegisterForm';
const Progress = () => {
  return (
    <div className='mx-auto flex-1 shadow-xl flex lg:flex-row flex-col items-center justify-between overflow-y-auto h-screen'>


    <div id="imageWrapper" className='lg:w-1/2 w-full pt-2 pl-2'>
        <img src="/expectation.jpg" alt="Registration" className='w-full object-cover min-h-[50vh] rounded' srcset="" />
        <p className='pt-4 justify-center text-xl pb-4'>
            Expectations and needs assessment form.
        </p>
      <div class="mb-6 mt-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="fName">
              First Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fName" name="fName" type="text" placeholder="jane" required/>
      </div>
      <div class="mb-6 mt-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="lName">
              Last Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lName" name='lName' type="text" placeholder="doe" required/>
      </div>
      <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="idNumber">
              Your Id Number
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="idNumber" name="idNumber" type="number" placeholder="12345678" required/>

      </div>
      <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phoneNumber">
              Enter your phone number
          </label>



          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phoneNumber" name="phoneNumber" type="number" placeholder="07********" required/>
      </div>
      
      
     

    </div>

    <div className='lg:w-1/2 w-full md:p-20 p-10'>

        
        <form class="bg-white  rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Enter your email address</label>
          <input type="email" id='email' placeholder='johndoe22@outlook.com' className='class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" ' required/>
      </div>


        <div className='justify-between pb-4'>

<label className="text-gray-700 font-bold text-sm mb-2 rounded-md appearance-none ">Provide a brief outline of your expectations about the service package at the innovation center.</label>
<textarea type="description" id='description' className="shadow appearance-none pt-4 mt-4 border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required/>

</div>


      
      <div className="flex justify-between items-center">
          <label for="innovationStage" className=' text-gray-700 text-sm font-bold'>Stage of Innovation</label>
          <div className="relative">
              <select
              
                  id="innovationStage"
                  name="innovationStage"
                  className="text-gray-700 font-bold text-sm pb-2 mb-2 rounded-md appearance-none px-4 py-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
              >
                  <option value="idea">Idea Phase</option>
                  <option value="r&d">Research and Development</option>
                  <option value="prototype">Prototype Phase</option>
                  <option value="startup">Start-up</option>
                  <option value="market">Market Phase</option>
                  <option value="scaling-up">Scaling-up Phase</option>
                  <option value="other">Other</option>
              </select>


          </div>
          <br />
          <br />
      </div>
      <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phoneNumber">
              Enter your phone number
          </label>



          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phoneNumber" name="phoneNumber" type="number" placeholder="07********" required/>
      </div>

      

      <div class="mb-4">

          <label className='text-gray-700 text-sm font-bold mb-2' for="keyPartners"> Names of key partners if any</label>
          <input type="text" id="keyPartners" name="keyPartners" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />


      </div>

      <div className='justify-between pb-4'>
          <label for="studentType " className=' text-gray-700 font-bold text-sm'>Is your IP registered?</label>
          <select id="studentType" name="student-type" required className='btn px-4 bg-[#0F416F] text-white rounded-full ml-2 mr-2 py-2 '>
              <option value="1">Yes</option>
              <option value="0">No</option>
          </select>
      </div>


      


      <div className='justify-between pb-4'>


          <label for="category" className="text-gray-700 block font-bold text-sm pb-2 mb-2 rounded-md appearance-none">Category of Innovation:</label>
          <select id="category" name="category" className="text-gray-700 font-bold text-sm pb-2 mb-2 rounded-md appearance-none py-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4"
              required>
              <option value="business-professional-services">Business and Professional Services </option>
              <option value="business-professional-services">Information and Communication Technology </option>
              <option value="business-professional-services">Marketing and Communication </option>
              <option value="business-professional-services">Manufacturing and Construction </option>
              <option value="business-professional-services">Transport and Logistics </option>
              <option value="business-professional-services">Bio and Nano-Technology </option>
              <option value="business-professional-services">Health and Nutrition </option>
              <option value="business-professional-services">Green and ecological business </option>
              <option value="business-professional-services">Tourism and eco-tourism </option>
              <option value="business-professional-services">Fine and Performing Arts </option>
              <option value="business-professional-services">Sports, leisure and Entertainment </option>
              <option value="business-professional-services">Water and Sanitation </option>
              <option value="business-professional-services">Energy </option>
              <option value="business-professional-services">Media and Entertainment </option>
          </select>
      </div>


      <div class="flex items-center justify-between">
          <button type="submit"  class="bg-green-600 hover:bg-[#0F416F] text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline justify-center" >
              Submit
          </button>

      </div>
      <p class="text-center text-gray-500 text-xs pt-4">
          &copy;2023 Chandaria Incubation Center. All rights reserved.
      </p>
  </form>

    </div>
</div>
//     
  )
}

export default Progress;



  
  