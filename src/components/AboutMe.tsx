import { InfiniteMovingCards } from './ui/infinite-scroll';

const testimonials = [
  {
    quote:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
    title: 'Hamlet',
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
    title: 'A Dream Within a Dream',
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    title: 'Pride and Prejudice',
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'Herman Melville',
    title: 'Moby-Dick',
  },
];

const AboutMe = () => {
  return (
    <section id='about' className='py-16'>
      <div className='flex flex-col gap-10 w-full max-w-6xl px-8'>
        <div className='flex items-center gap-8'>
          <h1 className='text-4xl sm:text-5xl font-semibold'>
            About <span className='text-blue-500 dark:text-blue-300'>Me</span>
          </h1>
          <hr className='border-t-[1px] flex-1 border-blue-500 dark:border-blue-300 hidden md:block' />
        </div>
        <p className='md:text-xl font-medium '>
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
        <InfiniteMovingCards items={testimonials} direction='right' />
      </div>
    </section>
  );
};

export default AboutMe;
