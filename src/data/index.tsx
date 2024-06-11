import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import { DiMongodb } from 'react-icons/di';

const iconClass = 'w-16 h-auto md:w-[4.5rem]';

export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Resume', link: '#' },
  { name: 'Contact', link: '#' },
];

export const scrollerItems = [
  {
    icon: <FaHtml5 className={`${iconClass} fill-orange-500`} />,
    text: 'HTML',
  },
  {
    icon: <FaCss3Alt className={`${iconClass} fill-blue-400`} />,
    text: 'CSS',
  },
  {
    icon: <IoLogoJavascript className={`${iconClass} fill-yellow-400`} />,
    text: 'JavaScript',
  },
  {
    icon: <FaSass className={`${iconClass} fill-pink-400`} />,
    text: 'Sass',
  },
  {
    icon: <FaReact className={`${iconClass} fill-blue-400`} />,
    text: 'React.js',
  },
  {
    icon: <FaNodeJs className={`${iconClass} fill-green-600`} />,
    text: 'Node.js',
  },
  {
    icon: <RiTailwindCssFill className={`${iconClass} fill-blue-400`} />,
    text: 'Tailwind CSS',
  },
  {
    icon: <RiNextjsFill className={iconClass} />,
    text: 'Next.js',
  },
  {
    icon: <DiMongodb className={`${iconClass} fill-green-600`} />,
    text: 'MongoDB',
  },
];

export const projects = [
  {
    title: 'X Clone',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
  },
  {
    title: "Where's Waldo?",
    description: 'Dive into the transformative power of technology.',
  },
  {
    title: 'Breeze',
    description: 'Discover the beauty of thoughtful and functional design.',
  },
  {
    title: 'Memory Game',
    description:
      'Understand the impact of effective communication in our lives.',
  },
  {
    title: 'Weather App',
    description: 'Join the quest for understanding and enlightenment.',
  },
];
