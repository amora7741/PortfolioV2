import { InfiniteMovingCards } from './ui/infinite-scroll';
import { scrollerItems } from '@/data';

const AboutMe = () => {
  return (
    <section id='about' className='py-16'>
      <div className='flex flex-col gap-10'>
        <div className='flex items-center gap-8 px-4 2xl:p-0'>
          <h1 className='text-4xl sm:text-5xl font-semibold'>
            About <span className='text-blue-400 dark:text-blue-300'>Me</span>
          </h1>
          <hr className='border-t-2 flex-1 border-blue-400 dark:border-blue-300 hidden md:block' />
        </div>
        <p className='md:text-xl text-lg font-medium px-4'>
          Hello! I&apos;m Alejandro Mora-Lopez, a passionate Junior Web
          Developer based in Los Angeles, California. <br /> <br /> I am a
          recent graduate in Computer Science from California State Polytechnic
          University, Pomona. My journey in this field has been driven by a keen
          interest in creating seamless, intuitive, and visually appealing user
          interfaces. <br /> <br /> I specialize in crafting responsive and
          dynamic web applications using modern technologies. My technical
          expertise includes HTML, CSS, JavaScript, and a variety of libraries
          and frameworks such as React.js and Next.js. I&apos;m also proficient
          in utilizing backend technologies like Node.js and Express.js, coupled
          with databases such as MongoDB and PostgreSQL, to develop full-stack
          applications.
        </p>
        <InfiniteMovingCards
          items={scrollerItems}
          direction='right'
          speed='fast'
          className='self-center'
        />
      </div>
    </section>
  );
};

export default AboutMe;
