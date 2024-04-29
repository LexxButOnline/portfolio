'use client'
import React from "react";

// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
// import About from "@/components/About";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";





export default function Page() {
  return (
    <main>
      < Navbar />
      < Intro />
      < About />
      < Projects />
      < Contact />
      {/* < Footer /> */}


    </main >
  );
}
