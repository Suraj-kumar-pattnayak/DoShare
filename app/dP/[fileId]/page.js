'use client';
import React, { useEffect, useState } from 'react'
//dP => downloadPreviw
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import app from '../../../firebaseConfig';
import FileItem from '../[fileId]/_component/FileItem'

const downloadPreview = ({params}) => {
    const db = getFirestore(app);
    const [File, setFile] = useState();

    useEffect(()=>{
        params?.fileId && getData();    
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
    <div className='bg-gray-500 h-screen w-full flex justify-center items-center flex-col gap-4'>
            <FileItem File = {File}/>
    </div>
  )
}

export default downloadPreview