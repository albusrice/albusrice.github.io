import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import PublicationsSection from "@/components/PublicationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import BackgroundPattern from "@/components/BackgroundPattern";

const Index = () => {
  return (
    <main className="relative bg-background text-foreground">
      <BackgroundPattern />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EducationSection />
        <PublicationsSection />
        <AchievementsSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;
