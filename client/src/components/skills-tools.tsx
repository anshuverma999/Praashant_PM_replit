import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  CheckSquare, 
  MousePointer, 
  Cloud, 
  GitBranch, 
  Coffee, 
  Code, 
  Activity, 
  BarChart3 
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function SkillsTools() {
  const skillCategories = [
    {
      title: "Project Management",
      color: "text-accent-blue",
      skills: [
        { name: "Agile & Scrum", level: 100 },
        { name: "Sprint Planning", level: 100 },
        { name: "Risk Management", level: 90 },
        { name: "Stakeholder Engagement", level: 100 }
      ]
    },
    {
      title: "Product Strategy",
      color: "text-accent-purple",
      skills: [
        { name: "Roadmapping", level: 100 },
        { name: "User Story Development", level: 90 },
        { name: "Market Research", level: 85 },
        { name: "Competitive Analysis", level: 90 }
      ]
    },
    {
      title: "Technical Expertise",
      color: "text-success",
      skills: [
        { name: "CI/CD Pipelines", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Java & Python", level: 80 },
        { name: "Azure DevOps", level: 85 }
      ]
    }
  ];

  const tools = [
    { name: "Jira", icon: CheckSquare, color: "text-accent-blue" },
    { name: "ClickUp", icon: MousePointer, color: "text-accent-purple" },
    { name: "Salesforce", icon: Cloud, color: "text-success" },
    { name: "Azure DevOps", icon: GitBranch, color: "text-blue-400" },
    { name: "Java", icon: Coffee, color: "text-orange-400" },
    { name: "Python", icon: Code, color: "text-warning" },
    { name: "Kafka", icon: Activity, color: "text-red-400" },
    { name: "Trello", icon: BarChart3, color: "text-purple-400" }
  ];

  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={elementRef} id="skills" className="py-20 bg-secondary-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 gradient-text transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Skills & Tools
        </h2>
        
        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`transition-all duration-800 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`transition-all duration-500 ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-[-20px]'
                    }`}
                    style={{ transitionDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={isVisible ? skill.level : 0} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <Card 
                key={index} 
                className={`bg-secondary-dark border-gray-800 card-hover transition-all duration-600 ${
                  isVisible 
                    ? 'opacity-100 scale-100 rotate-0' 
                    : 'opacity-0 scale-75 rotate-12'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <IconComponent size={32} className={`${tool.color} mb-3 mx-auto`} />
                  <div className="text-sm text-gray-300">{tool.name}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary Section */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <p className="text-xl text-gray-300 leading-relaxed">
            Results-driven Product & Technical Project Manager with{" "}
            <span className="text-accent-blue font-semibold">12+ years of experience</span>{" "}
            leading cross-functional teams in the fintech, healthcare, and enterprise sectors. 
            Adept in Agile delivery, stakeholder engagement, cloud-based CI/CD pipelines, and 
            data-driven product strategy. Proven track record of launching digital products that 
            generated{" "}
            <span className="text-accent-purple font-semibold">$10M+ in revenue</span>{" "}
            while optimizing processes to reduce costs by up to{" "}
            <span className="text-success font-semibold">30%</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
