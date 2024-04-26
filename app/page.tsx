import AppSection from "@/app/_components/AppSection";
import CTA from "@/app/_components/CTA";
import EducationSection from "@/app/_components/EducationSection";
import ExperienceSection from "@/app/_components/ExperienceSection";
import Header from "@/app/_components/Header";
import TechnologySection from "@/app/_components/TechnologySection";

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


