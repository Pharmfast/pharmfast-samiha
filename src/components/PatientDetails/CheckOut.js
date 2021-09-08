import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckOut = () => {

    // const [btnClr, setBtnClr] = useState(false);
    return (
        <div className=''>
            <Link to='/select-patient-details'>
                {/* {
                btnClr === false ?
                    <button className='border-2 border-red-400 bg-red-500' type='button' disabled={false}>Click me</button>
                    :
                    <button className='border-2 border-red-400 bf-gray-500' type='button' disabled={true}>Click me</button>

            } */}
                <button className='bg-red-600 text-white font-bold px-5 py-2 rounded m-3'>Select Patient Details</button>
            </Link>
        </div>
    );
};

export default CheckOut;