'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Burger from 'components/shared/header/burger';
import Link from 'components/shared/link';
import MobileMenu from 'components/shared/mobile-menu';
import MENUS from 'constants/menu';
import logo from 'svgs/logo.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prevIsOpen) => !prevIsOpen);

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-50 h-[64px] px-safe pt-safe">
        <nav
          className="container flex h-full items-center justify-between px-4"
          aria-label="Global"
        >
          <Link href="/">
            <Image src={logo} width={173} height={48} alt="DevOptima logo" priority />
          </Link>
          <ul
            className="absolute left-1/2 flex min-w-[343px] translate-x-[-50%] items-center
           justify-between space-x-12 md:hidden"
          >
            {MENUS.header.map(({ to, text }, index) => (
              <li key={index} className="inline-block text-[0]">
                <Link href={to} theme="default" size="md" title={text}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="flex md:hidden">Get started</Button>
          <Burger
            className="hidden md:block"
            isToggled={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </nav>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    </>
  );
};

export default Header;
