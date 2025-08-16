'use client'; // for client side navigation for Link
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white border-b">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <Image src='/logo.svg' height={50} width={100} alt="Logo" />

          {/* Desktop Menu */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-md">
              <li>
                <Link href="/" className="text-gray-500 transition hover:text-gray-700">Home</Link>
              </li>
              <li>
                <Link href="/upload" className="text-gray-500 transition hover:text-gray-700">Upload</Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-500 transition hover:text-gray-700">Support Us</Link>
              </li>
            </ul>
          </nav>

          {/* Right buttons */}
          <div className="flex items-center gap-4">
            <Link
              className="hidden sm:block rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-400"
              href="/files"
            >
              Get Started
            </Link>

            {/* Hamburger Button (Mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-700 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              {menuOpen ? (
                // Close Icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t">
            <ul className="flex flex-col p-4 space-y-2 text-md">
              <li>
                <Link href="/" className="block text-gray-600 hover:text-blue-500">Home</Link>
              </li>
              <li>
                <Link href="/upload" className="block text-gray-600 hover:text-blue-500">Upload</Link>
              </li>
              {/* <li>
                <Link href="/" className="text-gray-500 transition hover:text-gray-500/75">About Us</Link>
                </li> */}
              <li>
                <Link href="/support" className="block text-gray-600 hover:text-blue-500">Support Us</Link>
              </li>
              <li>
                <Link href="/files" className="block rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-400">
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
        )}
       </header>  {/* HyperuI */}
    </div>
  )
}

export default Header;



//Link 
// (smooth transitions)
// Full page reload	nahi karta
// Fast, client-side navigation