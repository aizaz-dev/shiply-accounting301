'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";

const menuItems = [
  { label: 'HOME', url: '/' },
  { label: 'FEATURES', url: '/features' },
  { label: 'INTEGRATIONS', url: '/integrations' },
  { label: 'BLOG', url: '/resources' },
  { label: 'ABOUT', url: '/about-us' },
  { label: 'CONTACT', url: '/contact-us' }
];

const reloadOnNavigation = ['HOME', 'INTEGRATIONS', 'BLOG'];

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (item) => {
    if (reloadOnNavigation.includes(item.label)) {
      window.location.href = item.url;
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-transparent">
      <div className="absolute max-w-[1200px] mx-auto pt-24 max-md:pt-9 top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-white text-2xl font-bold" onClick={() => window.location.href = '/'}>
          <Image width={230} height={33} className="max-md:!w-[200px]" src="/homepage/header/shipleap.png" alt="ShipLeap" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-[35px] list-none">
            {menuItems.map((item) => (
              item.label !== 'HOME' && (
                <li key={item.label} className="relative">
                  <Link
                    href={item.url}
                    onClick={() => handleLinkClick(item)}
                    className="text-white text-[15px] hover:text-gray-200 transition-colors duration-200"
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.label}
                  </Link>
                  <div
                    className="absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-out"
                    style={{
                      width: hoveredItem === item.label ? '100%' : '0%',
                    }}
                  />
                </li>
              )
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <div className="flex flex-col justify-between">
            <RxHamburgerMenu size={25} />
          </div>
          <span className="ml-2 text-sm font-medium">MENU</span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
          <div className="flex justify-between items-center p-4">
            <div className="text-white text-2xl font-bold"></div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-[60px]"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <nav className="flex-grow flex items-center justify-center">
            <ul className="flex flex-col -mt-[150px] gap-5 text-center">
              {menuItems.map((item) => (
                item.label !== 'HOME' && (
                  <li key={item.label}>
                    <Link
                      href={item.url}
                      onClick={() => handleLinkClick(item)}
                      className="text-white hover:text-[#929292] font-[400] text-[18px] font-poppins transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
