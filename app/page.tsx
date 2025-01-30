import AppSection from "@/app/_components/AppSection";
import CTA from "@/app/_components/CTA";
import EducationSection from "@/app/_components/EducationSection";
import ExperienceSection from "@/app/_components/ExperienceSection";
import Hero from "@/app/_components/Hero";
import TechnologySection from "@/app/_components/TechnologySection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col gap-8 lg:border-l sm:border-r">
          <div className="pb-8 border-b">
            <Hero />
          </div>
          <div className="pb-8 px-6 border-b">
            <ExperienceSection />
          </div>
          <div className="pb-8 px-6 border-b">
            <AppSection />
          </div>
          <div className="px-6">
            <EducationSection />
          </div>
          <CTA />
          {/* <TechnologySection /> */}
        </div>
      </div>
    </main>
  );
}
