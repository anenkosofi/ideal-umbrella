import { ReactComponent as Arrow } from '@assets/arrow.svg';
import { Pathname } from '@types';

export const navItems = [
  { href: Pathname.HOME, text: 'Home' },
  { href: Pathname.ABOUT, text: 'About' },
  { text: 'Pages', icon: Arrow },
  { href: Pathname.SHOP, text: 'Shop' },
  { href: Pathname.PROJECTS, text: 'Projects' },
  { href: Pathname.NEWS, text: 'News' },
];
