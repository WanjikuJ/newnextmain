import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import API from "../api.json";
import { toast, ToastContainer } from "react-toastify";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const saveUserDataToLocalStorage = (userData) => {
    // Convert the user data to a JSON string
    const userDataString = JSON.stringify(userData);

    // Save the JSON string to localStorage
    localStorage.setItem("userData", userDataString);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = API.API + "auth/login.php";

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        if (data.data.length > 0) {
          const user = data.data[0];

          saveUserDataToLocalStorage(user);
          router.push("/inventor");
          //   console.log(user);
        } else {
          toast.error("Invalid credentials or user not found");
        }
      } else {
        toast.error("Server error occurred");
      }
    } catch (error) {
      toast.error("An error occurred during login. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className=" mx-auto md:w-4/5 bg-white w-11/12 md:h-[80vh] flex md:flex-row flex-col mdp-10 items-center justify-between rounded-2xl overflow-hidden shadow-lg">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="md:w-1/2 w-full h-full">
        <img
          src="/login1.jpg"
          alt="login page"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="md:w-1/2  w-full md:px-20">
        {/* form header */}
        <div className="formHeader">
          <h1 className="md:text-4xl text-xl md:tracking-widest tracking-wide">
            Welcome Back
          </h1>
          <br />
          <p>Login to your account</p>
          <br />
        </div>

        <form className="w-full " onSubmit={handleSubmit}>
          <br />
          <div className="">
            <label htmlFor="email" className="text-[#0F416F] font-light">
              Your Email
            </label>
            <div className="flex items-center justify-between p-2 border-b-[1px] border-[#0F416F]">
              <i className="text-lg fa-solid fa-envelope text-[#0F416F]"></i>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="joe@eexample.com"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="flex-1 bg-transparent ml-4 text-[#0F416F]
            px-1"
              />
            </div>

            <br />
            <br />
          </div>
          <br />
          {/* password */}
          <div className="">
            <label htmlFor="password" className="text-[#0F416F] ">
              Password
            </label>
            <div className="flex items-center justify-between p-2 border-b-[1px] border-[#0F416F]">
              <i className="text-lg fa-solid fa-key text-[#0F416F]"></i>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="***********"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="flex-1 bg-transparent ml-4 text-[#0F416F]
            px-1"
              />
            </div>

            <br />
            <br />
          </div>

          <button
            type="submit"
            className=" hover:scale-110  hover:bg-[#0F416F] text-[#0F416F] hover:text-white px-8 py-1 border-[#0F416F] border-2 rounded-3xl  flex items-center"
          >
            Log in <i className="fa-solid fa-arrow-right ml-4"></i>
          </button>
          <br />
          <br />
        </form>
        <div>
          <p>
            Don't have an account
            {/* <Link href="/register" ><i className='text-[#0F416F]'>register</i> </Link> */}
          </p>
          <Link href="/reset">
            <p className="text-[#0F416F]">Reset your password</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
