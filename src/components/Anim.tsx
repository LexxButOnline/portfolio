import React, { useState } from "react";
import { motion } from "framer-motion";


export default function Anim() {

    const [isIntro, setIsIntro] = useState(true);


    function IntroContent() {
        return (

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onAnimationComplete={() => (setTimeout(() => setIsIntro(false), 2000))}
                exit={{ x: "-100vh", opacity: 0 }}
            >
                Cupcake ipsum dolor sit amet cheesecake.
            </motion.div>

        );
    }

    function MainContent() {
        return (

            <motion.div className="text-secondary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                exit={{ x: "-100vh", opacity: 0 }}
            >
                Pastry lollipop cake cake chocolate bar chocolate cake. Sesame snaps muffin toffee ice cream pastry. Cake halvah candy canes bonbon sugar plum apple pie biscuit.
            </motion.div>


        );
    }

    return (
        <section id="anim">

            <div className="container flex items-center justify-center mx-auto text-center text-4xl h-dvh ">
                {isIntro ? <IntroContent /> : <MainContent />}
            </div>
        </section >
    );
}