import React from 'react';
import SearchPackage from './SearchPackage';
import { CurrencyRupeeIcon } from '@heroicons/react/solid';

const SearchPackages = () => {

    const allSearches = [
        {
            title: 'AEC (Absolute Eosinophil Count)',
            labs: 'Available at PharmEasy Labs',
            cost: '160',
            prevCost: '75',
            discount: 'save 9%'
        },
        {
            title: '17 OH Progesterone',
            labs: 'Available at 1 other lab but not at y',
            cost: '650',
            prevCost: '',
            discount: ''
        }
    ]
    return (
        <div className='flex flex-col sm:flex-row items-center sm:justify-start ml-0 sm:ml-12 lg:ml-16 my-5 text-gray-900 box-border '>
            {
                allSearches.map((search, index) =>
                    <SearchPackage
                        key={index}
                        title={search.title}
                        labs={search.labs}
                        cost={search.cost}
                        prevCost={search.prevCost}
                        discount={search.discount}
                    />)
            }
        </div>
    );
};

export default SearchPackages;