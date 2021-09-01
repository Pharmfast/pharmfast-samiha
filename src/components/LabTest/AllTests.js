import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import Header from "../Header";
import AllTestsComponent from './AllTestsComponent';
import 'react-modern-drawer/dist/index.css';
import Drawer from "react-modern-drawer";
import { enterAlltest, selectAlltestId } from "../../features/allltestSlice";
import { useSelector } from 'react-redux';
import CertificationLab from './CertificationLab';
// import Axios from ".../axios.js"
import axios from 'axios';

function AllTests() {
    const [tests, setTests] = useState([]);
    const [lab, setLab] = useState([]);
    const [singleTest, setSingleTest] = useState({})
    const [cart, setCart] = useState([])
    const [cartDetails, setCartDetails] = useState({})
    const labtestId = useSelector(selectAlltestId);

    useEffect(() => {
        axios.get("http://localhost:8000/api/getlabtest")
        .then(response => {
            console.log(response.data)
            setTests(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[]);

    const addToCart = ({_id, labname, price}) => {
        let flag = 0;
        let localCart = JSON.parse(localStorage.getItem("cart"))
        if(cart.length > 0) {
            localCart.forEach(item => {
                if(item.singleTest["_id"] == singleTest["_id"]) {
                    flag = 1;
                }
            })
            if(flag) {
                console.log("Already added in the cart")
                return 
            }
            const item = {
                singleTest,
                lab: {
                    _id,
                    labname,
                    price
                }
            }
            localCart.push(item)
            setCart(localCart)
            localStorage.setItem("cart", JSON.stringify(localCart))
            getCart()
        }
        else {
            localCart = []
            const item = {
                singleTest,
                lab: {
                    _id,
                    labname,
                    price
                }
            }
            localCart.push(item)
            setCart(localCart)
            localStorage.setItem("cart", JSON.stringify(localCart))
            getCart()
        }
    }

    const removeFromCart = (id) => {
        let localCart = JSON.parse(localStorage.getItem("cart"))
        if(localCart.length > 0) {
            let cartPrice = cartDetails.totalPrice
            cartPrice = localCart.forEach(item => {
                if(item.singleTest["_id"] == id) {
                    cartPrice -= parseFloat(item.singleTest.price)
                }
            })
            let cartItems = cartDetails.totalItems - 1;
            setCartDetails({totalItems: cartItems, totalPrice: cartPrice })
            localCart = localCart.filter(t => t.singleTest["_id"] != id)
            setCart(localCart)
            localStorage.setItem("cart", JSON.stringify(localCart))
            getCart()
        }
    }

    const getCart = () => {
        let localCart = JSON.parse(localStorage.getItem("cart"))
        if(localCart?.length > 0) {
            let totalItems = 0;
            let totalPrice = 0;
            setCart(localCart)
            localCart.forEach(item => {
                totalItems++;
                totalPrice += parseFloat(item.singleTest.price)
            })
            setCartDetails({totalItems, totalPrice})
        } else {
            localCart = []
            setCart(localCart)
            localStorage.setItem("cart", JSON.stringify(localCart))
        }
    }

    useEffect(() => {
        getCart()
    }, [])

    const fetchLab = (_id) => {
        console.log("Hello")
        axios.get(`http://localhost:8000/api/gettest/${_id}`).then(response => {
            console.log(response.data)
            
            setSingleTest(response.data)
        })
        .catch(err => {
            console.log(err)
        })

        axios.get(`http://localhost:8000/api/getlabs/${_id}`)
        .then(response => {
            console.log(response.data)
            setLab(response.data)
        })
        .catch(err => {
            console.log(err)
        })
        toggleDrawer()
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }
    console.log(cart)
    return (
        <div>
            <Header/>
            <div className="flex justify-between m-32 xl:ml-28 mt-14 xl:mb-3 xl:mr-96 xl:pr-20 font-bold text-gray-600">
                <h1 className="text-2xl">Lab Tests</h1>
                <h1 className="text-xl">10 Tests</h1>
            </div>
            <div className="grid grid-cols-2 m-4 xl:ml-10 xl:mr-96">
                {tests?.map(({_id, name, description, price}) => (
                    <AllTestsComponent
                    key={_id}
                    _id={_id}
                    name={name}
                    availablelab={2}
                    price={price}
                    toggleDrawer={toggleDrawer}
                    isOpen={isOpen}
                    enterAlltest={enterAlltest}
                    fetchLab={fetchLab}
                    removeFromCart={removeFromCart}
                    />
                ))}
            </div>
            <div className="grid grid-cols- m-4 xl:ml-10 xl:mr-96">
                <h1>{cartDetails.totalItems} Items in Cart</h1>
                {cart?.map(({lab: {labname}, singleTest: { name, price}}) => (
                    <>
                        <h2>{name} in {labname}   price {price}</h2>
                    </>
                ))}
                <h3>Total {cartDetails.totalPrice}</h3>
            </div>
            <Drawer size={450} open={isOpen} onClose={toggleDrawer} direction='right'>
                <div className="xl:m-12">
                    <h1 className="xl:mb-4 xl:text-red-500 xl:text-lg xl:font-bold">Select Lab</h1>
                    <div className="xl:flex xl:items-center bg-red-100 xl:text-red-500 p-2 rounded-lg">
                        <img className="h-10" src="https://assets.pharmeasy.in/web-assets/dist/ff67728d.svg" alt="" />
                        <h1 className="ml-3">Reliability assured with certified labs</h1>
                    </div>
                    <div className="grid, grid-cols-1">
                        {lab?.map(({_id ,name, certified }) => (
                            <CertificationLab
                            key={_id}
                            id={_id}
                            image={"https://cdn01.pharmeasy.in/dam/diagnostics/mce/48cc8a22cc6932698b86be1849acf628.png"}
                            labname={name}
                            price={singleTest.price}
                            certification={certified}
                            addToCart={addToCart}
                            />
                        ))}
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default AllTests
