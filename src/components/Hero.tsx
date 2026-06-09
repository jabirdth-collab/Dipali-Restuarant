/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageSquare, CalendarRange, Utensils, Star, Users, MapPin } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOrderWhatsappDirect: () => void;
  onBookBirthdayDirect: () => void;
}

export default function Hero({ onNavigate, onOrderWhatsappDirect, onBookBirthdayDirect }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-stone-950 pt-20"
    >
      {/* Background Image with elegant dark parallax-style overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1800"
          alt="S A Dipali Restaurant Interior"
          className="w-full h-full object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        {/* Lux dark premium overlay filters */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/20" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12 sm:py-20 flex flex-col items-center">
        {/* Dynamic Micro-badge for Google Rating */}
        <div
          id="hero-google-badge"
          className="inline-flex items-center space-x-2 bg-black/80 border border-gold-500/40 px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-gold-500/5 backdrop-blur-sm hover:border-gold-400 transition-colors duration-300"
        >
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 fill-amber-400 ${
                  i === 4 ? 'text-amber-400/40 fill-transparent' : 'text-amber-400'
                }`}
              />
            ))}
          </div>
          <p className="text-[11px] sm:text-xs font-semibold tracking-wider text-stone-200">
            <span className="text-white font-extrabold mr-1">4.3</span> Google Rating Best Family Spot
          </p>
        </div>

        {/* Headline Header */}
        <h1
          id="hero-headline"
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 sm:mb-6"
        >
          S A Dipali <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500 bg-clip-text text-transparent italic font-normal font-serif">
            Restaurant
          </span>
        </h1>

        {/* Subheadline description */}
        <p
          id="hero-subheadline"
          className="max-w-2xl text-base sm:text-lg md:text-xl text-stone-300 tracking-wide font-medium leading-relaxed mb-8 sm:mb-10 text-pretty"
        >
          Bishunpura&apos;s Favorite Destination For{' '}
          <span className="text-white border-b-2 border-brandred-600 font-semibold px-0.5">Family Dining</span>,{' '}
          <span className="text-white border-b-2 border-brandred-600 font-semibold px-0.5">Fast Food</span> &{' '}
          <span className="text-white border-b-2 border-brandred-600 font-semibold px-0.5">Birthday Celebrations</span>
        </p>

        {/* High-converting Call-to-Actions (Buttons) */}
        <div
          id="hero-cta-buttons"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 mb-12 sm:mb-16"
        >
          <button
            id="hero-whatsapp-order-btn"
            onClick={onOrderWhatsappDirect}
            className="flex items-center justify-center space-x-2 w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/40 text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-lg shadow-emerald-900/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-white/10" />
            <span>Order On WhatsApp</span>
          </button>

          <button
            id="hero-view-menu-btn"
            onClick={() => onNavigate('menu')}
            className="flex items-center justify-center space-x-2 w-full sm:w-auto bg-stone-900/90 hover:bg-stone-850 border border-stone-700/80 hover:border-gold-500/40 text-gold-300 hover:text-gold-200 font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <Utensils className="w-4.5 h-4.5" />
            <span>Explore Menu</span>
          </button>

          <button
            id="hero-book-party-btn"
            onClick={onBookBirthdayDirect}
            className="flex items-center justify-center space-x-2 w-full sm:w-auto bg-gradient-to-r from-brandred-700 to-brandred-800 hover:from-brandred-600 hover:to-brandred-700 border border-brandred-500/20 text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-lg shadow-brandred-900/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <CalendarRange className="w-4.5 h-4.5" />
            <span>Book Birthday Party</span>
          </button>
        </div>

        {/* Horizontal Trust Badges panel */}
        <div
          id="hero-trust-indicators"
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 max-w-3xl w-full border-t border-stone-900 pt-8 text-center"
        >
          <div className="flex items-center justify-center space-x-3 text-stone-400 group">
            <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-850 group-hover:border-gold-500/30 group-hover:bg-stone-850 transition-colors">
              <Star className="w-5 h-5 text-gold-400 fill-gold-400/10" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white tracking-wide">4.3★ Rating</p>
              <p className="text-xs text-stone-500 font-medium">Bishunpura&apos;s Tops</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 text-stone-400 group">
            <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-850 group-hover:border-gold-500/30 group-hover:bg-stone-850 transition-colors">
              <Users className="w-5 h-5 text-gold-400" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white tracking-wide">12,000+ Happy Guests</p>
              <p className="text-xs text-stone-500 font-medium">Smiles & Love Shared</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 text-stone-400 group">
            <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-850 group-hover:border-gold-500/30 group-hover:bg-stone-850 transition-colors">
              <MapPin className="w-5 h-5 text-brandred-500" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white tracking-wide">Near Nahar Pool</p>
              <p className="text-xs text-stone-500 font-medium">Bishunpura, Gopalganj</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Golden Ambient Gradients at the bottom-rim of hero */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-stone-950 to-transparent pointer-events-none" />
    </section>
  );
}
