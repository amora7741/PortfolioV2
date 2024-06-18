import { TextGenerateEffect } from './ui/text-generate';
import MagicButton from './ui/magic-button';
import { FaArrowRightLong } from 'react-icons/fa6';
import { AuroraBackground } from './ui/aurora-background';
import Link from 'next/link';

const Hero = () => {
  return (
    <AuroraBackground className='pt-36 w-screen'>
      <div className='h-screen md:h-[35rem] flex flex-col gap-6 items-center text-center mt-36'>
        <TextGenerateEffect words='Web Developer' />
        <p className='md:text-2xl mb-4'>
          Hi! I&apos;m Alejandro, a React Developer based in Los Angeles.
        </p>
        <Link href='#projects'>
          <MagicButton text='See my projects' icon={<FaArrowRightLong />} />
        </Link>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
