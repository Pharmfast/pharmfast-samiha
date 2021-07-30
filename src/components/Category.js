import React from 'react';

function Category({ title, image, discount, buttonname, add }) {
    return (
        <div onClick={add} className=" 
        w-28 h-44 cursor-pointer from-red-100 bg-gradient-to-b rounded-lg mt-6
         shadow-lg xl:rounded-lg xl:w-96 xl:h-48 xl:m-7
        ">
            <h1 className="absolute text-gray-900 w-24 m-3 xl:text-xl xl:m-6 xl:mt-14 xl:text-gray-600 font-bold">{title}</h1>
            <img 
            className="h-16 mt-28 ml-12 xl:mt-0 absolute xl:h-48 xl:ml-48"
            src={image} 
            alt={title}/>
            <h1 className="mt-16 pt-3 font-semibold text-red-500 text-sm text-center xl:font-semibold xl:absolute xl:mb-52 xl:mt-0 xl:text-white xl:bg-red-500 xl:w-32 xl:p-1 xl:rounded-tl-xl xl:rounded-br-xl xl:text-center ">{discount}% OFF</h1>
            <button className="hidden xl:flex absolute xl:rounded-lg xl:pl-5 xl:pr-5 xl:mt-32 xl:font-semibold xl:text-white xl:ml-7 xl:p-2 xl:bg-red-500">{buttonname}</button>
        </div>
    )
};

export default Category
