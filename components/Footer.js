import Link from "next/link"
import { Github, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-white rounded-lg rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-xl">A</div>
              </div>
              <span className="font-semibold text-lg">Arya Design</span>
            </div>
            <p className="text-gray-400">Creating digital experiences that make a difference.</p>
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
              <Link href="#portfolio" className="block text-gray-400 hover:text-white">
                Portfolio
              </Link>
              <Link href="#contact" className="block text-gray-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-white">
                UI/UX Design
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white">
                Web Development
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white">
                Mobile Development
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white">
                Branding
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white">
                Cookie Policy
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2024 Arya Design. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

