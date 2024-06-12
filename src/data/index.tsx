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
    description:
      'A clone of the massive social media site X (formerly Twitter).',
    className: 'lg:col-span-2',
  },
  {
    title: "Where's Waldo?",
    description:
      "The popular puzzle game, Where's Waldo, recreated as a web app featuring a leaderboard.",
  },
  {
    title: 'Breeze',
    description:
      'A (mock) shopping app, utilizing FakeStoreAPI to fetch items with their price and review rating.',
  },
  {
    title: 'Memory Game',
    description:
      'A memory game, utilizing PokeAPI to pull random Pokemon. If you click the same Pokemon twice, you lose!',
  },
  {
    title: 'Weather App',
    description:
      "A simple weather app which uses WeatherAPI to fetch location data. Find a location's weather, humidity, and wind speed!",
  },
];
