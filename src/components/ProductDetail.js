import React from 'react'

function ProductDetail({id, name, image, newprice, oldprice, offer, rating}) {
    return (
        <div className=" 
        cursor-pointer xl:justify-evenly shadow-xl rounded-lg mt-6 m-1 from-red-100 bg-gradient-to-b xl:from-white xl:bg-gradient-to-b
         hover:shadow-lg xl:w-96 xl:h-36 xl:m-7 xl:flex xl:items-center hover:border-red-400 border-2
        ">
            <h1 className="xl:hidden line-clamp-3 text-gray-900 xl:w-40 m-3 xl:text-lg xl:text-gray-600 font-bold">{name}</h1>
            <h1 className="xl:hidden ml-2 font-semibold text-red-500 text-sm xl:mt-0 xl:font-semibold">Upto {offer}% OFF</h1>
            <img  
            className="h-12 xl:h-24 ml-14 mt-2 xl:mt-0 xl:ml-0"
            src={image} 
            alt={name}/>
            <h1 className="hidden xl:flex text-gray-900 w-40 m-3 xl:text-lg xl:text-gray-600 font-bold">{name}</h1>
            <h1 className="hidden xl:flex mt-16 pt-3 font-semibold text-red-500 text-sm xl:mt-0 xl:font-semibold">Upto {offer}% OFF</h1>
        </div>
    )
}

export default ProductDetail
