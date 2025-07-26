import React, { useState } from 'react';
import { IoMdDownload } from 'react-icons/io';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FileItem = ({ File }) => {

    const [passwordInput, setPasswordInput] = useState('');

   const  isDownloadButtonEnabled = ()=>{
        if(File?.password){
            // If a password is set, button is enabled only if passwordInput is not empty
            return passwordInput === File.password;
        }
        // If no password is set, button is always enabled
        return true;
    }

    const handleDownload = ()=>{
        if(File?.password){
            if(File?.password === passwordInput){
                // toast.success("Password matched! Initiating download",{
                // position: "top-center",
                // autoClose: 100,
                // theme: "light",
                // transition: Bounce,
                // });
                window.open(File?.fileUrl);  // opens the file in window
            }

            // return window.open(File?.fileUrl);  confused   
        }
        else window.open(File?.fileUrl);  // no pass required in case of not set
    }



  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-[90%] max-w-md text-center">
        <ToastContainer />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        <span className="text-blue-600 font-bold">{File?.userName|| "Someone"}</span> Shared a file with You
      </h2>
      <p className="text-sm text-gray-500 mb-6">Find File details below</p>

      <div className="text-5xl mb-6">
        <IoMdDownload className="mx-auto text-blue-600" />
      </div>

      <p className="text-gray-700 font-medium">
        File Name ⚡ {File?.fileName} ⚡ {((File?.fileSize) / 1024 / 1024).toFixed(2)}MB
      </p>

      {File?.password &&(    //only show this inp , if any pass set
        <>
        <input
        type="text"
        placeholder="Enter password to access"
        className="mt-6 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
        value={passwordInput}
        onChange={(e)=>{
            setPasswordInput(e.target.value);
        }}
      />
        </>
      )}

      <button
        className={`mt-4 w-full py-2 flex justify-center items-center gap-2 rounded transition-all duration-200 ${
                    isDownloadButtonEnabled()
                        ? 'bg-blue-600 text-white cursor-pointer hover:bg-blue-700'
                        : 'bg-gray-400 text-white cursor-not-allowed'
                }`}
        disabled={File?.password !== passwordInput}
        onClick={handleDownload}
      >
        <IoMdDownload /> Download
      </button>

      <p className="text-xs text-gray-500 mt-3">*Term and Condition apply</p>
    </div>
  );
};

export default FileItem;
