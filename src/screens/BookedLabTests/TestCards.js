import React from 'react';
import TestCard from './TestCard';
import TextInfo from './TextInfo';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 1st day task
// 31 August,2021

const TestCards = () => {

    const settings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]  
    }

    return (
        <div className='pt-5'>
            <Slider {...settings}>
                <div>
                    <TextInfo />
                </div>
                <div>
                    <TestCard
                        percentage={'47%'}
                        title={'CBC (Complete Blood Count)'}
                        labs={'4'}
                        tests={''}
                        cost={'199'}
                    />
                </div>
                <div>
                    <TestCard
                        percentage={'47%'}
                        title={'Hba1C (Glycosylated hemoglob)'}
                        labs={'4'}
                        tests={''}
                        cost={'265'}
                    />
                </div>
                <div>
                    <TestCard
                        percentage={'67%'}
                        title={'Thyroid Profile - Total(T3, T4 & ...'}
                        labs={'4'}
                        tests={'Includes 3 tests'}
                        cost={'199'}
                    />
                </div>
                <div>
                    <TestCard
                        percentage={''}
                        title={'COVID ANTIBODY TEST'}
                        labs={'1'}
                        tests={''}
                        cost={'549'}
                    />
                </div>
                <div>
                    <TestCard
                        percentage={'50%'}
                        title={'CRP (Quantitative)'}
                        labs={'4'}
                        tests={''}
                        cost={'355'}
                    />
                </div>
                <div>
                    <TestCard
                        percentage={'50%'}
                        title={'Creatinine'}
                        labs={'3'}
                        tests={''}
                        cost={'175'}
                    />
                </div>
                <div>
                    <TestCard
                        percentage={'46%'}
                        title={'Lipid Profile'}
                        labs={'4'}
                        tests={'Includes 6 tests'}
                        cost={'375'}
                    />
                </div>
                <div>
                    <TestCard
                        percentage={'54%'}
                        title={'TSH'}
                        labs={'4'}
                        tests={''}
                        cost={'160'}
                    />
                </div>
            </Slider>
        </div>
    );
};

export default TestCards;