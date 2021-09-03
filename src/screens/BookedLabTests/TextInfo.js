import React from 'react';
import { BadgeCheckIcon, BeakerIcon, ClipboardListIcon, EmojiHappyIcon } from '@heroicons/react/outline';

// 1st day task
// 31 August,2021

const TextInfo = () => {
    return (
        <div className='mt-5'>
            <div className='p-1 text-gray-600 text-base'>
                <div className='flex py-2'>
                    <BadgeCheckIcon className='w-7 h-7' />
                    <p className='pl-4'> 100+ Certified Labs</p>
                </div>
                <div className='flex py-2'>
                    <EmojiHappyIcon className='w-7 h-7' />
                    <p className='pl-4'>10000 Happy Customers</p>
                </div>
                <div className='flex py-2'>
                    <BeakerIcon className='w-7 h-7' />
                    <p className='pl-4'>Free Sample Collection</p>
                </div>
                <div className='flex py-2'>
                    <ClipboardListIcon className='w-7 h-7' />
                    <p className='pl-4'>Accurate Reports</p>
                </div>
            </div>
        </div>
    );
};

export default TextInfo;