"use client";

import { useState, useEffect } from "react";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const titles = [
    "Full Stack Developer",
    "IT Undergraduate",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentTitle.length) {
            setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, titles]);

  const handleDownloadCV = () => {
    // Create a temporary link to download CV
    const link = document.createElement("a");
    link.href = "/cv/Mycv.pdf"; // You'll need to add your CV to public/cv/
    link.download = "Vijayanga_Dissanayaka_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background pt-16">
        <div className="animate-pulse text-center">
          <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-8 dark:bg-gray-700"></div>
          <div className="h-8 bg-gray-300 rounded w-96 mx-auto mb-4 dark:bg-gray-700"></div>
          <div className="h-4 bg-gray-300 rounded w-64 mx-auto dark:bg-gray-700"></div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-background pt-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Adjusted colors for better dark mode visibility */}
        <div className="absolute -top-10 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Image with enhanced styling */}
        <div className="mb-8 relative group">
          <div className="relative">
            <Image
              src="/images/profile.jpg"
              alt="Vijayanga Dissanayaka"
              width={192}
              height={192}
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-2xl transform transition-transform duration-300 group-hover:scale-105 dark:border-gray-700"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rw="
            />
            <div className="absolute"></div>
          </div>
        </div>

        {/* Enhanced greeting with location */}
        <div className="mb-4">
          <div className="flex items-center justify-center text-muted-foreground mb-2">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm">Colombo, Sri Lanka</span>
          </div>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Hello there! 👋
          </p>
        </div>

        {/* Main heading with enhanced styling */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
          I'm <span className="gradient-text">Vijayanga Dissanayaka</span>
        </h1>

        {/* Typing animation for role */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground h-12 flex items-center justify-center">
            <span className="gradient-text">{displayedText}</span>
            <span className="animate-pulse ml-1">|</span>
          </h2>
        </div>

        {/* Enhanced description with better formatting */}
        <div className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto space-y-4 animate-fade-in-up animation-delay-300">
          <p className="leading-relaxed">
            Passionate <strong>IT undergraduate</strong> with a drive for
            creating innovative digital solutions that bridge the gap between
            technology and user experience.
          </p>
          <p className="leading-relaxed">
            Specializing in <strong>full-stack development</strong>, I love
            exploring cutting-edge technologies and building scalable
            applications that solve real-world problems.
          </p>
        </div>

        {/* Enhanced action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up animation-delay-500">
          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Link href="#projects" className="flex items-center">
              View My Work
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-border hover:border-blue-500 hover:bg-blue-50 transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl
            dark:bg-gray-800/80 dark:hover:border-blue-400 dark:hover:bg-gray-700"
          >
            <Download className="mr-2" size={20} />
            Download CV
          </Button>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="animate-bounce animation-delay-1000">
          <Link
            href="#about"
            className="inline-block p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-110
            dark:bg-gray-800/80 dark:shadow-none dark:hover:bg-gray-700"
          >
            <ArrowDown
              className="text-muted-foreground hover:text-blue-600 transition-colors duration-200 dark:hover:text-blue-400"
              size={32}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
