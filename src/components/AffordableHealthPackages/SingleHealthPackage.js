import { CurrencyRupeeIcon } from '@heroicons/react/solid';
import React from 'react';

// 1 September,2021
//  2nd day task

const SingleHealthPackage = ({ title, tests, cost, previousCost, discount }) => {
    console.log(title);
    return (
        <div className='bg-white border-2 border-gray-300 hover:border-red-600 rounded-md mr-2 p-5 box-border'>
            <div>
                <img className='w-8 h-8' src="https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg" alt="" />
            </div>
            <div className='pt-2 my-3'>
                <h1 className='text-gray-600 font-bold sm:text-lg'>
                    {title}
                </h1>
                <div className='my-3'>
                    <p className='text-sm mb-2 text-gray-600 font-semibold'>
                        By LabForAll
                    </p>
                    <p className='text-xs text-gray-500'>
                        Includes {tests} tests
                    </p>
                </div>
            </div>
            <div className='flex  flex-col sm:flex-row sm:items-center sm:my-3'>
                <span className='text-base text-gray-600 font-semibold sm:font-bold'>
                    <CurrencyRupeeIcon className='inline h-5 w-5' />
                    {cost}
                </span>
                <span className='text-sm sm:pl-2 text-gray-500 line-through'>
                    <CurrencyRupeeIcon className='inline h-4 w-4' />
                    {previousCost}
                </span>
                <span className='text-xs sm:pl-2 text-red-500'>
                    save {discount}
                </span>
            </div>
        </div>
    );
};

export default SingleHealthPackage;