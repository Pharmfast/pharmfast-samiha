import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner({banner1, banner2, banner3, banner4}) {
    return (
        <div className="relative z-0">
            <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            >
                <div>
                    <img loading="lazy" src={banner1} alt=""/>
                </div>

                <div>
                    <img loading="lazy" src={banner2} alt=""/>
                </div>

                <div>
                    <img loading="lazy" src={banner3} alt=""/>
                </div>

                <div>
                    <img loading="lazy" src={banner4} alt=""/>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
