import React from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";



export default function Page() {
  return (
    <main className="text-teal-950 pt-12 bg-[#d9d5c0] bg-background-main bg-repeat body-font pb-10 min-h-screen">
      < About />
      < Contact />
    </main >
  );
}
