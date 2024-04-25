import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <header className="bg-alt border-b-2  border-b-zinc-900 border-solid rounded-lg  md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap text-secondary p-5 flex-col md:flex-row items-center">
                <a href="#intro" className="ml-3 title-font  font-medium mb-4 md:mb-0 text-xl">
                    Lexx Chaplin
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l  md:border-zinc-800	flex flex-wrap items-center text-base justify-center">
                    <a href="#about" className="mr-5 ">
                        About
                    </a>
                    {/* <a href="#skills" className="mr-5 ">
                        Skills
                    </a>
                    <a href="#projects" className="mr-5">
                        Projects
                    </a> */}
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center font-medium bg-primary border-2 border-l-tertiary border-alt py-1 px-3 focus:outline-none   hover:border-l-alt text-fontcolor rounded text-base mt-4 md:mt-0">
                    Get In Touch
                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}