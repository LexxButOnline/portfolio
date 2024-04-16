import React from "react";
import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
    offscreenA: {
        visibility: "hidden",
        opacity: 0
    },
    offscreenB: {
        visibility: "hidden",
        opacity: 0,
        translateX: "50%"
    },
    onscreenA: {
        visibility: "visible",
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.1
        },
    },
    onscreenB: {
        visibility: "visible",
        translateX: "0%",
        opacity: 1,
        transition: {
            type: "spring",
            duration: 0.2,
            damping: 6,
            delay: 0.1,
            stiffness: 100
        },
    }
};

export default function Intro() {
    return (
        <section id="intro">
            <div className="flex  items-center justify-center mx-auto  text-center text-8xl font-medium">
                {/* <div className="inline-grid grid-cols-2 p-10 w-2/3 h-full content-center "> */}
                <div>
                    <motion.div initial="offscreenA"
                        whileInView="onscreenA"
                        viewport={{ once: true }} variants={textVariants} className="inline-block px-2  text-tertiary"
                    >

                        Hi.
                    </motion.div>

                    <motion.div initial="offscreenB"
                        whileInView="onscreenB"
                        viewport={{ once: true }} variants={textVariants} className="inline-block px-2 "
                    >
                        I'm Lexx.

                    </motion.div>
                </div>
            </div>
        </section >
    )
}