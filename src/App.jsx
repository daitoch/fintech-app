import React from "react";

import styles from "./style"
import { NavBar } from "./components"

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar />
                </div>
            </div>
            
            <div className={`"bg-primary" ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    Hero Section
                </div>
            </div>
            
            <div className={`"bg-primary" ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    Stats
                    Billing
                    Bussiness
                    Card Deal
                    Testimonials
                    Footer
                </div>
            </div>

        </div>
    )

}

export default App;