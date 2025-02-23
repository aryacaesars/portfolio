import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProjectSection({ projects }) {
  return (
    <section id="project" className="py-16  text-black sm:py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">My Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <Image
                src={project.image || "/Union.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-[200px] sm:h-[300px] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                  <Button variant="outline" className="mt-4">
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}