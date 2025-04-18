import AboutMeComponent from "@/components/AboutMeComponent";
import ExperienceComponent from "@/components/ExperienceComponent";
import HeroComponent from "@/components/HeroComponent";
import SkillComponent from "@/components/SkillComponent";


export default function Home() {
  return (
    <div>
       
      <HeroComponent />

      <SkillComponent />
      
      <ExperienceComponent />

      <AboutMeComponent />

    </div>
  );
}
