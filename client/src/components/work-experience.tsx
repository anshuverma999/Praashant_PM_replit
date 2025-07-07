import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function WorkExperience() {
  const experiences = [
    {
      title: "Sr. Technical Project Manager",
      company: "Mercans, Estonia (Remote)",
      period: "Jun 2024 – Present",
      current: true,
      metrics: [
        { label: "YoY Revenue Growth", value: "18%" },
        { label: "New Revenue Streams", value: "$5M" }
      ],
      achievements: [
        "Spearheaded 7 product launches, resulting in 18% YoY revenue growth and enhanced market penetration",
        "Rolled out analytics frameworks across 5 business lines, driving $2.3M in upsell opportunities",
        "Migrated global teams to ClickUp, improving cross-team collaboration by 42%",
        "Oversaw enterprise accounts (Audi, Uber, Ford, Mastercard), boosting satisfaction through tailored delivery",
        "Led HRBlizz payroll system development, generating $5M in new revenue streams"
      ]
    },
    {
      title: "Sr. Project Manager",
      company: "MyGold Pvt. Ltd, India",
      period: "Apr 2022 - Jun 2024",
      current: false,
      metrics: [
        { label: "On-time Delivery", value: "100%" },
        { label: "Failure Reduction", value: "65%" }
      ],
      achievements: [
        "Delivered 18 SaaS projects with Agile teams, achieving 100% on-time delivery and full client acceptance",
        "Oversaw $15M+ in annual payment volume; implemented automation reducing transaction failures by 65%",
        "Managed PMO operations across 15+ parallel initiatives with 100% SLA compliance",
        "Established a proactive risk framework reducing project delays by 30%"
      ]
    },
    {
      title: "Sr. Project Manager",
      company: "Nexa Digital & Marketing, UAE",
      period: "Jul 2017 - Mar 2022",
      current: false,
      metrics: [
        { label: "Cost Savings", value: "$1.2M" },
        { label: "Sprint Velocity Boost", value: "30%" }
      ],
      achievements: [
        "Championed ERP rollout across 3 countries, saving $1.2M in operational costs",
        "Introduced change management processes, achieving 95% adoption within 3 months",
        "Accelerated sprint velocity by 30% as ScrumMaster, improving delivery consistency",
        "Leveraged analytics to uncover $800K in upsell opportunities across B2B clients"
      ]
    },
    {
      title: "Developer & Analyst",
      company: "Eco Consultant Pvt Ltd, India",
      period: "April 2012 – Mar 2017",
      current: false,
      metrics: [
        { label: "Performance Improvement", value: "73%" },
        { label: "Defect Reduction", value: "40%" }
      ],
      achievements: [
        "Designed backend infrastructure improving query performance by 73%",
        "Conducted 200+ code reviews, reducing defect rates by 40% in production",
        "Introduced marketing automations increasing lead-to-conversion rate by 22%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Work Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-secondary-dark border-gray-800 card-hover">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="text-accent-blue font-medium text-lg">{exp.company}</div>
                  </div>
                  <Badge 
                    variant={exp.current ? "default" : "secondary"}
                    className={`mt-4 lg:mt-0 ${exp.current ? 'bg-accent-blue text-white' : 'bg-gray-600/20 text-gray-400'}`}
                  >
                    {exp.period}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {exp.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="bg-primary-dark/50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-accent-blue mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <ul className="space-y-3 text-gray-300">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-accent-blue mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
