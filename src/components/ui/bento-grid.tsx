import { cn } from '@/utils/cn';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { Button } from './button';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { RiArrowRightUpFill } from 'react-icons/ri';

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
        'grid auto-rows-auto grid-cols-1 lg:grid-cols-2 gap-32 md:gap-8 mx-auto',
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
  gitHubLink,
  liveLink,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  projectImage?: string | StaticImport;
  projectImagePriority?: boolean;
  techStack?: { icon: JSX.Element | null }[];
  gitHubLink?: string;
  liveLink?: string;
}) => {
  const defaultImage = '/notfound.png';

  return (
    <div
      className={cn(
        'cursor-pointer row-span-1 rounded-3xl group/bento hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 transition duration-200 shadow-input dark:shadow-none sm:p-6  bg-transparentjustify-between flex flex-col space-y-4',
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
        <h1 className='text-lg md:text-[1.7rem] font-bold mb-2 mt-2'>
          {title}
        </h1>
        <p className='text-base md:text-lg font-normal dark:text-neutral-300'>
          {description}
        </p>
        <div className='flex flex-col gap-4 sm:flex-row justify-between mt-4 items-center'>
          <div className='flex items-center'>
            {techStack?.map((item, i) => (
              <div
                key={i}
                className='p-1 border-2 border-gray-200/50 dark:border-gray-700 dark:bg-neutral-950 bg-white rounded-full w-fit'
                style={{
                  transform: `translateX(-${10 * i + 2}px)`,
                }}
              >
                {item.icon}
              </div>
            ))}
          </div>
          <div className='flex self-end sm:self-center'>
            {gitHubLink && (
              <Button asChild variant='ghost' className='w-fit p-2'>
                <Link
                  href={gitHubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub className='w-6 h-auto' />
                </Link>
              </Button>
            )}
            {liveLink && (
              <Button asChild variant='ghost' className='w-fit p-2'>
                <Link
                  href={liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center '
                >
                  <p className='text-xl text-blue-400 dark:text-blue-300'>
                    Live Link
                  </p>
                  <RiArrowRightUpFill className='w-6 h-auto fill-blue-400 dark:fill-blue-300 group-hover/bento:-translate-y-1 transition duration-200' />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
