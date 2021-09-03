import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Banner from '../components/Banner'
import Header from '../components/Header'
import MedicinePage from '../components/Medicines/MedicinePage';

function Medicines() {

    const [medicine, setMedicine] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("medicines").onSnapshot((snapshot) => {
            setMedicine(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        });
        return () => unsubscribe();
    },[medicine]);

    return (
        <div>
            <Header/>
            <Banner/>
            <div className="grid grid-cols-3 m-4 xl:ml-0">
                {medicine?.map(({id, data: {name, image, oldprice, newprice, offer, nooftablets}}) => (
                    <MedicinePage
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    offer={offer}
                    oldprice={oldprice}
                    newprice={newprice}
                    nooftablets={nooftablets}
                    />
                ))}
            </div>
        </div>
    )
}

export default Medicines
