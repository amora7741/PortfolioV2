import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { projects } from '@/data';

const Projects = () => {
  return (
    <section id='projects' className='py-16'>
      <div className='flex flex-col gap-10'>
        <h1 className='text-4xl sm:text-5xl font-semibold tracking-tighter '>
          Recent{' '}
          <span className='text-blue-400 dark:text-blue-300'>Projects</span>
        </h1>
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
              gitHubLink={item.gitHubLink}
              liveLink={item.liveLink}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Projects;
