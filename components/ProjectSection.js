"use client";
import React, { useState, useEffect, useRef } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function ProjectSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const carouselRef = useRef(null);

  const categories = ["All", "Artificial Intelligence", "Productivity", "Product", "iOS", "Hiring"];

  const filteredData = selectedCategory === "All" ? data : data.filter(card => card.category === selectedCategory);

  const cards = filteredData.map((card, index) => (
    <Card 
      key={card.src} 
      card={card} 
      index={index} 
      link={card.link}
      isInfinite={selectedCategory === "All"} 
    />
  ));

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, [selectedCategory]);

  return (
    <section id="project" className="py-4 text-black sm:py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">My Projects</h2>
        <div className="flex justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 mx-2 rounded-full ${selectedCategory === category ? "bg-black text-white" : "bg-gray-200 text-black"} transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="overflow-y-auto max-h-screen">
          <Carousel 
            ref={carouselRef} 
            items={cards} 
            isInfinite={selectedCategory === "All"} 
          />
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/pp.jpg",
    link: "https://undagicorp.com",
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/pp.jpg",
    link: "https://example.com/projects/productivity",
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/pp.jpg",
    link: "https://example.com/projects/apple-vision-pro",
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/pp.jpg",
    link: "https://example.com/projects/iphone-maps",
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/pp.jpg",
    link: "https://example.com/projects/ios-photography",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/pp.jpg",
    link: "https://example.com/projects/hiring",
  },
];