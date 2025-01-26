'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '../lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { motion } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Strona Główna', href: '/' },
  { name: 'O nas', href: '/#about', scroll: false },
  { name: 'Kocury', href: '/kocury' },
  { name: 'Kotki', href: '/kotki' },
  { name: 'Galeria', href: '/galeria' },
  { name: 'Kontakt', href: '/kontakt' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent',
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span
              className={cn(
                'text-2xl font-bold tracking-tight transition-colors duration-300',
                isScrolled || pathname !== '/' ? 'text-gray-900' : 'text-white',
              )}
            >
              Liderland<span className="text-pink-500">*PL</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'px-4 py-2 text-sm font-medium transition-colors duration-300',
                        isScrolled || pathname !== '/'
                          ? 'text-gray-700 hover:text-pink-600'
                          : 'text-white/90 hover:text-white hover:bg-white/10',
                      )}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 rounded-md" onClick={() => setIsOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn('h-6 w-6 transition-colors duration-300', isScrolled ? 'text-gray-900' : 'text-white')}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="text-2xl font-bold mb-8">
                Liderland<span className="text-pink-500">*PL</span>
              </SheetTitle>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.div>
  );
}
