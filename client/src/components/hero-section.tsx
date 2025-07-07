import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import profileImage from "@assets/li_1751876985024.png";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-primary-dark to-accent-purple/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <Badge variant="secondary" className="bg-accent-blue/20 text-accent-blue border-accent-blue/30 mb-6">
            Open to new opportunities
          </Badge>
          
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Prashant Verma"
                className="w-48 h-48 rounded-full object-cover border-4 border-accent-blue/30 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20"></div>
            </div>
          </div>
          
          <h2 className="text-gray-400 text-xl mb-4">Senior Product & Project Management Specialist</h2>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Prashant Verma
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-gray-300 mb-8">
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-accent-blue" />
              <span>thatsme.prashantt@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Linkedin size={16} className="text-accent-blue" />
              <span>linkedin.com/in/thatsme-prashantt</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-accent-blue" />
              <span>+91-7007179287</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-accent-blue" />
              <span>Lucknow, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
