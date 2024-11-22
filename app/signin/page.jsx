"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // function for password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // function for email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // function for password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // function for login

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      setLoading(true); // Start loading spinner

      try {
        // todo: will add my API call or logic here
        router.push("/dashboard");
      } catch (error) {
        console.error("Login failed", error);
        alert("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <section className='flex flex-col md:flex-row items-center min-h-screen h-screen'>
      {/* Left Section */}
      <div className='flex flex-col justify-center w-full md:w-1/2 p-8 md:p-16 lg:p-20'>
        <Image src='/group-icon.png' alt='group icon' width={58} height={58} />
        <h2 className='mt-8 font-bold text-4xl tracking-wide'>Welcome to</h2>
        <p className='text-sm text-gray-500 font-source-sans mt-2'>
          Monitoring & Evaluation System
        </p>
        <form className='mt-10 space-y-6' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label
              htmlFor='email'
              className='text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <div className='relative mt-1'>
              <input
                type='email'
                id='email'
                value={email}
                onChange={handleEmailChange}
                placeholder='aamir@gmail.com'
                className='w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              />
              <span className='absolute right-4 top-3 text-gray-400'>@</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='password'
              className='text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <div className='relative mt-1'>
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                value={password}
                onChange={handlePasswordChange}
                placeholder='********'
                className='w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              />
              <span className='absolute right-4 top-3 text-gray-400'>
                <Image src='/Eyes.png' alt='eye icon' width={20} height={15} />
              </span>
            </div>
          </div>
          <div className='flex justify-end text-sm text-blue-600'>
            <a href='#' className='hover:underline'>
              Forgot password?
            </a>
          </div>
          <button
            type='submit'
            className='w-full py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700'
            disabled={loading}
          >
            {loading ? (
              <div className='flex items-center space-x-2'>
                <div className='animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white'></div>
              </div>
            ) : (
              " Log In"
            )}
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className='hidden md:flex w-full md:w-1/2 relative h-full'>
        {/* Background Image */}
        <Image
          src='/mark-production.png'
          alt='mark production image'
          layout='fill'
          objectFit='cover'
          className='absolute inset-0 z-0'
        />

        {/* Blue Overlay */}
        <div className='absolute inset-0 bg-blue-700 opacity-50 z-10'></div>

        {/* Text Section */}
        <div className='relative z-20 flex items-start justify-center w-full px-10 pt-20'>
          <p className='text-xl font-medium text-white leading-relaxed '>
            "Track and assess the performance of Projects and Tasks."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
