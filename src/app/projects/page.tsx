import { AboutSection } from "@/sections/About";
import AllProjectSection from "@/sections/AllProjectSection";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <ProjectsSection></ProjectsSection> */}
      <AllProjectSection></AllProjectSection>
      <TapeSection></TapeSection>
      <TestimonialsSection></TestimonialsSection>
      <AboutSection></AboutSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
};

export default page;
