import React from "react";

const Profile = () => {
  return (
    <section className="w-full overflow-scroll h-[90vh]">
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
        {/*  cards */}
        <div className="md:w-[73%] shadow-lg w-full bg-white rounded-md p-5">
          {/* funding card 1 */}
          <div className="w-11/12 rounded-md  mt-5  bg-slate-100 shadow-md flex items-center justify-between">
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

          {/*graph card 2 */}
          <div className="w-11/12 rounded-md min-h-[25vh] mt-5 py-2 bg-slate-100 shadow-md">
            <h1 className="text-2xl ml-10 mt-1 text-green-600 mb-4">
              Clearance System
            </h1>

            <img src="/graph.png" alt="" className="w-10/12 mx-auto h-full" />
          </div>
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
