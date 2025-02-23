import Image from "next/image";

const aboutContent = {
  title: "About Me",
  heading: "Who am I?",
  description:
    "I'm a passionate Full Stack Developer with a keen interest in building modern web applications. I specialize in creating user-friendly interfaces and robust backend systems.",
  skillsTitle: "Skills",
  skills: [
    "Communication & Collaboration",
    "Project Management",
    "Web Development",
    "Problem-Solving & Critical Thinking",
  ],
};

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 md:px-12 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-black text-center">
          {aboutContent.title}
        </h2>
        <div className="grid md:grid-cols-[2fr,1fr] gap-8 sm:gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold">{aboutContent.heading}</h3>
            <p className="text-gray-600 leading-relaxed">{aboutContent.description}</p>
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold">{aboutContent.skillsTitle}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutContent.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        {/* Picture */}
          <div className="relative h-[500px] w-full sm:h-[500px] rounded-[180px] overflow-hidden md:mx-auto">
            <Image src="/pp.jpg" alt="About Me" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}