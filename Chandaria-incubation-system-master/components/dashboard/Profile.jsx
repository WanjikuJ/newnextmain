import React from "react";

const Profile = () => {
  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        <img
          src="/propic.jpg"
          alt="Owner's Picture"
          className="rounded-full w-48 h-48 object-cover"
        />

        <form>
          <div class="mb-6 mt-2">
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
          <div class="mb-6 mt-2">
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
          <div class="mb-6">
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
          <div class="mb-6">
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
          <p class="text-red-500 text-xs italic mb-6">
            not applicable to under 18's
          </p>

          <div className="justify-between pb-4">
            <label
              for="studentType "
              className=" text-gray-700 font-bold text-sm"
            >
              Are you a KU student?
            </label>
            <select
              id="studentType"
              name="studentType"
              required
              className="btn px-4 bg-[#0F416F] text-white rounded-full ml-2 mr-2 py-2 "
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          <p class="text-red-500 text-xs italic mb-6">For Ku students only</p>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2 mt-2"
              for="registrationNumber"
            >
              Your Registration Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="registrationNumber"
              name="registrationNumber"
              type="text"
              placeholder="S13/23345/23"
            />
          </div>
        </form>
      </div>
      <div className="w-2/3 p-4">
        <form class="bg-white  rounded px-8 pt-6 pb-8 mb-4 overflow-scroll">
          <div class="mb-6">
            <label
              for="dateIncubated"
              className="text-gray-700 font-bold text-sm pb-2 mb-2 block"
            >
              Date Incubated
            </label>
            <input
              type="date"
              id="dateIncubated"
              name="dateIncubated"
              required
              className='"bg-white shadow-md rounded pb-8 mb-4 w-full px-10 py-2 text-gray-700 text-sm border'
            />
          </div>

          <div className="flex justify-between items-center">
            <label
              for="innovationStage"
              className=" text-gray-700 text-sm font-bold"
            >
              Stage of Innovation
            </label>
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

          <div class="mb-4">
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

          <div class="mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              for="keyPartners"
            >
              {" "}
              Names of key partners if any
            </label>
            <input
              type="text"
              id="keyPartners"
              name="keyPartners"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="justify-between pb-4">
            <label
              for="studentType "
              className=" text-gray-700 font-bold text-sm"
            >
              Is your IP registered?
            </label>
            <select
              id="studentType"
              name="student-type"
              required
              className="btn px-4 bg-[#0F416F] text-white rounded-full ml-2 mr-2 py-2 "
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>

          <div className="justify-between pb-4">
            <label className="text-gray-700 font-bold text-sm mb-2 rounded-md appearance-none ">
              A brief description of your innovation (words should not exceed
              250)
            </label>
            <textarea
              type="description"
              id="description"
              className="shadow appearance-none pt-4 mt-4 border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="justify-between pb-4">
            <label
              for="category"
              className="text-gray-700 block font-bold text-sm pb-2 mb-2 rounded-md appearance-none"
            >
              Category of Innovation:
            </label>
            <select
              id="category"
              name="category"
              className="text-gray-700 font-bold text-sm pb-2 mb-2 rounded-md appearance-none py-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4"
              required
            >
              <option value="business-professional-services">
                Business and Professional Services{" "}
              </option>
              <option value="business-professional-services">
                Information and Communication Technology{" "}
              </option>
              <option value="business-professional-services">
                Marketing and Communication{" "}
              </option>
              <option value="business-professional-services">
                Manufacturing and Construction{" "}
              </option>
              <option value="business-professional-services">
                Transport and Logistics{" "}
              </option>
              <option value="business-professional-services">
                Bio and Nano-Technology{" "}
              </option>
              <option value="business-professional-services">
                Health and Nutrition{" "}
              </option>
              <option value="business-professional-services">
                Green and ecological business{" "}
              </option>
              <option value="business-professional-services">
                Tourism and eco-tourism{" "}
              </option>
              <option value="business-professional-services">
                Fine and Performing Arts{" "}
              </option>
              <option value="business-professional-services">
                Sports, leisure and Entertainment{" "}
              </option>
              <option value="business-professional-services">
                Water and Sanitation{" "}
              </option>
              <option value="business-professional-services">Energy </option>
              <option value="business-professional-services">
                Media and Entertainment{" "}
              </option>
            </select>
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
    </div>
  );
};

export default Profile;
