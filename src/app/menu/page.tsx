"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

/* ─── Types ───────────────────────────────────────────────── */
type MenuItem = {
  id: number
  name: string
  category: string
  description: string
  price: number
  image: string
  tag?: string
}

type CartItem = MenuItem & { qty: number }

/* ─── Menu Data ───────────────────────────────────────────── */
const menuItems: MenuItem[] = [
  // Espresso Classics
  { id: 1,  name: "Espresso",       category: "Espresso Classics",  description: "Rich, bold single shot of pure coffee essence.",         price: 4.50,  image: "/images/menu/img1.webp", tag: "Best Seller" },
  { id: 2,  name: "Americano",      category: "Espresso Classics",  description: "Espresso diluted with hot water for a smooth taste.",    price: 5.00,  image: "/images/menu/img2.webp" },
  { id: 3,  name: "Macchiato",      category: "Espresso Classics",  description: "Espresso marked with a dollop of silky foam.",           price: 5.50,  image: "/images/menu/img3.webp" },
  { id: 4,  name: "Ristretto",      category: "Espresso Classics",  description: "An ultra-concentrated short shot, intensely sweet.",     price: 5.00,  image: "/images/menu/img4.webp" },

  // Milk-Based
  { id: 5,  name: "Cappuccino",     category: "Milk-Based",         description: "Equal parts espresso, steamed milk & velvety foam.",    price: 6.50,  image: "/images/menu/img5.webp", tag: "Popular" },
  { id: 6,  name: "Latte",          category: "Milk-Based",         description: "Smooth espresso with generous steamed milk.",            price: 6.50,  image: "/images/menu/img6.webp" },
  { id: 7,  name: "Flat White",     category: "Milk-Based",         description: "Velvety micro-foam over a double ristretto.",           price: 6.00,  image: "/images/menu/img7.webp" },
  { id: 8,  name: "Cortado",        category: "Milk-Based",         description: "Espresso cut with an equal part of warm milk.",         price: 5.50,  image: "/images/menu/img8.webp" },

  // Specialty Lattes
  { id: 9,  name: "Vanilla Latte",  category: "Specialty Lattes",   description: "Classic latte sweetened with pure vanilla syrup.",      price: 7.50,  image: "/images/menu/img9.webp", tag: "New" },
  { id: 10, name: "Chai Latte",     category: "Specialty Lattes",   description: "Spiced masala chai blended with creamy steamed milk.",  price: 7.00,  image: "/images/menu/img10.webp" },
  { id: 11, name: "Matcha Latte",   category: "Specialty Lattes",   description: "Ceremonial grade matcha with oat milk & honey.",       price: 7.50,  image: "/images/menu/img11.webp", tag: "Trending" },
  { id: 12, name: "Caramel Latte",  category: "Specialty Lattes",   description: "Rich espresso with silky caramel & steamed milk.",     price: 7.50,  image: "/images/menu/img12.webp" },

  // Cold Brews
  { id: 13, name: "Cold Brew",      category: "Cold Brews",         description: "12-hour steeped smooth cold brew coffee over ice.",     price: 7.00,  image: "/images/menu/img13.webp", tag: "Refreshing" },
  { id: 14, name: "Nitro Cold Brew",category: "Cold Brews",         description: "Nitrogen-infused brew with a creamy cascade.",         price: 8.50,  image: "/images/menu/img14.webp", tag: "Popular" },
  { id: 15, name: "Iced Latte",     category: "Cold Brews",         description: "Chilled espresso over ice with your choice of milk.",  price: 7.00,  image: "/images/menu/img15.webp" },
  { id: 16, name: "Frappe",         category: "Cold Brews",         description: "Blended iced coffee with whipped cream on top.",       price: 8.00,  image: "/images/menu/img16.webp" },

  // Seasonal Specials
  { id: 17, name: "Pumpkin Spice",  category: "Seasonal Specials",  description: "Autumn blend with pumpkin, cinnamon & nutmeg.",        price: 8.50,  image: "/images/menu/img17.webp", tag: "Limited" },
  { id: 18, name: "Hazelnut Mocha", category: "Seasonal Specials",  description: "Dark chocolate & hazelnut espresso indulgence.",       price: 8.50,  image: "/images/menu/img1.webp" },
  { id: 19, name: "Rose Latte",     category: "Seasonal Specials",  description: "Delicate rose syrup with frothy milk & espresso.",     price: 8.00,  image: "/images/menu/img3.webp", tag: "New" },
  { id: 20, name: "Honey Oat Latte",category: "Seasonal Specials",  description: "Oat milk, wildflower honey & a double shot.",          price: 8.00,  image: "/images/menu/img5.webp" },
]

