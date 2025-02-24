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

  useEffect(() => {
    // Handle scroll lock when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
      style={{ height: '64px' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)]" 
          : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={40} 
                height={40} 
                className="transition-transform hover:scale-110"
              />
            </div>
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
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md 
              text-gray-800 hover:text-black hover:bg-gray-100 transition-colors duration-200"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white
          transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Close button */}
        <div className="fixed top-4 right-4 z-50">
          <button 
            onClick={closeMenu}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Mobile menu content */}
        <div className="flex flex-col items-center justify-start min-h-screen pt-20 pb-8 px-6 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-gray-800 hover:text-black transition-colors duration-200 
                text-lg font-medium py-2 px-4 rounded-lg hover:bg-gray-50 w-full text-center"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-6">
            <Link
              href="#contact"
              onClick={closeMenu}
              className="bg-black text-white px-8 py-3 rounded-full text-base font-medium
                hover:bg-gray-800 transition-all duration-200 hover:scale-105 inline-block"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}