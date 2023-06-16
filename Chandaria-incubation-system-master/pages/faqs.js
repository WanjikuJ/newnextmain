

import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import NavBar from "../components/NavBar";

export default function FaqsPage() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      
      <Faq />
      <Footer />
    </div>
  );
}
