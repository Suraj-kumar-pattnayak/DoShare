'use client';

import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

export default function TopHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#0D1520]  px-4 py-3 flex items-center justify-between shadow-sm border-b border-gray-800">
      {/* Logo */}
      <div className="flex items-center gap-2  min-w-0">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={64}
          height={32}
          className="object-contain"
        />
        <span className="text-white font-semibold text-lg">FileShare</span>
      </div>

      {/* Spacer in center (optional space for search, title etc) */}
      <div className="flex-1" />

      {/* User profile */}
      <div className="flex items-center">
        <UserButton/>
      </div>
    </header>
  );
}
