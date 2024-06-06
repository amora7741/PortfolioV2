import { TextGenerateEffect } from './ui/text-generate';
import MagicButton from './ui/magic-button';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Spotlight } from './ui/Spotlight';

const Hero = () => {
  return (
    <div className='pt-36'>
      <div>
        <Spotlight
          className='-top-20 left-0 md:left-60 md:-top-72'
          fill='#3b82f6'
        />
        <Spotlight
          className='-top-20 left-full md:left-2/3 md:-top-72'
          fill='#93c5fd'
        />
      </div>
      <div className='h-screen md:h-[65vh] flex flex-col gap-6 items-center text-center mt-36'>
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
