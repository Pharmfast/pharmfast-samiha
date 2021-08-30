import React, { useEffect } from 'react'
import Header from '../components/Header';
import { v4 as uuid } from "uuid";
import { storage } from "../firebase";
import { useDispatch } from 'react-redux';
import { setPrescriptionImage } from "../features/prescriptionSlice";
import { useState } from 'react';

function UploadPrescription() {
    const [image, setImage] = useState('');
    const dispatch = useDispatch();

    {/*useEffect(() => {
        dispatch(setPrescriptionImage(image));
    },[image]);*/}

    const sendPrescription = () => {
        if(image == null)
            return;
        storage.ref(`/prescription/${image.name}`).put(image)
        .on("state_changed", alert("Prescription Uploaded"), alert);
    }
    return (
        <div>
            <Header/>
            <h1 className="text-xl m-7 mb-0 font-bold text-gray-500 xl:text-2xl xl:m-14 xl:ml-64 xl:mb-0">Upload Prescription</h1>
            <div className="m-7 mt-0 flex-col xl:flex xl:justify-between xl:m-56 xl:mt-10 xl:mb-0 xl:items-center">
                <img className="ml-10 xl:ml-0 xl:h-96" src="https://assets.pharmeasy.in/web-assets/dist/af992e41.svg" alt="" />
                <div className="xl:flex-col mt-5 xl:mt-0">
                    <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                        <div className="absolute">
                            <div className="flex flex-col items-center "> 
                                <span className="block text-gray-400 font-normal">Attach you files here</span> 
                                <span className="block text-gray-400 font-normal">or</span> 
                                <span className="block text-red-400 font-normal">Browse files</span> 
                            </div>
                        </div> 
                        <input 
                        type="file" 
                        className="h-full w-full opacity-0" 
                        name=""
                        onChange={(e) =>{setImage(e.target.files[0])}} 
                        />
                    </div>
                    <div className="mt-3 text-center pb-3"> 
                        <button onClick={sendPrescription} className="w-full h-12 text-lg bg-red-600 rounded text-white hover:bg-red-500">Create</button> 
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default UploadPrescription
