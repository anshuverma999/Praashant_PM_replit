export default function EducationCertifications() {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Integral University, Lucknow",
      period: "2016 – 2018"
    },
    {
      degree: "Bachelor of Computer Science", 
      institution: "IGNOU, Delhi",
      period: "2010 – 2014"
    }
  ];

  const certifications = [
    {
      name: "Advanced Product Management",
      issuer: "Product School",
      year: "2022"
    },
    {
      name: "Team Leadership",
      issuer: "Udemy", 
      year: "2023"
    },
    {
      name: "AI in Salesforce (98% score)",
      issuer: "Salesforce",
      year: "2021"
    },
    {
      name: "AWS CloudWatch Practitioner",
      issuer: "Amazon Web Services",
      year: "2019"
    },
    {
      name: "DevOps Fundamentals",
      issuer: "Udemy",
      year: "2020"
    }
  ];

  return (
    <div className="apex-container">
      <section className="apex-section">
        <h2 className="apex-heading">Education & Certificates</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index}>
                  <h4 className="font-medium mb-2">{edu.degree}</h4>
                  <div className="text-muted-foreground mb-1">{edu.institution}</div>
                  <div className="text-sm text-muted-foreground">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Certificates</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index}>
                  <h4 className="font-medium mb-1">{cert.name}</h4>
                  <div className="text-muted-foreground text-sm">{cert.issuer}</div>
                  <div className="text-muted-foreground text-sm">{cert.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
