'use client'
import React from "react";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";




export default function Page() {
  return (
    <main>
      < Navbar />
      < Intro />
      < About />
      < Projects />
      < Contact />
      < Footer />
    </main >
  );
}
