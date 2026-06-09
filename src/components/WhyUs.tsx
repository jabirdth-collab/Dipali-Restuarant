/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Heart, Scale, Flame, Cake, Zap } from 'lucide-react';

export default function WhyUs() {
  const values = [
    {
      icon: <Sparkles className="w-8 h-8 text-gold-400" />,
      title: 'Beautiful Ambience',
      desc: 'Step into a luxury visual lounge decorated with premium seating, subtle warm lighting, and a fully air-conditioned clean space.',
    },
    {
      icon: <Heart className="w-8 h-8 text-brandred-500" />,
      title: 'Family Friendly Environment',
      desc: 'Highly safe, comfortable, and respectable family atmosphere tailored for absolute comfort for women, children, and elderly guests.',
    },
    {
      icon: <Scale className="w-8 h-8 text-gold-400" />,
      title: 'Affordable Pricing',
      desc: 'Enjoy authentic 5-star taste quality at honest, pocket-friendly street prices. Premium dining made delightful for everyone.',
    },
    {
      icon: <Flame className="w-8 h-8 text-brandred-500" />,
      title: 'Freshly Prepared Food',
      desc: 'We never freeze or pre-cook! Every single order is prepared fresh in clean, hygienic kitchens using premium handpicked farm-rich vegetables and pure oils.',
    },
    {
      icon: <Cake className="w-8 h-8 text-gold-400" />,
      title: 'Birthday Party Arrangements',
      desc: 'The best birthday host in Bishunpura! We organize magnificent sound systems, customized balloon decors, and customized menu combinations.',
    },
    {
      icon: <Zap className="w-8 h-8 text-brandred-500" />,
      title: 'Fast Service',
      desc: 'No endless wait times. Our seasoned gourmet chefs and friendly staff ensure hot, freshly-prepared meals reach your table in minutes.',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-stone-950 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-20 right-[-10%] w-[350px] h-[350px] bg-brandred-950/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[300px] h-[300px] bg-gold-950/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-2">
            The S A Dipali Standard
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Why Our Guests Love Us
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-brandred-600 mx-auto rounded-full mb-5" />
          <p className="text-sm sm:text-base text-stone-400 text-pretty">
            We don&apos;t just serve food; we craft unforgettable dining experiences for Bishunpura and Gopalganj. Here is what sets us apart:
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-stone-900 to-stone-900/60 hover:from-stone-850 hover:to-stone-900 border border-stone-800/80 hover:border-gold-500/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
            >
              {/* Gold gradient accent line on top of card */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent group-hover:via-gold-500/40 transition-all duration-300" />

              {/* Icon Container with glowing feedback */}
              <div className="mb-5 p-3 rounded-xl bg-stone-950 border border-stone-850 group-hover:bg-stone-900 group-hover:border-gold-500/20 inline-block transition-all duration-300">
                {item.icon}
              </div>

              {/* Text content */}
              <h3 className="text-lg font-bold text-stone-100 group-hover:text-gold-400 tracking-wide mb-3 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 group-hover:text-stone-300 leading-relaxed transition-colors duration-200">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
