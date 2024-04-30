import React, { useEffect } from 'react'
import { motion, useAnimate } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";



const HelloThere = () => {
    useEffect(() => {
        myAnimation();
    }, []);
    const [scope, animate] = useAnimate();

    async function myAnimation() {
        await animate(scope.current, { opacity: ['0%', '100%'], scale: [3, 1] }, {
            duration: 1, delay: 0.6,
            type: "spring",
            bounce: 0.8
        });
        await animate(scope.current, { x: 10 }, {
            ease: "easeInOut",
            duration: 1
        });
        await animate(
            scope.current,
            {
                x: -10
            },
            {
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                duration: 1
            }
        );
    }

    return (
        <motion.div className="text-secondary text-4xl opacity-0 md:text-8xl font-bold tracking-[-0.05em]" ref={scope}>
            <div >Hi.</div>
            <div>I'm Lexx.</div>
        </motion.div >
    )
}



export default function Intro() {

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
        <section id="intro">
            <div className="flex flex-col items-center overflow-hidden justify-center  mx-auto h-dvh ">
                <div><HelloThere /></div>
                <div className="h-10"></div>
                <motion.div className="h-20 text-fontcolor" variants={moveText} initial="start" animate="end">
                    <motion.a href="#about" initial={{ opacity: 0.6 }} whileHover={{ opacity: 1 }}>
                        <FontAwesomeIcon icon={faChevronDown} size="6x" />
                    </motion.a>
                </motion.div>
            </div>

        </section >
    );
}