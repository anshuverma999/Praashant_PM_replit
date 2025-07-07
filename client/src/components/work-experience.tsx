export default function WorkExperience() {
  const experiences = [
    {
      title: "Sr. Technical Project Manager",
      company: "Mercans, Estonia",
      period: "2024 - Present",
      location: "Remote",
      current: true,
      description: "At Mercans, I spearhead product launches and analytics frameworks across multiple business lines, focusing on enhancing market penetration and driving revenue growth for enterprise clients including Fortune 500 companies.",
      achievements: [
        "Spearheaded 7 product launches, resulting in 18% YoY revenue growth and enhanced market penetration",
        "Rolled out analytics frameworks across 5 business lines, driving $2.3M in upsell opportunities", 
        "Migrated global teams to ClickUp, improving cross-team collaboration by 42%",
        "Oversaw enterprise accounts (Audi, Uber, Ford, Mastercard), boosting satisfaction scores through tailored delivery",
        "Led HRBlizz payroll system development, generating $5M in new revenue streams"
      ]
    },
    {
      title: "Sr. Project Manager", 
      company: "MyGold Pvt. Ltd",
      period: "2022 - 2024",
      location: "India",
      current: false,
      description: "As Senior Project Manager at MyGold, I delivered SaaS projects with Agile teams while managing PMO operations across multiple parallel initiatives, focusing on payment automation and risk management frameworks.",
      achievements: [
        "Delivered 18 SaaS projects with Agile teams, achieving 100% on-time delivery and full client acceptance",
        "Oversaw $15M+ in annual payment volume; implemented automation reducing transaction failures by 65%",
        "Managed PMO operations across 15+ parallel initiatives with 100% SLA compliance",
        "Established a proactive risk framework reducing project delays by 30%"
      ]
    },
    {
      title: "Sr. Project Manager",
      company: "Nexa Digital & Marketing",
      period: "2017 - 2022", 
      location: "UAE",
      current: false,
      description: "At Nexa Digital & Marketing, I championed ERP implementations across multiple countries while serving as ScrumMaster to accelerate delivery consistency and uncover significant business opportunities.",
      achievements: [
        "Championed ERP rollout across 3 countries, saving $1.2M in operational costs",
        "Introduced change management processes, achieving 95% adoption within 3 months",
        "Accelerated sprint velocity by 30% as ScrumMaster, improving delivery consistency",
        "Leveraged analytics to uncover $800K in upsell opportunities across B2B clients"
      ]
    },
    {
      title: "Developer & Analyst",
      company: "Eco Consultant Pvt Ltd",
      period: "2012 - 2017",
      location: "India",
      current: false,
      description: "At Eco Consultant, I focused on backend infrastructure design and code quality improvements while introducing marketing automation systems that significantly enhanced conversion rates.",
      achievements: [
        "Designed backend infrastructure improving query performance by 73%",
        "Conducted 200+ code reviews, reducing defect rates by 40% in production",
        "Introduced marketing automations increasing lead-to-conversion rate by 22%"
      ]
    }
  ];

  return (
    <div className="apex-container">
      <section className="apex-section">
        <h2 className="apex-heading">Work Experience</h2>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                  <div className="text-lg text-foreground mb-1">{exp.company}</div>
                </div>
                <div className="flex flex-col lg:items-end text-muted-foreground">
                  <div className="text-sm">{exp.period}</div>
                  <div className="text-sm">{exp.location}</div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <ul className="space-y-3 text-muted-foreground">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start space-x-3">
                    <span className="text-foreground mt-1">—</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
