import { CurrencyRupeeIcon } from '@heroicons/react/solid';
import React from 'react';

// 1 September,2021
//  2nd day task

const AffordablePackage = ({ title, test, cost, prevCost, discount }) => {
    return (
        <div className='flex flex-col md:flex-row border-2 border-gray-200 hover:border-red-600 rounded-md mx-5 p-2'>
            <div className='flex justify-center p-3'>
                <img className='w-10 h-10' src="https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg" alt="" />
            </div>
            <div className='text-center sm:text-left mx-1'>
                <h1 className='text-lg sm:text-xl text-gray-600 font-bold my-1'>
                    {title}
                </h1>
                <p className='text-gray-500 mb-6'>
                    By PharmEasy Labs
                </p>
                <div className='flex flex-col sm:flex-row justify-center md:justify-between bg-red-50 my-2 p-2 text-red-600 text-sm'>
                    <p>Includes {test} tests</p> <br />
                    <button className='outline-none'>show all</button>
                </div>
                <div className='flex justify-center sm:justify-start my-3 pt-2'>
                    <span className='text-base text-gray-600 font-semibold'>
                        <CurrencyRupeeIcon className='w-5 h-5 inline' />
                        {cost}
                    </span>
                    <span className='text-sm text-gray-500 line-through pl-1'>
                        <CurrencyRupeeIcon className='w-4 h-4 inline' />
                        {prevCost}
                    </span>
                    <span className='text-xs pl-2 text-red-600'>
                        save {discount}
                    </span>
                </div>
            </div>
            <div className='flex justify-center mx-1 md:mt-5'>
                <button className='my-5 md:mt-24 bg-red-500 px-12 md:px-8 py-2 rounded text-white text-base font-bold'>
                    Select
                </button>
            </div>
        </div>
    );
};

export default AffordablePackage;