import AboutMe from '@/components/AboutMe';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems } from '@/data';

export default function Home() {
  return (
    <main className='relative flex flex-col gap-8 items-center px-4 overflow-hidden'>
      <FloatingNav navItems={navItems} className='top-20' />
      <Hero />
      <div className='w-full max-w-7xl'>
        <AboutMe />
        <Projects />
      </div>
    </main>
  );
}
