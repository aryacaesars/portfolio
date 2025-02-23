import Image from "next/image";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 md:px-12 border-t">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/placeholder.svg?height=30&width=30" alt="Logo" width={30} height={30} />
          <span className="font-semibold">Arya Achmad Caesar</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-600">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-600">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-600">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
        <span className="text-sm text-gray-500">© 2024 All rights reserved.</span>
      </div>
    </footer>
  );
}