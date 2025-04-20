import AboutMeComponent from "@/components/AboutMeComponent";
import ContactMe from "@/components/ContactMe";
import ExperienceComponent from "@/components/ExperienceComponent";
import Footer from "@/components/Footer";
import HeroComponent from "@/components/HeroComponent";
import MyProjects from "@/components/MyProjects";
import SkillComponent from "@/components/SkillComponent";



export default function Home() {
  return (
    <div>
      <HeroComponent />
      <SkillComponent />

      <ExperienceComponent />
      <MyProjects />

      <AboutMeComponent />
      <ContactMe />

      <Footer />
    </div>
  );
}
