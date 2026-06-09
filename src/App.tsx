/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MenuItem, CartItem } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import MenuSection from './components/MenuSection';
import PartySection from './components/PartySection';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Scroll to section safely by ID
  const handleNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Add Item or adjust quantity in Cart
  const handleAddItem = (item: MenuItem, qty: number) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((ci) => ci.menuItem.id === item.id);
      if (existing) {
        const newQty = existing.quantity + qty;
        if (newQty <= 0) {
          return prevItems.filter((ci) => ci.menuItem.id !== item.id);
        }
        return prevItems.map((ci) =>
          ci.menuItem.id === item.id ? { ...ci, quantity: newQty } : ci
        );
      } else {
        if (qty <= 0) return prevItems;
        return [...prevItems, { id: item.id, menuItem: item, quantity: qty }];
      }
    });

    // Automatically pop open cart drawer for immediate conversion when adding first item
    if (cartItems.length === 0 && qty > 0) {
      setTimeout(() => {
        setIsCartOpen(true);
      }, 400);
    }
  };

  // Update item quantity directly from drawer steppers
  const handleUpdateQty = (itemId: string, delta: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.menuItem.id === itemId) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove completely from cart
  const handleRemoveItem = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.menuItem.id !== itemId));
  };

  // Clear shopping cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Fetch count of single item ordered
  const getCartQty = (itemId: string) => {
    const item = cartItems.find((ci) => ci.menuItem.id === itemId);
    return item ? item.quantity : 0;
  };

  // Calculate total badge count
  const cartBadgeCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Directly trigger pre-formatted general WhatsApp query
  const handleOrderWhatsappDirect = () => {
    const ownerNumber = '9955459096';
    const message = `*INQUIRY - S A DIPALI RESTAURANT*
==================================
Hi! I visited your website and would like to order fresh food from S A Dipali Restaurant. 

Please share the current specialties list with me. Thank you!`;
    const url = `https://wa.me/91${ownerNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Directly trigger smooth scroll to Event Planner setup section
  const handleBookBirthdayDirect = () => {
    handleNavigate('party');
  };

  return (
    <div id="app-root-container" className="bg-[#0c0c0b] text-stone-200 min-h-screen relative font-sans overflow-x-hidden selection:bg-amber-850 selection:text-white">
      
      {/* 1. STICKY HEADER NAVIGATION PANEL */}
      <Header
        cartCount={cartBadgeCount}
        onCartClick={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. IMMERSIVE HERO WITH DIRECT METRICS */}
      <Hero
        onNavigate={handleNavigate}
        onOrderWhatsappDirect={handleOrderWhatsappDirect}
        onBookBirthdayDirect={handleBookBirthdayDirect}
      />

      {/* 3. CORE SERVICE VALUES GRID */}
      <WhyUs />

      {/* 4. SIGNATURES & ACTIVE ORDER FOOD GRID */}
      <MenuSection
        onAddItem={handleAddItem}
        getCartQty={getCartQty}
      />

      {/* 5. CATERING & BIRTHDAY PLANNING LOUNGE */}
      <PartySection />

      {/* 6. MASONRY PHOTO GALLERY + LIGHTBOX */}
      <Gallery />

      {/* 7. CUSTOMER TESTIMONIAL FEEDBACK SLIDER */}
      <Reviews />

      {/* 8. FAQ CENTER, MAP EMBED & SCHEMA SCRIPT DETAILS */}
      <Footer />

      {/* 9. CART DRAWER ORDER BUILDER BAR */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 10. FLOATING ACTION CONTACT HANDLERS (DESKTOP AND MOBILE) */}
      <FloatingActions
        onNavigate={handleNavigate}
        onOrderWhatsappDirect={handleOrderWhatsappDirect}
        onBookBirthdayDirect={handleBookBirthdayDirect}
      />

    </div>
  );
}
