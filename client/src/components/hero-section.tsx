import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin, Download } from "lucide-react";
import profileImg from "@assets/li_1751876554815.png";

export default function HeroSection() {
  return (
    <div className="apex-container">
      <header className="py-24">
        <div className="flex items-center justify-between mb-8">
          <div className="apex-badge">
            Open to work
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <h2 className="text-lg text-muted-foreground mb-2">Senior Product & Project Management Specialist</h2>
              <h1 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                Prashant Verma
              </h1>
            </div>
            
            <div className="space-y-3 mb-8 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <a href="mailto:thatsme.prashantt@gmail.com" className="apex-link">
                  thatsme.prashantt@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin size={16} />
                <a 
                  href="https://linkedin.com/in/thatsme-prashantt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="apex-link"
                >
                  linkedin.com/in/thatsme-prashantt
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <a href="tel:+917007179287" className="apex-link">
                  +91-7007179287
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>Lucknow, India</span>
              </div>
            </div>

            <Button className="bg-white text-black hover:bg-gray-200">
              <Download className="mr-2" size={16} />
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img 
              src={profileImg} 
              alt="Prashant Verma" 
              className="apex-profile-img"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
