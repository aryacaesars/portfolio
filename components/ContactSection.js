import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 text-black md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>email@example.com</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-gray-600">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-gray-600">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-gray-600">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Message" className="h-32" />
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}