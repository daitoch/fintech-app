import React from "react";

import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";

const Billing = () => {
    return (
        <section id="product" className={`${layout.sectionReverse}`}>
            <div className={`${layout.sectionImgReverse}`}>
                <img src={bill} alt="Bill" className="w-[100%] h-[100%] relative z-[5]" />
                <div className="z-[1] absolute -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
                <div className="z-[0] absolute -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>

            </div>

            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Easily Control Your
                    <br clasName="sm:block hidden"/>
                    billing and invoicing.
                </h2>
                <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                placerat.
                </p>
                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <img src={apple} alt="Apple" className="w-[128px] h-[42px] object-contain cursor-pointer mr-5" />
                    <img src={google} alt="Goolge" className="w-[128px] h-[42px] object-contain cursor-pointer" />

                </div>
            </div>

        </section>
    )
}

export default Billing;