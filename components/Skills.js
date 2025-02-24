"use client";
import Link from "next/link"
import { Progress } from "./ui/Progress"
import AnimatedTooltip from "./ui/animated-tooltip"

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "/pp.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
    "/pp.jpg",  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
    "/pp.jpg",
    },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
    "/pp.jpg",
    },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
    "/pp.jpg",
    },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
    "/pp.jpg",
  },
];

export default function Skills() {
  const skills = [
    { name: "UI/UX Design", percentage: 50 },
    { name: "Frontend Development", percentage: 85 },
    { name: "Graphic Design", percentage: 60 },
    { name: "Backend Development", percentage: 68 },
  ]

  return (
    <section id="skills" className="py-16 text-black sm:py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">My Skills</h2>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.percentage}%</span>
              </div>
              <Progress value={skill.percentage} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
