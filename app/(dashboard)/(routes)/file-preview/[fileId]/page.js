'use client';
import { app } from '../../../../../firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import FileInfo from './_components/FileInfo';
import FileShareForm from './_components/FileShareForm';
import { FaLongArrowAltLeft } from "react-icons/fa";
import Link from 'next/link';
const filePreview = ({params}) => {   //for fetching the params
  const [File, setFile] = useState();
  const db = getFirestore(app);
  useEffect(()=>{                       //  , then for getting userdata
      // console.log(params?.fileId);
     params?.fileId && getData();  //call the get function if have id
    },[])

    const getData = async()=>{
      const docRef = doc(db, "UploadedFile", params?.fileId);     //doc(db, collectionName, docId) 
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
      }else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      }
      
    }
    

  return (
    <div className="py-6 px-4 md:px-20 ">
      
      <Link href="/upload" className="inline-flex items-center  hover:underline mb-6">
        <FaLongArrowAltLeft className= "mr-2" />
        Go to upload
      </Link>
      <div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-dashed border-gray-400 rounded-xl p-6">
        <FileInfo File ={File}/>
        <FileShareForm File = {File}/>
      </div>
    </div>
  )
}

export default filePreview