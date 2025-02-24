import Link from "next/link"
import Image from "next/image" // Add this import
import { Github, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 rounded-t-[40px]">
      <div className="max-w-6xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-4xl font-bold z-50">
                <Image src="/footer-logo.svg" alt="Logo" width={40} height={40} className="text-black" />
              </Link>
            </div>
            <p className="text-gray-400">Creating digital experiences that make a difference.</p>
            {/* Social Media Icons */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#home" className="block text-gray-400 hover:text-white">
                Home
              </Link>
              <Link href="#about" className="block text-gray-400 hover:text-white">
                About
              </Link>
              <Link href="#why" className="block text-gray-400 hover:text-white">
                Why Hire Me?
              </Link>
              <Link href="#skills" className="block text-gray-400 hover:text-white">
                Skills
              </Link>
              <Link href="#project" className="block text-gray-400 hover:text-white">
                Project
              </Link>
              <Link href="#contact" className="block text-gray-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2024 Arya Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

