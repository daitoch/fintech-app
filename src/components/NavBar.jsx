import React from "react";
import { useState } from "react";

import { close, logo, menu } from "../assets"
import { navLinks } from "../constants"

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="w-full justify-between items-center py-6 flex navbar">
            <img src={logo} alt="Fintech-App" className="w-[124px] h-[32px]" />

            <ul className="list-none justify-end items-center flex-1 sm:flex hidden">
                {navLinks.map((nav, index) => (
                    <li
                    key={index} 
                    className={`font-poppins font-normal text-white cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0':'mr-10' }`}>
                        <a href={`${nav.id}`}>{`${nav.title}`}</a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? close : menu} alt="ham burger menu" 
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle((prevState) => !prevState)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'}  p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none justify-end items-center flex-1 flex flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                            key={index} 
                            className={`font-poppins font-normal text-white cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mb-0':'mb-4' }`}>
                                <a href={`${nav.id}`}>{`${nav.title}`}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;