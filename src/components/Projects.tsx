import { BentoGrid, BentoGridItem } from './ui/bento-grid';

const Skeleton = () => (
  <div className='flex w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'></div>
);

const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton />,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
  },
  {
    title: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.',
    header: <Skeleton />,
  },
  {
    title: 'The Joy of Creation',
    description: 'Experience the thrill of bringing ideas to life.',
    header: <Skeleton />,
  },
  {
    title: 'The Spirit of Adventure',
    description: 'Embark on exciting journeys and thrilling discoveries.',
    header: <Skeleton />,
  },
];

const Projects = () => {
  return (
    <section id='projects' className='py-16'>
      <div className='flex flex-col gap-10'>
        <div className='flex items-center gap-8 px-4 2xl:p-0'>
          <h1 className='text-4xl sm:text-5xl font-semibold'>
            Recent{' '}
            <span className='text-blue-500 dark:text-blue-300'>Projects</span>
          </h1>
          <hr className='border-t-[1px] flex-1 border-blue-500 dark:border-blue-300 hidden md:block' />
        </div>
        <BentoGrid className='w-full px-4'>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Projects;
