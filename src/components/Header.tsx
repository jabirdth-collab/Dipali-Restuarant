/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, PhoneCall, ChevronRight } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ cartCount, onCartClick, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Menu', id: 'menu' },
    { name: 'Celebrations', id: 'party' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'location' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-950/93 backdrop-blur-xl border-b border-stone-900/80 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-4'
          : 'bg-gradient-to-b from-stone-950/95 via-stone-950/45 to-transparent py-6 lg:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between w-full">
        
        {/* BRAND LOGO (For Desktop - on Left) */}
        <button
          id="brand-logo-btn"
          onClick={() => handleLinkClick('home')}
          className="hidden lg:flex items-center space-x-4 focus:outline-none group text-left cursor-pointer"
        >
          <div className="w-11 h-11 rounded-full border border-gold-500/30 flex items-center justify-center bg-stone-900/90 shadow-[0_0_15px_rgba(202,171,113,0.15)] group-hover:border-gold-400 group-hover:shadow-[0_0_20px_rgba(202,171,113,0.30)] transition-all duration-500">
            <span className="font-serif text-xl font-extrabold text-gold-400 group-hover:text-gold-200 transition-colors">D</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[19px] xl:text-[21px] font-bold tracking-[0.25em] text-white group-hover:text-gold-300 transition-colors uppercase leading-none">
              S A Dipali
            </span>
            <span className="font-mono text-[9px] tracking-[0.35em] text-gold-400 uppercase font-bold mt-1.5">
              Fine Indian Dining
            </span>
          </div>
        </button>

        {/* MOBILE RESPONSIVE LAYOUT (Left-Center-Right Symmetrical Design) */}
        {/* Mobile Left: Cart Button */}
        <div className="flex lg:hidden items-center">
          <button
            id="mobile-cart-btn"
            onClick={onCartClick}
            className="p-2.5 rounded-full bg-stone-900/90 border border-stone-800/80 text-stone-300 hover:text-gold-400 active:scale-95 transition-all text-left focus:outline-none relative"
            aria-label="Your Order Cart"
          >
            <ShoppingBag className="w-[18px] h-[18px]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-brandred-600 text-white text-[10px] uppercase font-extrabold flex items-center justify-center rounded-full shadow-[0_2px_8px_rgba(228,28,44,0.4)]">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Center: Centered Restaurant Branding */}
        <button
          id="mobile-brand-logo-btn"
          onClick={() => handleLinkClick('home')}
          className="flex lg:hidden flex-col items-center justify-center focus:outline-none group text-center"
        >
          <span className="font-serif text-[17px] sm:text-[20px] font-bold tracking-[0.22em] text-white group-hover:text-gold-300 transition-colors uppercase leading-none">
            S A Dipali
          </span>
          <span className="font-mono text-[8px] tracking-[0.3em] text-gold-400 uppercase font-bold mt-1">
            Fine Dining & Catering
          </span>
        </button>

        {/* Mobile Right: Hamburger Menu Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-full bg-stone-900/90 border border-stone-800/80 text-stone-300 hover:text-gold-400 transition-all focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* DESKTOP LAYOUT NAVIGATION & UTILITIES (Only visible on lg and above) */}
        {/* Ensures at least 60px gap by forcing auto margin and grouping */}
        <div className="hidden lg:flex items-center space-x-12 ml-16 flex-1 justify-end">
          <nav id="desktop-nav" className="flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="relative py-2 group text-[12px] xl:text-[13px] uppercase font-bold tracking-[0.16em] text-stone-300 hover:text-gold-400 transition-colors duration-300 cursor-pointer focus:outline-none"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold-400 to-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </button>
            ))}
          </nav>

          {/* Luxury Divider */}
          <div className="h-6 w-[1px] bg-stone-800/80 self-center" />

          {/* Navigation Action Utilities */}
          <div className="flex items-center space-x-4">
            {/* Desktop Cart Button */}
            <button
              id="header-cart-btn"
              onClick={onCartClick}
              className="relative p-3 rounded-full bg-stone-900 border border-stone-800/80 hover:border-gold-500/50 hover:bg-stone-850 text-stone-200 hover:text-gold-400 transition-all duration-300 focus:outline-none cursor-pointer"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-brandred-600 text-white text-[10px] font-extrabold flex items-center justify-center rounded-full shadow-[0_2px_8px_rgba(228,28,44,0.4)]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Premium Gold Call Button */}
            <a
              id="header-call-btn"
              href="tel:9955459096"
              className="flex items-center space-x-2 bg-gradient-to-r from-stone-900 to-stone-950 hover:from-gold-600 hover:to-gold-700 border border-gold-500/30 text-white hover:text-stone-950 font-bold text-[11px] xl:text-[12px] tracking-[0.15em] uppercase px-5 py-3 rounded-full shadow-lg transition-all duration-300 group hover:border-gold-500 shadow-black/40 hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4 text-gold-400 group-hover:text-stone-950 transition-colors" />
              <span>Call 995459096</span>
            </a>
          </div>
        </div>

      </div>

      {/* MOBILE DRAWER OVERLAY (Beautiful Glassmorphism Backdrop) */}
      <div
        id="mobile-drawer"
        className={`lg:hidden fixed left-0 w-full bg-stone-950/98 backdrop-blur-xl border-b border-stone-800/80 shadow-2xl transition-all duration-300 ease-out overflow-hidden z-40 ${
          isMobileMenuOpen 
            ? 'top-[74px] opacity-100 max-h-[calc(100vh-74px)] py-8 px-6' 
            : 'top-[-400px] opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4">
          <p className="text-[10px] tracking-[0.3em] text-gold-500/70 uppercase font-bold border-b border-stone-900 pb-2">Menu Navigation</p>
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                id={`mobile-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="text-left w-full py-3 px-4 text-[13px] uppercase font-bold tracking-[0.18em] text-stone-200 hover:text-gold-400 hover:bg-stone-900/60 rounded-xl transition-all flex items-center justify-between group"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-stone-600 group-hover:text-gold-400 transition-colors" />
              </button>
            ))}
          </div>
          
          <div className="pt-6 border-t border-stone-900/80 flex flex-col space-y-3">
            <a
              id="mobile-drawer-call"
              href="tel:9955459096"
              className="flex items-center justify-center space-x-3 w-full py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 font-bold text-[12px] uppercase tracking-[0.15em] text-stone-950 rounded-xl shadow-lg shadow-gold-500/10 transition-transform active:scale-98"
            >
              <PhoneCall className="w-4.5 h-4.5" />
              <span>Call Owner Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
