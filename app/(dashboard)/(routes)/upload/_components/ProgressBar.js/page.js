import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <div className='bg-gray-400 w-full h-5 mt-3 rounded-full'>
        <div className='p-1 bg-blue-500 h-5 rounded-full text-[10px] text-white'
            style={{width:`${progress}%`}}>
            {`${progress.toFixed(0)}%`}
        </div>
    </div>
  )
}

export default ProgressBar