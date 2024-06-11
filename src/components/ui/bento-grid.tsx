import { cn } from '@/utils/cn';

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
        'grid auto-rows-[12rem]  md:auto-rows-[15rem] grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 mx-auto ',
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
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6  dark:border-white/[0.2] bg-transparent border justify-between flex flex-col space-y-4',
        className
      )}
    >
      {header}
      <div className='group-hover/bento:translate-x-2 transition duration-200'>
        {icon}
        <h1 className='text-lg md:text-2xl font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>
          {title}
        </h1>
        <div className='text-sm font-sans font-normal text-neutral-600 dark:text-neutral-300'>
          {description}
        </div>
      </div>
    </div>
  );
};
