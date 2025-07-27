'use client';
import React from 'react'
import SideNavbar from './_components/SideNavbar'
import TopHeader from './_components/TopHeader'


const layout = ({ children }) => {
  return (
    <div className="flex flex-col flex-1 overflow-hidden bg-gray-100">
      <TopHeader />
      <div className="flex h-screen overflow-hidden">
        <SideNavbar />
        <main className="flex-1 overflow-y-auto  p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default layout
