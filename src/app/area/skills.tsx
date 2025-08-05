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
      "Material-UI",
    ],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Python", "Java", "PHP", "REST APIs"],
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "MsSQL", "MongoDB", "Git", "VS Code", "Figma"],
  },
  {
    title: "Other Skills",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Leadership",
      "Testing",
      "Agile Methodology",
      "UI/UX Design",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 bg-card"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm py-1 px-3 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors
                      dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800"
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
