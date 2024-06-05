const MagicButton = ({
  text,
  icon,
  handleClick,
}: {
  text: string;
  icon: React.ReactNode;
  handleClick?: () => void;
}) => {
  return (
    <button
      className='relative w-fit inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
      onClick={handleClick}
    >
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ADD8E6_0%,#4169E1_50%,#ADD8E6_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-neutral-50 dark:bg-neutral-900 px-6 md:px-12 text-sm md:text-base font-semibold backdrop-blur-3xl gap-2'>
        {text}
        {icon}
      </span>
    </button>
  );
};

export default MagicButton;
