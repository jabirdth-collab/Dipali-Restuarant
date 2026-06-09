/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MessageSquare, Utensils, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onNavigate: (sectionId: string) => void;
  onOrderWhatsappDirect: () => void;
  onBookBirthdayDirect: () => void;
}

export default function FloatingActions({
  onNavigate,
  onOrderWhatsappDirect,
  onBookBirthdayDirect,
}: FloatingActionsProps) {
  return (
    <>
      {/* =================================================================
          DESKTOP FLOATING ACTIONS (FABs)
          ================================================================= */}
      <div id="desktop-fabs" className="hidden md:flex flex-col space-y-3.5 fixed bottom-6 right-6 z-40">
        
        {/* Call Now Circular Badge */}
        <a
          id="fab-call"
          href="tel:9955459096"
          className="flex items-center justify-center w-13 h-13 rounded-full bg-brandred-600 hover:bg-brandred-500 text-white shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-350 cursor-pointer group border border-brandred-500/20"
          title="Call Restaurant"
        >
          <Phone className="w-5.5 h-5.5 group-hover:animate-bounce" />
        </a>

        {/* WhatsApp Circular Badge */}
        <button
          id="fab-whatsapp"
          onClick={onOrderWhatsappDirect}
          className="flex items-center justify-center w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-350 cursor-pointer group border border-emerald-500/20"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5.5 h-5.5 fill-white/10 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* =================================================================
          STICKY MOBILE ACTION BAR (FIXED BOTTOM)
          ================================================================= */}
      <div
        id="mobile-sticky-footer-bar"
        className="md:hidden fixed bottom-0 left-0 w-full bg-stone-950/95 backdrop-blur-md border-t border-stone-900 z-40 grid grid-cols-3 divide-x divide-stone-900 shadow-2xl h-16"
      >
        {/* Field 1: View Menu */}
        <button
          id="mobile-sticky-menu"
          onClick={() => onNavigate('menu')}
          className="flex flex-col items-center justify-center text-stone-400 hover:text-gold-400 transition-colors focus:outline-none cursor-pointer"
        >
          <Utensils className="w-4.5 h-4.5" />
          <span className="text-[9px] uppercase tracking-wider font-extrabold mt-1 font-sans">View Menu</span>
        </button>

        {/* Field 2: Call Now (Prime highlighted color) */}
        <a
          id="mobile-sticky-call"
          href="tel:9955459096"
          className="flex flex-col items-center justify-center bg-brandred-700/10 text-brandred-500 hover:text-brandred-400 hover:bg-brandred-700/20 transition-all cursor-pointer"
        >
          <Phone className="w-4.5 h-4.5 animate-[pulse_2s_infinite]" />
          <span className="text-[9px] uppercase tracking-wider font-extrabold mt-1 font-sans">Call Now</span>
        </a>

        {/* Field 3: WhatsApp Chat */}
        <button
          id="mobile-sticky-whatsapp"
          onClick={onOrderWhatsappDirect}
          className="flex flex-col items-center justify-center text-emerald-500 hover:text-emerald-400 transition-all cursor-pointer"
        >
          <MessageSquare className="w-4.5 h-4.5" />
          <span className="text-[9px] uppercase tracking-wider font-extrabold mt-1 font-sans">WhatsApp</span>
        </button>
      </div>
    </>
  );
}
