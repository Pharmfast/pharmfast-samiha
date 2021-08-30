import React, { useEffect, useState } from 'react'
import { enterProduct } from '../features/productSlice';
import { db } from '../firebase';
import Banner from '../components/Banner';
import Header from '../components/Header';
import HealthcareCategories from '../components/HealthcareCategories';
import axios from "../axios";

function Healthcare() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
            const unsubscribe = db.collection('categories')
            .onSnapshot((snapshot) => {
                setCategories(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            });
        return() => unsubscribe();
        {/*async function fetchCategory() {
            const req = await axios.get("/pharm/category");
            setCategories(req.data);
        }
    fetchCategory();*/}
    },[categories]);

    return (

        <div className="overflow-x-hidden">
            <Header/>
            <Banner
            banner1="https://cms-contents.pharmeasy.in/banner/f5e80888dd6-Bucket_cb.jpg"
            banner2="https://cms-contents.pharmeasy.in/banner/0585c320a99-Vicks-CB.jpg"
            banner3="https://cms-contents.pharmeasy.in/banner/0fe6add103c-Digene-Mint-SB.jpg"
            banner4="https://cms-contents.pharmeasy.in/banner/1260a40c85b-Sebamed_CB.jpg"
            />
            <div className="grid grid-cols-3 m-4 xl:ml-0">
                {categories.map(({id, data: {categoryname, offer, image}}) => (
                        <HealthcareCategories
                        key={id}
                        id={id}
                        categoryname={categoryname}
                        offer={offer}
                        image={image}
                        enterProduct={enterProduct}
                        />
                ))}
                {/*{categories.map((data) => (
                    <HealthcareCategories
                    key={data.id}
                    id={data.id}
                    categoryname={data.categoryname}
                    categoryoffer={data.categoryoffer}
                    />
                ))}*/}
            </div>
            
        </div>
    )
}

export default Healthcare
