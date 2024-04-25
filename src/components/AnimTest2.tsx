import React, { useRef, useEffect, useState } from 'react'
import { motion } from "framer-motion";




const HelloThere = () => {

    const moveText = {

        start: {
            x: "38dvw", y: "36dvh", scale: 1
        },
        end: {
            scale: 0.6,
            x: 0,
            y: 0,
            transition: {
                delay: 0.6,
                duration: 0.8,
                type: "spring",
                bounce: 0.6
            }
        }
    }

    return (
        // <div className="text-secondary text-2xl p-10 md:text-4xl xl:text-8xl border-2 border-fontcolor border-dashed font-bold tracking-[-0.05em]">

        <motion.div className="text-secondary text-4xl m-4 xl:text-8xl border-2 border-fontcolor border-dashed font-bold tracking-[-0.05em]" variants={moveText} initial="start" animate="end">
            <div>Hi.</div>
            <div>I'm Lexx.</div>
        </motion.div>


        // </div>
    )
}



export default function AnimTest2() {






    return (
        <section id="animtest">
            <div id="boxRef" className="flex items-start justify-start border-2 border-tertiary mx-auto h-dvh ">
                <HelloThere />

            </div>
        </section >
    );
}