import Image from 'next/image'
import React from 'react'
import { RxCross2 } from "react-icons/rx";

const UploadPreview = ({file, removeFile}) => {
    // console.log(file);
  if (!file || typeof file.size !== "number") return null;  //improvised
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between mt-5 border rounded-lg p-4 gap-4 sm:gap-2 max-w-full sm:max-w-xl mx-auto'>

        <div className='flex items-center overflow-hidden w-full'>
        <Image src={"/file-color-icon.png"} width={40} height={40} alt='file'/>

        <div className='text-left overflow-hidden w-full'>
            <h2>{file.name}</h2>
            <h2 className='text-[14px] text-gray-400'>{file?.type} , {(file.size/1024/1024).toFixed(2)} MB</h2>
            <h2></h2>
        </div>

        <RxCross2  size={24}  color='red' onClick={removeFile} className='cursor-pointer shrink-0'/>
    </div>
    </div>
  )
}

export default UploadPreview