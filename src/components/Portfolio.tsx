import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {

    return (
        <section id="portfolio">
            <div className="h-dvh text-center pt-10 lg:pt-44" >

                <div className="container flex flex-col items-center justify-center  mx-auto bg-alt border-zinc-900 border-0 md:border-2 rounded-2xl">
                    <div><img className="w-96 lg:w-min" src="./botd_screenshot.png" /></div>
                    <div>
                        <span className="text-2xl uppercase">Burger of the Day App</span><br />
                        <ul>
                            <li className="border-0 border-b-2 my-2 mx-8 border-zinc-800" ><a href="https://burgeroftheday.netlify.app/">Site</a></li>
                            <li className="border-0 border-b-2 my-2 mx-8 border-zinc-800"><a href="https://github.com/LexxButOnline/burgeroftheday/">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div className="h-10"></div>
                <motion.a href="#contact" initial={{ opacity: 0.6 }} whileHover={{ opacity: 1 }}>
                    <FontAwesomeIcon icon={faChevronDown} size="6x" />
                </motion.a>
            </div>
        </section>
    );
}