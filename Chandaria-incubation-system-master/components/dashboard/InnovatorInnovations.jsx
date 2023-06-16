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
        {/* Progress card */}
        <div className="md:w-[73%] shadow-lg w-full bg-white rounded-md p-5">
          {/* card 1 */}
          <div className="w-11/12 rounded-md h-[25vh] mt-5 bg-slate-100 shadow-md">
            <div className="w-full h-full flex items-center justify-between md:flex-row flex-col">
              <img src="/19268.jpg" alt="" className="md:w-1/3 w-full" />
              <div className="mx-5 flex-1 ">
                <h1 className="text-4xl text-[#0F416F] mb-4">
                  Clearance System
                </h1>
                <p className="mb-4 text-xs text-slate-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  temporibus cumque molestiae, delectus est magni consequuntur
                  numquam fugiat assumenda soluta repudiandae alias facere
                  doloribus nisi adipisci, quae ex nesciunt nostrum!
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
                    {/* card 2 */}
                    <div className="w-11/12 rounded-md h-[25vh] mt-5 bg-slate-100 shadow-md">
            <div className="w-full h-full flex items-center justify-between md:flex-row flex-col">
              <img src="/19268.jpg" alt="" className="md:w-1/3 w-full" />
              <div className="mx-5 flex-1 ">
                <h1 className="text-4xl text-[#0F416F] mb-4">
                  Inventory Management System
                </h1>
                <p className="mb-4 text-xs text-slate-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  temporibus cumque molestiae, delectus est magni consequuntur
                  numquam fugiat assumenda soluta repudiandae alias facere
                  doloribus nisi adipisci, quae ex nesciunt nostrum!
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
                              {/* card 3 */}
                              <div className="w-11/12 rounded-md h-[25vh] mt-5 bg-slate-100 shadow-md">
            <div className="w-full h-full flex items-center justify-between md:flex-row flex-col">
              <img src="/19268.jpg" alt="" className="md:w-1/3 w-full" />
              <div className="mx-5 flex-1 ">
                <h1 className="text-4xl text-[#0F416F] mb-4">
                  File Management System
                </h1>
                <p className="mb-4 text-xs text-slate-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  temporibus cumque molestiae, delectus est magni consequuntur
                  numquam fugiat assumenda soluta repudiandae alias facere
                  doloribus nisi adipisci, quae ex nesciunt nostrum!
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

        {/* progress card*/}
        <div className="md:w-1/4 w-full rounded-md bg-white overflow-hidden ">
          <h1 className="text-3xl text-[#0F416F] my-4 px-5">Your Progress</h1>

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
    </section>
  );
};

export default Profile;
