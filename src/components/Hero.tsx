import { TextGenerateEffect } from './ui/text-generate';
import MagicButton from './ui/magic-button';
import { FaArrowRightLong } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className='p-4 text-center w-full h-screen xl:h-[70vh] flex items-center justify-center'>
      <div className='flex flex-col gap-10 flex-1 items-center'>
        <TextGenerateEffect words='Web Developer' />
        <p className='font-semibold md:text-2xl'>
          Hi! I&apos;m Alejandro, a React Developer based in Los Angeles.
        </p>
        <MagicButton text='See my projects' icon={<FaArrowRightLong />} />
      </div>
    </div>
  );
};

export default Hero;
