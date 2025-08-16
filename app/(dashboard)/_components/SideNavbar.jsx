"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineUpload } from "react-icons/hi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlineShield } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🔹 Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 h-screen shadow-md sticky top-0 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="flex-grow">
            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 hover:text-gray-700"
              href="/upload"
            >
              <HiOutlineUpload />
              <span className="mx-4 font-medium">Upload</span>
            </Link>

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 hover:text-gray-700"
              href="/files"
            >
              <LuFileSpreadsheet />
              <span className="mx-4 font-medium">Files</span>
            </Link>

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 hover:text-gray-700"
              href="/upgrade"
            >
              <MdOutlineShield />
              <span className="mx-4 font-medium">Upgrade</span>
            </Link>

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 hover:text-gray-700"
              href="/support"
            >
              <CiCoffeeCup />
              <span className="mx-4 font-medium">Support</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* 🔹 Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100 text-gray-700 shadow md:hidden"
      >
        {isOpen ? (
          // Close Icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger Icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* 🔹 Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Sidebar panel */}
          <aside className="w-64 h-full bg-white shadow-md dark:bg-gray-900 flex flex-col p-4 transition-transform">
            <nav className="mt-10 space-y-4">
              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 hover:text-gray-700"
                href="/upload"
                onClick={() => setIsOpen(false)}
              >
                <HiOutlineUpload />
                <span className="mx-4 font-medium">Upload</span>
              </Link>

              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 hover:text-gray-700"
                href="/files"
                onClick={() => setIsOpen(false)}
              >
                <LuFileSpreadsheet />
                <span className="mx-4 font-medium">Files</span>
              </Link>

              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 hover:text-gray-700"
                href="/upgrade"
                onClick={() => setIsOpen(false)}
              >
                <MdOutlineShield />
                <span className="mx-4 font-medium">Upgrade</span>
              </Link>

              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 hover:text-gray-700"
                href="/support"
                onClick={() => setIsOpen(false)}
              >
                <CiCoffeeCup />
                <span className="mx-4 font-medium">Support</span>
              </Link>
            </nav>
          </aside>

          {/* Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="flex-1 bg-black bg-opacity-50"
          />
        </div>
      )}
    </>
  );
};
export default SideNavbar;
