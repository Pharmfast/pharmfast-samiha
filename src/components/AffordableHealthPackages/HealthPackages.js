import React from 'react';
import SingleHealthPackage from './SingleHealthPackage';

// 1 September,2021
//  2nd day task

import Carousel from 'react-elastic-carousel';

const HealthPackages = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 425, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1024, itemsToShow: 3 },
        { width: 1440, itemsToShow: 4 }
    ]

    const healthInfo = [
        {
            title: 'Covid-19 Health Checkup (Post Recovery)',
            tests: '61',
            cost: '1,299',
            previousCost: '3,499',
            discount: '63%'
        },
        {
            title: 'Covid-19 Total Antibody (lgG+lgM)',
            tests: '2',
            cost: '850',
            previousCost: '2,490',
            discount: '66%',
        },
        {
            title: "Winter Care Health Checkup",
            tests: '27',
            cost: '799',
            previousCost: '2,490',
            discount: '68%'
        },
        {
            title: 'Comprehensive Full Body Checkup',
            tests: '73',
            cost: '1,009',
            previousCost: '2,990',
            discount: '63%'
        },
        {
            title: 'Preliminary Health Checkup',
            tests: '42',
            cost: '599',
            previousCost: '1,490',
            discount: '60%'
        }
    ]
    
    return (
        <div className='my-5 text-gray-900 box-border'>
            <Carousel breakPoints={breakPoints} >
                {
                    healthInfo.map((info, index) =>
                        <SingleHealthPackage
                            key={index}
                            title={info.title}
                            tests={info.tests}
                            cost={info.cost}
                            previousCost={info.previousCost}
                            discount={info.discount}
                        />
                    )
                }
            </Carousel>
        </div>
    );
};

export default HealthPackages;