import React from "react";


export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex  md:flex-row flex-col gap-2 bg-primary rounded-sm  border-secondary border-4 ">
                <div className="bg-secondary basis-1/3 ">
                    <img
                        className="object-cover object-center scale-75"
                        alt="hero"
                        src="./lexxtoon.png"
                    />
                </div>
                <div className="basis-2/3 rounded-sm py-8 px-10 flex">
                    <div className="m-auto">
                        <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium">
                            Hi.
                            <br />I'm Lexx.
                        </h1>
                        <p className="mb-4 leading-relaxed">
                            I'm a software developer with 10 years of experience in Java development within the insurance industry.
                        </p >
                        <p className="mb-4 leading-relaxed">
                            Throughout my time, I have dabbled in many different technologies, thriving on my ability to quickly grasp new concepts.<br />
                            I have worked mainly on the backend side of things the past few years, but have also enjoyed experience as a fullstack developer.
                        </p>
                        <p className="mb-4 leading-relaxed">
                            I have always enjoyed frontend web development and have recently found myself drawn to UX/UI work.<br />
                            At the moment, I am excited to be reacquainting myself with the frontend side of things - turning my focus to modern front-end technologies and design principles.
                            I'm eager to draw on my diverse skillset, and my resourcefulness, to create meaningful solutions in a frontend or fullstack role (or a backend role, if I am enthusiastic about the company/work)!
                        </p>
                        <p className="mb-4 leading-relaxed">
                            I'm eager to draw on my diverse skillset, and my resourcefulness, to create meaningful solutions in a frontend or fullstack role (or a backend role, if I am enthusiastic about the company/work)!
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