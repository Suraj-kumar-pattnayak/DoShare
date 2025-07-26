'use client'
import React, { useEffect, useState } from 'react'
import { doc, updateDoc, getFirestore } from 'firebase/firestore'
import { IoCopyOutline } from 'react-icons/io5'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { app } from '../../../../../../firebaseConfig'
import httpsAxios from '../../../../../_utils/httpAxios';
// import { useUser } from '@clerk/nextjs';
 
const FileShareForm = ({ File }) => {
  const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const db = getFirestore(app);
// const { user, isLoaded, isSignedIn } = useUser();

//   console.log("USER:", user);

  const handleSave = async () => {   //update feature from firebase    //password save
    if (!File?.id) return;
    const docRef = doc(db, "UploadedFile", File.id);
    await updateDoc(docRef, {
      password: isPasswordEnabled ? password : ""
    });
    toast.success("Password updated!", {
    position: "top-center",
    autoClose: 2500,
    transition: Bounce,
    });
  };

const handleCopy = () => {   // url copy   
  navigator.clipboard.writeText(File?.fileUrl);  
  toast.success('Link Copied !!!', {
    position: "top-center",
    autoClose: 2500,
    transition: Bounce,
  });
};


  const sendEmail = async() => {
    if (!email) return toast.error("Enter an email", {
    position: "top-center",
    autoClose: 2500,
    transition: Bounce,
    });
    // Implement your backend/API mail logic here
    // alert(`Mock email sent to ${email}`);
    const data = {
      emailToSend : email,
      // userName : user?.fullName,     // this is data from
      fileName : File?.fileName,
      fileSize : File?.fileSize,
      fileType : File?.fileType,
      shortUrl : File?.shortUrl,
      fileUrl : File?.fileUrl
    }
    try {
    const resp = await httpsAxios.SENDEMAIL(data);
        toast.success("Email sent successfully!", {
        position: "top-center",
        autoClose: 2500,
        transition: Bounce,
      });
      
  } catch (error) {
    console.error("Email error:", error);
    toast.error("Something went wrong while sending the email", {
      position: "top-center",
      autoClose: 2500,
      transition: Bounce,
    });
  }
  };

  return (
    
    <div className='pl-10'>
      <ToastContainer />
      <label className='text-gray-500 text-sm'>Short Url</label>
      <div className='flex items-center gap-2 mb-4'>
        <input type='text' value={File?.fileUrl || File?.shortUrl} readOnly className='w-full border p-2 rounded-md' />
        <button onClick={handleCopy} className='text-xl text-gray-600'><IoCopyOutline /></button>
      </div>

      <div className='flex items-center gap-2 mb-4'>
        <input type='checkbox' checked={isPasswordEnabled} onChange={e => setIsPasswordEnabled(e.target.checked)} />
        <label>Enable Password?</label>
      </div>

      {isPasswordEnabled && (
        <div className='mb-4 flex gap-2'>
          <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} className='border p-2 rounded-md w-full' />
          <button onClick={handleSave} className='bg-blue-500 text-white px-4 rounded-md'>Save</button>
        </div>
      )}

      <label className='text-gray-500 text-sm'>Send File to Email</label>
      <input type='email' placeholder='example@gmail.com' value={email} onChange={e => setEmail(e.target.value)} className='border p-2 rounded-md w-full mb-2' />
      <button onClick={sendEmail} className='bg-blue-600 text-white w-full p-2 rounded-md'>Send Email</button>
    </div>
  )
}

export default FileShareForm
