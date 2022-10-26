import React from "react";

import styles, { layout } from "../style";
import { features } from "../constants";


const Business = () => {
    return (
        <section id={features} className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    You do the Business, <br className="sm:block hidden "/>
                    We'll handle the money. 
                </h2>
                <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
                With the right credit card, you can improve your financial life by
                building credit, earning rewards and saving money. But with hundreds
                of credit cards on the market.
                </p>
            </div>

            <div>

            </div>
        </section>
    )

}

export default Business;