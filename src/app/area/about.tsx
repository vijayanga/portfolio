import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Coffee } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate IT undergraduate student with a love for technology
            and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center ">
          <div>
            <img
              src="/aboutme.jpg"
              alt="About me"
              className="rounded-lg shadow-xl w-full h-90"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
              <Card>
                <CardContent className="p-1 text-center">
                  <GraduationCap
                    className="mx-auto mb-4 text-blue-600"
                    size={40}
                  />
                  <h3 className="font-semibold text-gray-900">Education</h3>
                  <p className="text-sm text-gray-600 mt-2">IT Undergraduate</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-1 text-center">
                  <Code className="mx-auto mb-4 text-purple-600" size={40} />
                  <h3 className="font-semibold text-gray-900">Projects</h3>
                  <p className="text-sm text-gray-600 mt-2">10+ Completed</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-1 text-center">
                  <Coffee className="mx-auto mb-4 text-orange-600" size={40} />
                  <h3 className="font-semibold text-gray-900">Experience</h3>
                  <p className="text-sm text-gray-600 mt-2">2+ Years</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I’m currently pursuing a BSc (Hons) in Information Technology at
              the University of Moratuwa, where I’ve built a strong foundation
              in programming, database management, and software development. My
              tech journey began with an interest in how websites work and has
              evolved into a passion for creating practical, user-friendly
              applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Throughout my studies, I’ve gained hands-on experience with a
              variety of technologies, including React, Node.js, Django, and
              database systems. I focus on writing clean, scalable code while
              keeping UX/UI principles in mind to create engaging user
              experiences. I’m committed to staying up-to-date with the latest
              trends in tech and enjoy participating in tech communities and
              personal projects.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I’m eager to contribute to projects that make a meaningful impact
              and help businesses innovate with technology. If you’re looking
              for a dedicated, passionate developer with a diverse skill set,
              feel free to explore my work and get in touch!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
