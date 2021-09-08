import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddPatientAddress = (props) => {

    const [addressAdded, setAddressAdded] = useState(true);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        setAddressAdded(false);
        console.log(data);
    };

    return (
        <div className='mx-10 my-6'>
            <h1 className='font-bold md:text-lg text-gray-700 pb-3'>Add Patient Address</h1>
            <hr />
            <form className='text-gray-700' onSubmit={handleSubmit(onSubmit)}>
                <div className='overflow-auto h-96 px-1'>
                    <div className='mt-3'>
                        <label>Contact Name</label>
                        <br />
                        <input className='mt-3 p-1 text-lg outline-none rounded w-full border-2 border-gray-400' placeholder='e.g. Thor Odison' {...register("contactName", { required: true })} />
                        {errors.contactName && <span className='text-xs text-red-600'>Contact name is required</span>}
                        <br />
                    </div>
                    <div className='mt-3'>
                        <label>Building Name and Flat Number</label>
                        <br />
                        <input className='mt-3 p-1 text-lg outline-none rounded w-full border-2 border-gray-400' placeholder='e.g. Kohinoor Business Park' {...register("patientBuilding", { required: true })} />
                        {errors.patientBuilding && <span className='text-xs text-red-600'>building name is required</span>}
                        <br />
                    </div>
                    <div className='mt-3'>
                        <label>Street Name</label>
                        <br />
                        <input className='mt-3 p-1 text-lg outline-none rounded w-full border-2 border-gray-400' placeholder='e.g. Dummy Text' {...register("streetName", { required: true })} />
                        {errors.streetName && <span className='text-xs text-red-600'>street name is required</span>}
                        <br />
                    </div>
                    <div className='mt-3'>
                        <label>Pin Code</label>
                        <br />
                        <input className='mt-3 p-1 text-lg outline-none rounded w-full border-2 border-gray-400' placeholder='e.g. 400072' {...register("pinCode", { required: true })} />
                        {errors.pinCode && <span className='text-xs text-red-600'>pin code is required</span>}
                        <br />
                    </div>
                    <div className='mt-3'>
                        <label>Mobile Number</label>
                        <br />
                        <input className='mt-3 p-1 text-lg outline-none rounded w-full border-2 border-gray-400' type='number' placeholder='e.g. 91234256789' {...register("phnNo", { required: true })} />
                        {errors.phnNo && <span className='text-xs text-red-600'>mobile number is required</span>}
                        <br />
                    </div>
                    <div className='mt-3'>
                        <label>Address Type</label>
                        <br />
                        <select className='mt-3 p-1 text-lg outline-none rounded w-full border-2 border-gray-400' name="addressType">
                            <option value="null">select type</option>
                            <option value="home">Home</option>
                            <option value="work">Work</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                </div>
                <button onClick={() => props.addressInfo(addressAdded)} type="submit" className='bg-red-600 w-full p-2 mt-8 text-white rounded'>
                    Add Address
                </button>
                {
                    addressAdded === true ?
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

export default AddPatientAddress;