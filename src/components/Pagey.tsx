import React, { useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Intro from "./Intro";
import { useScroll, useTransform, circOut, motion, MotionValue } from "framer-motion";

export default function Pagey() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({ target: ref });

    // function useParallax(value: MotionValue<number>, distance: number) {
    //     return useTransform(value, [0, 1], [distance, -distance]);
    // }

    const y = useTransform(scrollYProgress, [0, 1], [320, -100]);
    return (
        <section id="pagey">


            <div ref={ref}>

                <motion.div style={{ y }}>

                    <Intro />

                </motion.div>

                <div className="container h-[400px]">

                </div>

                <About />


                <Contact />

                <Footer />
            </div>

            {/* <motion.div style={{ y }}>
                <div className="mx-auto w-max px-10 mt-10 p-2 text-center font-medium text-sm bg-opacity-80 bg-secondary rounded-xl border-opacity-70 border-tertiary border-2">
                    Cupcake ipsum dolor sit amet apple pie. Sugar plum powder jelly biscuit wafer shortbread icing lollipop biscuit.<br />
                    Chocolate bar pudding pudding gummi bears lollipop.<br />
                    Jujubes soufflé donut cotton candy topping topping chocolate.
                </div>
            </motion.div> */}

        </section >
    );
}