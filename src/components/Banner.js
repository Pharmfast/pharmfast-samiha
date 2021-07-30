import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
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
                    <img loading="lazy" src="https://cms-contents.pharmeasy.in/banner/884efe4f231-20EXTRADWEB.jpg?dim=1440x0&dpr=1&q=100" alt=""/>
                </div>

                <div>
                    <img loading="lazy" src="https://cms-contents.pharmeasy.in/banner/341dc9245c2-SURP15DWEB.jpg?dim=1440x0&dpr=1&q=100" alt=""/>
                </div>

                <div>
                    <img loading="lazy" src="https://cms-contents.pharmeasy.in/banner/9e172a2bf75-prioritydweb.jpg?dim=1440x0&dpr=1&q=100" alt=""/>
                </div>

                <div>
                    <img loading="lazy" src="https://cms-contents.pharmeasy.in/banner/ed7c9757352-Dweb-size.jpg?dim=1440x0&dpr=1&q=100" alt=""/>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
