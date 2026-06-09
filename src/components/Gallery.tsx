/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import specialChickenBiryaniImg from '../assets/images/special_chicken_biryani_1780981054818.png';

interface GalleryImage {
  id: number;
  url: string;
  category: 'Interior' | 'Event Setups' | 'Signature Plate' | 'Guests Experience';
  title: string;
  desc: string;
}

export default function Gallery() {
  const images: GalleryImage[] = [
    {
      id: 0,
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
      category: 'Interior',
      title: 'Premium Main Lounge',
      desc: 'Sophisticated warm-lit family dining arrangement with plush custom upholstery.',
    },
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200',
      category: 'Signature Plate',
      title: 'Tandoori Platters prepping',
      desc: 'Freshly roasted marinated chicken skewers coming hot off the live clay tandoor heaters.',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200',
      category: 'Event Setups',
      title: 'Birthday Lounge Balloon Decor',
      desc: 'Festive red, black, and gold ceiling balloons customized for high-end party setups.',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200',
      category: 'Interior',
      title: 'Cozy Couple Booths',
      desc: 'Private booth zones styled elegantly for cozy friend conversations and small groups.',
    },
    {
      id: 4,
      url: specialChickenBiryaniImg,
      category: 'Signature Plate',
      title: 'Slow-Cooked Dum Biryani',
      desc: 'Authentic plated traditional chicken biryani decorated with fresh coriander and saffron.',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e3a9?auto=format&fit=crop&q=80&w=1200',
      category: 'Guests Experience',
      title: 'Friends Milestone Gathering',
      desc: 'Excited local youth celebrating birthdays together with customized cake slices and shakes.',
    },
  ];

  const [activeTab, setActiveTab] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const tabs = ['All', 'Interior', 'Event Setups', 'Signature Plate', 'Guests Experience'];

  const filteredImages = activeTab === 'All'
    ? images
    : images.filter((img) => img.category === activeTab);

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#131312] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-2 flex items-center justify-center gap-1.5">
            <Camera className="w-4.5 h-4.5 text-gold-400" />
            <span>A Snap of Dipali Experience</span>
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Interior & Dining Gallery
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-brandred-600 mx-auto rounded-full mb-5" />
          <p className="text-sm text-stone-400 text-pretty">
            Take a visual tour inside our air-conditioned family restaurant, celebration party lounges, and see our freshly prepared special dishes.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 gap-2 mb-10 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              id={`gallery-tab-${tab.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded-full text-[11px] font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap transition-all duration-300 focus:outline-none ${
                activeTab === tab
                  ? 'bg-gold-500 text-stone-950 shadow-md scale-105'
                  : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-850'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Masonry/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              id={`gallery-item-${img.id}`}
              onClick={() => setLightboxIndex(img.id)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-stone-900 hover:border-gold-500/20 transition-all duration-500"
            >
              {/* Image with high fidelity zoom hover response */}
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Seamless glass overlay on hover */}
              <div className="absolute inset-0 bg-stone-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6" />

              {/* Ambient outline lines only visible on hover */}
              <div className="absolute inset-4 border border-gold-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Elements shown on hover */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
                <span className="self-start text-[9px] uppercase tracking-widest font-extrabold bg-gold-500 text-stone-950 px-3 py-1 rounded-full shadow-lg">
                  {img.category}
                </span>

                <div className="flex items-end justify-between">
                  <div>
                    <h4 className="text-sm font-serif font-bold text-white tracking-wide">{img.title}</h4>
                    <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">{img.desc}</p>
                  </div>
                  <div className="p-2 rounded-full bg-stone-900 border border-stone-800 text-gold-400 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =================================================================
            PREMIUM LIGHTBOX PORTAL OVERLAY
            ================================================================= */}
        {lightboxIndex !== null && (
          <div
            id="lightbox-overlay"
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 lightbox-fade-in"
          >
            {/* Background Exit Clicker */}
            <div className="absolute inset-0 cursor-default" onClick={() => setLightboxIndex(null)} />

            {/* Main Image Stage */}
            <div className="relative max-w-4xl w-full flex flex-col items-center z-10">
              
              {/* Floating controls */}
              <div className="absolute -top-12 sm:top-4 right-0 sm:right-4 z-20 flex space-x-2">
                <button
                  id="lightbox-close-btn"
                  onClick={() => setLightboxIndex(null)}
                  className="p-2.5 rounded-full bg-stone-900/90 border border-stone-800 text-stone-300 hover:text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Left */}
              <button
                id="lightbox-prev-btn"
                onClick={handlePrev}
                className="absolute left-0 sm:-left-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/90 border border-stone-800 text-stone-300 hover:text-gold-400 transition-all cursor-pointer group active:scale-90"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Navigation Right */}
              <button
                id="lightbox-next-btn"
                onClick={handleNext}
                className="absolute right-0 sm:-right-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/90 border border-stone-800 text-stone-300 hover:text-gold-400 transition-all cursor-pointer group active:scale-90"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Image Frame */}
              <div className="w-full bg-[#111] rounded-2xl overflow-hidden border border-stone-800 shadow-2xl relative max-h-[70vh]">
                <img
                  src={images[lightboxIndex].url}
                  alt={images[lightboxIndex].title}
                  className="w-full h-full max-h-[70vh] object-contain mx-auto"
                />
              </div>

              {/* Description Panel Footer */}
              <div className="text-center mt-5 sm:mt-6 bg-stone-900/50 border border-stone-850 px-6 py-4 rounded-2xl max-w-xl w-full">
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-gold-500">
                  {images[lightboxIndex].category}
                </span>
                <h4 className="text-base font-serif font-bold text-white tracking-wide mt-1">
                  {images[lightboxIndex].title}
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  {images[lightboxIndex].desc}
                </p>
                <div className="text-[10px] text-stone-600 font-bold tracking-widest mt-2">
                  {lightboxIndex + 1} OF {images.length}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
