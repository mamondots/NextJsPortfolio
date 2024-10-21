import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      {/* <Header></Header> */}
      <HeroSection></HeroSection>
      <ProjectsSection></ProjectsSection>
      <TapeSection></TapeSection>
      <TestimonialsSection></TestimonialsSection>
      <AboutSection></AboutSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
}
