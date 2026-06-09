/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'Biryani' | 'Chicken Specials' | 'Rolls' | 'Fast Food' | 'Chinese' | 'Family Combos';
  isVegetarian: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
  isSignature?: boolean;
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingForm {
  name: string;
  phone: string;
  date: string;
  time: string;
  guestsCount: number;
  eventType: 'Birthday Party' | 'Friends Gathering' | 'Family Event' | 'Small Celebration';
  specialRequests: string;
}
