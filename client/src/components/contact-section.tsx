import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, Download } from "lucide-react";
import resumePdf from "@assets/Prashant_Verma_Project_Manager_2025_1751877029559.pdf";

export default function ContactSection() {
  const handleDownloadResume = () => {
    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Prashant_Verma_Resume_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-secondary-dark/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 gradient-text">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Ready to drive your next project to success? Let's discuss how my expertise 
          in product management and technical leadership can benefit your organization.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <a 
            href="mailto:thatsme.prashantt@gmail.com" 
            className="block"
          >
            <Card className="bg-secondary-dark border-gray-800 card-hover">
              <CardContent className="p-6 text-center">
                <Mail size={32} className="text-accent-blue mb-4 mx-auto" />
                <div className="font-medium mb-2">Email</div>
                <div className="text-sm text-gray-400">thatsme.prashantt@gmail.com</div>
              </CardContent>
            </Card>
          </a>
          
          <a 
            href="https://linkedin.com/in/thatsme-prashantt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="bg-secondary-dark border-gray-800 card-hover">
              <CardContent className="p-6 text-center">
                <Linkedin size={32} className="text-accent-blue mb-4 mx-auto" />
                <div className="font-medium mb-2">LinkedIn</div>
                <div className="text-sm text-gray-400">thatsme-prashantt</div>
              </CardContent>
            </Card>
          </a>
          
          <a 
            href="tel:+917007179287" 
            className="block"
          >
            <Card className="bg-secondary-dark border-gray-800 card-hover">
              <CardContent className="p-6 text-center">
                <Phone size={32} className="text-accent-blue mb-4 mx-auto" />
                <div className="font-medium mb-2">Phone</div>
                <div className="text-sm text-gray-400">+91-7007179287</div>
              </CardContent>
            </Card>
          </a>
        </div>

        <Button 
          onClick={handleDownloadResume}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 transform hover:scale-105"
        >
          <Download className="mr-2" size={20} />
          Download Resume
        </Button>
      </div>
    </section>
  );
}
