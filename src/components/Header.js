import React from 'react';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { useHistory } from 'react-router-dom';

function Header({ cartDetails }) {
    const history = useHistory();
    return (
        <header>
            {/* Top nav */}
            <div className="bg-red-500 flex items-center p-1 flex-grow py-2">
                <div onClick={() => history.push("/home")} className="mt-2 flex items-center cursor-pointer flex-grow sm:flex-grow-0">
                    <img 
                    className="w-36 m-2 mr-4 h-12 object-contain"
                    src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" 
                    alt=""/>
                </div>
                {/* Search */}
                <div className="hidden items-center h-10 rounded-md flex-grow sm:flex bg-red-300 hover:bg-red-400">
                    <input
                    className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
                    type="text"
                    placeholder="Seatch for Medicines / Healthcare products"
                    />
                    <SearchIcon className="h-12 p-4"/>
                </div>
                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-4 whitespace-nowrap">
                    <div className="cursor-pointer hover:underline flex items-center">
                        <img
                        className="h-10 w-10" 
                        src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt=""/>
                        <p className="font-extrabold sm:flex md:text-sm hidden">Offers</p>
                    </div>
                    <div onClick={() => history.replace('/')} className="cursor-pointer hover:underline">
                        <p className="font-extrabold md:text-sm">Hello Sign Up</p>
                    </div>
                    <div onClick={() => history.push("/cart")} className="cursor-pointer hover:underline items-center flex">
                        <span className="absolute top-6 md:top-5 right-3 md:right-11 h-4 w-4 bg-red-300 rounded-full text-center text-black">{cartDetails.totalItems == null ? 0 : cartDetails.totalItems}</span>
                        <ShoppingCartIcon className="h-8 lg:h-10"/>
                        <p className="font-extrabold hidden sm:flex md:text-sm mt-2">Cart</p>
                    </div>
                </div>
            </div>
            {/* Bottom Nav*/}
            <div className="flex items-center space-x-4 p-2 bg-red-500 text-sm text-white">
                <div className="md:hidden m-3 flex items-center h-10 rounded-md flex-grow bg-red-300 hover:bg-red-400">
                    <input
                    className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
                    type="text"
                    placeholder="Seatch for Medicines / Healthcare products"
                    />
                    <SearchIcon className="h-12 p-4"/>
                </div>
                <p className="hidden pl-6 items-center sm:flex cursor-pointer hover:underline">
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                <p onClick={() => history.push("/medicine")} className="hidden sm:flex cursor-pointer hover:underline">
                    Order Medicine
                </p>
                <p onClick={() => history.push("/healthcare")} className="hidden sm:flex cursor-pointer hover:underline">
                    Healthcare Products
                </p>
                <p onClick={() => history.push("/labtest")} className="hidden sm:flex cursor-pointer hover:underline">
                    Diagnostic Tests
                </p>
                <p className="hidden sm:flex cursor-pointer hover:underline">
                    Don't have a prescription? Get Started!
                </p>
            </div>
        </header>
    )
}

export default Header
