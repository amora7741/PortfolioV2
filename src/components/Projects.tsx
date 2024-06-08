const Projects = () => {
  return (
    <section id='projects' className='py-16'>
      <div className='flex flex-col gap-10 w-full max-w-6xl'>
        <div className='flex items-center gap-8 px-8 2xl:p-0'>
          <h1 className='text-4xl sm:text-5xl font-semibold'>
            Recent{' '}
            <span className='text-blue-500 dark:text-blue-300'>Projects</span>
          </h1>
          <hr className='border-t-[1px] flex-1 border-blue-500 dark:border-blue-300 hidden md:block' />
        </div>
        <p className='md:text-xl text-lg font-medium px-8'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          voluptas debitis beatae quia, amet laboriosam delectus autem ut! Ex
          dicta beatae ullam nobis laborum quibusdam minus atque quaerat
          necessitatibus iure.
        </p>
      </div>
    </section>
  );
};

export default Projects;
