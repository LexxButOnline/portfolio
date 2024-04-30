import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {

    return (
        <section id="portfolio">
            <div className="h-dvh text-center pt-10 lg:pt-44" >
                <div className="container flex flex-row items-center justify-evenly mx-auto bg-alt border-zinc-900 border-0 md:border-2 rounded-2xl">

                    <div>
                        <div><a href="https://lexxchaplin.com/"><img className="w-96 lg:w-min border-2 border-zinc-700 rounded-md my-2" src="./lexxchaplin_preview.png" /></a></div>
                        <div>
                            <div className="text-lg md:text-2xl">LexxChaplin.com</div>
                            <div className="text-sm md:text-base -mt-2">This Website</div>
                            <ul>
                                <li className="border-0 border-b-2 my-2 mx-8 border-zinc-800" ><a href="https://lexxchaplin.com/">Link</a></li>
                                <li className="border-0 border-b-2 my-2 mx-8 border-zinc-800"><a href="https://github.com/LexxButOnline/portfolio/">GitHub</a></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div><a href="https://burgeroftheday.netlify.app/"><img className="w-96 lg:w-min border-2 border-zinc-700 rounded-md my-2" src="./burgeroftheday_preview.png" /></a></div>
                        <div>
                            <div className="text-lg md:text-2xl">Burger of the Day App</div>
                            <div className="text-sm md:text-base -mt-2">Displays A Random Burger of the Day</div>
                            <ul>
                                <li className="border-0 border-b-2 my-2 mx-8 border-zinc-800" ><a href="https://burgeroftheday.netlify.app/">Link</a></li>
                                <li className="border-0 border-b-2 my-2 mx-8 border-zinc-800"><a href="https://github.com/LexxButOnline/burgeroftheday/">GitHub</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="h-10"></div>
                <motion.a href="#contact" initial={{ opacity: 0.6 }} whileHover={{ opacity: 1 }}>
                    <FontAwesomeIcon icon={faChevronDown} size="6x" />
                </motion.a>
            </div>
        </section >
    );
}