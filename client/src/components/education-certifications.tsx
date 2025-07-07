import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

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
      issuer: "Product School, 2022",
      color: "text-accent-blue"
    },
    {
      name: "Team Leadership",
      issuer: "Udemy, 2023",
      color: "text-accent-purple"
    },
    {
      name: "AI in Salesforce (98% score)",
      issuer: "2021",
      color: "text-success"
    },
    {
      name: "AWS CloudWatch Practitioner",
      issuer: "2019",
      color: "text-warning"
    },
    {
      name: "DevOps Fundamentals",
      issuer: "Udemy, 2020",
      color: "text-blue-400"
    }
  ];

  const additionalDetails = [
    "Technical Blogger with 15K+ followers",
    "Published Photographer", 
    "Early Adopter: Blockchain, AI, IoT",
    "Languages: English (Fluent), Hindi (Native)",
    "Mentor for Emerging Product Managers"
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Education & Certifications
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-accent-blue flex items-center">
              <GraduationCap className="mr-3" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-secondary-dark border-gray-800">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                    <div className="text-accent-blue mb-2">{edu.institution}</div>
                    <div className="text-gray-400">{edu.period}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-accent-purple flex items-center">
              <Award className="mr-3" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-secondary-dark border-gray-800">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <Award className={`${cert.color} text-xl flex-shrink-0`} />
                    <div>
                      <div className="font-medium">{cert.name}</div>
                      <div className="text-sm text-gray-400">{cert.issuer}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 gradient-text">Additional Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalDetails.map((detail, index) => (
              <Card key={index} className="bg-secondary-dark border-gray-800">
                <CardContent className="p-4 text-center">
                  <div className="text-gray-300">{detail}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
