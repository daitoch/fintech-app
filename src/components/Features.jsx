import React from "react";
import { features } from "../constants";
import styles from "../style";

const Features = ({ icon, title, content, index }) => {
    return (
        <div className={`flex flex-row p-6 rounded-[20px] ${index != features.length -1? "mb-6": "mb:0"} feature-card`}>
            <div className={`${styles.flexCenter} rounded-full bg-dimBlue w-[64px] h-[64px]`}>
                <img src={icon} alt="" className="w-[50%] h-[50%] object-contain"/>
            </div>

            <div className="flex-1 flex-col flex ml-3">
                <h4 className="text-poppins text-semibold text-[18px] leading-[23px] mb-1 text-white">
                    {title}
                </h4>
                <p className="text-poppins text-normal text-[16px] leading-[24px] text-dimWhite">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Features;