'use client';

import { Button } from './ui/button';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const onEmailClick = () => {
    navigator.clipboard.writeText('mora7741@gmail.com');

    toast({
      description: 'Email copied to clipboard!',
    });
  };

  return (
    <footer
      id='contact'
      className='px-4 py-8 items-center text-center justify-between flex flex-col gap-4 md:flex-row w-full'
    >
      <p>Copyright © 2024 Alejandro Mora-Lopez</p>
      <nav className='grid grid-flow-col gap-2'>
        <Button asChild variant='outline' className='p-2'>
          <Link href='https://github.com/amora7741' target='_blank'>
            <FaGithub className='w-6 h-auto' />
          </Link>
        </Button>
        <Button asChild variant='outline' className='p-2'>
          <Link href='https://www.linkedin.com/in/amoralopez/' target='_blank'>
            <FaLinkedin className='w-6 h-auto' />
          </Link>
        </Button>
        <Button variant='outline' className='p-2' onClick={onEmailClick}>
          <IoMdMail className='w-6 h-auto' />
        </Button>
      </nav>
    </footer>
  );
};

export default Footer;
