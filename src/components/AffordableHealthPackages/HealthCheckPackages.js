import React from 'react';
import Header from '../Header';
import AffordablePackage from './AffordablePackage';

// 1 September,2021
//  2nd day task
const HealthCheckPackages = () => {

    const affordablePackages = [
        {
            title: 'Advanced Full Body Checkup',
            test: '71',
            cost: '949',
            prevCost: '2,550',
            discount: '63%'
        }
    ]

    return (
        <div>
            <Header />

            <div className='container mx-auto box-border'>
                <div>
                    <h1 className='text-center md:text-left mt-10 sm:pl-10 text-lg md:text-3xl text-gray-600 font-bold'>
                        Affordable Packages
                    </h1>
                </div>
                <div className='md:pl-5 mb-24 md:mb-10 mt-5 max-w-prose'>
                    {
                        affordablePackages.map((packageInfo, index) =>
                            <AffordablePackage
                                key={index}
                                title={packageInfo.title}
                                test={packageInfo.test}
                                cost={packageInfo.cost}
                                prevCost={packageInfo.prevCost}
                                discount={packageInfo.discount}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HealthCheckPackages;