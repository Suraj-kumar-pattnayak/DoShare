// files/page.js
'use client';

import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where, orderBy } from 'firebase/firestore';
import app from '../../../../firebaseConfig';
import FileRow from './_components/FileRow';
import { useUser } from '@clerk/nextjs';

const FilesPage = () => {
  const db = getFirestore(app);
  const { user, isLoaded, isSignedIn } = useUser();
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn && user?.primaryEmailAddress?.emailAddress) {
        // Convert user's email to lowercase before querying
        const userEmailForQuery = user.primaryEmailAddress.emailAddress.toLowerCase();
        // console.log("User Email from Clerk (normalized to lowercase):", userEmailForQuery); // Debugging
        getFilesData(userEmailForQuery);
      } else if (!isSignedIn) {
        setLoading(false);
        setError("Please sign in to view your files.");
      } else if (isSignedIn && !user?.primaryEmailAddress?.emailAddress) {
        setLoading(false);
        setError("User email not found. Cannot fetch files.");
      }
    }
  }, [user, isLoaded, isSignedIn]);

  const getFilesData = async (userEmail) => {
    setLoading(true);
    setError(null);
    try {
      const q = query(
        collection(db, "UploadedFile"),
        where("userEmail", "==", userEmail), // This `userEmail` is now already lowercase
        // orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      const files = [];
      querySnapshot.forEach((doc) => {
        files.push({ id: doc.id, ...doc.data() });
      });
      setFileList(files);
      // console.log(`Firestore: Found ${files.length} files for ${userEmail}.`); // Debugging
    } catch (err) {
      console.error("Error fetching files:", err);
      setError("Failed to load files. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleViewFile = (file) => {
    if (file.fileUrl) {
      window.open(file.fileUrl, '_blank');
    } else {
      console.warn("File URL is missing for this file:", file);
      alert("File URL not available.");
    }
  };

  return (
    <div className='bg-gray-50 flex-grow py-6 md:py-8'>
      <div className='px-6 md:px-8 max-w-7xl mx-auto'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-6'>My Files</h2>

        <div className="bg-white rounded-lg shadow-sm p-5 mb-8 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700">Total Files</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{fileList.length}</p>
        </div>

        {loading && <p className="text-center text-blue-600 my-10">Loading your files...</p>}
        {error && <p className="text-center text-red-600 my-10">{error}</p>}
        {!loading && !error && fileList.length === 0 && isSignedIn && (
          <p className="text-center text-gray-500 my-10">No files uploaded yet. Start by uploading one!</p>
        )}
        {!loading && !error && !isSignedIn && (
            <p className="text-center text-gray-500 my-10">Please sign in to see your files.</p>
        )}

        {!loading && !error && fileList.length > 0 && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="grid grid-cols-5 p-4 text-sm font-semibold text-gray-700 bg-gray-100 border-b border-gray-200">
              <div className="col-span-2">File Name</div>
              <div className="col-span-1 text-center">Type</div>
              <div className="col-span-1 text-center">Size</div>
              <div className="col-span-1 text-center">Action</div>
            </div>

            <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {fileList.map((file) => (
              <FileRow key={file.id} file={file} onView={handleViewFile} />
            ))}
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilesPage;