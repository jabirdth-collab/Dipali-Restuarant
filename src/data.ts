/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, Review, FAQItem } from './types';
import chickenLollipopImg from './assets/images/chicken_lollipop_1780980578710.png';
import specialChickenBiryaniImg from './assets/images/special_chicken_biryani_1780981054818.png';
import eggBiryaniImg from './assets/images/egg_biryani_image_1780981070583.png';
import specialChickenGravyImg from './assets/images/special_chicken_gravy_1780981087558.png';
import tandooriChickenRollImg from './assets/images/tandoori_chicken_roll_1780981106350.png';
import eggChickenRollImg from './assets/images/egg_chicken_roll_1780981123435.png';
import frenchFriesImg from './assets/images/french_fries_1780981142445.png';
import vegCheeseBurgerImg from './assets/images/veg_cheese_burger_1780981157653.png';
import schezwanNoodlesImg from './assets/images/schezwan_noodles_1780981173445.png';
import chiliPaneerImg from './assets/images/chili_paneer_1780981191167.png';
import grandFeastComboImg from './assets/images/grand_feast_combo_1780981208885.png';

export const MENU_ITEMS: MenuItem[] = [
  // Biryani Category
  {
    id: 'b1',
    name: 'Special Chicken Biryani (Dum Cooked)',
    price: 220,
    description: 'Aromatic, long-grain basmati rice layered with juicy farm-fresh organic chicken marinated in 21 secret hand-ground spices, slow-cooked in clean traditional clay pots of Gopalganj style.',
    image: specialChickenBiryaniImg,
    category: 'Biryani',
    isVegetarian: false,
    isPopular: true,
    isSignature: true,
    isSpicy: true
  },
  {
    id: 'b2',
    name: 'Egg Biryani Double-Decker',
    price: 150,
    description: 'Fragrant basmati rice tossed with slow-braised boiled organic eggs, caramelized sweet onions, fresh mint leaves, and robust traditional Bihari warm spices.',
    image: eggBiryaniImg,
    category: 'Biryani',
    isVegetarian: true,
    isSpicy: false
  },

  // Chicken Specials
  {
    id: 'c1',
    name: 'Premium Chicken Lollipop (6 Pcs)',
    price: 190,
    description: 'Crisp-fried tender chicken winglets shaped into lollipops, tossed in our signature glazed tangy honey-garlic red sauce. Garnished beautifully with green onions.',
    image: chickenLollipopImg,
    category: 'Chicken Specials',
    isVegetarian: false,
    isPopular: true,
    isSpicy: true
  },
  {
    id: 'c2',
    name: 'S A Dipali Special Chicken Gravy',
    price: 250,
    description: 'Our ultimate pride recipe — slow-roasted country chicken simmered in rich, thick, onion-tomato-cashew gravy with pressed pure mustard oil and local spices.',
    image: specialChickenGravyImg,
    category: 'Chicken Specials',
    isVegetarian: false,
    isSignature: true,
    isSpicy: true
  },

  // Rolls
  {
    id: 'r1',
    name: 'Tandoori Chicken Roll Extra-Rich',
    price: 90,
    description: 'Freshly active tandoor chicken pieces, tossed with dynamic chatpata masala, shredded green lettuce, fresh limes, and wrapped inside a perfectly crisp thin roll.',
    image: tandooriChickenRollImg,
    category: 'Rolls',
    isVegetarian: false,
    isPopular: true
  },
  {
    id: 'r2',
    name: 'Egg Chicken Roll Double-Decker',
    price: 110,
    description: 'Hand-rolled paratha layered with twin beaten organic eggs, stuffed generously with grilled marinated chicken cubes, mint chutney, and raw red onions.',
    image: eggChickenRollImg,
    category: 'Rolls',
    isVegetarian: false,
    isSpicy: true
  },

  // Fast Food Specials
  {
    id: 'f1',
    name: 'Crispiest French Fries (Bishunpura Style)',
    price: 80,
    description: 'Premium cut clean potatoes double-fried to high golden crispness, tossed in savory Himalayan pink salt and peri-peri local spice blend.',
    image: frenchFriesImg,
    category: 'Fast Food',
    isVegetarian: true
  },
  {
    id: 'f2',
    name: 'Spicy Veg Cheese Burger',
    price: 95,
    description: 'A crispy premium mixed vegetable potato patty topped with a slice of rich Amul cheese, spicy mayo, fresh tomatoes, and handpicked crisp lettuce.',
    image: vegCheeseBurgerImg,
    category: 'Fast Food',
    isVegetarian: true
  },

  // Chinese
  {
    id: 'ch1',
    name: 'Singapore Style Schezwan Noodles',
    price: 130,
    description: 'High-fire wok-fried thin noodles loaded with crunchy julienned bell peppers, carrots, crisp red onions, and wok-kissed fiery dark red chilies.',
    image: schezwanNoodlesImg,
    category: 'Chinese',
    isVegetarian: true,
    isPopular: true,
    isSpicy: true
  },
  {
    id: 'ch2',
    name: 'Fiery Chili Paneer Dry',
    price: 160,
    description: 'Soft cubes of pure paneer tossed with spicy capsicums, thick spring onions, and a splash of rich dark soy, ginger, and garlic glaze.',
    image: chiliPaneerImg,
    category: 'Chinese',
    isVegetarian: true,
    isSpicy: true
  },

  // Family Combos
  {
    id: 'co1',
    name: 'Grand Family Feast Combo',
    price: 499,
    description: 'Extravagant combo designed for 3-4 hungry food lovers! Includes 1 Full Chicken Biryani Bowl, 1 Plate Chicken Lollipop (6 Pcs), 2 Soft Drinks, Salads, and Raita.',
    image: grandFeastComboImg,
    category: 'Family Combos',
    isVegetarian: false,
    isSignature: true,
    isPopular: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev1',
    author: 'Aalok Kumar',
    rating: 5,
    text: 'Very tasty food. Affordable price. Staff behavior is very good.',
    date: '3 weeks ago',
    source: 'Google Review'
  },
  {
    id: 'rev2',
    author: 'Suman Shrivastav',
    rating: 5,
    text: 'Best place for family dining in Bishunpura. The hygiene is well-maintained and chicken biryani has an incredible taste. Must visit with family!',
    date: '1 month ago',
    source: 'Google Review'
  },
  {
    id: 'rev3',
    author: 'Rahul Mishra',
    rating: 5,
    text: 'Food quality is excellent. I celebrated my sister’s birthday here. The party decorations and sound system they provided were exceptional.',
    date: '2 months ago',
    source: 'Google Review'
  },
  {
    id: 'rev4',
    author: 'Vikram Prasad',
    rating: 5,
    text: 'Great ambience and quick service. Best chicken roll and lollipop near Nahar Pool. Prices are pocket-friendly and ingredients are fresh!',
    date: '2 weeks ago',
    source: 'Google Review'
  },
  {
    id: 'rev5',
    author: 'Neha Roy',
    rating: 5,
    text: 'Perfect family lounge. Staff is very humble and welcoming. The spicy chowmein and chilli chicken are top tier! Highest recommendation count in Gopalganj!',
    date: '2 months ago',
    source: 'Google Review'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Where exactly is S A Dipali Restaurant located?',
    answer: 'We are situated at Shop No 20, Barauli Road, Near Nahar Pool, Bishunpura, Gopalganj, Bihar. It is highly accessible with parking spaces available for families.'
  },
  {
    id: 'faq2',
    question: 'How can I book a birthday party or celebrate a special occasion?',
    answer: 'You can book your birthday party or get-togethers directly by clicking the "Book Birthday Party" button on our website, or by calling us at 9955459096. We coordinate beautiful balloon decorations and customizable set menus!'
  },
  {
    id: 'faq3',
    question: 'What type of cuisines do you serve?',
    answer: 'We serve high-quality, authentic Indian (with specialties in Biryani and slow-cooked Chicken Gravies), Chinese, and street-style Fast Foods prepared with the highest food safety and freshness indicators.'
  },
  {
    id: 'faq4',
    question: 'Do you offer home delivery or ordering via WhatsApp in Bishunpura?',
    answer: 'Yes! You can choose your favorite dishes directly from our online interactive menu on this website, click "Proceed to WhatsApp Order", and your order format gets structured immediately to send to our phone number 9955459096.'
  },
  {
    id: 'faq5',
    question: 'Is S A Dipali Restaurant purely family-friendly?',
    answer: 'Absolutely. We pride ourselves on offering a safe, warm, and air-conditioned environment tailored specifically for family celebrations, friends reunions, and kids parties.'
  }
];
