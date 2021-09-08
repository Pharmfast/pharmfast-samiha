import React from 'react';

const PartnerLab = ({ images, title, subTitle }) => {
    console.log(title);
    console.log('hello')
    return (
        <div className='m-2 p-3 border-2 border-gray-100 rounded max-w-sm'>
            <div>
                <img className='w-12 h-12' src={images} alt="" />
            </div>
            <div className='pt-2 my-3 h-16'>
                <h1 className='text-gray-600 font-bold sm:text-lg'>{title}</h1>
            </div>
            <div className=' text-gray-500 text-xs sm:my-3'>
                <p>{subTitle}</p>
            </div>
        </div>
    );
};

export default PartnerLab;