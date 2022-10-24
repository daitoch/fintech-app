import React from "react";

import { discount, robot } from "../assets";
import GetStarted from "./Getstarted";
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
                        <span className="text-gradient">Generation</span>
                    </h1>

                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div>

                </div>

                <h1 className="font-popping text-white font-semibold ss:text-[62px] ss:leading-[100px] leading-[75px] text-[52px]">
                    Payment Method
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Our team of experts uses methodology to identify the credit cards most likely to fit your needs. We examine annual precentage rates, annual fees.
                </p>

            </div>
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={robot} alt="Robotic arm" className="w-[100%] h-[100%] relative z-[5]" />

                <div className="absolute z-[0] pink__gradient w-[40%] h-[35%] top-0"/>
                <div className="absolute z-[1] white__gradient w-[80%] h-[50%] bottom-40"/>
                <div className="absolute z-[0] blue__gradient w-[50%] h-[50%] bottom-20"/>
            </div>
        </section>
    )
}

export default Hero;