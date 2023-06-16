import React from "react";

const Profile = () => {
  return (
    <section className="w-full h-[88vh] overflow-x-scroll">
      <div
        id="background"
        className=" h-[350px] w-full   rounded-bl-2xl rounded-br-2xl"
      >
        <div className="w-full h-full bg-black/50 rounded-bl-2xl rounded-br-2xl overflow-hidden"></div>
      </div>
      <div
        id="cardWrapper"
        className="md:w-[95%] w-11/12 flex md:flex-row flex-col-reverse mt-[-150px] mx-auto justify-between"
      >
        {/* form card */}
        <div className="md:w-[73%] shadow-lg w-full bg-white rounded-md p-5">
          {/* funding card 1 */}
          <div className="w-full rounded-md  mt-5 mb-10 bg-slate-100 shadow-md flex items-center justify-between">
            {/* <img src="/funding.png" alt="" className='w-full h-full'/> */}

            <div className="md:w-1/2 ml-10 my-2 w-full">
              <h1 className="text-4xl text-green-700 mb-4">Funding</h1>
              <p className="my-1 text-slate-500">Period</p>
              <ul>
                <li className="flex items-center mb-2 text-xl text-[#0F416F]">
                  <div className="w-4 h-4 rounded-full bg-[#0F416F] mr-5" />
                  Nov 2022
                </li>

                <li className="flex items-center mb-2 text-xl text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-slate-700 mr-5" />
                  Dec 2022
                </li>
                <li className="flex items-center mb-2 text-xl text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-slate-700 mr-5" />
                  Jan 2023
                </li>
                <li className="flex items-center mb-2 text-xl text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-slate-700 mr-5" />
                  Feb 2023
                </li>
              </ul>

              <button className="text-[#0F416F] text-xl flex items-center">
                View All{" "}
                <div className="w-6 h-6 flex items-center ml-2 justify-center rounded-full bg-[#0F416F]  text-white">
                  <i className="fa-solid mx-auto fa-arrow-right"></i>
                </div>
              </button>
            </div>

            <div className="">
              <img src="/cash.png" alt="" className="h-full" />
            </div>
          </div>

          <form>
            <div className="flex items-center justify-between space-x-2">
              <div class="mb-6 mt-2 flex-1">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="fName"
                >
                  First Name
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fName"
                  name="fName"
                  type="text"
                  placeholder="john"
                  required
                  disabled
                />
              </div>
              <div class="mb-6 mt-2 flex-1">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="lName"
                >
                  Last Name
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lName"
                  name="lName"
                  type="text"
                  placeholder="doe"
                  required
                  disabled
                />
              </div>
            </div>

            <div className="flex items-center justify-between space-x-2">
              <div class="mb-6 flex-1">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2 mt-2"
                  for="idNumber"
                >
                  Id Number
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="idNumber"
                  name="idNumber"
                  type="number"
                  placeholder="12345678"
                  required
                  disabled
                />
              </div>

              <div class="mb-4 flex-1">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="phoneNumber"
                >
                  Phone number
                </label>

                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="number"
                  placeholder="0712345678"
                  required
                  disabled
                />
              </div>
            </div>

            <div className="flex items-center justify-between space-x-2">
              <div class="mb-4 flex-1">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  {" "}
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="johndoe22@outlook.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  disabled
                />
              </div>
              <div class="mb-6 mt-2 flex-1">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="area"
                >
                  Area of specialization
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="area"
                  name="area"
                  type="text"
                  placeholder="Software Engineer"
                  required
                  disabled
                />
              </div>
            </div>
          </form>
        </div>

        {/* mentor card */}
        <div className="md:w-1/4 w-full shadow-lg   bg-white rounded-md p-5">
          <h1 className="text-3xl text-green-800 mb-4">Your Mentor</h1>
          <div className="w-full rounded-md bg-white overflow-hidden flex items-end justify-end flex-col ">
            <img
              src="/man.png"
              alt=""
              className="w-full h-[30vh] object-cover"
            />
            {/* text */}
            <div className="w-11/12 mx-auto ">
              <div className="w-full flex items-center justify-between">
                <h2 className="text-xl text-[#0F416F] my-2">Mrs John Doe</h2>
                <img src="tag.png" alt="" />
              </div>

              <p className="text-slate-600 ">+254701020304</p>
              <p className="text-slate-600 ">john@gmail.com</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
