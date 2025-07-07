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

export default function SkillsTools() {
  const skills = [
    "Agile & Scrum",
    "Sprint Planning", 
    "Risk Management",
    "Stakeholder Engagement",
    "Product Roadmapping",
    "User Story Development",
    "CI/CD Pipelines"
  ];

  const tools = [
    { name: "Jira", icon: CheckSquare },
    { name: "ClickUp", icon: MousePointer },
    { name: "Salesforce", icon: Cloud },
    { name: "Azure DevOps", icon: GitBranch },
    { name: "Java", icon: Coffee },
    { name: "Python", icon: Code },
    { name: "Kafka", icon: Activity },
    { name: "Trello", icon: BarChart3 }
  ];

  const languages = [
    "English",
    "Hindi"
  ];

  return (
    <div className="apex-container">
      <section className="apex-section">
        <h2 className="apex-heading">Skills & Tools</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="text-muted-foreground">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Tools</h3>
            <div className="grid grid-cols-2 gap-6">
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <div key={index} className="flex flex-col items-center p-4 apex-card">
                    <IconComponent size={32} className="mb-3" />
                    <div className="text-sm text-center">{tool.name}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Languages</h3>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <div key={index} className="text-muted-foreground">
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
