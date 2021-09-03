import React from 'react'

function LabTestTabs({ name, image, click }) {
    return (
        <div onClick={click} className=" 
        bg-white cursor-pointer xl:justify-evenly shadow-md rounded lg:rounded-full mt-6 m-1 xl:from-white xl:bg-gradient-to-b
         hover:shadow-md xl:w-72 h-20 xl:h-32 xl:m-7 xl:flex xl:items-center focus:border-red-400 border-2
        ">
            <div className='flex justify-center sm:justify-start items-center'>
                <img
                    className="h-8 lg:h-10 md:py-2 xl:h-24 ml-2 md:ml-6 xl:mt-0 xl:ml-2"
                    src={image}
                    alt={name} />
                <h1 className="xl:hidden sm:line-clamp-3 text-gray-600 xl:w-40 ml-2 m-4 text-sm lg:text-lg xl:text-gray-600">
                    {name}
                </h1>
                <h1 className="hidden xl:flex text-gray-900 w-40 m-3 xl:text-lg xl:text-gray-600">
                    {name}
                </h1>
            </div>
        </div>
    )
}

export default LabTestTabs