const categories = ["All", ...Array.from(new Set(menuItems.map((i) => i.category)))]

const tagColors: Record<string, string> = {
  "Best Seller": "bg-[#F9C06A] text-[#3a1c06]",
  Popular:       "bg-[#603809] text-white",
  New:           "bg-emerald-500 text-white",
  Trending:      "bg-violet-500 text-white",
  Refreshing:    "bg-sky-400 text-white",
  Limited:       "bg-rose-500 text-white",
}

/* ─── Cart Sidebar ─────────────────────────────────────────── */
function CartSidebar({
  cart,
  onClose,
  onInc,
  onDec,
  onRemove,
  onOrder,
}: {
  cart: CartItem[]
  onClose: () => void
  onInc: (id: number) => void
  onDec: (id: number) => void
  onRemove: (id: number) => void
  onOrder: () => void
}) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 32 }}
      className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-md flex-col bg-[#FFFEFC] shadow-2xl "
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e8d5c4] bg-[#F6EBDD] px-6 py-5">
        <h2 className="font-playfair_display text-2xl font-bold text-[#603809]">
          Your Cart ({cart.reduce((s, i) => s + i.qty, 0)})
        </h2>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#603809]/10 text-[#603809] transition hover:bg-[#603809]/20"
          aria-label="Close cart"
        >
          &#x2715;
        </button>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {cart.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <span className="text-6xl">&#x2615;</span>
            <p className="font-playfair_display text-xl text-[#603809]/60">Your cart is empty</p>
            <p className="font-playfair_display text-sm text-[#603809]/40">Add some delicious coffee!</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 60 }}
                  className="flex items-center gap-4 rounded-2xl border border-[#e8d5c4] bg-white p-3 shadow-sm"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <span className="font-playfair_display text-base font-bold text-[#603809]">{item.name}</span>
                    <span className="font-playfair_display text-sm text-[#603809]/60">${item.price.toFixed(2)}</span>
                  </div>
                  {/* Qty controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onDec(item.id)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F6EBDD] font-bold text-[#603809] transition hover:bg-[#e8d5c4]"
                    >
                      &#x2212;
                    </button>
                    <span className="w-6 text-center font-playfair_display font-bold text-[#603809]">{item.qty}</span>
                    <button
                      onClick={() => onInc(item.id)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F9C06A] font-bold text-[#3a1c06] transition hover:brightness-95"
                    >
                      &#43;
                    </button>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="ml-1 text-[#603809]/30 transition hover:text-rose-500"
                    aria-label="Remove"
                  >
                    &#x1F5D1;
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="border-t border-[#e8d5c4] bg-[#F6EBDD] px-6 py-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-playfair_display text-lg text-[#603809]/70">Subtotal</span>
            <span className="font-playfair_display text-2xl font-bold text-[#603809]">${total.toFixed(2)}</span>
          </div>
          <button
          
        
            onClick={onOrder}
            className="w-full rounded-full bg-[#603809] py-4 font-playfair_display text-lg font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 active:scale-95"
          >
            Place Order &#x2192;
          </button>
        </div>
      )}
    </motion.div>
  )
}



/* ─── Order Success Modal ──────────────────────────────────── */
function SuccessModal({ total, onClose }: { total: number; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative mx-4 w-full max-w-sm rounded-3xl bg-white p-10 text-center shadow-2xl"
      >
        {/* ================================================== */}
        {/* Coffee cup giving thumbs up */}
        <motion.svg
          viewBox="0 0 200 200"
          className="mx-auto mb-4 h-40 w-40"
          initial={{ scale: 0, rotate: -8 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 14 }}
        >
          {/* steam */}
          {[72, 92, 112].map((x, i) => (
            <motion.path
              key={x}
              d={`M${x} 66 q-7 -10 0 -18 q7 -8 0 -16`}
              fill="none"
              stroke="#c9a27a"
              strokeWidth="4"
              strokeLinecap="round"
              animate={{ y: [0, -6, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}

          {/* saucer */}
          <ellipse cx="90" cy="174" rx="62" ry="9" fill="#e8d5c4" />

          {/* handle (left) */}
          <path d="M42 96 q-30 4 -18 30 q6 12 22 12" fill="none" stroke="#603809" strokeWidth="9" strokeLinecap="round" />

          {/* cup body */}
          <path d="M40 80 h100 v44 a42 42 0 0 1 -42 42 h-16 a42 42 0 0 1 -42 -42 z" fill="#603809" />
          <ellipse cx="90" cy="80" rx="50" ry="9" fill="#F9C06A" />
          <ellipse cx="90" cy="80" rx="41" ry="5" fill="#8a5a22" />

          {/* face */}
          <circle cx="66" cy="126" r="7" fill="#F9C06A" opacity="0.6" />
          <circle cx="114" cy="126" r="7" fill="#F9C06A" opacity="0.6" />
          <circle cx="72" cy="108" r="5" fill="#FFFEFC" />
          <circle cx="108" cy="108" r="5" fill="#FFFEFC" />
          <circle cx="73" cy="109" r="2.5" fill="#3a1c06" />
          <circle cx="109" cy="109" r="2.5" fill="#3a1c06" />
          <path d="M80 126 q10 12 20 0" fill="none" stroke="#FFFEFC" strokeWidth="3.5" strokeLinecap="round" />

          {/* arm + thumbs up (right) */}
          <motion.g
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M138 122 q16 4 22 -8" fill="none" stroke="#603809" strokeWidth="9" strokeLinecap="round" />
            {/* thumb */}
            <rect x="162" y="64" width="11" height="28" rx="5.5" fill="#F9C06A" />
            {/* fist */}
            <rect x="152" y="86" width="32" height="28" rx="10" fill="#F9C06A" />
            <path d="M158 96 h20 M158 104 h20" stroke="#d99a3c" strokeWidth="2.5" strokeLinecap="round" />
          </motion.g>

          {/* sparkles */}
          {[{ x: 180, y: 56 }, { x: 190, y: 90 }, { x: 150, y: 50 }].map((p, i) => (
            <motion.path
              key={i}
              d={`M${p.x} ${p.y - 6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2 z`}
              fill="#F9C06A"
              animate={{ scale: [0.6, 1.2, 0.6], opacity: [0.3, 1, 0.3] }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </motion.svg>
        {/* =============================================================== */}

        <h2 className="mb-2 font-clicker_script text-5xl font-bold text-[#603809]">Order Placed!</h2>
        <p className="mb-2 font-playfair_display text-lg text-[#603809]">
          Your coffee is being prepared &#x2615;
        </p>
        <p className="mb-6 font-playfair_display text-2xl font-bold text-[#603809]">
          Total: ${total.toFixed(2)}
        </p>
        <p className="mb-8 font-playfair_display text-lg text-[#603809]">
          Estimated time: 10&#x2013;15 minutes
        </p>

        <button
          type="button"
          onClick={onClose}
          className="w-full rounded-full bg-[#F9C06A] py-4 font-playfair_display text-lg font-bold text-[#3a1c06] shadow-lg transition-all hover:brightness-95 active:scale-95"
        >
          Continue Shopping &#x2192;
        </button>
      </motion.div>
    </motion.div>
  )
}


/* ─── Order Details Form Modal ────────────────────────────── */
type OrderForm = {
  name: string
  phone: string
  orderType: "Dine In" | "Pickup" | "Delivery"
  address: string
  note: string
}

function OrderFormModal({
  cart,
  total,
  onSubmit,
  onClose,
}: {
  cart: CartItem[]
  total: number
  onSubmit: (form: OrderForm) => void
  onClose: () => void
}) {
  const [form, setForm] = useState<OrderForm>({
    name: "",
    phone: "",
    orderType: "Dine In",
    address: "",
    note: "",
  })
  const [errors, setErrors] = useState<Partial<OrderForm>>({})

  function validate() {
    const e: Partial<OrderForm> = {}
    if (!form.name.trim()) e.name = "Name is required"
    if (!form.phone.trim()) e.phone = "Phone is required"
    else if (!/^[\d\s+\-()]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone number"
    if (form.orderType === "Delivery" && !form.address.trim()) e.address = "Delivery address is required"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validate()) onSubmit(form)
  }

  const inputClass = "w-full rounded-2xl border border-[#e8d5c4] bg-[#FFFEFC] px-4 py-3 font-playfair_display text-sm text-[#603809] outline-none transition focus:border-[#603809] focus:ring-2 focus:ring-[#603809]/20"
  const labelClass = "mb-1 block font-playfair_display text-xs font-bold uppercase tracking-wider text-[#603809]/60"
  const errorClass = "mt-1 font-playfair_display text-xs text-rose-500"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-[#603809] px-7 py-5">
          <div>
            <h2 className="font-playfair_display text-2xl font-bold text-white">Order Details</h2>
            <p className="font-playfair_display text-sm text-white/60">{cart.length} item{cart.length !== 1 ? "s" : ""} &middot; ${total.toFixed(2)} total</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            &#x2715;
          </button>
        </div>

        {/* Order summary strip */}
        <div className="flex gap-2 overflow-x-auto border-b border-[#e8d5c4] bg-[#F6EBDD] px-7 py-3">
          {cart.map((item) => (
            <div key={item.id} className="flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm">
              <div className="relative h-6 w-6 overflow-hidden rounded-full">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <span className="font-playfair_display text-xs font-bold text-[#603809]">{item.name}</span>
              <span className="rounded-full bg-[#F9C06A] px-1.5 text-xs font-bold text-[#3a1c06]">x{item.qty}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-h-[60vh] overflow-y-auto px-7 py-6">
          <div className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <label htmlFor="order-name" className={labelClass}>Full Name *</label>
              <input
                id="order-name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              {errors.name && <p className={errorClass}>{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="order-phone" className={labelClass}>Phone Number *</label>
              <input
                id="order-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
              {errors.phone && <p className={errorClass}>{errors.phone}</p>}
            </div>

            {/* Order Type */}
            <div>
              <label className={labelClass}>Order Type *</label>
              <div className="flex gap-3">
                {(["Dine In", "Pickup", "Delivery"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setForm({ ...form, orderType: type })}
                    className={`flex-1 rounded-2xl border py-2.5 font-playfair_display text-sm font-bold transition-all duration-200 ${
                      form.orderType === type
                        ? "border-[#603809] bg-[#603809] text-white shadow-md"
                        : "border-[#e8d5c4] bg-[#F6EBDD] text-[#603809] hover:border-[#603809]"
                    }`}
                  >
                    {type === "Dine In" ? "\uD83C\uDF7D Dine In" : type === "Pickup" ? "\uD83D\uDECD Pickup" : "\uD83D\uDE0B Delivery"}
                  </button>
                ))}
              </div>
            </div>

            {/* Address - only if Delivery */}
            <AnimatePresence>
              {form.orderType === "Delivery" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <label htmlFor="order-address" className={labelClass}>Delivery Address *</label>
                  <textarea
                    id="order-address"
                    rows={2}
                    placeholder="123 Coffee Lane, Bean Street..."
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.address && <p className={errorClass}>{errors.address}</p>}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Note */}
            <div>
              <label htmlFor="order-note" className={labelClass}>Special Instructions (optional)</label>
              <textarea
                id="order-note"
                rows={2}
                placeholder="Extra shot, less sugar, allergies..."
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-full bg-[#F9C06A] py-4 font-playfair_display text-lg font-bold text-[#3a1c06] shadow-lg transition-all hover:brightness-95 active:scale-95"
            >
              Confirm Order &#x2192;
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

/* ─── Menu Card ────────────────────────────────────────────── */
function MenuCard({ item, onAdd, added }: { item: MenuItem; onAdd: () => void; added: boolean }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.35 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Tag */}
      {item.tag && (
        <span className={`absolute left-3 top-3 z-10 rounded-full px-3 py-0.5 text-xs font-bold ${tagColors[item.tag] ?? "bg-gray-200 text-gray-700"}`}>
          {item.tag}
        </span>
      )}

      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-[#F6EBDD]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between gap-3 p-5">
        <div>
          <h3 className="font-playfair_display text-xl font-bold text-[#603809]">{item.name}</h3>
          <p className="mt-1 font-playfair_display text-sm leading-relaxed text-[#603809]">{item.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-playfair_display text-2xl font-bold text-[#603809]">${item.price.toFixed(2)}</span>

          <motion.button
            onClick={onAdd}
            whileTap={{ scale: 0.92 }}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-playfair_display text-sm font-bold transition-all duration-300 ${
              added
                ? "bg-emerald-500 text-white"
                : "bg-[#F9C06A] text-[#3a1c06] hover:brightness-95"
            }`}
          >
            {added ? "Added" : "+ Add"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Main Menu Page ───────────────────────────────────────── */
export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [orderTotal, setOrderTotal] = useState(0)
  const [recentlyAdded, setRecentlyAdded] = useState<Set<number>>(new Set())

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((i) => i.category === activeCategory)

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0)

  function addToCart(item: MenuItem) {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id)
      if (existing) return prev.map((c) => c.id === item.id ? { ...c, qty: c.qty + 1 } : c)
      return [...prev, { ...item, qty: 1 }]
    })
    setRecentlyAdded((prev) => new Set(prev).add(item.id))
    setTimeout(() => {
      setRecentlyAdded((prev) => {
        const next = new Set(prev)
        next.delete(item.id)
        return next
      })
    }, 1500)
  }

  function incQty(id: number) {
    setCart((prev) => prev.map((c) => c.id === id ? { ...c, qty: c.qty + 1 } : c))
  }

  function decQty(id: number) {
    setCart((prev) => {
      const item = prev.find((c) => c.id === id)
      if (!item) return prev
      if (item.qty === 1) return prev.filter((c) => c.id !== id)
      return prev.map((c) => c.id === id ? { ...c, qty: c.qty - 1 } : c)
    })
  }

  function removeItem(id: number) {
    setCart((prev) => prev.filter((c) => c.id !== id))
  }

  function openOrderForm() {
    setCartOpen(false)
    setShowOrderForm(true)
  }

  function placeOrder() {
    setOrderTotal(cartTotal)
    setCart([])
    setShowOrderForm(false)
    setShowSuccess(true)
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setCartOpen(false) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  return (
    <>
      <Navbar />

      {/* Hero banner */}
      <section className="relative flex h-[38vh] w-full items-center justify-center overflow-hidden bg-[#3a1c06] py-40">
        <Image
          src="/images/menu/header.webp"
          alt="menu background"
          fill
          className="object-cover opacity-25"
        />
        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-playfair_display text-base uppercase tracking-[0.3em] text-[#F9C06A]"
          >
            Bean Scene
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair_display text-6xl font-bold text-white"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-playfair_display text-lg text-white/70"
          >
            Crafted with passion, served with love
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <main className="min-h-screen bg-[#FFFEFC] pb-24">
        {/* Sticky filter + cart bar */}
        <div className="sticky top-0 z-40 border-b border-[#e8d5c4] bg-[#FFFEFC]/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
            {/* Category tabs */}
{/* Category tabs */}
<div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`category-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative shrink-0 rounded-full px-5 py-2 font-playfair_display text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#603809] text-white shadow-md"
                      : "bg-[#F6EBDD] text-[#603809] hover:bg-[#e8d5c4]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Cart button */}
            <button
              id="cart-button"
              onClick={() => setCartOpen(true)}
              className="relative flex shrink-0 items-center gap-2 rounded-full bg-[#F9C06A] px-5 py-2.5 font-playfair_display text-sm font-bold text-[#3a1c06] shadow-md transition hover:brightness-95"
            >
              Cart
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 1.4 }}
                  animate={{ scale: 1 }}
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-[#603809] text-xs font-bold text-white"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="mx-auto max-w-7xl px-6 pt-10 sm:px-10">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 font-playfair_display text-sm uppercase tracking-widest text-[#603809]"
          >
            {activeCategory === "All"
              ? `All coffees · ${menuItems.length} items`
              : `${activeCategory} · ${filtered.length} items`}
          </motion.p>

          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onAdd={() => addToCart(item)}
                  added={recentlyAdded.has(item.id)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

       {/* Floating cart preview */}
<AnimatePresence>
  {cartCount > 0 && !cartOpen && (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:bottom-8"
    >
      <button
        id="floating-cart-button"
        onClick={() => setCartOpen(true)}
        className="pointer-events-auto flex w-full max-w-sm items-center justify-between gap-3 whitespace-nowrap rounded-full bg-[#603809] px-5 py-3 shadow-2xl transition hover:brightness-110 sm:w-auto sm:max-w-none sm:justify-center sm:gap-4 sm:px-8 sm:py-4"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F9C06A] text-sm font-bold text-[#3a1c06]">
          {cartCount}
        </span>
        <span className="font-playfair_display font-bold text-white">View Cart</span>
        <span className="font-playfair_display font-bold text-[#F9C06A]">${cartTotal.toFixed(2)}</span>
      </button>
    </motion.div>
  )}
</AnimatePresence>
      </main>

      <Footer />

      {/* Cart backdrop */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />
            <CartSidebar
              cart={cart}
              onClose={() => setCartOpen(false)}
              onInc={incQty}
              onDec={decQty}
              onRemove={removeItem}
              onOrder={openOrderForm}
            />
          </>
        )}
      </AnimatePresence>

      {/* Order form modal */}
      <AnimatePresence>
        {showOrderForm && (
          <OrderFormModal
            cart={cart}
            total={cartTotal}
            onSubmit={placeOrder}
            onClose={() => { setShowOrderForm(false); setCartOpen(true) }}
          />
        )}
      </AnimatePresence>

      {/* Success modal */}
      <AnimatePresence>
        {showSuccess && (
          <SuccessModal
            total={orderTotal}
            onClose={() => setShowSuccess(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
