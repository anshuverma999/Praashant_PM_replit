import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary-dark/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold gradient-text">Praashant Verma</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-accent-blue transition-colors">Home</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-accent-blue transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-accent-blue transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-accent-blue transition-colors">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-accent-blue transition-colors">Contact</button>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-accent-blue transition-colors">Home</button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left hover:text-accent-blue transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left hover:text-accent-blue transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left hover:text-accent-blue transition-colors">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-accent-blue transition-colors">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
}
