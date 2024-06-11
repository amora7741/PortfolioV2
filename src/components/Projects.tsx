import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { projects } from '@/data';

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
          {projects.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              className={i === 0 ? 'md:col-span-2 md:row-span-2' : ''}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Projects;
