/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Clock, ChevronDown, ChevronUp, Star, ShieldCheck, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function Footer() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Structured JSON-LD SEO Schemas
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://sa-dipali-restaurant.gopalganj.in",
        "name": "S A Dipali Restaurant",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
        "telephone": "9955459096",
        "url": "https://sa-dipali-restaurant.gopalganj.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop No 20, Barauli Road, Near Nahar Pool, Bishunpura",
          "addressLocality": "Gopalganj",
          "addressRegion": "Bihar",
          "postalCode": "841437",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "26.4344569",
          "longitude": "84.4503783"
        },
        "servesCuisine": ["North Indian", "Biryani", "Fast Food", "Chinese", "Rolls"],
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "10:00",
          "closes": "23:30"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.3",
          "reviewCount": "520",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <footer id="location" className="bg-[#141413] border-t border-stone-900 pt-20 relative">
      
      {/* Dynamic Insertion of SEO Schemas directly to window */}
      <script type="application/ld+json">
        {JSON.stringify(schemas)}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =================================================================
            FAQ ACCORDIONS (LOCAL SEO SCHEMAS DRIVER)
            ================================================================= */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-10">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-2 flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-gold-400" />
              <span>Got Doubts? We Have Answers</span>
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              S A Dipali FAQ Guide
            </h3>
            <div className="w-12 h-0.5 bg-gold-500/60 mx-auto rounded-full mt-3" />
          </div>

          <div id="faq-accordions" className="space-y-4">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="bg-stone-900/60 border border-stone-850 hover:border-gold-500/20 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 flex justify-between items-center text-stone-200 hover:text-white transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold tracking-wide mr-4">
                      {faq.question}
                    </span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-gold-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />}
                  </button>

                  {/* Accordion expand block */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-52 border-t border-stone-850/60' : 'max-h-0'
                    }`}
                  >
                    <p className="p-5 text-xs sm:text-sm text-stone-400 leading-relaxed bg-[#111110]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================================
            GEOLOCATION MAP EMBED + CONTACT DETAILS
            ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-16">
          
          {/* Column Left: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <span className="font-serif text-2xl sm:text-3xl font-black tracking-widest text-gold-400 uppercase leading-none block">
                S A Dipali <span className="font-normal italic text-stone-300 font-serif">Family Spot</span>
              </span>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed text-pretty">
                Centrally located near the iconic Nahar Pool along Barauli Road, we are the gold standard for premium hospitality and celebratory planning in Bishunpura, Gopalganj, Bihar.
              </p>
            </div>

            {/* Structured Info Blocks */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-stone-900/40 border border-stone-850">
                <MapPin className="w-5.5 h-5.5 text-brandred-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-gold-400">Our Address</h4>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    Shop No 20, Barauli Road, Near Nahar Pool, <br />
                    Bishunpura, Gopalganj, Bihar - 841437
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-stone-900/40 border border-stone-850">
                <Phone className="w-5.5 h-5.5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-gold-400">Phone & Orders</h4>
                  <p className="text-xs text-stone-300 mt-1">
                    Direct Line: <a href="tel:9955459096" className="font-bold hover:text-white underline">9955459096</a> (WhatsApp active)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-stone-900/40 border border-stone-850">
                <Clock className="w-5.5 h-5.5 text-brandred-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-gold-400">Opening Hours</h4>
                  <p className="text-xs text-stone-300 mt-1">
                    Monday - Sunday: 10:00 AM - 11:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Local Trust Verification */}
            <div className="flex items-center space-x-2.5 text-xs text-stone-500">
              <ShieldCheck className="w-5 h-5 text-emerald-500 fill-emerald-500/10" />
              <span>Certified Hygiene compliant & organic meat preparers.</span>
            </div>
          </div>

          {/* Column Right: Large Beautiful Map Embed */}
          <div className="lg:col-span-7 h-80 sm:h-auto min-h-[340px] rounded-3xl overflow-hidden border border-stone-850 shadow-2xl relative bg-stone-900">
            {/* Visual Google Map embed focusing on Bishunpura Gopalganj Bihar */}
            <iframe
              id="google-maps-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.4076046049283!2d84.4503783!3d26.4344569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992b8d0c9535e61%3A0xe542bf80b2d6a599!2sBishunpura%2C%20Bihar%20841437!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-full border-0 grayscale invert-[0.9] contrast-[1.25]"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="S A Dipali Restaurant Location Map"
            />
          </div>

        </div>

        {/* =================================================================
            BOTTOM SIGNATURE COPYRIGHT & LOCAL SEO FOOTER LINKS
            ================================================================= */}
        <div className="pt-10 pb-8 border-t border-stone-900 text-center space-y-4">
          <p className="text-[10px] sm:text-xs text-stone-500 tracking-wide">
            © {new Date().getFullYear()} S A Dipali Restaurant. All Rights Reserved. Crafted with ❤️ for local Gopalganj families.
          </p>

          {/* Structured local seo tag words */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[9px] uppercase tracking-wider text-stone-600 font-extrabold max-w-4xl mx-auto">
            <span>Best Restaurant in Bishunpura</span>
            <span>•</span>
            <span>Restaurant Near Nahar Pool</span>
            <span>•</span>
            <span>Family Restaurant in Bishunpura</span>
            <span>•</span>
            <span>Fast Food Restaurant in Bishunpura</span>
            <span>•</span>
            <span>Birthday Party Restaurant in Bishunpura</span>
            <span>•</span>
            <span>Best Biryani in Bishunpura</span>
            <span>•</span>
            <span>Restaurant in Gopalganj</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
