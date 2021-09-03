// import Axios from ".../axios.js"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiCart } from 'react-icons/bi';
import Drawer from "react-modern-drawer";
import 'react-modern-drawer/dist/index.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { enterAlltest, selectAlltestId } from "../../features/allltestSlice";
import Header from "../Header";
import AllTestsComponent from './AllTestsComponent';
import CertificationLab from './CertificationLab';

function AllTests() {
    const history = useHistory();

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
    }, []);

    const addToCart = ({ _id, labname, price }) => {
        let flag = 0;
        let localCart = JSON.parse(localStorage.getItem("cart"))
        if (cart.length > 0) {
            localCart.forEach(item => {
                if (item.singleTest["_id"] == singleTest["_id"]) {
                    flag = 1;
                }
            })
            if (flag) {
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
        if (localCart.length > 0) {
            let cartPrice = cartDetails.totalPrice
            cartPrice = localCart.forEach(item => {
                if (item.singleTest["_id"] == id) {
                    cartPrice -= parseFloat(item.singleTest.price)
                }
            })
            let cartItems = cartDetails.totalItems - 1;
            setCartDetails({ totalItems: cartItems, totalPrice: cartPrice })
            localCart = localCart.filter(t => t.singleTest["_id"] != id)
            setCart(localCart)
            localStorage.setItem("cart", JSON.stringify(localCart))
            getCart()
        }
    }

    const getCart = () => {
        let localCart = JSON.parse(localStorage.getItem("cart"))
        if (localCart?.length > 0) {
            let totalItems = 0;
            let totalPrice = 0;
            setCart(localCart)
            localCart.forEach(item => {
                totalItems++;
                totalPrice += parseFloat(item.singleTest.price)
            })
            setCartDetails({ totalItems, totalPrice })
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
            <Header cartDetails={cartDetails} />

            <div className="flex justify-evenly" >
                <div>
                    <div className="flex justify-between mt-5 mx-3 xl:m-28 xl:ml-28 xl:mt-14 xl:mb-3 font-bold text-gray-600">
                        <h1 className="xl:text-2xl">Lab Tests</h1>
                        <h1 className="xl:text-xl">10 Tests</h1>
                    </div>
                    <div className="grid grid-cols-2 mb-16 xl:m-4 xl:ml-10">
                        {tests?.map(({ _id, name, description, price }) => (
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
                                add={() => history.push(`/labtest/testDetail/${name}`)}
                            />
                        ))}
                    </div>
                </div>
                {cartDetails.totalItems > 0 ? <div className="xl:flex lg:flex sm:flex hidden flex-col mt-16">

                    <h1 className="text-gray-500 border-b-2 pb-3" >Order Summary</h1>

                    <h1 className="flex items-center gap-5 border-b-2 border-dashed py-3" >  <div className="bg-gray-100 rounded-full p-1" ><BiCart className="text-yellow-400 text-xl " /></div> <h1>{cartDetails.totalItems} Items in Cart</h1></h1>

                    {cart?.map(({ lab: { labname }, singleTest: { name, price } }) => (
                        <div className="flex justify-between border-b-2 border-dashed py-4">
                            <h2 className="text-gray-500 mr-2" >{name} in {labname} </h2>
                            <h2 className="text-gray-700 font-semibold" >&#8377;{price}</h2>
                        </div>
                    ))}
                    <div className="flex items-center justify-between py-3" >
                        <h3 className="font-semibold text-gray-600" >Total</h3>
                        <h3 className="font-bold text-gray-700" >&#8377;{cartDetails.totalPrice || '0'}</h3>
                    </div>
                    <button onClick={() => history.push("/cart", cartDetails)} className="bg-red-500 text-white rounded-md p-2 mt-3" >View Cart</button>
                </div> : ""}
            </div>
            <div className="lg:block hidden" >
                <Drawer size={450} open={isOpen} onClose={toggleDrawer} direction='right'>
                    <div className="xl:m-12">
                        <h1 className="xl:mb-4 xl:text-red-500 xl:text-lg xl:font-bold">Select Lab</h1>
                        <div className="xl:flex xl:items-center bg-red-100 xl:text-red-500 p-2 rounded-lg">
                            <img className="h-10" src="https://assets.pharmeasy.in/web-assets/dist/ff67728d.svg" alt="" />
                            <h1 className="ml-3">Reliability assured with certified labs</h1>
                        </div>
                        <div className="grid, grid-cols-1">
                            {lab?.map(({ _id, name, certified }) => (
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
            <div className="lg:hidden block" >
                <Drawer style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', overflowY: 'scroll' }} size={350} open={isOpen} onClose={toggleDrawer} direction='bottom'>
                    <div className="xl:m-12">
                        <h1 className="xl:mb-4 p-2 xl:text-red-500 xl:text-lg xl:font-bold">Select Lab</h1>
                        <div className="flex xl:items-center bg-red-100 xl:text-red-500 p-2 rounded-lg mx-2 ">
                            <img className="h-10" src="https://assets.pharmeasy.in/web-assets/dist/ff67728d.svg" alt="" />
                            <h1 className="ml-3">Reliability assured with certified labs</h1>
                        </div>
                        <div className="grid, grid-cols-1">
                            {lab?.map(({ _id, name, certified }) => (
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
        </div>
    )
}

export default AllTests
