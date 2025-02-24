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

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#why", label: "Why Hire Me?" },
    { href: "#skills", label: "Skills" },
    { href: "#project", label: "Project" },
    { href: "#testimonials", label: "Testimonials" },
 
 
  ];

  return (
    <nav
      style={{ height: '64px' }} // Add explicit height
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.04)]" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              width={32} 
              height={32} 
              className="transition-transform hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium px-4"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Button - Right Side */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium
                hover:bg-gray-800 transition-all duration-200 hover:scale-105"
            >
              Contact me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600
              hover:text-black hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white/98 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-gray-600 hover:text-black transition-colors duration-200 text-lg font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={closeMenu}
            className="bg-black text-white px-6 py-2.5 rounded-full text-lg font-medium
              hover:bg-gray-800 transition-all duration-200 hover:scale-105"
          >
            Contact me
          </Link>
        </div>
      </div>
    </nav>
  );
}