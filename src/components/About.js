import React from "react";


export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center gap-2 bg-opacity-80 bg-teal-600 rounded-xl">
                <div className="basis-1/3">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                </div>
                <div className="basis-2/3 bg-teal-700">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hewwo.
                        <br className="hidden lg:inline-block" />Dis Lexx.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                        laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                        Laborum, voluptas natus?
                    </p>
                </div>
            </div>
        </section>
    )
}