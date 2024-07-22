import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import { DiMongodb, DiRedis } from 'react-icons/di';
import { SiExpress, SiPusher } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';

import { TbBrandFramerMotion } from 'react-icons/tb';

export const getIcon = ({
  iconType,
  iconClass,
}: {
  iconType: string;
  iconClass: string;
}) => {
  switch (iconType) {
    case 'html':
      return <FaHtml5 className={`${iconClass} fill-orange-500`} />;
    case 'css':
      return <FaCss3Alt className={`${iconClass} fill-blue-400`} />;
    case 'javascript':
      return <IoLogoJavascript className={`${iconClass} fill-yellow-400`} />;
    case 'typescript':
      return <BiLogoTypescript className={`${iconClass} fill-blue-400`} />;
    case 'sass':
      return <FaSass className={`${iconClass} fill-pink-400`} />;
    case 'react':
      return <FaReact className={`${iconClass} fill-blue-400`} />;
    case 'node':
      return <FaNodeJs className={`${iconClass} fill-green-600`} />;
    case 'tailwind':
      return <RiTailwindCssFill className={`${iconClass} fill-blue-400`} />;
    case 'next':
      return <RiNextjsFill className={iconClass} />;
    case 'mongodb':
      return <DiMongodb className={`${iconClass} fill-green-600`} />;
    case 'express':
      return <SiExpress className={iconClass} />;
    case 'framer':
      return <TbBrandFramerMotion className={`${iconClass} fill-purple-600`} />;
    case 'redis':
      return <DiRedis className={`${iconClass} fill-red-600`} />;
    case 'pusher':
      return <SiPusher className={`${iconClass} fill-blue-400`} />;
    default:
      return null;
  }
};
