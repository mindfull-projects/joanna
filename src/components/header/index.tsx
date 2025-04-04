'use client';

import { useEffect, useState, useRef, Fragment } from 'react';
import Link from 'next/link';
import { FaHome as HomeIcon } from 'react-icons/fa';
import { throttle } from 'lodash';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import menuItems from './menu-items';
import MenuLink from './menu-link';
import TogglerButton from './toggler-button';
import VerticalDivider from './vertical-divider';

interface HeaderProps {
  navbarOpen: boolean;
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ navbarOpen, setNavbarOpen }: HeaderProps) {
  const [isTransparent, setIsTransparent] = useState<boolean>(true);
  const pathname = usePathname();
  const togglerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsTransparent(window.scrollY < 50);
    }, 200);

    // Listen for scroll
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        togglerRef.current &&
        !togglerRef.current.contains(event.target as Node)
      ) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [setNavbarOpen]);

  const headerClass = classNames(
    'h-[80px] fixed top-0 left-0 z-40 w-full flex items-center gap-12 px-5 lg:px-16 justify-between flex-row-reverse lg:flex-row lg:justify-start',
    {
      'bg-transparent duration-300':
        pathname === '/' && isTransparent && !navbarOpen,
      'bg-primary duration-300':
        (pathname === '/' && !isTransparent) || navbarOpen,
    }
  );

  const navClass = classNames(
    'flex items-center absolute top-[100%] left-0 rounded-br-lg rounded-bl-lg z-50 w-full py-4 px-6 duration-300 bg-gray-dark lg:static lg:h-full lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 bg-primary',
    {
      'opacity-0': !navbarOpen,
    }
  );

  return (
    <header className={headerClass}>
      {/* Logo */}
      <Link href='/'>
        <HomeIcon className='text-primary-content hover:text-accent fill-current text-2xl lg:text-lg' />
      </Link>
      <VerticalDivider />

      {/* Navigation */}
      <nav className={navClass} ref={navRef}>
        <ul className='flex h-full flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-8'>
          {menuItems.map((menuItem, index) => (
            <Fragment key={menuItem.id}>
              <li className='relative flex h-full items-center'>
                <MenuLink
                  menuItem={menuItem}
                  navbarOpen={navbarOpen}
                  onClick={() => setNavbarOpen(false)}
                />
              </li>
              {index < menuItems.length - 1 && <VerticalDivider />}
            </Fragment>
          ))}
        </ul>
      </nav>

      {/* Navbar Toggler */}
      <TogglerButton
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
        togglerRef={togglerRef}
      />
    </header>
  );
}
