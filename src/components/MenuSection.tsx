/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';
import { Search, Flame, Star, ShoppingCart, Plus, Minus, CheckCircle } from 'lucide-react';

interface MenuSectionProps {
  onAddItem: (item: MenuItem, qty: number) => void;
  getCartQty: (itemId: string) => number;
}

export default function MenuSection({ onAddItem, getCartQty }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = ['All', 'Biryani', 'Chicken Specials', 'Rolls', 'Fast Food', 'Chinese', 'Family Combos'];

  // Signature Dishes
  const signatureDishes = MENU_ITEMS.filter((item) => item.isSignature || item.isPopular).slice(0, 4);

  // Filtered menu list based on selection & search
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: MenuItem, qty: number) => {
    onAddItem(item, qty);
    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#131312] relative">
      {/* Decorative styling */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =================================================================
            SECTION HEADER 1: SIGNATURE HIGHLIGHTS
            ================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-2">
            Chef&apos;s Recommendations
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Our Signature Dishes
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-brandred-600 mx-auto rounded-full" />
          <p className="text-sm text-stone-400 mt-4 text-pretty">
            Experience our most celebrated flavors, prepared inside traditional ovens with secret ground spices. Extremely recommended for first-time visitors!
          </p>
        </div>

        {/* Signature Highlights Grid */}
        <div id="signature-highlights" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {signatureDishes.map((dish) => {
            const qtyInCart = getCartQty(dish.id);
            return (
              <div
                key={dish.id}
                id={`signature-card-${dish.id}`}
                className="group relative flex flex-col sm:flex-row bg-[#1a1a19] border border-gold-500/10 hover:border-gold-500/30 rounded-3xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-black/60 hover:-translate-y-0.5"
              >
                {/* Visual Image container with tags */}
                <div className="relative w-full sm:w-[45%] h-52 sm:h-auto min-h-[190px] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 bg-stone-950/90 text-[10px] tracking-widest font-extrabold uppercase text-gold-400 border border-gold-500/20 px-3 py-1 rounded-full">
                    {dish.category}
                  </span>
                </div>

                {/* Content description panel */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    {/* Status badges */}
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="flex items-center space-x-1 text-[10px] uppercase font-bold tracking-wider text-amber-500">
                        <Star className="w-3 h-3 fill-amber-500" />
                        <span>Signature Highlight</span>
                      </span>
                      {dish.isSpicy && (
                        <span className="flex items-center space-x-1 text-[10px] font-bold text-brandred-500 uppercase">
                          <Flame className="w-3 h-3 fill-brandred-500" />
                          <span>Spicy</span>
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-200">
                      {dish.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-400 mt-2 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Pricing action indicators */}
                  <div id="card-action-bar" className="mt-5 pt-4 border-t border-stone-850 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-stone-500">Gourmet Taste</p>
                      <p className="text-xl font-extrabold text-gold-400">₹{dish.price}</p>
                    </div>

                    {/* Simple Quick Add trigger */}
                    <button
                      id={`sig-add-btn-${dish.id}`}
                      onClick={() => handleAddToCart(dish, 1)}
                      className="flex items-center space-x-1.5 bg-gold-500 hover:bg-gold-400 text-stone-950 font-bold text-xs uppercase tracking-wider px-4.5 py-2.5 rounded-full transition-all active:scale-95 cursor-pointer shadow-md shadow-amber-950/20"
                    >
                      {justAddedId === dish.id ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =================================================================
            SECTION HEADER 2: THE INTERACTIVE COMMERCIALLY COMPREHENSIVE MENU
            ================================================================= */}
        <div className="border-t border-stone-900 pt-16 text-center max-w-2xl mx-auto mb-10">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-brandred-500 uppercase mb-2">
            Online Ordering Menu
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Gourmet Interactive Menu
          </h2>
          <p className="text-xs sm:text-sm text-stone-400">
            Build your personalized order by selecting delicious dishes below. Your choices will compile into a clean, professional order format to text straight to our WhatsApp line!
          </p>
        </div>

        {/* Search and Category navigation controls */}
        <div id="menu-controls" className="flex flex-col space-y-6 mb-12">
          {/* Enhanced Search Input */}
          <div className="relative max-w-md mx-auto w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-stone-500" />
            <input
              id="menu-search-input"
              type="text"
              placeholder="Search dishes (e.g. Biryani, Noodles, Lollipop)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-900 border border-stone-800 hover:border-stone-700 focus:border-gold-500 text-stone-200 text-sm pl-11 pr-4 py-3.5 rounded-full focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-all placeholder:text-stone-600 font-medium"
            />
          </div>

          {/* Category Tabs list */}
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 -mx-4 px-4 scrollbar-none gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`category-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`py-2 px-5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer transition-all duration-300 focus:outline-none ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-brandred-700 to-brandred-800 text-white shadow-md border border-brandred-500/20 scale-105'
                    : 'bg-stone-900 border border-stone-850 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Interactive Card Grid */}
        <div id="full-menu-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const currentQty = getCartQty(item.id);
            return (
              <div
                key={item.id}
                id={`menu-item-card-${item.id}`}
                className="group relative flex flex-col bg-[#161615] border border-stone-900 hover:border-stone-850/60 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Image display */}
                <div className="relative w-full h-48 overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Dietary Badge */}
                  <span
                    className={`absolute top-3.5 left-3.5 text-[9px] uppercase tracking-widest font-extrabold px-2.5 py-0.5 rounded-md border backdrop-blur-sm ${
                      item.isVegetarian
                        ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/20'
                        : 'bg-brandred-950/80 text-brandred-400 border-brandred-500/20'
                    }`}
                  >
                    {item.isVegetarian ? 'Veg' : 'Non-Veg'}
                  </span>

                  {item.isPopular && (
                    <span className="absolute top-3.5 right-3.5 bg-amber-950/80 text-[9px] uppercase tracking-widest font-extrabold px-2.5 py-0.5 rounded-md text-amber-400 border border-amber-500/20 flex items-center space-x-1 backdrop-blur-sm">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>Best Seller</span>
                    </span>
                  )}
                </div>

                {/* Contents descriptors */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="font-serif text-[17px] font-bold text-stone-100 group-hover:text-gold-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-2 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom pricing & Quantitative state controls */}
                  <div className="pt-4 border-t border-stone-900/60 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">Price</p>
                      <p className="text-lg font-bold text-white">₹{item.price}</p>
                    </div>

                    {currentQty > 0 ? (
                      /* Active item stepper */
                      <div className="flex items-center bg-stone-900 border border-stone-800 rounded-full py-1.5 px-2">
                        <button
                          id={`qty-minus-${item.id}`}
                          onClick={() => onAddItem(item, -1)}
                          className="p-1 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-7 text-center font-bold text-xs text-gold-400">
                          {currentQty}
                        </span>
                        <button
                          id={`qty-plus-${item.id}`}
                          onClick={() => onAddItem(item, 1)}
                          className="p-1 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      /* Quick single click addition */
                      <button
                        id={`list-add-btn-${item.id}`}
                        onClick={() => handleAddToCart(item, 1)}
                        className="flex items-center space-x-1.5 bg-stone-900 hover:bg-stone-850 hover:border-gold-500/30 border border-stone-800 text-gold-400 font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full cursor-pointer transition-all"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty status message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#161615] rounded-3xl border border-stone-900">
            <p className="text-stone-500 text-sm">No items found matching your search. Try looking for &apos;Biryani&apos; or &apos;Roll&apos;!</p>
          </div>
        )}
      </div>
    </section>
  );
}
