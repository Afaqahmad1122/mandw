"use client";

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { BsBellFill } from "react-icons/bs";
import { MdCircle } from "react-icons/md";
import Image from "next/image";
import Modal from "@/components/Modal";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className='h-16 md:h-20 flex items-center justify-between w-full px-4 py-3 shadow-sm bg-white z-50'>
      {/* Left Section */}
      <div className='flex items-center space-x-3'>
        {/* Logo */}
        <Link href={"/"}>
          <Image src='/group-icon.png' alt='Logo' width={30} height={30} />
          <span className='font-medium text-lg text-gray-800'>M & E</span>
        </Link>
      </div>

      {/* Right Section */}
      <div className='flex items-center space-x-4 '>
        <button
          onClick={handleOpen}
          className='hidden md:flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
        >
          <FiPlus className='text-lg' />
          <span>New project</span>
        </button>

        {/* Notification Bell */}
        <div className='relative'>
          <BsBellFill className='text-gray-500 text-2xl cursor-pointer hover:text-gray-700' />
          {/* Notification Dot */}
          <MdCircle className='absolute -top-1 -right-1 text-red-500 text-sm' />
        </div>

        {/* Avatar */}
        <div className='w-9 h-9 rounded-full bg-[#FC5A5A] flex items-center justify-center text-white font-semibold text-lg cursor-pointer'>
          A
        </div>
      </div>

      {/* modal */}
      <Modal isOpen={isOpen} onClose={handleClose} />
    </nav>
  );
};

export default Navbar;
