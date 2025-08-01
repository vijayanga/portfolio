import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Java",
      "PHP",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "Docker",
      "VS Code",
      "Figma",
    ],
  },
  {
    title: "Other Skills",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Agile Methodology",
      "UI/UX Design",
      "Testing",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm py-1 px-3 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
