import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { HiOutlineUpload } from "react-icons/hi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlineShield } from "react-icons/md";

const SideNavbar = () => {
  return (
   
    <aside className="hidden md:flex md:flex-col w-64 h-screen  shadow-md sticky top-0 bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">

 
    <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className='flex-grow'> 
            <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/upload">
                <HiOutlineUpload />

                <span className="mx-4 font-medium">Upload</span>
            </Link>

            <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/files">
                <LuFileSpreadsheet />

                <span className="mx-4 font-medium">Files</span>
            </Link>

            <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/upgrade">
                <MdOutlineShield />

                <span className="mx-4 font-medium">Upgrade</span>
            </Link>

            <hr className="mt-6 border-gray-200 dark:border-gray-600" />


        </nav>
    </div>
</aside>
  )
}

export default SideNavbar