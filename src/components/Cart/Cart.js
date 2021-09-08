import React, { useEffect, useState } from 'react';
import { BiCart } from 'react-icons/bi';
import { GrTest } from 'react-icons/gr';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { authenticate, isAuthenticated, signin } from '../../auth/helper';
import Header from "../Header";

function Cart() {
    const history = useHistory();

    const [cart, setCart] = useState([])
    const [cartDetails, setCartDetails] = useState({})

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


    const registerPatient = (e) => {
        // e.preventDefault()
        console.log(isAuthenticated())
        if(isAuthenticated()) {
            return history.push("/createPatient")
        }
        else {
            let email = prompt("Enter Email")
            let password = prompt("Enter Password")
            console.log(email)
            console.log(password)

            if(email != "" && password != "") {
                signin({email, password})
                .then(data => {
                    if(data.error) {
                        console.log(data.error)
                    } else {
                        authenticate(data, () => {
                            return history.push("/createPatient")
                        })
                    }
                })
                .catch(console.log("Signin request failed"))
            }
        }
    }

    return (
        <div>
            <Header cartDetails={cartDetails} />
            <div className="flex xl:flex-row flex-col mx-2 xl:mx-32 my-2 xl:my-5 justify-between" >
                <div className="xl:w-3/5 w-full" >
                    <h1 className="font-semibold border-b-2 pb-2 text-xl xl:text-3xl text-gray-600">Cart</h1>
                    {cart?.map(({ lab: { labname }, singleTest: { _id, name, price } }) => (
                        <div className="flex justify-between border-2 py-8 px-3 rounded-lg mt-3">
                            <div className="flex items-center" >
                                <GrTest className="text-green-600 mr-2" />
                                <h2 className="text-gray-500 mr-2" >{name} in {labname} </h2>
                            </div>
                            <div className="flex" >
                                <h2 className="text-gray-700 font-semibold" >&#8377;{price}</h2>
                                <button className="px-8" onClick={() => removeFromCart(_id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col xl:mt-16 mb-16 xl:mb-0 mx-2 ">

                    <div className="flex items-center justify-between text-red-500 border rounded-md p-2 mb-5 cursor-pointer border-red-500" > <h1 className="font-bold" >Apply Coupon</h1> <RiArrowDropRightLine className="text-3xl" /> </div>

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
                    <button onClick={registerPatient} className="bg-red-500 text-white rounded-md p-2 mt-3" >Select Patient Details</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
