'use client'; // client side, bcs of react hooks
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm/page'
import { app } from '../../../../firebaseConfig';
import { getDownloadURL, getStorage , ref, uploadBytesResumable} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { generateString } from './_utils/generateRandomString';
import { useRouter } from 'next/navigation';


const Upload = () => {

  const db = getFirestore(app);
  const storage = getStorage(app);   //FB
  const [progress, setProgress] = useState();
  const {user} = useUser(); //for extracting user detail from clerk
  const router = useRouter();
  const [fileDocId, setfileDocId] = useState();
  const UploadFileData = (file)=>{

  const metadata = {
  contentType: file.type
  };
    const storageRef = ref(storage, 'file-upload/'+file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  uploadTask.on(
  'state_changed',
  (snapshot) => {
    const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setProgress(prog);

  },
  (error) => {
    console.error("Upload error:", error);
  },
  async () => {
    // upload complete
    try {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      await saveInfo(file, downloadURL);
    } catch (err) {
      console.error( err);
    }
  }
);

  }

  const saveInfo = async(file, fileUrl)=>{
    const docId = generateString(); //unique id
    await setDoc(doc(db, "UploadedFile", docId), {     // await setDoc(doc(db, collectionName, docId)
          fileName : file?.name,
          fileSize : file?.size,
          fileType : file?.type,
          fileUrl : fileUrl,
          userEmail : user?.primaryEmailAddress.emailAddress,
          userName : user?.fullName,
          shortUrl : process.env.NEXT_PUBLIC_BASE_URL+'dP/' + docId,      // for routing purpuse when click on email download button
          id : docId,
          password : ""
    });
    setfileDocId(docId);
  }
useEffect(() => {
  if (fileDocId) {
    setTimeout(() => {
      router.push('/file-preview/' + fileDocId);
    }, 2000);
  }
}, fileDocId);
  //in here when id is fetched go to file-preview

  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center mt-5'>Start <strong className="text-blue-500">Uploading</strong> File and 
      <strong className="text-blue-500"> Share</strong> it</h2>
      <UploadForm UploadBtnClicked={(file)=> UploadFileData(file)}
          progress = {progress} 
        />
    </div>
  )
}

export default Upload