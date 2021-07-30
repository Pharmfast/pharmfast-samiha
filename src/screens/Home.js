import React from 'react'
import { useHistory } from 'react-router-dom';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Header from '../components/Header';

function Home() {
    const history = useHistory();
    return (
        <div>
            <Header/>
            <Banner/>
            <div className="flex justify-evenly">
                <Category 
                title="Order Medicines"
                buttonname="Order Now"
                discount=" Flat 15"
                image="https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png"
                add={() => history.push("/medicine")}
                />
                <Category 
                title="Healthcare Products"
                buttonname="Order Now"
                discount="Upto 60"
                image="https://assets.pharmeasy.in/web-assets/dist/c7c7095b.png"
                add={() => history.push("/healthcare")}
                />
                <Category 
                title="Lab Tests"
                buttonname="Book Now"
                discount="Upto 70"
                image="https://assets.pharmeasy.in/web-assets/dist/e1d3ac1c.png"
                add={() => history.push("/labtest")}
                />
            </div>
        </div>
    )
}

export default Home
