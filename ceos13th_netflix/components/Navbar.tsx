'use client';

import { usePathname } from 'next/navigation';
import HomeIcon from '@/public/icon_home.svg';
import SearchIcon from '@/public/icon_search.svg';
import ComingSoonIcon from '@/public/icon_comingSoon.svg';
import DownloadIcon from '@/public/icon_download.svg';
import HamburgerIcon from '@/public/icon_hamburger.svg';

const navItems = [
  {
    label: 'Home',
    path: '/',
    icon: HomeIcon,
  },
  {
    label: 'Search',
    path: '/search',
    icon: SearchIcon,
  },
  {
    label: 'Coming Soon',
    path: '/coming-soon',
    icon: ComingSoonIcon,
  },
  {
    label: 'Downloads',
    path: '/downloads',
    icon: DownloadIcon,
  },
  {
    label: 'More',
    path: '/more',
    icon: HamburgerIcon,
  },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-14 bg-gray-900">
      <ul className="flex h-full items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <li key={item.label}>
              <button className="flex flex-col items-center gap-1">
                <Icon className={active ? 'text-white' : 'text-gray-700'} />

                <span
                  className={`text-[10px] ${
                    active ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
