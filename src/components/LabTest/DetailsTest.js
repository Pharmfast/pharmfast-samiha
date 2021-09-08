import axios from 'axios';
// import Axios from ".../axios.js"
import React, { useEffect, useState } from 'react';
import { BiCart } from 'react-icons/bi';
import { GrTest } from 'react-icons/gr';
import 'react-modern-drawer/dist/index.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectAlltestId } from "../../features/allltestSlice";
import Header from '../Header';


const DetailsTest = () => {

    const history = useHistory();

    const [tests, setTests] = useState([]);
    const [lab, setLab] = useState([]);
    const [singleTest, setSingleTest] = useState({})
    const [cart, setCart] = useState([])
    const [cartDetails, setCartDetails] = useState({})
    const labtestId = useSelector(selectAlltestId);
    const [isDescription, setIsDescription] = useState(true);

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

    const changeTab = (tab) => {
        if (tab === 'description') {
            setIsDescription(true);
        }
        if (tab === 'requirement') {
            setIsDescription(false)
        }
    }

    useEffect(() => {
        getCart()
    }, [])



    return (
        <div>
            <Header cartDetails={cartDetails} />
            <div className="flex justify-evenly mx-16" >
                <div className="mt-10 w-3/5" >
                    <h1 className="text-3xl font-bold text-gray-500 mb-5" >Test Details</h1>
                    <div className="border-2 rounded-md p-10" >
                        <div className="flex items-center gap-2 text-2xl font-bold text-gray-500" >
                            <GrTest className="text-green-600 mr-2" />
                            <h1>Test Name</h1>
                        </div>
                        <div>
                            <h1 className="text-xl text-gray-500 " >Price</h1>
                        </div>
                        <div>
                            <h1>Lab Name</h1>
                        </div>
                        <button className=" hover:shadow-inner px-3 py-1 rounded-md" >Remove</button>
                    </div>
                    <div>
                        <div className="flex mb-4" >
                            <h1 onClick={() => changeTab('description')} className={`${isDescription ? "text-red-600 border-b-4 font-semibold" : "text-gray-500"}  text-lg px-10 py-3 border-red-600`} >Description</h1>
                            <h1 onClick={() => changeTab('requirement')} className={`${!isDescription ? "text-red-600 border-b-4 font-semibold" : "text-gray-500"}  text-lg px-10 py-3 border-red-600`} >Test Requirement</h1>
                        </div>
                        {
                            isDescription ? <div>
                                Description
                            </div> : <div>
                                Test Requirements
                            </div>
                        }

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
        </div>
    );
};

export default DetailsTest;