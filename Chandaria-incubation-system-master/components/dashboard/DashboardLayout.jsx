"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard({ children, user }) {
  // method to determine the user and show appropriate navigations
  const getNavigation = () => {
    if (user == "mentor") {
      return [
        {
          name: "Dashboard",
          icon: "fa-gauge",
          link: "/mentor",
        },
        {
          name: "profile",
          icon: "fa-user-tie",
          link: "/mentor/profile",
        },

        {
          name: "Your Innovators",
          icon: "fa-chalkboard-user",
          link: "/mentor/innovators",
        },
      ];
    } else if (user === "admin") {
      return [
        {
          name: "Dashboard",
          icon: "fa-gauge",
          link: "/admin",
        },
        {
          name: "profile",
          icon: "fa-user-tie",
          link: "/admin/profile",
        },
        {
          name: "All Mentors",
          icon: "fa-chalkboard-user",
          link: "/admin/mentors",
        },
        {
          name: "All Innovators",
          icon: "fa-lightbulb",
          link: "/admin/innovators",
        },
      ];
    } else {
      return [
        {
          name: "Dashboard",
          icon: "fa-gauge",
          link: "/innovator/",
        },
        {
          name: "profile",
          icon: "fa-user-tie",
          link: "/innovator/profile",
        },
        {
          name: "Progress",
          icon: "fa-bars-progress",
          link: "/innovator/progress",
        },
        {
          name: "Your Mentor",
          icon: "fa-chalkboard-user",
          link: "/innovator/mentor",
        },
        {
          name: "Innovations",
          icon: "fa-lightbulb",
          link: "/innovator/innovations",
        },
      ];
    }
  };

  const navigation = getNavigation();

  // console.log(userData);
  const router = useRouter();
  const logout = () => {};

  return (
    <>
      <main className="w-[100vw] bg-[#0F416F] flex items-center">
        {" "}
        {/* nav bar */}
        <nav className="md:w-1/5 md:flex hidden h-[100vh] flex-col items-start justify-between">
          {/* top */}
          <div className="w-full  text-white flex items-start justify-between flex-col">
            <h1 className="ml-10 mt-10 text-3xl">
              Chandaria Incubate <br /> Management System
            </h1>
            <p className="ml-10 mt-5">{user} dashboard</p>
            <br />

            <ul className="mt-10">
              {navigation.map((link, i) => (
                <Link key={i} href={link.link} className="">
                  <div
                    className={`w-full pl-10 flex items-center text-xl mb-10 cursor-pointer ${
                      i == 0 ? "border-l-2 text-white" : "text-white/70"
                    }`}
                  >
                    <i className={`fa-solid text-white ${link.icon}`}></i>
                    <li className="  ml-5">{link.name}</li>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
          {/* bottom setting */}
          <div className="text-white mb-10">
            <ul>
              <li className="w-full p-2  text-xl ml-10">
                <i className="fa-solid fa-gear mr-5"></i>
                Setting
              </li>
              <Link href="/">
                <li className="w-full p-2  text-xl ml-10" onClick={logout}>
                  <i className="fa-solid fa-right-from-bracket mr-5"></i>
                  Logout
                </li>
              </Link>
            </ul>
          </div>
        </nav>
        {/* main part */}
        <section className="flex-1 md:h-[98vh]  h-fit p-4 rounded-md bg-slate-50 md:mr-3 relative md:overflow-hidden ">
          <div className="flex-1 z-10 mx-auto border-b-2 border-[#0F416F] flex items-center justify-between pb-2">
            <h1 className="md:text-3xl font-bold text-green-600">Dashboard</h1>
            <div className="flex items-center">
              <span className="text-right">
                <h2 className="text-[#0F416F] text-xl">John Doe</h2>
                <h4>{user}</h4>
              </span>
              <img
                src="/joy.jpg"
                alt=""
                className="md:w-16 md:h-16 w-10 h-10 rounded-full ml-5"
              />
            </div>
          </div>

          {children}
        </section>
      </main>
    </>
  );
}
