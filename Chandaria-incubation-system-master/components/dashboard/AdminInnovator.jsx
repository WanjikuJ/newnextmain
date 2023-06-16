import React from "react";

export default function AdminInnovator() {
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
            <h3 align="left" className="text-4xl">
              All Innovators
            </h3>
          </div>
          <br />
          <div className="w-full">
            <br />

            <table className="table-auto border-collapse w-full">
              <thead>
                <tr className="md:text-lg text-sm md:font-bold bg-slate-50  rounded-2xl">
                  <th className="px-4 py-2 text-blue-900 text-left">Name</th>
                  <th className="px-4 py-2 text-blue-900 text-left">
                    Innovator No
                  </th>
                  <th className="px-4 py-2 text-blue-900 text-left">
                    Innovation
                  </th>
                  <th className="px-4 py-2 text-blue-900 text-left">Mentor</th>
                  <th className="px-4 py-2 text-blue-900 text-left">Status</th>
                  <th className="px-4 py-2 text-red-900 text-left">Delete</th>
                </tr>
              </thead>

              <tbody className="text-base border-t-2">
                <tr
                  className="cursor-pointer bg-slate-50
                       hover:bg-blue-50 transition-colors text-sm"
                >
                  <td className="px-4 py-2 text-slate-800">Jane Doe</td>
                  <td className="px-4 py-2  text-slate-600">I3/0344/22</td>
                  <td className="px-4 py-2  text-slate-600">
                    Flight Booking system
                  </td>
                  <td className="px-4 py-2  text-slate-600">John Doe</td>
                  <td className="px-4 py-2">
                    {/* <i
                      className="fa-solid fa-check text-green-400"
                      title="Approved"
                    /> */}

                    <i
                      className="fa-solid fa-times  text-red-500"
                      title="Not approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-red-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="cursor-pointer bg-white hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">Alice Smith</td>
                  <td className="px-4 py-2 text-slate-600">I3/0123/22</td>
                  <td className="px-4 py-2 text-slate-600">
                    Inventory Management
                  </td>
                  <td className="px-4 py-2 text-slate-600">Bob Doe</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-times text-red-500"
                      title="Not approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-red-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="cursor-pointer bg-slate-50 hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">John Smith</td>
                  <td className="px-4 py-2 text-slate-600">I3/0345/22</td>
                  <td className="px-4 py-2 text-slate-600">Customer Support</td>
                  <td className="px-4 py-2 text-slate-600">Sarah Doe</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-times text-red-500"
                      title="Not approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-red-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="cursor-pointer bg-white hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">Emily Johnson</td>
                  <td className="px-4 py-2 text-slate-600">I3/0567/22</td>
                  <td className="px-4 py-2 text-slate-600">
                    Project Management
                  </td>
                  <td className="px-4 py-2 text-slate-600">Michael Doe</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-times text-red-500"
                      title="Not approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-red-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="cursor-pointer bg-slate-50 hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">Sarah Davis</td>
                  <td className="px-4 py-2 text-slate-600">I3/0890/22</td>
                  <td className="px-4 py-2 text-slate-600">
                    Quality Assurance
                  </td>
                  <td className="px-4 py-2 text-slate-600">David Doe</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-times text-red-500"
                      title="Not approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-red-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="cursor-pointer bg-white hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">Michael Wilson</td>
                  <td className="px-4 py-2 text-slate-600">I3/1234/22</td>
                  <td className="px-4 py-2 text-slate-600">
                    Marketing Campaign
                  </td>
                  <td className="px-4 py-2 text-slate-600">Linda Doe</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-times text-red-500"
                      title="Not approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-red-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="cursor-pointer bg-slate-50 hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">Olivia Martinez</td>
                  <td className="px-4 py-2 text-slate-600">I3/4567/22</td>
                  <td className="px-4 py-2 text-slate-600">
                    Product Development
                  </td>
                  <td className="px-4 py-2 text-slate-600">Christopher Doe</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-times text-red-500"
                      title="Not approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-red-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="cursor-pointer bg-white hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">Daniel Thompson</td>
                  <td className="px-4 py-2 text-slate-600">I3/7890/22</td>
                  <td className="px-4 py-2 text-slate-600">Human Resources</td>
                  <td className="px-4 py-2 text-slate-600">Jennifer Doe</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-times text-red-500"
                      title="Not approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-red-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="cursor-pointer bg-slate-50 hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">Sophia Anderson</td>
                  <td className="px-4 py-2 text-slate-600">I3/9876/22</td>
                  <td className="px-4 py-2 text-slate-600">Sales Analytics</td>
                  <td className="px-4 py-2 text-slate-600">Andrew Doe</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-times text-red-500"
                      title="Not approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-red-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="cursor-pointer bg-white hover:bg-blue-50 transition-colors text-sm">
                  <td className="px-4 py-2 text-slate-800">Henry Wilson</td>
                  <td className="px-4 py-2 text-slate-600">I3/6543/22</td>
                  <td className="px-4 py-2 text-slate-600">
                    Financial Analysis
                  </td>
                  <td className="px-4 py-2 text-slate-600">Jessica Doe</td>
                  <td className="px-4 py-2">
                    <i
                      className="fa-solid fa-times text-red-500"
                      title="Not approved"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-red-400 text-xs w-20 text-white rounded-2xl py-1 px-2">
                      Delete
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
