import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import EducationSection from "@/components/sections/education-section";
import ExperienceSection from "@/components/sections/experience-section";
import ProjectsSection from "@/components/sections/projects-section";
import ResumeSection from "@/components/sections/resume-section";
import ContactSection, { SocialSidebar } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SocialSidebar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}