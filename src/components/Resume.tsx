import MagicButton from './ui/magic-button';
import Link from 'next/link';
import { RiArrowRightUpFill } from 'react-icons/ri';

const Resume = () => {
  return (
    <section className='py-16 px-4' id='resume'>
      <div className='flex flex-col text-center'>
        <p className='text-4xl sm:text-5xl font-bold self-center'>
          Interested in my{' '}
          <span className='text-blue-400 dark:text-blue-300'>
            full skillset?
          </span>
        </p>
        {/* <Link
          href='/Resumev2.pdf'
          target='_blank'
          className='w-fit self-center my-10'
        >
          <MagicButton text='View Resume' icon={<RiArrowRightUpFill />} />
        </Link> */}
      </div>
    </section>
  );
};

export default Resume;
