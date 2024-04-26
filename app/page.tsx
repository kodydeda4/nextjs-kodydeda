import AppProjects from "@/components/AppProjects";
import CTA from "@/components/CTA";
import Education from "@/components/Education";
import Header from "@/components/Header";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main>
      <div className="max-w-3xl mx-auto px-6 sm:px-12 my-8 pt-4 mb-24">
        <div className="flex flex-col gap-16">
          <Header />
          <ProfessionalExperience />
          <AppProjects />
          <Technologies />
          <Education />
        </div>
      </div>
      <CTA />
    </main>
  );
}


