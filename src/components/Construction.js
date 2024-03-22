import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Construction() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center gap-2 bg-opacity-80 bg-teal-600 rounded-xl">

                <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-center basis-full">
                    <FontAwesomeIcon icon={faHammer} size="xl" style={{ color: "#ffffff", }} />
                    <span className="p-4">Under Construction</span>
                </div>
            </div>
        </section>
    )
}