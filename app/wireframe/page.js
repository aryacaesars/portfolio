"use client"

import Link from "next/link"
import { Code } from "lucide-react"

const wireframeComponents = [
  {
    title: "Navigation",
    description: "Fixed navbar with responsive menu",
    code: `<Navbar />`,
    image: (
      <div className="w-full h-16 bg-gray-200 flex items-center px-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="hidden md:flex gap-4 mx-auto">
          {[1,2,3,4].map(i => (
            <div key={i} className="w-20 h-2 bg-gray-300 rounded"></div>
          ))}
        </div>
        <div className="w-24 h-8 bg-gray-300 rounded-full"></div>
      </div>
    )
  },
  {
    title: "Hero Section",
    description: "Clean, centered layout with animated text",
    code: `<HeroSection />`,
    image: (
      <div className="w-full aspect-[16/9] bg-gray-100 flex flex-col items-center justify-center gap-8 p-8">
        <div className="w-3/4 h-12 bg-gray-200 rounded-lg"></div>
        <div className="w-96 h-72 bg-gray-200 rounded-3xl"></div>
        <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
        <div className="flex gap-4">
          <div className="w-32 h-10 bg-gray-300 rounded-full border-2 border-gray-300"></div>
          <div className="w-32 h-10 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "About Section",
    description: "Two-column layout with animated content",
    code: `<AboutSection />`,
    image: (
      <div className="w-full aspect-[16/9] bg-gray-100 p-8">
        <div className="grid md:grid-cols-2 gap-12 h-full">
          <div className="space-y-4">
            <div className="w-1/2 h-8 bg-gray-200 rounded-lg mb-8"></div>
            <div className="w-full h-4 bg-gray-200 rounded"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
            <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-square bg-gray-200 rounded-2xl p-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl mb-4"></div>
                <div className="w-3/4 h-3 bg-gray-300 rounded mb-2"></div>
                <div className="w-full h-2 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Skills Section",
    description: "Grid layout with animated progress bars",
    code: `<Skills />`,
    image: (
      <div className="w-full aspect-[16/9] bg-gray-100 p-8">
        <div className="w-1/2 h-8 bg-gray-200 rounded-lg mb-12 mx-auto"></div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
            <div key={i} className="space-y-6">
              {[1,2,3].map(j => (
                <div key={j} className="space-y-2">
                  <div className="w-24 h-3 bg-gray-200 rounded"></div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gray-800 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Projects Section",
    description: "Interactive carousel with project cards",
    code: `<ProjectSection />`,
    image: (
      <div className="w-full aspect-[16/9] bg-gray-100 p-8">
        <div className="w-1/2 h-8 bg-gray-200 rounded-lg mb-8 mx-auto"></div>
        <div className="flex gap-4 overflow-hidden">
          {[1,2,3].map(i => (
            <div key={i} className="min-w-[300px] aspect-[4/3] bg-gray-200 rounded-2xl p-4 flex flex-col justify-between">
              <div className="w-full h-1/2 bg-gray-300 rounded-xl"></div>
              <div className="space-y-2">
                <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                <div className="w-full h-3 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Testimonials",
    description: "Animated testimonial cards",
    code: `<Testimonials />`,
    image: (
      <div className="w-full aspect-[16/9] bg-gray-100 p-8">
        <div className="w-1/2 h-8 bg-gray-200 rounded-lg mb-12 mx-auto"></div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="w-24 h-3 bg-gray-200 rounded mb-1"></div>
                  <div className="w-20 h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-2 bg-gray-200 rounded"></div>
                <div className="w-5/6 h-2 bg-gray-200 rounded"></div>
                <div className="w-4/6 h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Contact Section",
    description: "Contact form with social links",
    code: `<ContactSection />`,
    image: (
      <div className="w-full aspect-[16/9] bg-gray-100 p-8">
        <div className="w-1/2 h-8 bg-gray-200 rounded-lg mb-12 mx-auto"></div>
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-full h-12 bg-gray-200 rounded-lg"></div>
          <div className="w-full h-12 bg-gray-200 rounded-lg"></div>
          <div className="w-full h-32 bg-gray-200 rounded-lg"></div>
          <div className="w-full h-12 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    )
  }
];

export default function WireframePage() {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Portfolio Wireframes</h1>
          </div>
  
          <div className="flex flex-col space-y-16">
            {wireframeComponents.map((component, index) => (
              <div key={index}>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  {component.image}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }