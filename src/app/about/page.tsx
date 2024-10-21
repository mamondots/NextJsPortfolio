import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { TestimonialsSection } from "@/sections/Testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutSection></AboutSection>
      <TestimonialsSection></TestimonialsSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
};

export default page;
