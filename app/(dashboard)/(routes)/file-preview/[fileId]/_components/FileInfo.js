import React from 'react'
import { LuFileText } from "react-icons/lu";

const FileInfo = ({ File }) => {
    const isImage = File?.fileType?.startsWith('image/');  // for images only
  return (
    <div className='border p-4 rounded-xl flex flex-col items-center'>
      {
        isImage ? (
            <img src={File?.fileUrl} alt='Uploaded File' className='h-[200px] object-contain rounded-md' />
        ):(
            <div className='h-[200px] w-full flex items-center justify-center bg-gray-100 rounded-md'>
          <LuFileText className='text-red-500 w-12 h-12'/>
        </div>
        )
      }
      <p className='mt-4 text-center font-semibold'>{File?.fileName}</p>
      <p className='text-sm text-gray-500'>{File?.fileType} / {File?.fileSize}</p>
    </div>
  )
}

export default FileInfo