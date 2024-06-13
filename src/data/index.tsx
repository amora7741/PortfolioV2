import { getIcon } from './icons';

const scrollerIconClass = 'w-16 h-auto md:w-[4.5rem]';

export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Resume', link: '#' },
  { name: 'Contact', link: '#' },
];

export const scrollerItems = [
  {
    icon: getIcon({ iconType: 'html', iconClass: scrollerIconClass }),
    text: 'HTML',
  },

  {
    icon: getIcon({ iconType: 'css', iconClass: scrollerIconClass }),
    text: 'CSS',
  },
  {
    icon: getIcon({ iconType: 'javascript', iconClass: scrollerIconClass }),
    text: 'JavaScript',
  },
  {
    icon: getIcon({ iconType: 'sass', iconClass: scrollerIconClass }),
    text: 'Sass',
  },
  {
    icon: getIcon({ iconType: 'react', iconClass: scrollerIconClass }),
    text: 'React.js',
  },
  {
    icon: getIcon({ iconType: 'node', iconClass: scrollerIconClass }),
    text: 'Node.js',
  },
  {
    icon: getIcon({ iconType: 'tailwind', iconClass: scrollerIconClass }),
    text: 'Tailwind CSS',
  },
  {
    icon: getIcon({ iconType: 'next', iconClass: scrollerIconClass }),
    text: 'Next.js',
  },
  {
    icon: getIcon({ iconType: 'mongodb', iconClass: scrollerIconClass }),
    text: 'MongoDB',
  },
];

export const projects = [
  {
    title: 'X Clone',
    description:
      'A clone of the massive social media site X (formerly Twitter).',
    className: 'lg:col-span-2',
    image: '/xclone.png',
    priority: true,
  },
  {
    title: "Where's Waldo?",
    description:
      "The popular puzzle game, Where's Waldo, recreated as a web app featuring a leaderboard.",
    image: '/waldo.png',
  },
  {
    title: 'Breeze',
    description:
      'A (mock) shopping app, utilizing FakeStoreAPI to fetch items with their price and review rating.',
    image: '/breeze.png',
  },
  {
    title: 'Memory Game',
    description:
      'A memory game, utilizing PokeAPI to pull random Pokemon. If you click the same Pokemon twice, you lose!',
    image: '/memorygame.png',
  },
  {
    title: 'Weather App',
    description:
      "A simple weather app which uses WeatherAPI to fetch location data. Find a location's weather, humidity, and wind speed!",
    image: '/weatherapp.png',
  },
];
