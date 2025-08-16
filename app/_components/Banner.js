'use client';
import Link from 'next/link';
import React from 'react';

 const Banner = () => {         // hyperUi
  return (
    // The `flex` and `items-center` on the section ensure vertical centering works well on all screen heights.
    <section className="bg-white lg:h-screen flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid w-full max-w-screen-xl gap-12 md:grid-cols-2 items-center">

        {/* 1. Illustration is now first in the code to appear on top on mobile */}
        {/* 2. Added `md:order-last` to move it to the right on medium screens and up */}
        <div className="flex justify-center items-center md:order-last">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-indigo-100/30 backdrop-blur-md shadow-2xl flex items-center justify-center border border-indigo-300">
            <img
              src="/1037325.png"
              alt="App Logo"
              className="w-fit h-fit object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Text content */}
        {/* 3. Added `text-center md:text-left` for better alignment on mobile */}
        {/* 4. Added `items-center md:items-start` to center content on mobile */}
        <div className="max-w-prose text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl leading-tight">
            <strong className="text-blue-500">Upload, Save </strong>
             and easily <strong className="text-blue-500"> Share </strong> your files in one place.
          </h1>

          <p className="mt-4 text-base text-gray-700 sm:text-lg">
            Drag and Drop your File directly on our cloud and share it with your friends securely with Password and send it on email.
          </p>

          {/* 5. Buttons now stack vertically on mobile (`flex-col`) and switch to a row on small screens (`sm:flex-row`) */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              className="inline-block rounded-lg border border-blue-500 bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-400 shadow-md"
              href="/files"
            >
              Get Started
            </Link>
            <a
              className="inline-block rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100 transition shadow-sm"
              href="/upgrade"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;