import React from 'react';
import PartnerLab from './PartnerLab';

const PartnerLabs = () => {

    const allPartnerLabs = [
        {
            image: 'https://cdn01.pharmeasy.in/dam/diagnostics/mce/48cc8a22cc6932698b86be1849acf628.png',
            title: 'PharmEasy Labs',
            subTitle: 'Certified'
        },
        {
            image: 'https://cdn01.pharmeasy.in/dam/diagnostics/mce/e24cc996bf8f3cb48d084a04d041df24.jpg',
            title: 'Thyrocare (Covid RTPCR)',
            subTitle: 'NABL, CAP Certified'
        }
    ]

    return (
        <div className='flex flex-col sm:flex-row items-center sm:justify-start ml-0 sm:ml-12 lg:ml-16 my-5 text-gray-900 box-border'>
            {
                allPartnerLabs.map((lab, index) =>
                    <PartnerLab
                        key={index}
                        images={lab.image}
                        title={lab.title}
                        subTitle={lab.subTitle}
                    />
                )
            }
        </div>
    );
};

export default PartnerLabs;