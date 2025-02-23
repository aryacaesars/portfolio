import Image from "next/image";

export default function ToolsSection({ tools }) {
  return (
    <section id="tools" className="py-16 sm:py-20 px-4 md:px-12 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-black font-bold mb-8 sm:mb-12 text-center">Tools & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image src={tool.image || "/placeholder.svg"} alt={tool.name} fill className="object-contain" />
              </div>
              <span className="font-medium text-sm sm:text-base">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}