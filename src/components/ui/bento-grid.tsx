import { cn } from '@/utils/cn';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid auto-rows-auto grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  projectImage,
  projectImagePriority,
  techStack,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  projectImage?: string | StaticImport;
  projectImagePriority?: boolean;
  techStack?: { icon: JSX.Element | null }[];
}) => {
  const defaultImage = '/notfound.png';

  return (
    <div
      className={cn(
        'row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 dark:border-white/[0.2] bg-transparent border border-transparent justify-between flex flex-col space-y-4',
        className
      )}
    >
      <div className='border rounded-2xl min-h-80 flex-1 relative overflow-hidden'>
        <Image
          src={projectImage || defaultImage}
          fill
          className='object-cover scale-110'
          priority={projectImagePriority}
          alt='Project image'
        />
      </div>
      <div className='group-hover/bento:translate-x-2 transition duration-200'>
        <h1 className='text-lg md:text-2xl font-bold mb-2 mt-2'>{title}</h1>
        <div className='text-sm font-normal'>{description}</div>
        <div className='flex flex-col sm:flex-row justify-between mt-4 items-center'>
          <div className='flex items-center'>
            {techStack?.map((item, i) => (
              <div
                key={i}
                className='p-1 border-2 border-gray-200/50 dark:border-gray-700 rounded-full w-fit'
                style={{
                  transform: `translateX(-${5 * i + 2}px)`,
                }}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
