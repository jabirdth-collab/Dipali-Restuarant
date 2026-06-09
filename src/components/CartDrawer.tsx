/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, Send, Smartphone } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [deliveryType, setDeliveryType] = useState<'Home Delivery' | 'Takeaway' | 'Dine-In'>('Home Delivery');
  const [isSending, setIsSending] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);

  const handleWhatsappSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setIsSending(true);

    setTimeout(() => {
      // Build WhatsApp markdown message
      const restaurantName = 'S A Dipali Restaurant';
      
      let itemsBreakdown = '';
      cartItems.forEach((item, index) => {
        itemsBreakdown += `${index + 1}. *${item.menuItem.name}*\n   Qty: ${item.quantity} | Total: ₹${item.menuItem.price * item.quantity}\n`;
      });

      const messageText = `*🔔 NEW ORDER - ${restaurantName.toUpperCase()}*
====================================
*ORDER METHOD:* ${deliveryType.toUpperCase()}

*Customer Profile:*
• *Name:* ${customerName || 'Valued Customer'}
• *Phone:* ${customerPhone || 'Not Specified'}
• *Address:* ${customerAddress || 'Pick up at restaurant'}

*Ordered Culinary Items:*
${itemsBreakdown}
------------------------------------
*GRAND BILL TOTAL:* ₹${totalAmount}
====================================
*Chef's Special Instructions:*
_${specialInstructions ? specialInstructions : 'No special requests. Cook fresh!'}_

Please confirm receipt, total billing, and share the cooking/delivery time estimation. Thank you!`;

      const encodedMessage = encodeURIComponent(messageText);
      const restaurantPhone = '9955459096';
      const whatsappUrl = `https://wa.me/91${restaurantPhone}?text=${encodedMessage}`;

      setIsSending(false);
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div
      id="cart-drawer-overlay"
      className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-black/85 backdrop-blur-sm transition-opacity duration-300"
    >
      {/* Background Dimmer Dismiss Clicker */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Main Drawer Container */}
      <div
        id="cart-drawer-content"
        className="relative max-w-md w-full h-full bg-stone-950 border-l border-stone-850 shadow-2xl flex flex-col justify-between"
      >
        {/* DRAWER HEADER */}
        <div className="p-5 border-b border-stone-900 flex items-center justify-between bg-stone-900/40">
          <div className="flex items-center space-x-2.5 text-white">
            <ShoppingBag className="w-5 h-5 text-gold-400" />
            <h2 className="text-base font-serif font-extrabold tracking-wide uppercase">Your Shopping Cart</h2>
            <span className="bg-brandred-600 font-bold px-2 py-0.5 rounded-full text-[10px] text-white">
              {cartItems.length} Items
            </span>
          </div>

          <button
            id="cart-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-850 hover:text-white border border-stone-800 text-stone-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MIDDLE: SCROLL CONTENT */}
        <div id="cart-scroll-container" className="flex-1 overflow-y-auto p-5 space-y-6">
          {cartItems.length === 0 ? (
            /* Empty Cart Placeholder styling */
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
              <div className="p-4 rounded-full bg-stone-900 border border-stone-850 text-stone-600">
                <ShoppingBag className="w-12 h-12" />
              </div>
              <p className="text-sm font-semibold text-stone-300">Your shopping cart is empty</p>
              <p className="text-xs text-stone-500 max-w-[250px]">
                Explore our signature Biryanis, hot rolls, and lollipops and add items here!
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-gold-500 text-stone-950 text-xs uppercase font-extrabold tracking-widest rounded-full hover:bg-gold-400 cursor-pointer transition-colors"
              >
                Start Adding
              </button>
            </div>
          ) : (
            /* Items List */
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-stone-900">
                <h3 className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">Ordered Items</h3>
                <button
                  id="clear-cart-btn"
                  onClick={onClearCart}
                  className="text-[10px] uppercase font-bold tracking-wider text-brandred-500 hover:text-brandred-400 flex items-center space-x-1 focus:outline-none"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear All</span>
                </button>
              </div>

              {/* Individual Item Row */}
              <div id="cart-items-wrapper" className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-3 p-3 bg-stone-900/50 rounded-xl border border-stone-900"
                  >
                    <img
                      src={item.menuItem.image}
                      alt={item.menuItem.name}
                      className="w-12 h-12 rounded-lg object-cover bg-stone-800"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white tracking-wide truncate">{item.menuItem.name}</h4>
                      <p className="text-[10px] text-stone-500 mt-0.5">₹{item.menuItem.price} each</p>
                    </div>

                    {/* Stepper Actions block */}
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center bg-stone-950 border border-stone-850 rounded-md p-1">
                        <button
                          onClick={() => onUpdateQty(item.id, -1)}
                          className="p-0.5 rounded text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold text-gold-400">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQty(item.id, 1)}
                          className="p-0.5 rounded text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-stone-600 hover:text-brandred-500 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Choice Panel selector */}
              <div className="pt-4 border-t border-stone-900 space-y-3">
                <label className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                  Order Mode Choice
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Home Delivery', 'Takeaway', 'Dine-In'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setDeliveryType(type)}
                      className={`py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider border cursor-pointer text-center select-none transition-all ${
                        deliveryType === type
                          ? 'bg-brandred-700/20 border-brandred-500 text-brandred-400'
                          : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Receipt user details form */}
              <form id="whatsapp-checkout-form" onSubmit={handleWhatsappSend} className="pt-4 border-t border-stone-900 space-y-3.5">
                <h3 className="text-[11px] font-bold text-stone-400 uppercase tracking-widest mb-2">Delivery Details</h3>

                <div>
                  <label htmlFor="cart-name-input" className="block text-[10px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    id="cart-name-input"
                    type="text"
                    required
                    placeholder="e.g. Aalok Kumar"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg text-stone-200 text-xs px-3 py-2.5 focus:border-gold-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="cart-phone-input" className="block text-[10px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                    Your Contact Phone
                  </label>
                  <input
                    id="cart-phone-input"
                    type="tel"
                    required
                    placeholder="10 Digit Mobile (e.g. 9955459096)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg text-stone-200 text-xs px-3 py-2.5 focus:border-gold-500 focus:outline-none"
                  />
                </div>

                {deliveryType === 'Home Delivery' && (
                  <div>
                    <label htmlFor="cart-addr-input" className="block text-[10px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                      Full Delivery Address (Near Bishunpura / Nahar Pool Area)
                    </label>
                    <textarea
                      id="cart-addr-input"
                      rows={2}
                      required
                      placeholder="Enter housing details, road name or nearest landmark area."
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-lg text-stone-200 text-xs px-3 py-2 focus:border-gold-500 focus:outline-none resize-none"
                    />
                  </div>
                )}

                {deliveryType === 'Dine-In' && (
                  <div>
                    <label htmlFor="cart-table-input" className="block text-[10px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                      Your Table Number (In Restaurant)
                    </label>
                    <input
                      id="cart-table-input"
                      type="text"
                      required
                      placeholder="e.g. Table No 4"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-lg text-stone-200 text-xs px-3 py-2.5 focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="cart-notes-input" className="block text-[10px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                    Special Cooking/Delivery Instructions (Optional)
                  </label>
                  <textarea
                    id="cart-notes-input"
                    rows={2}
                    placeholder="Make egg double spicy, cook chicken well, deliver at gate, etc."
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg text-stone-200 text-xs px-3 py-2 focus:border-gold-500 focus:outline-none resize-none"
                  />
                </div>
              </form>
            </div>
          )}
        </div>

        {/* BOTTOM: INVOICE BILLING ACTION BOX */}
        {cartItems.length > 0 && (
          <div id="cart-drawer-footer" className="p-5 border-t border-stone-900 bg-stone-950 space-y-4">
            <div className="space-y-1.5 text-xs text-stone-400">
              <div className="flex justify-between">
                <span>Cart Subtotal:</span>
                <span className="font-bold text-stone-200">₹{totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Cooking Delivery Charge:</span>
                <span className="text-emerald-500 font-extrabold uppercase text-[10px] tracking-wide bg-emerald-950/40 px-2 py-0.5 rounded-md">
                  FREE Delivery
                </span>
              </div>
              <div className="h-px bg-stone-900 my-2" />
              <div className="flex justify-between text-base font-serif font-extrabold text-white">
                <span>Total Amount:</span>
                <span className="text-gold-400">₹{totalAmount}</span>
              </div>
            </div>

            {/* Submit checkout WhatsApp formatted trigger */}
            <button
              id="cart-whatsapp-submit-btn"
              onClick={handleWhatsappSend}
              disabled={isSending}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-lg active:scale-98 transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4 fill-white/10 animate-[pulse_2s_infinite]" />
              <span>{isSending ? 'Sending Order...' : 'Send Order to WhatsApp'}</span>
            </button>

            <p className="text-[10px] text-stone-600 text-center flex items-center justify-center gap-1">
              <Smartphone className="w-3.5 h-3.5 text-zinc-600" />
              <span>Secure peer-to-peer transmission via WhatsApp Web/App.</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
