import React from "react";

const Profile = () => {
  return (
    <section className="w-full ">
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
                  placeholder="jane"
                  required
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
                />
              </div>
            </div>

            <div className="flex items-center justify-between space-x-2">
              <div class="mb-6 flex-1">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2 mt-2"
                  for="idNumber"
                >
                  Your Id Number
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="idNumber"
                  name="idNumber"
                  type="number"
                  placeholder="12345678"
                  required
                />
              </div>

              <div class="mb-4 flex-1">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="phoneNumber"
                >
                  Enter your phone number
                </label>

                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="number"
                  placeholder="07********"
                  required
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
                  Enter your email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="johndoe22@outlook.com"
                  className='class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" '
                  required
                />
              </div>

              <div class="mb-6 flex-1">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2 mt-2"
                  for="password"
                >
                  Your password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="******************"
                  required
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <button
                type="submit"
                class="bg-green-600 hover:bg-[#0F416F] text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline justify-center"
              >
                Update changes
              </button>
            </div>
            <p class="text-center text-gray-500 text-xs pt-4 pb-8 mb-4">
              &copy;2023 Chandaria Incubation Center. All rights reserved.
            </p>
          </form>
        </div>

        {/* profile card */}
        <div className="md:w-1/4 w-full shadow-lg   bg-white rounded-md p-5">
          <img
            src="/propic.jpg"
            alt="Owner's Picture"
            className="rounded-full w-48 h-48 object-cover mx-auto"
          />

          <ul className="w-full py-5">
            <li className="bg-slate-50 w-full flex items-center justify-between py-2">
              <h4 className="text-green-500 font-semibold">Name:</h4>
              <p>Jane Doe</p>
            </li>
            <li className="bg-white w-full flex items-center justify-between py-2">
              <h4 className="text-green-500 font-semibold">Phone:</h4>
              <p>+254701020304</p>
            </li>
            <li className="bg-slate-50 w-full flex items-center justify-between py-2">
              <h4 className="text-green-500 font-semibold">Email:</h4>
              <p>doe@mail.com</p>
            </li>
            <li className="bg-white w-full flex items-center justify-between py-2">
              <h4 className="text-green-500 font-semibold">Id:</h4>
              <p>01020304</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
// <div className="flex">
//   <div className="w-1/3 p-4">

//   </div>
// </div>
