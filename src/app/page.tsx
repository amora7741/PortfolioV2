import AboutMe from '@/components/AboutMe';
import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems } from '@/data';

export default function Home() {
  return (
    <main className='relative flex flex-col gap-8 items-center px-4 overflow-hidden'>
      <FloatingNav navItems={navItems} className='top-20' />
      <Hero />
      <AboutMe />
    </main>
  );
}
