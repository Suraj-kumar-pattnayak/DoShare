'use client'; // for client side navigation for Link
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <div>
      <header class="bg-white">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 border-b">
<Image src='/logo.svg'height={50} width={100}/>
    
    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-md">
          <li>
            <Link href="/" className="text-gray-500 transition hover:text-gray-500/75">Home</Link>  
          </li>
            
          <li>
            <Link href="/upload" className='text-gray-500 transition hover:text-gray-500/75'>Upload</Link>
          </li>

          <li>
            <Link href="/" className="text-gray-500 transition hover:text-gray-500/75">About Us</Link>
          </li>

          <li>
            <Link href="/" className="text-gray-500 transition hover:text-gray-500/75">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <Link
            className="block rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-400"
            href="/files"
          >
            Get Started
          </Link>
        </div>

        <button
          className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
 </header>         {/* HyperUi */}
</div>
  )
}

export default Header


//Link 
// (smooth transitions)
// Full page reload	nahi karta
// Fast, client-side navigation