import AppSection from "@/components/AppSection";
import CTA from "@/components/CTA";
import EducationSection from "@/components/EducationSection";
import Header from "@/components/Header";
import ExperienceSection from "@/components/ExperienceSection";
import TechnologySection from "@/components/TechnologySection";

export default function Home() {
  return (
    <main>
      <div className="max-w-3xl mx-auto px-6 sm:px-12 my-8 pt-4 mb-24">
        <div className="flex flex-col gap-16">
          <Header />
          <ExperienceSection />
          <AppSection />
          <TechnologySection />
          <EducationSection />
        </div>
      </div>
      <CTA />
    </main>
  );
}


