import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { projects } from '@/data';

const Projects = () => {
  return (
    <section id='projects' className='py-16 px-4'>
      <div className='flex flex-col gap-10'>
        <div className='flex items-center gap-8 2xl:p-0'>
          <h1 className='text-4xl sm:text-5xl font-semibold'>
            Recent{' '}
            <span className='text-blue-500 dark:text-blue-300'>Projects</span>
          </h1>
          <hr className='border-t-[1px] flex-1 border-blue-500 dark:border-blue-300 hidden md:block' />
        </div>
        <BentoGrid className='w-full'>
          {projects.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              projectImage={item.image}
              projectImagePriority={item.priority}
              techStack={item.techStack}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Projects;
