'use client'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative">
            <div className="container mx-auto mt-10 p-10  bg-opacity-80 bg-teal-600 rounded-xl">
                <div className="bg-teal-700 text-neutral-200 rounded-xl flex p-6 md:flex-row flex-col gap-2">

                    <div className="basis-1/2  p-6 place-content-center">
                        <div className="flex">
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} size="8x" />
                            </div>
                            <div className="content-center px-4">
                                <span className="font-bold">Email:</span> <br />
                                <span className="font-medium">hello@lexxchaplin.com</span>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <FontAwesomeIcon icon={faLinkedin} size="9x" />
                            </div>
                            <div className="content-center px-4">
                                <span className="font-bold">LinkedIn:</span> <br />
                                <a href="https://www.linkedin.com/in/lexxchaplin/" >linkedin.com/in/lexxchaplin</a>
                            </div>
                        </div>
                    </div>

                    <form
                        netlify
                        name="contact"
                        onSubmit={handleSubmit}
                        className="basis-1/2 px-4 py-2">
                        <h2 className=" sm:text-4xl text-3xl mb-1 font-medium title-font">
                            Contact Me
                        </h2>
                        <p className="leading-relaxed mb-5">
                            Don't hesitate to reach out if you have a question or would like to work together!
                        </p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm ">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm ">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="message"
                                className="leading-7 text-sm ">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-neutral-200 bg-gray-900 py-2 px-6 focus:outline-none hover:bg-teal-950 rounded text-lg">
                            Submit
                        </button>
                    </form>

                </div>

            </div>
        </section>
    );
}