"use client"

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Why from "@/components/WhySection";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  const projects = [
    { title: "Project 1", description: "Description of project 1", image: "/placeholder.svg" },
    { title: "Project 2", description: "Description of project 2", image: "/placeholder.svg" },
    { title: "Project 3", description: "Description of project 3", image: "/placeholder.svg" },
    { title: "Project 4", description: "Description of project 4", image: "/placeholder.svg" },
  ];


  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Why />
      <Skills />
      <ProjectSection projects={projects} />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}

