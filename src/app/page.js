import React from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



export default function Page() {
  return (
    <main className="bg-primary text-fontcolor pt-12 pb-10 min-h-screen">
      < About />
      < Contact />
      < Footer />
    </main >
  );
}
