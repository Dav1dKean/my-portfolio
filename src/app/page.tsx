import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/skills';
import Chatbox from '@/components/Chatbox'; // 👈 Make sure the casing matches the actual file name

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills/>
      <Chatbox /> {/* 👈 Add the chatbox here */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 David Vasquez. All rights reserved.
      </footer>
    </div>
  );
}
