import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddPatientDetail = (props) => {

    const [detailsAdded, setAddDetails] = useState(true);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        setAddDetails(false);
        console.log(data);
    };

    return (
        <div className='m-10'>
            <h1 className='font-bold md:text-lg text-gray-700 pb-3'>Add Patient Detail</h1>
            <hr />
            <form className='text-gray-700 mt-3' onSubmit={handleSubmit(onSubmit)}>
                <label>Full Name</label>
                <br />
                <input className='mt-3 p-2 text-lg outline-none rounded w-full border-2 border-gray-400' placeholder='e.g. Thor Odison' {...register("patientName", { required: true })} />
                {errors.patientName && <span className='text-xs text-red-600'>Patient name is required</span>}
                <br />
                <div className='flex flex-col md:flex-row md:mt-3'>
                    <div className='mr-0 md:mr-4 mt-3 md:mt-0'>
                        <label>Age</label>
                        <input className='mt-3 p-2 text-lg outline-none rounded w-full border-2 border-gray-400' type='number' placeholder='e.g 45' {...register("patientAge", { required: true })} />
                        {errors.patientAge && <span className='text-xs text-red-600'>Age is required</span>}
                    </div>
                    <div className='mt-3 md:mt-0'>
                        <label>Gender</label>
                        <select className='mt-3 p-2 text-lg outline-none rounded w-full border-2 border-gray-400' >
                            <option value="null">select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">others</option>
                        </select>
                    </div>
                </div>
                <button onClick={() => props.detailsInfo(detailsAdded)} type="submit" className='bg-red-600 w-full p-2 mt-5 text-white rounded'>
                    Add
                </button>
                {
                    detailsAdded === true ?
                        <span></span>
                        :
                        <div className='text-red-600 mt-4 text-xs text-center'>
                            information added
                        </div>
                }
            </form>
        </div>
    );
};

export default AddPatientDetail;