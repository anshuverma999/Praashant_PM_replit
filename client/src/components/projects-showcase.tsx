import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsShowcase() {
  const projects = [
    {
      title: "HRBlizz Payroll System",
      description: "A revolutionary payroll management system generating $5M in new revenue streams",
      metric: "$5M+",
      metricLabel: "Revenue Impact",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Enterprise Analytics Framework",
      description: "Comprehensive analytics solution across 5 business lines driving upsell opportunities",
      metric: "$2.3M",
      metricLabel: "Upsell Generated",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Global ERP Implementation",
      description: "Multi-country ERP rollout delivering significant operational cost savings",
      metric: "$1.2M",
      metricLabel: "Cost Savings",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "SaaS Platform Delivery",
      description: "18 successful SaaS project deliveries with 100% client acceptance rate",
      metric: "100%",
      metricLabel: "Success Rate",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Payment Automation System",
      description: "Automated payment processing reducing transaction failures significantly",
      metric: "65%",
      metricLabel: "Failure Reduction",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Team Collaboration Platform",
      description: "ClickUp migration improving cross-team collaboration across global teams",
      metric: "42%",
      metricLabel: "Collaboration Boost",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Selected Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-secondary-dark border-gray-800 overflow-hidden card-hover">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-accent-blue">{project.metricLabel}</span>
                  <span className="text-success font-bold">{project.metric}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
