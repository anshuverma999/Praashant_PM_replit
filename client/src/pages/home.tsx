import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AchievementSnapshot from "@/components/achievement-snapshot";
import WorkExperience from "@/components/work-experience";
import ProjectsShowcase from "@/components/projects-showcase";
import SkillsTools from "@/components/skills-tools";
import EducationCertifications from "@/components/education-certifications";
import ContactSection from "@/components/contact-section";
import AnimatedBackground from "@/components/animated-background";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-dark text-white relative">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <AchievementSnapshot />
      <SkillsTools />
      <WorkExperience />
      <ProjectsShowcase />
      <EducationCertifications />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 bg-primary-dark border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Praashant Verma. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-sm text-gray-400">
              <div>Technical Blogger • 15K+ followers</div>
              <div>Published Photographer</div>
              <div>Early Adopter: Blockchain, AI, IoT</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
