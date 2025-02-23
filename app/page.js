"use client"

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const projects = [
    { title: "Project 1", description: "Description of project 1", image: "/placeholder.svg" },
    { title: "Project 2", description: "Description of project 2", image: "/placeholder.svg" },
    { title: "Project 3", description: "Description of project 3", image: "/placeholder.svg" },
    { title: "Project 4", description: "Description of project 4", image: "/placeholder.svg" },
  ];

  const tools = [
    { name: "React", image: "/placeholder.svg" },
    { name: "Next.js", image: "/placeholder.svg" },
    { name: "JavaScript", image: "/placeholder.svg" },
    { name: "Tailwind CSS", image: "/placeholder.svg" },
    { name: "Node.js", image: "/placeholder.svg" },
    { name: "PostgreSQL", image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection projects={projects} />
      <ToolsSection tools={tools} />
      <ContactSection />
      <Footer />
    </div>
  );
}

