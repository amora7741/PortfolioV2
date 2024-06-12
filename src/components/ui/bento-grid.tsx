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
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6  dark:border-white/[0.2] bg-transparent border justify-between flex flex-col space-y-4',
        className
      )}
    >
      <div className='border rounded-2xl min-h-64 flex-1'></div>
      <div className='group-hover/bento:translate-x-2 transition duration-200'>
        <h1 className='text-lg md:text-2xl font-sans font-bold  mb-2 mt-2'>
          {title}
        </h1>
        <div className='text-sm font-sans font-normal '>{description}</div>
      </div>
    </div>
  );
};
