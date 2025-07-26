'use client';
import React, { useEffect, useState } from 'react'
// import { SlCloudUpload } from "react-icons/sl";
import { ToastContainer, toast } from 'react-toastify';
import UploadPreview from '../UploadPreview/page';
import ProgressBar from '../ProgressBar.js/page';

const UploadForm = ({UploadBtnClicked, progress}) => {

useEffect(()=>{
    if(progress === 100) setFile(null);
  }, [progress])

const [file , setFile] = useState(null);
const onSelectFile = (file)=>{
    if(file){
        if (file.size > 2 * 1024 * 1024) {
        toast.error("File too large! Max 2MB allowed.");
        return;
    } 
    } 
   setFile(file) 
};


const handleDragOver = (e) => {
  e.preventDefault();
};

const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    onSelectFile(e.dataTransfer.files[0]);
  }
};

  return (      
<div className="px-4 sm:px-6 lg:px-8 w-full">

    <ToastContainer 
    position='top-center'/>
<div className="flex items-center justify-center w-full">
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center  px-10 py-6 max-w-xl border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 "
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to Upload</span> or <strong className='text-blue-500'>Drag</strong> and <strong className='text-blue-500'>Drop</strong></p>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (Max Size : 2MB)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden w-full" onChange={(e)=> onSelectFile(e.target.files[0])}/>
    </label> 
</div> 
<div className='mt-2'>
    {file || progress !== 100 ? (<UploadPreview file={file} removeFile={()=> setFile(null)}/> ): null} 
</div>
<div className='flex justify-center mt-4 px-2'>
<button disabled ={!file}
        onClick={() => UploadBtnClicked(file)}
        type="button"
        className={`group relative inline-block text-sm font-medium text-blue-600 focus:ring-3 focus:outline-none ${!file ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <span
          className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-blue-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
        ></span>
        <span className="relative block border border-current bg-white px-8 py-3">
          Upload
        </span>
      </button>
      
</div>
  <div className='text-center'>
  {progress>0?<ProgressBar
    progress={progress}
  />:null}
    </div>
</div>
  );
}

export default UploadForm