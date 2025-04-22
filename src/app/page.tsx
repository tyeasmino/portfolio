import AboutMeComponent from "@/components/AboutMeComponent";
import ContactMe from "@/components/ContactMe";
import ExperienceComponent from "@/components/ExperienceComponent";
import Footer from "@/components/Footer";
import HeroComponent from "@/components/HeroComponent";
import MyProjects from "@/components/MyProjects";
import ServicesComponent from "@/components/ServicesComponent";
import SkillComponent from "@/components/SkillComponent";



export default function Home() {
  return (
    <div>
      <HeroComponent />
      <AboutMeComponent />

      <SkillComponent />
      <ExperienceComponent />
      <MyProjects />
      <ServicesComponent />
      
      <ContactMe />

      <Footer />
    </div>
  );
}
