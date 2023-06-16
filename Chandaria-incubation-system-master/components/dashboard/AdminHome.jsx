import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const getUserDataFromLocalStorage = () => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    // Retrieve the JSON string from localStorage
    const userDataString = localStorage.getItem("userData");

    // Parse the JSON string back into an object
    const userData = JSON.parse(userDataString);

    return userData;
  } else {
    // Handle the case where localStorage is not available
    return null; // or any other appropriate value
  }
};
export default function Home() {
  const logout = () => {};

  const userData = getUserDataFromLocalStorage();
  if (userData === null) {
    logout();
  }
  return (
    <>
      {userData != null ? (
        <>
          {/* fake background on right */}
          <div className="w-1/3 bg-slate-300 h-full absolute right-0 top-[9vh] z-[-1" />

          {/* Main part */}
          <div className="w-full  px-2 z-10 absolute left-0 overflow-scroll">

            {/* Cards wrapper */}

            <div className="w-[94%] flex-1 flex items-start md:flex-row flex-col justify-between">
              {/* left cards */}
              <div className="md:w-2/3 w-full md:ml-10  flex flex-col justify-evenly">
                {/* card 1 */}
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

                {/* card 2 */}
                <div className="w-11/12 rounded-md min-h-[25vh] mt-5 py-2 bg-slate-100 shadow-md">
                  <h1 className="text-2xl ml-10 mt-1 text-green-600 mb-4">
                    Clearance System
                  </h1>

                  <img
                    src="/graph.png"
                    alt=""
                    className="w-10/12 mx-auto h-full"
                  />
                </div>
                {/* card 3 */}
                <div className="w-11/12 rounded-md h-[25vh] mt-5 bg-slate-100 shadow-md">
                  <div className="w-full h-full flex items-center justify-between md:flex-row flex-col">
                    <img src="comp.png" alt="" className="md:w-1/3 w-full" />
                    <div className="mx-5 flex-1 ">
                      <h1 className="text-4xl text-[#0F416F] mb-4">
                        Clearance System
                      </h1>
                      <p className="mb-4 text-xs text-slate-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem temporibus cumque molestiae, delectus est magni
                        consequuntur numquam fugiat assumenda soluta repudiandae
                        alias facere doloribus nisi adipisci, quae ex nesciunt
                        nostrum!
                      </p>
                      <span className="flex-1 flex items-center justify-between">
                        <p className="text-slate-700">
                          Submitted On : <i>22/03/2023</i>
                        </p>
                        <div className="w-8 h-8 flex items-center mt-2 justify-center rounded-full bg-[#0F416F]  text-white">
                          <i className="fa-solid mx-auto fa-arrow-right"></i>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* right cards */}
              <div className="md:w-1/3   w-full flex items-center justify-end">
                {/* mentor card */}
                <div className="w-4/5">
                  <h1 className="text-3xl text-green-800 mb-4">Top Inventor</h1>
                  <div className="w-full rounded-md bg-white overflow-hidden flex items-end justify-end flex-col ">
                    <img
                      src="/man.png"
                      alt=""
                      className="w-full h-[30vh] object-cover"
                    />
                    {/* text */}
                    <div className="w-11/12 mx-auto ">
                      <div className="w-full flex items-center justify-between">
                        <h2 className="text-xl text-[#0F416F] my-2">
                          Mrs John Doe
                        </h2>
                        <img src="tag.png" alt="" />
                      </div>

                      <p className="text-slate-600 text-xs">+254701020304</p>
                      <p className="text-slate-600 text-xs">john@gmail.com</p>
                      <br />
                    </div>
                  </div>
                  <br />

                  {/* progress */}

                  <div className="w-full rounded-md bg-white overflow-hidden">
                    <h1 className="text-3xl text-[#0F416F] my-4 px-5">
                      Progress so far
                    </h1>

                    <img src="/chart.png" alt="" className="my-6 mx-auto" />
                    <div className="w-full px-5 flex items-center justify-between mb-4">
                      <span className="tetx-[#0F416F] flex items-center">
                        <div className="w-4 h-4 bg-[#0F416F] rounded-full  mr-2" />{" "}
                        Incomplete{" "}
                      </span>
                      <span className="tetx-[#0F416F] flex items-center">
                        <div className="w-4 h-4 bg-[#0F416F] mr-2 rounded-full " />{" "}
                        Complete{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link href="/">Go home</Link>
        </>
      )}
    </>
  );
}
