/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { REVIEWS } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
      setIsTransitioning(false);
    }, 200);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
      setIsTransitioning(false);
    }, 200);
  };

  const activeReview = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-stone-950 relative overflow-hidden">
      {/* Golden spotlight in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gold-950/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header visual branding */}
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-2">
            Local Love & Endorsement
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Loved By Families & Foodies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-brandred-600 mx-auto rounded-full" />
        </div>

        {/* Google ratings summary card */}
        <div id="google-ratings-summary" className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-stone-900/40 border border-stone-850 px-6 py-4.5 rounded-2xl mb-12 shadow-xl backdrop-blur-sm">
          <div className="flex items-center space-x-1">
            <span className="text-2xl font-extrabold text-white">4.3</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4.5 h-4.5 fill-amber-400 text-amber-400`} />
              ))}
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-stone-800" />
          <p className="text-xs text-stone-400 font-bold tracking-wide uppercase">
            Based on <span className="text-white">+520 Verified Customers</span> near Bishunpura area
          </p>
        </div>

        {/* Carousel Slider Panel with fade animation */}
        <div className="relative bg-gradient-to-b from-[#1a1a19] to-[#141413] border border-gold-500/10 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden min-h-[280px] flex flex-col justify-between">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-stone-800/40 pointer-events-none" />
          <Quote className="absolute bottom-6 right-6 w-12 h-12 text-stone-800/40 rotate-180 pointer-events-none" />

          {/* Individual Testimonial Segment */}
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex justify-center text-amber-400 mb-6">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 mx-0.5 animate-[pulse_2s_infinite]" />
              ))}
            </div>

            <p className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-stone-200 italic leading-relaxed max-w-2xl mx-auto text-pretty">
              &ldquo;{activeReview.text}&rdquo;
            </p>

            <div className="mt-8 flex flex-col items-center">
              <p className="text-sm font-bold text-white tracking-wide uppercase flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/10" />
                <span>{activeReview.author}</span>
              </p>
              <div className="flex items-center space-x-2 text-[10px] text-stone-500 font-bold uppercase tracking-widest mt-1">
                <span>{activeReview.date}</span>
                <span>•</span>
                <span className="text-gold-500">{activeReview.source}</span>
              </div>
            </div>
          </div>

          {/* Dots Indicators Bar */}
          <div className="flex items-center justify-center space-x-2 mt-8 z-10">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                id={`carousel-dot-${i}`}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                  currentIndex === i ? 'bg-gold-400 w-6' : 'bg-stone-700 hover:bg-stone-500'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Stepper Buttons (Left/Right) for usability */}
          <div className="hidden sm:flex items-center justify-between absolute inset-y-0 left-4 right-4 pointer-events-none">
            <button
              id="reviews-prev"
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-stone-900 hover:bg-stone-850 hover:text-gold-400 text-stone-400 border border-stone-800 transition-all pointer-events-auto cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="reviews-next"
              onClick={handleNext}
              className="p-2.5 rounded-full bg-stone-900 hover:bg-stone-850 hover:text-gold-400 text-stone-400 border border-stone-800 transition-all pointer-events-auto cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
