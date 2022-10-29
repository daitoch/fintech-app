import React from "react";

import styles from "./style"
import { NavBar, Hero, Stats, Business, Billing } from "./components"

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
                    <Hero />
                </div>
            </div>
            
            <div className={`"bg-primary" ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Billing />
                    Card Deal
                    Testimonials
                    Footer
                </div>
            </div>

        </div>
    )

}

export default App;