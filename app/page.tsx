import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>{"Hi, i'm Kody Deda."}</h1>
      <h1>{"Welcome to my Portfolio!"}</h1>
      <p>{"This is a description of my software development skills and stuff, especially related to SwiftUI."}</p>

      <SectionHeader
        caption="Professional Experience"
        title="🍎 3 Years of Professional Experience"
        description="I've worked on a few apps in my day. Feel free to take a look!"
      />

      <ul class="flex">
        <li class="mr-6">
          <Link href="/peg-puzzle-classic">Peg Puzzle Classic</Link>
        </li>
        <li class="mr-6">
          <Link href="/guitar-tuner">Guitar Tuner</Link>
        </li>
      </ul>
    </>
  );
}

const SectionHeader: React.FC<{ caption: string; title: string; description: string }> = ({ caption, title, description }) => {
  return (
    <div>
      <p>{caption}</p>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
};






































