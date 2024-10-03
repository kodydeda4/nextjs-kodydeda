import AppSection from "@/app/_components/AppSection";
import CTA from "@/app/_components/CTA";
import EducationSection from "@/app/_components/EducationSection";
import ExperienceSection from "@/app/_components/ExperienceSection";
import Hero from "@/app/_components/Hero";
import TechnologySection from "@/app/_components/TechnologySection";

export default function Home() {
  return (
    <main>
      <div className="max-w-3xl mx-auto px-6 sm:px-12 my-8 mb-16">
        <div className="flex flex-col gap-16">
          <Hero />
          <ExperienceSection />
          <AppSection />
          <EducationSection />
          {/* <TechnologySection /> */}
        </div>
      </div>
      <CTA />
    </main>
  );
}
