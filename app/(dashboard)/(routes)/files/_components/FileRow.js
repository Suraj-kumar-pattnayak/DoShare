// files/_components/FileRow.js
import React from 'react';
import { FaFileAlt, FaImage, FaFilePdf, FaFileWord, FaFileExcel, FaFileArchive } from 'react-icons/fa'; //6 to remove from github
import { IoEyeOutline } from "react-icons/io5"; // For the View button icon

const getFileIcon = (fileType) => {
  if (!fileType) return <FaFileAlt />;
  if (fileType.includes('image')) return <FaImage />;
  if (fileType.includes('pdf')) return <FaFilePdf />;
  if (fileType.includes('word') || fileType.includes('document')) return <FaFileWord />;
  if (fileType.includes('excel') || fileType.includes('spreadsheet')) return <FaFileExcel />;
  if (fileType.includes('zip') || fileType.includes('rar')) return <FaFileArchive />;
  return <FaFileAlt />;   //what is the issue
};

const FileRow = ({ file, onView }) => {
  // Convert file size from bytes to appropriate units
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="grid grid-cols-5 items-center p-4 hover:bg-gray-50 transition-colors duration-200">
      {/* File Name */}
      <div className="col-span-2 flex items-center gap-3">
        <div className="text-xl text-blue-500">
          {getFileIcon(file.fileType)}
        </div>
        <span className="font-medium text-gray-800 break-all">{file.fileName}</span> {/* break-all for long names */}
      </div>

      {/* File Type */}
      <div className="col-span-1 text-center text-sm text-gray-600">
        {file.fileType}
      </div>

      {/* File Size */}
      <div className="col-span-1 text-center text-sm text-gray-600">
        {formatFileSize(file.fileSize)}
      </div>

      {/* Action (View Button) */}
      <div className="col-span-1 text-center">
        <button
          onClick={() => onView(file)}
          className="flex items-center justify-center mx-auto gap-1 px-3 py-1 bg-blue-500 text-white rounded-md text-xs hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <IoEyeOutline className="text-base" /> View
        </button>
      </div>
    </div>
  );
};

export default FileRow;