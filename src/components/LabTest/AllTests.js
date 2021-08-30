import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import Header from "../Header";
import AllTestsComponent from './AllTestsComponent';
import 'react-modern-drawer/dist/index.css';
import Drawer from "react-modern-drawer";
import { enterAlltest, selectAlltestId } from "../../features/allltestSlice";
import { useSelector } from 'react-redux';
import CertificationLab from './CertificationLab';

function AllTests() {
    const [tests, setTests] = useState([]);
    const [lab, setLab] = useState([]);
    const labtestId = useSelector(selectAlltestId);

    useEffect(() => {
        const unsubscribe = db.collection("labtest")
        .onSnapshot((snapshot) => {
            setTests(snapshot.docs.map((doc) => ({
                id:doc.id,
                data: doc.data(),
            })))
        });
        return () => unsubscribe();
    },[tests]);

    useEffect(() => {
        const unsubscribe = db.collection("labtest")
        .doc(labtestId)
        .collection("labs")
        .onSnapshot((snapshot) => {
            setLab(snapshot.docs.map((doc) => ({
                data: doc.data(),
            })))
        });
        return () => unsubscribe();
    },[lab]);

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <div>
            <Header/>
            <div className="flex justify-between m-32 xl:ml-28 mt-14 xl:mb-3 xl:mr-96 xl:pr-20 font-bold text-gray-600">
                <h1 className="text-2xl">Lab Tests</h1>
                <h1 className="text-xl">10 Tests</h1>
            </div>
            <div className="grid grid-cols-2 m-4 xl:ml-10 xl:mr-96">
                {tests?.map(({id, data: {name, availablelab, price}}) => (
                    <AllTestsComponent
                    key={id}
                    id={id}
                    name={name}
                    availablelab={availablelab}
                    price={price}
                    toggleDrawer={toggleDrawer}
                    isOpen={isOpen}
                    enterAlltest={enterAlltest}
                    />
                ))}
            </div>
            <Drawer size={450} open={isOpen} onClose={toggleDrawer} direction='right'>
                <div className="xl:m-12">
                    <h1 className="xl:mb-4 xl:text-red-500 xl:text-lg xl:font-bold">Select Lab</h1>
                    <div className="xl:flex xl:items-center bg-red-100 xl:text-red-500 p-2 rounded-lg">
                        <img className="h-10" src="https://assets.pharmeasy.in/web-assets/dist/ff67728d.svg" alt="" />
                        <h1 className="ml-3">Reliability assured with certified labs</h1>
                    </div>
                    <div className="grid, grid-cols-1">
                        {lab?.map(({data: {image, labname, oldprice, newprice, offer, certification}}) => (
                            <CertificationLab
                            key={labtestId}
                            id={labtestId}
                            image={image}
                            labname={labname}
                            oldprice={oldprice}
                            newprice={newprice}
                            offer={offer}
                            certification={certification}
                            />
                        ))}
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default AllTests
