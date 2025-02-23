import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-sm" : "bg-transparent"
      } flex items-center justify-between px-4 sm:px-6 py-4 md:px-12`}
    >
      <Link href="/" className="text-4xl font-bold z-50">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} className="text-black" />
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <Link href="#home" className="text-black hover:text-gray-600">
          Home
        </Link>
        <Link href="#about" className="text-black hover:text-gray-600">
          About
        </Link>
        <Link href="#project" className="text-black hover:text-gray-600">
          Project
        </Link>
        <Link href="#tools" className="text-black hover:text-gray-600">
          Tools
        </Link>
      </div>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50 p-2">
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link href="#home" onClick={closeMenu} className="text-2xl font-medium">
            Home
          </Link>
          <Link href="#about" onClick={closeMenu} className="text-2xl font-medium">
            About
          </Link>
          <Link href="#project" onClick={closeMenu} className="text-2xl font-medium">
            Project
          </Link>
          <Link href="#tools" onClick={closeMenu} className="text-2xl font-medium">
            Tools
          </Link>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Contact me
          </Link>
        </div>
      </div>

      <Link
        href="#contact"
        className="hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
      >
        Contact me
      </Link>
    </nav>
  );
}