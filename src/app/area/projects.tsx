import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import Image component

const projects = [
  {
    title: "Garage Management Project",
    description:
      "I developed an efficient and scalable Garage Appointment Management System that integrates key user modules, including Customer, Manager, Supervisor, and Technician. The system optimizes the appointment scheduling process, ensuring timely service delivery and enhancing workflow efficiency. It streamlines the overall operations, reducing delays and improving service quality. The solution is designed to be flexible and scalable, accommodating future growth and changes in the garage's operational needs.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    //  liveUrl: "#",
    githubUrl: "https://github.com/orgs/Bytebuilder2-0/repositories",
  },
  {
    title: "Tic Tac Toe Hardware Project",
    description:
      "I designed an innovative Tic Tac Toe game featuring three modes: Double Player, Single Player, and RFID, each providing a unique experience. The game integrates an advanced illumination system, using LED lights to visually enhance player interaction and highlight game progress. In Double Player Mode, players engage in real-time, with seamless hardware-software communication for instant move updates. RFID integration allows players to place moves with RFID tags, blending physical and digital elements for an immersive, interactive gameplay experience.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Arduino Mega", "ESP32", "C++", "FireBase", "RFID"],
    // liveUrl: "#",
    githubUrl: "https://github.com/vijayanga/tic-tac-toe-game.git",
  },
  {
    title: "Teacher On website ",
    description:
      "I developed an Online Tuition Platform for students, featuring an intuitive frontend design. The platform allows students to view available classes and select classes based on their preferences. This user-friendly interface streamlines the process of class selection and enhances the overall student experience.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Html", "Css", "js"],
    // liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "I developed a portfolio website to showcase my skills, projects, and contact details. The site highlights my technical expertise with an intuitive design,seamless navigation, and responsive layout, offering a professional platform for potential employers and clients to learn more about my work and easily get in touch.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    // liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on during my studies
            and personal time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-[var(--card-bg-2)]"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500} // Adjust the width as needed
                  height={300} // Adjust the height as needed
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
