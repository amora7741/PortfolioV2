import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems } from '@/data';

export default function Home() {
  return (
    <main className='min-h-[200vh] relative flex flex-col gap-8 items-center px-4 overflow-hidden'>
      <FloatingNav navItems={navItems} className='top-20' />
      <Hero />
      <div>
        <h1>Hello</h1>
      </div>
    </main>
  );
}
