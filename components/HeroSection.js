import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex flex-col items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute w-full whitespace-nowrap text-[50px] sm:text-[80px] md:text-[130px] font-light leading-none opacity-70 -rotate-12 top-1/4 -translate-y-1/2 text-[#d9d9d9]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
        </div>
        <div className="absolute w-full whitespace-nowrap text-[50px] sm:text-[80px] md:text-[130px] font-light leading-none opacity-70 -rotate-12 top-2/4 -translate-y-1/2 text-[#d9d9d9]">
          ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur
        </div>
        <div className="absolute w-full whitespace-nowrap text-[50px] sm:text-[80px] md:text-[130px] font-light leading-none opacity-70 -rotate-12 top-3/4 -translate-y-1/2 text-[#d9d9d9]">
          adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna
        </div>
      </div>

      <div className="z-10 flex flex-col items-center text-center space-y-8 max-w-full">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black px-4">
          Hi, I'm <span>Arya</span> <span className="italic font-normal">Achmad</span>{" "}
          <span>Caesar!</span>
        </h1>

        <div className="flex max-w-sm">
          <div className="relative overflow-hidden">
            <Image
              src="/Union.svg"
              alt="Profile"
              width={516}
              height={387}
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 px-4">
          <Link
            href="#about"
            className="px-8 py-3 text-black border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors text-center"
          >
            About Me
          </Link>
          <Link
            href="#project"
            className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center"
          >
            Discover my project
          </Link>
        </div>
      </div>
    </section>
  );
}