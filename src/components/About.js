import React from "react";


export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col gap-2 bg-opacity-80 bg-teal-600 rounded-xl">
                <div className="basis-1/3 bg-teal-200 bg-opacity-40 rounded-xl">
                    <img
                        className="object-cover object-center scale-75"
                        alt="hero"
                        src="./lexxtoon.png"
                    />
                </div>
                <div className="basis-2/3 bg-teal-700 text-white rounded-xl py-8 px-10 flex">
                    <div className="m-auto">
                        <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium">
                            Hi.
                            <br />I'm Lexx.
                        </h1>
                        <p className="mb-4 leading-relaxed">
                            I'm a software developer with 10 years of experience in Java development within the insurance industry.
                        </p >
                        <p className="mb-4 leading-relaxed">
                            Throughout both my professional and personal life, I have dabbled in many different technologies, thriving on my ability to quickly grasp new concepts.
                            I have always enjoyed frontend web development and have recently found myself drawn to UX/UI work.
                        </p>
                        <p className="mb-4 leading-relaxed">
                            Now, after several years of working mainly on the backend, I am excited to be reacquainting myself with the frontend side of things - to be turning my focus to modern front-end technologies and design principles.
                            I'm eager to apply my various skills to craft seamless solutions and creating a great user experience.
                        </p>

                        <p className="font-medium text-xl leading-relaxed">
                            Let's build something amazing together!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}