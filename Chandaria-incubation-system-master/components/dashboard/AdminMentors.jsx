import React from "react";

export default function AdminMentors() {
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
        <div className="md:flex-1 md:overflow-x-hidden overflow-x-auto w-[90vw]  md:ml-6 rounded-2xl bg-white border-2 flex flex-col items-center p-4">
          <div className="w-full text-left text-blue-900">
            <h3 align="left" className="text-4xl">All Mentors</h3>
          </div>
          <br />
          <div className="w-full">
            <br />

            <table className="table-auto border-collapse w-full">
              <thead>
                <tr className="md:text-lg text-sm md:font-bold bg-slate-50  rounded-2xl">
                  <th className="px-4 py-2 text-blue-900 text-left">Name</th>
                  <th className="px-4 py-2 text-blue-900 text-left">
                    Mentor No
                  </th>
                  <th className="px-4 py-2 text-blue-900 text-left">
                    Area of specialization
                  </th>
                  <th className="px-4 py-2 text-blue-900 text-left">
                    Innovators
                  </th>
                  <th className="px-4 py-2 text-blue-900 text-left">Status</th>
                  <th className="px-4 py-2 text-green-900 text-left">View</th>
                </tr>
              </thead>

              <tbody className="text-base border-t-2">
                <tr
                  className="cursor-pointer bg-slate-50
                       hover:bg-blue-50 transition-colors text-sm"
                >
                  <td className="px-4 py-2 text-slate-800">John Doe</td>
                  <td className="px-4 py-2  text-slate-600">M3/0334/23</td>
                  <td className="px-4 py-2  text-slate-600">
                    Softtware Development
                  </td>
                  <td className="px-4 py-2  text-slate-600">5</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-check text-green-400"
                      title="Approved"
                    />

                    {/* <i
                            className="fa-solid fa-times  text-green-500"
                            title="Not approved"
                          /> */}
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-green-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      View
                    </button>
                  </td>
                </tr>
                <tr className="cursor-pointer bg-white hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">Jane Smith</td>
                  <td className="px-4 py-2 text-slate-600">M3/0123/23</td>
                  <td className="px-4 py-2 text-slate-600">Marketing</td>
                  <td className="px-4 py-2 text-slate-600">3</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-check text-green-400"
                      title="Approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-green-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      View
                    </button>
                  </td>
                </tr>
                <tr className="cursor-pointer bg-slate-50 hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">Michael Johnson</td>
                  <td className="px-4 py-2 text-slate-600">M3/0456/23</td>
                  <td className="px-4 py-2 text-slate-600">Finance</td>
                  <td className="px-4 py-2 text-slate-600">7</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-check text-green-400"
                      title="Approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-green-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      View
                    </button>
                  </td>
                </tr>
                <tr className="cursor-pointer bg-white hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">Emily Brown</td>
                  <td className="px-4 py-2 text-slate-600">M3/0789/23</td>
                  <td className="px-4 py-2 text-slate-600">Human Resources</td>
                  <td className="px-4 py-2 text-slate-600">4</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-check text-green-400"
                      title="Approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-green-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      View
                    </button>
                  </td>
                </tr>
                <tr className="cursor-pointer bg-slate-50 hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">David Wilson</td>
                  <td className="px-4 py-2 text-slate-600">M3/0912/23</td>
                  <td className="px-4 py-2 text-slate-600">Sales</td>
                  <td className="px-4 py-2 text-slate-600">6</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-check text-green-400"
                      title="Approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-green-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      View
                    </button>
                  </td>
                </tr>

                <tr
                  className="cursor-pointer bg-slate-50
                       hover:bg-blue-50 transition-colors text-sm"
                >
                  <td className="px-4 py-2 text-slate-800">John Doe</td>
                  <td className="px-4 py-2  text-slate-600">M3/0334/23</td>
                  <td className="px-4 py-2  text-slate-600">
                    Softtware Development
                  </td>
                  <td className="px-4 py-2  text-slate-600">5</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-check text-green-400"
                      title="Approved"
                    />

                    {/* <i
                            className="fa-solid fa-times  text-green-500"
                            title="Not approved"
                          /> */}
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-green-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      View
                    </button>
                  </td>
                </tr>
                <tr className="cursor-pointer bg-white hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">Jane Smith</td>
                  <td className="px-4 py-2 text-slate-600">M3/0123/23</td>
                  <td className="px-4 py-2 text-slate-600">Marketing</td>
                  <td className="px-4 py-2 text-slate-600">3</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-check text-green-400"
                      title="Approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-green-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      View
                    </button>
                  </td>
                </tr>
                <tr className="cursor-pointer bg-slate-50 hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">Michael Johnson</td>
                  <td className="px-4 py-2 text-slate-600">M3/0456/23</td>
                  <td className="px-4 py-2 text-slate-600">Finance</td>
                  <td className="px-4 py-2 text-slate-600">7</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-check text-green-400"
                      title="Approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-green-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      View
                    </button>
                  </td>
                </tr>
                <tr className="cursor-pointer bg-white hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">Emily Brown</td>
                  <td className="px-4 py-2 text-slate-600">M3/0789/23</td>
                  <td className="px-4 py-2 text-slate-600">Human Resources</td>
                  <td className="px-4 py-2 text-slate-600">4</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-check text-green-400"
                      title="Approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-green-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      View
                    </button>
                  </td>
                </tr>
                <tr className="cursor-pointer bg-slate-50 hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">David Wilson</td>
                  <td className="px-4 py-2 text-slate-600">M3/0912/23</td>
                  <td className="px-4 py-2 text-slate-600">Sales</td>
                  <td className="px-4 py-2 text-slate-600">6</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-check text-green-400"
                      title="Approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-green-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
