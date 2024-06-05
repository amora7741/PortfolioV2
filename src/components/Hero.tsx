import { TextGenerateEffect } from './ui/text-generate';
import MagicButton from './ui/magic-button';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Spotlight } from './ui/Spotlight';

const Hero = () => {
  return (
    <div className='p-4 text-center w-full h-screen xl:h-[80vh] flex items-center justify-center overflow-hidden'>
      <div className='-z-50'>
        <Spotlight
          className='-top-20 left-0 md:left-60 md:-top-72'
          fill='#3b82f6'
        />
        <Spotlight
          className='-top-20 left-full md:left-2/3 md:-top-72'
          fill='#93c5fd'
        />
      </div>
      <div className='flex flex-col gap-6 flex-1 items-center'>
        <TextGenerateEffect words='Web Developer' />
        <p className='md:text-2xl mb-4'>
          Hi! I&apos;m Alejandro, a React Developer based in Los Angeles.
        </p>
        <MagicButton text='See my projects' icon={<FaArrowRightLong />} />
      </div>
    </div>
  );
};

export default Hero;
