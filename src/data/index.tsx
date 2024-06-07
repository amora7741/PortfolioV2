import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';

const iconClass = 'w-16 h-auto md:w-[4.5rem]';

export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#' },
  { name: 'Resume', link: '#' },
  { name: 'Contact', link: '#' },
];

export const scrollerItems = [
  { icon: <FaHtml5 className={iconClass} />, text: 'HTML' },
  { icon: <FaCss3Alt className={iconClass} />, text: 'CSS' },
  { icon: <IoLogoJavascript className={iconClass} />, text: 'JavaScript' },
];
