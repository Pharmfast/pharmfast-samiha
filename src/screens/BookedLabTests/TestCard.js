import { ChevronRightIcon } from '@heroicons/react/outline';
import { CurrencyRupeeIcon } from '@heroicons/react/solid';
import React from 'react';

// 1st day task
// 31 August,2021

const TestCard = ({ percentage, title, labs, tests, cost }) => {
    return (
        <div className='cursor-pointer border-2 border-gray-300 hover:border-red-600 rounded-lg bg-white mb-10 sm:my-1 mr-4 w-auto'>
            <div className='grid justify-items-end text-white'>
                <p className='rounded-none pl-4 p-2 bg-blue-300 font-bold'>
                    SAVE {percentage}
                </p>
            </div>
            <img className='pl-5 h-16 w-24' src="https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg" alt="" />
            <div className='p-5'>
                <h1 className='font-semibold text-gray-600'>
                    {title}
                </h1>
                <div className='my-3'>
                    <p className='text-gray-500 text-sm'>
                        Available at {labs} certified labs
                    </p>
                    <p className='text-gray-400'>
                        <small>{tests}</small>
                    </p>
                </div>
            </div>
            <div className='flex justify-between mb-5'>
                <p className='inline pl-5 py-2 font-bold text-gray-600'>
                    <CurrencyRupeeIcon className='h-5 w-5 inline text-gray-600' />
                    {cost}
                    <span className='font-extralight text-gray-600 pl-2'>onwords</span>
                </p>
                <button className='text-red-600 font-bold p-2 rounded-l-md hover:bg-red-600 hover:text-white'>
                    Book Now <ChevronRightIcon className='h-4 w-4 inline' />
                </button>
            </div>
        </div>
    );
};

export default TestCard;