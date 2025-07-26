'use client';

import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">

      {/* Image (visible on all screens, stacks on top on small screens) */}
      <div
        className="w-full h-48 lg:h-auto bg-cover lg:w-1/2" // Added h-48 for small screen image height
        style={{ backgroundImage: "url('/mirror.jpg')" }}
      ></div>

      {/* SignIn form */}
      <div className="w-full p-8 lg:w-1/2 flex items-center justify-center">
        <SignIn />
      </div>

    </div>
  );
}