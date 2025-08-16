import React from 'react'

const Support = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-400 mb-2">
          Buy Me a Coffee ☕
        </h1>
        <p className="text-gray-600 mb-6">
          If you enjoy my work, support me by buying a coffee!
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <img
            src="/PP2.png" 
            alt="PhonePe QR"
            className="w-48 h-48 rounded-lg shadow-md border-2 border-blue-200"
          />
        </div>

        {/* Instruction */}
        <p className="text-gray-700 mb-6">
          Scan the QR code with <span className="font-semibold">Any UPI</span> to send your support
        </p>

        {/* Thank You Box */}
        <div className="bg-blue-100 p-4 rounded-xl border border-blue-300 shadow-sm">
          <p className=" font-medium">
            Thank you for keeping me caffeinated! 💛
          </p>
        </div>
      </div>
    </div>
  );
}

export default Support