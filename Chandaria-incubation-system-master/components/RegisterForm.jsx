// create the component for the registrationForm

import React,{useState} from 'react'
import API from '../api.json'
import { toast, ToastContainer } from 'react-toastify';


export default function RegisterForm() {
    return (
        <div className='mx-auto md:w-4/5 w-11/12 shadow-xl flex lg:flex-row flex-col items-center justify-between'>


            <div id="imageWrapper" className='lg:w-1/2 w-full pt-2'>
                <img src="/register.jpg" alt="Registration" className='w-full object-cover min-h-[50vh]' srcset="" />

            </div>

            {/* the second div to hold the form */}
            <div className='lg:w-1/2 w-full md:p-20 p-10'>

                <p className='border-b-2'>
                    REGISTRATION FORM
                </p>
                <Form />

            </div>
        </div>
    )
}



// A separate component fo the form
const Form = () => {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [idNumber, setIdNumber] = useState('')
    const [status, setStatus] = useState('')
    const [registrationNumber, setRegistrationNumber] = useState('')
    const [date, setDate] = useState('')
    const [stage, setStage] = useState('')
    const [partner, setpartner] = useState('')
    const [iP, setIP] = useState('')
    const [description, setDescription] = useState('')
    const [category, setcategory] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();

        // Append form data to the FormData object
        data.append('fName', fName);
        data.append('lName', lName);
        data.append('email', email);
        data.append('phone', phone);
        data.append('idNumber', idNumber);
        data.append('password', password);
        data.append('status', status);
        data.append('registrationNumber', registrationNumber); // Update this value if available
        data.append('date', date);
        data.append('stage', stage);
        data.append('partner', partner);
        data.append('registered', iP);
        data.append('category', category);
        data.append('description', description);
        // console.log(

        //     {
        //         fName,
        //         lName,
        //         email,
        //         phone,
        //         password,
        //         idNumber,
        //         status,
        //         registrationNumber,
        //         date,
        //         stage,
        //         partner,
        //         iP,
        //         description,
        //         category,
        //       }
        // );
        let url=API.API+'auth/inventor.php'
        fetch(url, {
            method: 'POST',
            body: data,
        })
            .then((response) => response.json())
            .then((jsonResponse) => {
                // Handle the response
                toast.success(jsonResponse[0].user);
                console.log(jsonResponse);
            })
            .catch((error) => {
                // Handle any errors
                console.error(error);
                toast.error('Failed to add');
            });
    };

    return (



        <form class="bg-white  rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
           
           <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
   
            <div class="mb-6 mt-2">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="fName">
                    First Name
                </label>
                <input value={fName} onChange={(e)=>setFName(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fName" name="fName" type="text" placeholder="jane" required/>
            </div>
            <div class="mb-6 mt-2">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="lName">
                    Last Name
                </label>
                <input value={lName} onChange={(e)=>setLName(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lName" name='lName' type="text" placeholder="doe" required/>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="idNumber">
                    Your Id Number
                </label>
                <input value={idNumber} onChange={(e)=>setIdNumber(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="idNumber" name="idNumber" type="number" placeholder="12345678" required/>

            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="password">
                    Your password
                </label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="******************" required/>

            </div>
            <p class="text-red-500 text-xs italic mb-6">not applicable to under 18's</p>

            <div className='justify-between pb-4'>
                <label for="studentType " className=' text-gray-700 font-bold text-sm'>Are you a KU student?</label>
                <select id="studentType" value={status} onChange={(e)=>setStatus(e.target.value)} name="studentType" required className='btn px-4 bg-[#0F416F] text-white rounded-full ml-2 mr-2 py-2 '>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
            </div>
            <p class="text-red-500 text-xs italic mb-6">For Ku students only</p>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="registrationNumber">
                    Your Registration Number
                </label>
                <input value={registrationNumber} onChange={(e)=>setRegistrationNumber(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="registrationNumber" name="registrationNumber" type="text" placeholder="S13/23345/23" />

            </div>


            <div class="mb-6">

                <label for="dateIncubated" className='text-gray-700 font-bold text-sm pb-2 mb-2 block'>Date Incubated</label>
                <input value={date} onChange={(e)=>setDate(e.target.value)} type="date" id="dateIncubated" name="dateIncubated" required className='"bg-white shadow-md rounded pb-8 mb-4 w-full px-10 py-2 text-gray-700 text-sm border' />

            </div>

            <div className="flex justify-between items-center">
                <label for="innovationStage" className=' text-gray-700 text-sm font-bold'>Stage of Innovation</label>
                <div className="relative">
                    <select
                    value={stage} onChange={(e)=>setStage(e.target.value)}
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



                <input value={phone} onChange={(e)=>setPhone(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phoneNumber" name="phoneNumber" type="number" placeholder="07********" required/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Enter your email address</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='email' placeholder='johndoe22@outlook.com' className='class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" ' required/>
            </div>

            <div class="mb-4">

                <label className='text-gray-700 text-sm font-bold mb-2' for="keyPartners"> Names of key partners if any</label>
                <input value={partner} onChange={(e)=>setpartner(e.target.value)} type="text" id="keyPartners" name="keyPartners" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />


            </div>

            <div className='justify-between pb-4'>
                <label for="studentType " className=' text-gray-700 font-bold text-sm'>Is your IP registered?</label>
                <select id="studentType" value={iP} onChange={(e)=>setIP(e.target.value)} name="student-type" required className='btn px-4 bg-[#0F416F] text-white rounded-full ml-2 mr-2 py-2 '>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
            </div>


            <div className='justify-between pb-4'>

                <label className="text-gray-700 font-bold text-sm mb-2 rounded-md appearance-none ">A brief description of your innovation (words should not exceed 250)</label>
                <textarea value={description} onChange={(e)=>setDescription(e.target.value)} type="description" id='description' className="shadow appearance-none pt-4 mt-4 border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required/>

            </div>



            <div className='justify-between pb-4'>


                <label for="category" className="text-gray-700 block font-bold text-sm pb-2 mb-2 rounded-md appearance-none">Category of Innovation:</label>
                <select id="category" name="category" value={category} onChange={(e)=>setcategory(e.target.value)} className="text-gray-700 font-bold text-sm pb-2 mb-2 rounded-md appearance-none py-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4"
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
    );
}