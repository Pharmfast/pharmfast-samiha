import React, { useEffect, useState } from 'react'
import { enterProduct } from '../features/productSlice';
import { db } from '../firebase';
import Banner from './Banner';
import Header from './Header';
import HealthcareCategories from './HealthcareCategories';

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
    },[categories]);

    return (

        <div className="overflow-x-hidden">
            <Header/>
            <Banner/>
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
            </div>
            
        </div>
    )
}

export default Healthcare
