import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img
            src="/placeholder.svg?height=200&width=200"
            alt="John Doe"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-xl"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="gradient-text">John Doe</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          IT Undergraduate Student passionate about web development, software
          engineering, and creating innovative digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg px-8 py-3">
            <Link href="#projects" className="flex items-center">
              View My Work
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 bg-transparent"
          >
            <Download className="mr-2" size={20} />
            Download CV
          </Button>
        </div>

        <div className="animate-bounce">
          <Link href="#about">
            <ArrowDown className="mx-auto text-gray-400" size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
}
