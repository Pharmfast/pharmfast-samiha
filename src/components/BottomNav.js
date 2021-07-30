import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoIosPerson } from 'react-icons/io';
import { RiMedicineBottleFill } from "react-icons/ri";
import { GiRoundBottomFlask } from "react-icons/gi";
import { FaBell } from "react-icons/fa";

function BottomNav() {
    return (
        <div className="w-full h-0 md:hidden flex">
            <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-red-600 shadow">
                <div id="tabs" className="flex text-white justify-between">
                    <a href="/home" className="w-full focus:text-yello-500 justify-center inline-block text-center pt-2 pb-1">
                        <AiFillHome className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Home</span>
                    </a>
                    <a href="/healthcare" className="w-full focus:text-yello-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <RiMedicineBottleFill className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Healthcare</span>
                    </a>
                    <a href="/diagnostics" className="w-full focus:text-yello-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <GiRoundBottomFlask className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Diagnostics</span>
                    </a>
                    <a href="/notification" className="w-full focus:text-yello-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <FaBell className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Notifications</span>
                    </a>
                    <a href="/account" className="w-full focus:text-yello-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                        <IoIosPerson className="inline-block mb-1"/>
                        <span className="tab tab-home block text-xs">Account</span>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default BottomNav
