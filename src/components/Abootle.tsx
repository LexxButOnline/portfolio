import React from "react";
// import Intro from "@/components/Intro";
import TextAnim from "@/components/TextAnim";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";



const Schmorp = () => {
    const transitionVariants: Variants = {
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




    return (
        // <div className="text-secondary text-2xl p-10 md:text-4xl xl:text-8xl border-2 border-fontcolor border-dashed font-bold tracking-[-0.05em]">
        <motion.div variants={transitionVariants} initial="start" whileInView="anim">
            <div className="text-secondary relative text-4xl md:text-8xl font-bold tracking-[-0.05em] ">
                <div className="bg-tertiary invisible md:visible h-[300px] w-[400px] rotate-6 bottom-[0%] absolute -z-10"></div>
                <div className="w-3/4 md:w-full ml-[12%] md:ml-0"><img src="./lexx_sm.png" /></div>
            </div>

            <div className="text-secondary pt-6 text-5xl  font-bold tracking-[-0.05em] ">I am a...</div>
            <div className="text-fontcolor text-right text-4xl  font-bold tracking-[-0.05em] ">
                {/* <TextAnim delay={4} /> */}
                software developer.
            </div>
        </motion.div >
        // </div>
    )
}



export default function Abootle() {

    const moveText = {

        start: {
            opacity: 0,
            scale: 0,
        },
        end: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.6,
                duration: 1
            }

        }
    }

    //border-2 border-tertiary

    return (
        <section id="about">
            <div className="flex flex-col items-center overflow-hidden justify-center  mx-auto h-dvh ">
                <div>< Schmorp /></div>
                <div className="h-10"></div>
                <motion.div className="h-20 text-fontcolor" variants={moveText} initial="start" animate="end">
                    <motion.a href="#contact" initial={{ opacity: 0.6 }} whileHover={{ opacity: 1 }}>
                        <FontAwesomeIcon icon={faChevronDown} size="6x" />
                    </motion.a>
                </motion.div>
            </div>

        </section >
    );
}