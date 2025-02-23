"use client";
import React from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function ProjectSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} link={card.link} />
  ));

  return (
    <section id="project" className="py-16 text-black sm:py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">My Projects</h2>
        <Carousel items={cards} />
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