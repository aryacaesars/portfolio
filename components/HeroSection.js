import Image from "next/image";
import Link from "next/link";

const HERO_CONTENT = {
  title: {
    prefix: "Hi, I'm",
    firstName: "Arya",
    middleName: "Achmad",
    lastName: "Caesar"
  },
  buttons: [
    {
      text: "About Me",
      href: "#about",
      variant: "outline"
    },
    {
      text: "Discover my project",
      href: "#project",
      variant: "solid"
    }
  ]
};

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex flex-col items-center justify-center px-4">
      <div className="z-10 flex flex-col items-center text-center space-y-8 max-w-full">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black px-4">
          {HERO_CONTENT.title.prefix}{" "}
          <span>{HERO_CONTENT.title.firstName}</span>{" "}
          <span className="italic font-normal">{HERO_CONTENT.title.middleName}</span>{" "}
          <span>{HERO_CONTENT.title.lastName}</span>
        </h1>

        <div className="flex flex-col items-center gap-4 max-w-sm">
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
          <p className="text-gray-600 text-lg md:text-xl max-w-md">
            A passionate Frontend Developer crafting beautiful web experiences
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 px-4">
          {HERO_CONTENT.buttons.map((button) => (
            <Link
              key={button.href}
              href={button.href}
              className={`px-8 py-3 rounded-full transition-colors text-center ${
                button.variant === "outline"
                  ? "text-black border-2 border-black hover:bg-black hover:text-white"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}