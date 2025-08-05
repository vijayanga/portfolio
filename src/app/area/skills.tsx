"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // Assuming cn utility is available

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

const getBadgeColors = (idx: number) => {
  const colorIndex = (idx % 3) + 1; // Cycle through 3 color sets
  return {
    lightBg: `var(--badge-bg-light-${colorIndex})`,
    lightText: `var(--badge-text-light-${colorIndex})`,
    lightHover: `var(--badge-hover-light-${colorIndex})`,
    darkBg: `var(--badge-bg-dark-${colorIndex})`,
    darkText: `var(--badge-text-dark-${colorIndex})`,
    darkHover: `var(--badge-hover-dark-${colorIndex})`,
  };
};

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
          {skillCategories.map((category, index) => {
            return (
              <Card
                key={index}
                className={cn(
                  "hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm-custom border border-border",
                  "bg-card/80" // Use the --card variable with transparency
                )}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => {
                      const colors = getBadgeColors(skillIndex);
                      return (
                        <Badge
                          key={skillIndex}
                          variant="secondary" // Keep variant secondary for base styling if needed, but override colors
                          className={cn(
                            "text-sm py-1 px-3 border border-transparent rounded-full",
                            `bg-[${colors.lightBg}] text-[${colors.lightText}] hover:bg-[${colors.lightHover}]`,
                            `dark:bg-[${colors.darkBg}] dark:text-[${colors.darkText}] dark:hover:bg-[${colors.darkHover}]`
                          )}
                        >
                          {skill}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
