import React from "react";

import { discount, robot } from "../assets";
import styles from "../style"

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-16 ${styles.flexStart}`}>

                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img src={discount} alt="Dicount Icon" className="w-[32px] h-[32px] " />
                    <p className={`${styles.paragraph} ml-2`}>
                    <span className="text-white">20%</span> Discount For {' '}
                    <span className="text-white">1 Month </span> Account
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-popping text-white font-semibold ss:text-[72px] ss:leading-[100px] leading-[75px] text-[52px]">
                        The Next <br className=" sm:block hidden"/>
                        <span className="text-gradient">Generation</span> {' '} <br />
                        Payment Method.
                    </h1>

                    <div className="">

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero;