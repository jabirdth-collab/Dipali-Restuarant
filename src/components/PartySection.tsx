/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CalendarRange, Sparkles, AlertCircle, MessageCircle, PartyPopper } from 'lucide-react';
import { BookingForm } from '../types';

export default function PartySection() {
  const [form, setForm] = useState<BookingForm>({
    name: '',
    phone: '',
    date: '',
    time: '18:00',
    guestsCount: 20,
    eventType: 'Birthday Party',
    specialRequests: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  // Recommendations calculated based on guest size
  const getPackageRecommendations = (count: number) => {
    if (count <= 15) {
      return {
        seating: 'Exclusive Cozy Corner Seating',
        sound: 'Personal Bluetooth Premium Acoustic Sound',
        spec: 'A-la-Carte Fast Food + Free Balloons!',
        pricing: 'Starting at just ₹2,500'
      };
    } else if (count <= 35) {
      return {
        seating: 'Segmented VIP Dining Lounge',
        sound: 'Professional DJ Stereos + Mic system',
        spec: 'Custom Combos, Special Party Cake, Full Red/Gold Balloon Setups',
        pricing: 'Customized starting at ₹6,000'
      };
    } else {
      return {
        seating: 'Entire Restaurant Blockout Exclusive',
        sound: 'Full Sound System + Interactive Lights',
        spec: 'Personalized Multi-course Buffet, Specialized Catering, Exclusive Dedicated Staff',
        pricing: 'Bespoke budgets arranged via call'
      };
    }
  };

  const currentRecommend = getPackageRecommendations(form.guestsCount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      // Craft clean WhatsApp URL scheme
      const phone = '9955459096';
      const text = `*NEW CHAIR/EVENT RESERVATION REQUEST - S A DIPALI*

*Customer Name:* ${form.name || 'Valued Guest'}
*Phone Number:* ${form.phone || '9955459096'}
*Date of Event:* ${form.date || 'TBD'}
*Time Block:* ${form.time}
*Estimated Guests:* ${form.guestsCount} People
*Celebration Type:* ${form.eventType}

*Calculated Recommendations Info:*
- Seating: ${currentRecommend.seating}
- Package Add-on: ${currentRecommend.spec}

_Special Request Notes:_
${form.specialRequests || 'None'}

Please confirm availability for this reservation. Thank you!`;

      const encodedText = encodeURIComponent(text);
      const url = `https://wa.me/91${phone}?text=${encodedText}`;
      setIsLoading(false);
      window.open(url, '_blank');
    }, 600);
  };

  return (
    <section id="party" className="py-20 sm:py-28 bg-stone-950 relative overflow-hidden">
      {/* Decorative luxury red gradient spots */}
      <div className="absolute top-[-10%] left-[20%] w-[400px] h-[400px] bg-brandred-950/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: TEXT COLLATERALS */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Memorable Occasions</span>
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Celebrate Your Special Moments With Us
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-brandred-600 rounded-full" />
            </div>

            <p className="text-sm sm:text-base text-stone-400 leading-relaxed text-pretty">
              Make your milestones unforgettable in the highest-rated celebration environment of Gopalganj. From gorgeous balloons decorations to powerful stereos and freshly prepared culinary delights, S A Dipali Restaurant is the ultimate event partner.
            </p>

            {/* List of event types with luxurious hover actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-stone-900 border border-stone-850 hover:bg-stone-900/60 transition-all flex items-center space-x-3.5">
                <div className="bg-amber-950/50 p-2.5 rounded-lg border border-amber-500/20 text-gold-400">
                  <PartyPopper className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-100 uppercase tracking-wider">Birthday Parties</h4>
                  <p className="text-xs text-stone-500 mt-1">Full setups & sound systems</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-850 hover:bg-stone-900/60 transition-all flex items-center space-x-3.5">
                <div className="bg-brandred-950/50 p-2.5 rounded-lg border border-brandred-500/20 text-brandred-400">
                  <Sparkles className="w-5 h-5 text-brandred-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-100 uppercase tracking-wider">Friends Gatherings</h4>
                  <p className="text-xs text-stone-500 mt-1">Platters & shared appetizers</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-850 hover:bg-stone-900/60 transition-all flex items-center space-x-3.5">
                <div className="bg-amber-950/50 p-2.5 rounded-lg border border-amber-500/20 text-gold-400">
                  <CalendarRange className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-100 uppercase tracking-wider">Family Events</h4>
                  <p className="text-xs text-stone-500 mt-1">Hygienic multi-course feasts</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-850 hover:bg-stone-900/60 transition-all flex items-center space-x-3.5">
                <div className="bg-brandred-950/50 p-2.5 rounded-lg border border-brandred-500/20 text-brandred-400">
                  <AlertCircle className="w-5 h-5 text-brandred-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-100 uppercase tracking-wider">Small Celebrations</h4>
                  <p className="text-xs text-stone-500 mt-1">Anniversaries & milestones</p>
                </div>
              </div>
            </div>

            {/* Premium Guarantee */}
            <div className="p-4 rounded-xl bg-[#141413] border border-stone-850 flex items-start space-x-3">
              <span className="text-gold-400 font-extrabold text-lg">💡</span>
              <p className="text-xs text-stone-500 leading-normal">
                <span className="text-stone-300 font-bold block mb-0.5">Complementary Ballon Decor Package</span>
                Any birthday bookings with 20+ guests receive pre-arranged baseline balloon decorations completely free of charge. Contact us today via the estimator to learn more!
              </p>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE RESERVATION ESTIMATOR */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#1a1a19] to-[#121211] border border-gold-400/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            {/* Glowing gold ambient light */}
            <div className="absolute top-0 right-10 w-28 h-28 bg-gold-500/5 rounded-full blur-[40px] pointer-events-none" />

            <div className="mb-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">Reserve Your Spot</h3>
              <p className="text-xs text-stone-500 mt-1">Instant estimations, synced with your personal WhatsApp chat!</p>
            </div>

            <form id="party-estimate-form" onSubmit={handleSubmit} className="space-y-4">
              
              {/* Event type & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eventType" className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                    What are we celebrating?
                  </label>
                  <select
                    id="eventType"
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value as any })}
                    className="w-full bg-stone-900 border border-stone-800 text-stone-200 text-xs px-3.5 py-3 rounded-xl focus:border-gold-500 focus:outline-none transition-colors"
                  >
                    <option>Birthday Party</option>
                    <option>Friends Gathering</option>
                    <option>Family Event</option>
                    <option>Small Celebration</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="guestsCount" className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                    Estimated Guests ({form.guestsCount} people)
                  </label>
                  <input
                    id="guestsCount"
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={form.guestsCount}
                    onChange={(e) => setForm({ ...form, guestsCount: parseInt(e.target.value) })}
                    className="w-full accent-gold-500 h-2 bg-stone-900 rounded-lg appearance-none cursor-pointer mt-3"
                  />
                  <div className="flex justify-between text-[10px] text-stone-600 font-bold mt-1">
                    <span>5 Guests</span>
                    <span>100 Guests</span>
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                    Select Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-800 text-stone-200 text-xs px-3.5 py-3 rounded-xl focus:border-gold-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                    Approximate Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    required
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-800 text-stone-200 text-xs px-3.5 py-3 rounded-xl focus:border-gold-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-800 text-stone-200 text-xs px-3.5 py-2.5 rounded-xl focus:border-gold-500 focus:outline-none transition-colors placeholder:text-stone-700"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                    Your Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="Enter 10 digit phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-800 text-stone-200 text-xs px-3.5 py-2.5 rounded-xl focus:border-gold-500 focus:outline-none transition-colors placeholder:text-stone-700"
                  />
                </div>
              </div>

              {/* Special instructions */}
              <div>
                <label htmlFor="specialRequests" className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                  Decorations or Special Requests (Optional)
                </label>
                <textarea
                  id="specialRequests"
                  rows={2}
                  placeholder="Need special balloons pattern, quiet sitting area, or customize menus?"
                  value={form.specialRequests}
                  onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-800 text-stone-200 text-xs px-3.5 py-2.5 rounded-xl focus:border-gold-500 focus:outline-none transition-colors placeholder:text-stone-700 resize-none"
                />
              </div>

              {/* Estimation Badge */}
              <div className="p-4 rounded-xl bg-black border border-orange-500/10 space-y-2 mt-2">
                <p className="text-[11px] font-extrabold text-orange-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interactive Dynamic Recommendation:</span>
                </p>
                <div className="space-y-1 text-xs">
                  <p className="text-zinc-300">
                    <span className="text-stone-400 font-semibold">Recommended Space:</span> {currentRecommend.seating}
                  </p>
                  <p className="text-zinc-300">
                    <span className="text-stone-400 font-semibold">Specials Setup:</span> {currentRecommend.spec}
                  </p>
                  <p className="text-amber-400/90 font-bold mt-1.5">
                    {currentRecommend.pricing}
                  </p>
                </div>
              </div>

              {/* Form trigger CTA button */}
              <button
                id="party-submit-btn"
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 py-3.5 bg-gradient-to-r from-brandred-700 to-brandred-800 hover:from-brandred-600 hover:to-brandred-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg active:scale-98 transition-all duration-200 cursor-pointer disabled:opacity-50"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-white/10" />
                <span>{isLoading ? 'Processing Estimations...' : 'Book Your Party via WhatsApp'}</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
