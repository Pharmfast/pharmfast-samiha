import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import AddPatientAddress from './AddPatientAddress';
import AddPatientDetail from './AddPatientDetail';

const PatientDetails = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [address, setAddress] = useState(false);
    const toggleDrawer = (optionSelect) => {
        setIsOpen((prevState) => !prevState)
        setAddress(optionSelect);
    }

    const [disableBtn, setDisableBtn] = useState(true);

    const [addressAdd, setAddressAdd] = useState(false);
    console.log('address add : ', addressAdd);
    const [details, setDetails] = useState(false);
    console.log('detail: ', details);

    return (
        <div>
            <header className='flex justify-between items-center bg-red-600 h-auto px-20 py-5'>
                <div>
                    <img className='w-36 h-10' src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="" />
                </div>
                <div>
                    <h1 className='text-white font-semibold'>
                        100<span>&#37;</span> Secure Payments</h1>
                </div>
            </header>
            <div className='flex md:justify-between'>
                <div></div>
                <div>
                    <div className='m-5 p-3'>
                        <div className='bg-gray-100 m-5 px-2 py-4 rounded'>
                            <div className='mx-2 my-4'>
                                <h1 className='text-sm font-semibold text-gray-700'>Booking for</h1>
                                <button onClick={() => toggleDrawer(false)} className='bg-white px-24 py-4 my-2 rounded text-red-600 text-sm'>
                                    Select Patient
                                </button>
                            </div>
                            <div className='mx-2 my-4'>
                                <h1 className='text-sm font-semibold text-gray-700'>Sample Pickup from</h1>
                                <button onClick={() => { toggleDrawer(true) }} className='bg-white px-24 py-4 my-2 rounded text-red-600 text-sm'>
                                    Select Address
                                </button>
                            </div>
                        </div>
                        <div className='mx-5'>
                            {
                                addressAdd === false || details === false ?

                                    <button disabled={true} className='px-16 text-white bg-gray-500 py-2 font-bold rounded'>
                                        Select Appointment Time
                                    </button>
                                    :
                                    <button disabled={false} className='px-16 text-white bg-red-600 py-2 font-bold rounded'>
                                        Select Appointment Time
                                    </button>
                            }
                        </div>
                    </div>

                    <Drawer size={400} open={isOpen} onClose={toggleDrawer} direction='right'>
                        <div>
                            <button className='text-gray-500 text-3xl p-2' onClick={toggleDrawer}>X</button>

                            {
                                address === false ?
                                    <AddPatientDetail detailsInfo={info => setDetails(info)} />
                                    :
                                    <AddPatientAddress addressInfo={info => setAddressAdd(info)} />
                            }
                        </div>
                    </Drawer>
                </div>
            </div>
        </div>
    );
};

export default PatientDetails;