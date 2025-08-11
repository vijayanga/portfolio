import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // Import Image component

export default function About() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top-8 duration-1000 ease-out">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I&apos;m a passionate IT undergraduate student with a love for
            technology and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
            {/* Using Next.js Image component for optimization */}
            <Image
              src="/aboutme.jpg"
              alt="Vijayanga Dissanayaka working on a laptop"
              width={600} // Provide appropriate width
              height={450} // Provide appropriate height (approx 90 * 5 = 450)
              className="rounded-lg shadow-xl w-full h-[22.5rem] object-cover" // Changed h-90 to h-[22.5rem]
              priority // If this image is above the fold
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 ease-out">
              <Card className="hover:shadow-md transition-shadow duration-200 bg-[var(--card-bg-1)]">
                <CardContent className="p-6 text-center">
                  <GraduationCap
                    className="mx-auto mb-4 text-blue-600"
                    size={40}
                  />
                  <h3 className="font-semibold text-foreground">Education</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    BSc (Hons) IT
                  </p>
                  <p className="text-xs text-muted-foreground">
                    University of Moratuwa
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow duration-200 bg-[var(--card-bg-2)]">
                <CardContent className="p-6 text-center">
                  <Code className="mx-auto mb-4 text-purple-600" size={40} />
                  <h3 className="font-semibold text-foreground">Projects</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Diverse Portfolio
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Web, Mobile, Backend
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow duration-200 bg-[var(--card-bg-3)]">
                <CardContent className="p-6 text-center">
                  <Coffee className="mx-auto mb-4 text-orange-600" size={40} />
                  <h3 className="font-semibold text-foreground">Experience</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Hands-on Development
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Internships & Personal Work
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-4 animate-in fade-in slide-in-from-right-8 duration-1000 ease-out">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m currently pursuing a BSc (Hons) in Information Technology at
              the University of Moratuwa, where I’ve built a strong foundation
              in programming, database management, and software development. My
              tech journey began with an interest in how websites work and has
              evolved into a passion for creating practical, user-friendly
              applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Throughout my studies, I’ve gained hands-on experience with a
              variety of technologies, including React, Node.js, Django, and
              database systems. I focus on writing clean, scalable code while
              keeping UX/UI principles in mind to create engaging user
              experiences. I’m committed to staying up-to-date with the latest
              trends in tech and enjoy participating in tech communities and
              personal projects.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m eager to contribute to projects that make a meaningful impact
              and help businesses innovate with technology. If you’re looking
              for a dedicated, passionate developer with a diverse skill set,
              feel free to explore my work and get in touch!
            </p>

            <div className="mt-8 text-center md:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 ease-out">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 bg-background/80 backdrop-blur-sm-custom border-2 border-border hover:border-blue-500 hover:bg-background/90 transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Link
                  href="#projects"
                  className="flex items-center justify-center md:inline-flex"
                >
                  Explore My Projects
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
