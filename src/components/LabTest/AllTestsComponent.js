import React from 'react';
import 'react-modern-drawer/dist/index.css';
import { useDispatch } from 'react-redux';

function AllTestsComponent({ fetchLab, _id, name, availablelab, price, toggleDrawer, isOpen, enterAlltest, removeFromCart, add }) {
    const dispatch = useDispatch();

    const selectAllTests = () => {
        if (_id) {
            dispatch(enterAlltest({
                alltestId: _id
            }));
        }
    }

    return (
        <div onClick={add} className=" 
        cursor-pointer shadow-xl rounded-lg mt-6 m-1 from-red-100 bg-gradient-to-b xl:from-white xl:bg-gradient-to-b
         hover:shadow-lg xl:p-5 xl:m-7 xl:flex xl:justify-between xl:items-center hover:border-red-400 border-2
        ">
            <h1 className="xl:hidden line-clamp-3 text-gray-900 xl:w-40 m-3 xl:text-lg xl:text-gray-600 font-bold">{name}</h1>
            <h1 className="xl:hidden ml-2 font-semibold text-red-500 text-sm xl:mt-0 xl:font-semibold">Upto {availablelab}% OFF</h1>
            <div className="xl:flex-col">
                <h1 className="hidden xl:flex text-gray-900 w-40 xl:text-md xl:text-gray-600 font-bold">{name}</h1>
                <h1 className="hidden xl:flex mt-16 pt-3 font-semibold text-gray-400 text-sm xl:mt-0 xl:font-semibold">Available at{availablelab} Certified Lab</h1>
                <h1 className="hidden xl:flex mt-16 pt-3 font-semibold text-gray-600 text-sm xl:mt-0 xl:font-semibold xl:space-x-2">₹{price} <span className="text-gray-400 space-x-2">onwards</span></h1>
            </div>
            <div className="flex flex-col" >
                <button onClick={(e) => fetchLab(_id, e)}
                    className="xl:p-2 xl:pl-9 xl:pr-9 xl:bg-red-500 xl:rounded-lg xl:outline-none xl:text-white hover:bg-red-600 hover:shadow-lg ">Select</button>
                <button onClick={(e) => removeFromCart(_id, e)}
                    className="xl:p-2 xl:pl-9 xl:pr-9 xl:bg-red-500 xl:rounded-lg xl:outline-none xl:text-white mt-5 hover:bg-red-600 hover:shadow-lg ">Remove</button>
            </div>
        </div>
    )
}

export default AllTestsComponent
