import React from 'react';
import { CurrencyRupeeIcon } from '@heroicons/react/solid';

const SearchPackage = ({ title, labs, cost, prevCost, discount }) => {
    return (
        <div className='m-2 p-3 border-2 border-gray-100 rounded max-w-sm'>
            <div>
                <img className='w-8 h-8' src="https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg" alt="" />
            </div>
            <div className='pt-2 my-3 h-24'>
                <h1 className='text-gray-600 font-bold sm:text-lg'>{title}</h1>
                <p className='line-clamp-1 text-sm mb-2 text-gray-600 font-semibold'>{labs}</p>
            </div>
            <div className='flex flex-row sm:items-center sm:my-3'>
                <span className='text-base text-gray-600 font-semibold sm:font-bold'>
                    <CurrencyRupeeIcon className='inline h-5 w-5' />
                    {cost}
                </span>
                <span className='text-sm pl-1 sm:pl-2 text-gray-500 line-through'>
                    <CurrencyRupeeIcon className='inline h-4 w-4' />
                    {prevCost}
                </span>
                <span className='text-xs pl-1 sm:pl-2 text-red-500'>
                    {discount}
                </span>
            </div>
        </div>
    );
};

export default SearchPackage;