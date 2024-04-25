import React, { useState } from 'react'
import { motion } from "framer-motion";




function HelloThere() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.6
            }
        }
    }

    const child = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.8,
                staggerChildren: 0.3
            }
        }
    }

    const grandchild = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    const moveName = {
        start: {
            x: 0, y: 0, scale: 1
        },
        end: {
            x: "-10vw",
            y: "-10vh",
            scale: 0.6,
            transition: {
                delay: 2.5
            }
        }
    }
    return (
        <div>
            <motion.div variants={moveName} initial="start" animate="end">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show" className="text-secondary text-8xl leading-[80px] font-extrabold tracking-[-0.05em]">
                    <motion.div variants={child}>
                        Hi.<br />
                        <motion.span variants={grandchild}>I'm </motion.span>
                        <motion.span variants={grandchild}>Lexx!</motion.span>
                    </motion.div>
                </motion.div>
            </motion.div>
            <Blurb />
        </div>
    )
}

function Blurb() {
    const animText = {
        start: {
            x: "-300px",
            y: "-300px", opacity: 0
        },
        end: {
            opacity: 1,
            transition: {
                delay: 4
            }
        }
    }

    return (
        <motion.div className="text-tertiary text-4xl leading-[80px] font-bold tracking-[-0.05em]" variants={animText} initial="start" animate="end">
            I'm just some guy, you know?
        </motion.div>
    )
}


export default function AnimTest() {
    return (
        <section id="animtest">
            <div className="container flex items-center justify-center mx-auto h-dvh ">
                <HelloThere />

            </div>
        </section >
    );
}