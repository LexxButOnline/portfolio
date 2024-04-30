import React from "react";
import Ima from "@/components/Ima";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";



const AboutTile = () => {
    const enterVariants: Variants = {
        start: {
            visibility: "hidden",
            opacity: 0
        },
        anim: {
            visibility: "visible",
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.4
            },
        }
    };

    const transitionVariants: Variants = {
        start: {
            x: "-100%",
            opacity: 0
        },
        anim: {
            x: "0",
            opacity: 1,
            rotate: "192deg",
            transition: {
                duration: 0.8
            },
        }
    };

    const picVariants: Variants = {
        start: {
            opacity: 0,
            scale: 0
        },
        anim: {
            scale: 1,
            opacity: 1,
            rotate: "360deg",
            transition: {
                duration: 0.8
            },
        }
    };


    return (
        <div>
            <div className="relative inline-block text-4xl md:text-8xl font-bold tracking-[-0.05em] ">
                <motion.div variants={transitionVariants} initial="start" whileInView="anim" className="bg-tertiary invisible rounded-3xl md:visible h-[300px] w-[400px] bottom-32 rotate-12 left-8 absolute -z-10" ></motion.div>
                <motion.div variants={picVariants} initial="start" whileInView="anim" className="w-full hidden md:block -ml-2"><img className="rounded-lg " src="./lexx_md.png" /></motion.div>
                <motion.div variants={picVariants} initial="start" whileInView="anim" className="w-3/4 block md:hidden ml-[12%]"><img className="rounded-lg " src="./lexx_sm.png" /></motion.div>
            </div>
            <motion.div variants={enterVariants} initial="start" whileInView="anim">
                <div className="text-fontcolor pt-0 md:pt-6 text-center text-2xl md:text-4xl font-bold tracking-[-0.05em] ">
                    I am <Ima delay={4} />
                </div>
            </motion.div >
        </div>
    )
}

export default function About() {
    return (
        <section id="about">
            <div className="flex overflow-visible flex-col items-center pt-10 md:pt-20 justify-center  mx-auto h-dvh ">
                <div>< AboutTile /></div>
                <div className="h-10"></div>
                <motion.a href="#portfolio" initial={{ opacity: 0.6 }} whileHover={{ opacity: 1 }}>
                    <FontAwesomeIcon icon={faChevronDown} size="6x" />
                </motion.a>
            </div>
        </section >
    );
}