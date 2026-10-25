



"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiClock, FiUsers, FiUser, FiMail, FiPhone, FiMessageSquare, FiX, FiMapPin } from "react-icons/fi";

const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM",
  "08:00 PM", "09:00 PM",
];

const tableTypes = [
  { id: "window", label: "Window Seat", icon: "🪟", description: "Scenic views with natural light" },
  { id: "cozy", label: "Cozy Corner", icon: "🕯️", description: "Intimate & private setting" },
  { id: "garden", label: "Garden Terrace", icon: "🌿", description: "Fresh open-air experience" },
  { id: "bar", label: "Coffee Bar", icon: "☕", description: "Watch our baristas at work" },
];

const perks = [
  { icon: "✨", title: "Complimentary Welcome Drink", desc: "Every reserved guest receives a signature brew on arrival" },
  { icon: "🎂", title: "Special Occasion Setup", desc: "We'll decorate your table for birthdays or anniversaries" },
  { icon: "📱", title: "Instant Confirmation", desc: "Receive a booking confirmation directly to your email" },
  { icon: "🔄", title: "Flexible Rescheduling", desc: "Change your booking up to 2 hours before your visit" },
];

/* ─── Booked slots storage ─────────────────────────────────── */
type Booking = { date: string; time: string; table: string };
const STORAGE_KEY = "bean-scene-bookings";

/* ─── Occasion cartoons (replace the tick) ─────────────────── */
function SmileCup() {
  return (
    <g>
      <ellipse cx="100" cy="172" rx="65" ry="9" fill="#e8d5c4" />
      <path d="M143 98 q30 4 18 32 q-7 13 -30 13" fill="none" stroke="#603809" strokeWidth="10" strokeLinecap="round" />
      <path d="M45 82 h98 v42 a40 40 0 0 1 -40 40 h-18 a40 40 0 0 1 -40 -40 z" fill="#603809" />
      <ellipse cx="94" cy="82" rx="49" ry="9" fill="#F9C06A" />
      <ellipse cx="94" cy="82" rx="40" ry="5" fill="#8a5a22" />
      <circle cx="68" cy="126" r="7" fill="#F9C06A" opacity="0.6" />
      <circle cx="120" cy="126" r="7" fill="#F9C06A" opacity="0.6" />
      <circle cx="74" cy="110" r="5" fill="#FFFEFC" />
      <circle cx="114" cy="110" r="5" fill="#FFFEFC" />
      <circle cx="75" cy="111" r="2.5" fill="#3a1c06" />
      <circle cx="115" cy="111" r="2.5" fill="#3a1c06" />
      <path d="M84 128 q10 12 20 0" fill="none" stroke="#FFFEFC" strokeWidth="3.5" strokeLinecap="round" />
    </g>
  );
}

function Steam() {
  return (
    <>
      {[75, 95, 115].map((x, i) => (
        <motion.path
          key={x}
          d={`M${x} 68 q-7 -10 0 -18 q7 -8 0 -16`}
          fill="none"
          stroke="#c9a27a"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ y: [0, -6, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </>
  );
}

const heartPath = "M0 -10 C-14 -28 -40 -10 -22 10 L0 32 L22 10 C40 -10 14 -28 0 -10 Z";

function OccasionCartoon({ occasion }: { occasion: string }) {
  let art: React.ReactNode;

  if (occasion === "birthday") {
    art = (
      <>
        <ellipse cx="100" cy="170" rx="72" ry="10" fill="#e8d5c4" />
        <rect x="45" y="120" width="110" height="46" rx="9" fill="#603809" />
        <rect x="65" y="88" width="70" height="36" rx="9" fill="#F9C06A" />
        <path d="M65 99 q9 12 18 0 q9 12 18 0 q9 12 18 0 q9 12 16 0" fill="none" stroke="#FFFEFC" strokeWidth="5" strokeLinecap="round" />
        <path d="M45 132 q13 14 27 0 q13 14 27 0 q13 14 27 0 q13 14 28 0" fill="none" stroke="#FFFEFC" strokeWidth="5" strokeLinecap="round" />
        <circle cx="62" cy="152" r="3" fill="#F9C06A" />
        <circle cx="100" cy="154" r="3" fill="#F9C06A" />
        <circle cx="138" cy="152" r="3" fill="#F9C06A" />
        <rect x="96" y="60" width="8" height="30" rx="2" fill="#e8d5c4" />
        <motion.path
          d="M100 34 q-10 13 0 24 q10 -11 0 -24z"
          fill="#f97316"
          style={{ originX: 0.5, originY: 1 }}
          animate={{ scaleY: [1, 1.2, 0.95, 1], scaleX: [1, 0.9, 1.05, 1] }}
          transition={{ duration: 0.9, repeat: Infinity }}
        />
        {[{ x: 40, y: 60 }, { x: 160, y: 55 }, { x: 150, y: 90 }].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill={i % 2 ? "#F9C06A" : "#603809"}
            animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </>
    );
  } else if (occasion === "anniversary") {
    const MiniCup = () => (
      <g>
        <path d="M44 14 q22 2 12 24 q-5 8 -20 8" fill="none" stroke="#603809" strokeWidth="7" strokeLinecap="round" />
        <path d="M0 10 h46 v26 a22 22 0 0 1 -22 22 h-2 a22 22 0 0 1 -22 -22 z" fill="#603809" />
        <ellipse cx="23" cy="10" rx="23" ry="5" fill="#F9C06A" />
        <circle cx="14" cy="32" r="2.5" fill="#FFFEFC" />
        <circle cx="32" cy="32" r="2.5" fill="#FFFEFC" />
        <path d="M17 40 q6 6 12 0" fill="none" stroke="#FFFEFC" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    );
    art = (
      <>
        <ellipse cx="100" cy="172" rx="68" ry="9" fill="#e8d5c4" />
        <g transform="translate(22,102)">
          <motion.g animate={{ x: [0, 10, 0], rotate: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <MiniCup />
          </motion.g>
        </g>
        <g transform="translate(132,102) scale(-1,1) translate(-46,0)">
          <motion.g animate={{ x: [0, 10, 0], rotate: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <MiniCup />
          </motion.g>
        </g>
        <g transform="translate(100,52)">
          <motion.path
            d={heartPath}
            fill="#e11d48"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </g>
      </>
    );
  } else if (occasion === "date") {
    art = (
      <>
        <SmileCup />
        <g transform="translate(100,40)">
          <motion.path
            d={heartPath}
            fill="#e11d48"
            animate={{ y: [0, -8, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
        </g>
      </>
    );
  } else if (occasion === "business") {
    art = (
      <>
        <ellipse cx="100" cy="172" rx="75" ry="9" fill="#e8d5c4" />
        <rect x="35" y="88" width="90" height="58" rx="6" fill="#3a1c06" />
        <rect x="41" y="94" width="78" height="46" rx="3" fill="#F6EBDD" />
        <rect x="48" y="104" width="40" height="5" rx="2" fill="#603809" />
        <rect x="48" y="115" width="58" height="5" rx="2" fill="#F9C06A" />
        <rect x="48" y="126" width="30" height="5" rx="2" fill="#603809" />
        <path d="M25 146 h110 l8 14 h-126 z" fill="#603809" />
        <g transform="translate(140,112)">
          <path d="M32 8 q18 2 10 18 q-4 6 -16 6" fill="none" stroke="#603809" strokeWidth="6" strokeLinecap="round" />
          <path d="M0 6 h34 v20 a17 17 0 0 1 -17 17 h0 a17 17 0 0 1 -17 -17 z" fill="#603809" />
          <ellipse cx="17" cy="6" rx="17" ry="4" fill="#F9C06A" />
        </g>
        {[150, 162].map((x, i) => (
          <motion.path
            key={x}
            d={`M${x} 104 q-6 -8 0 -14 q6 -6 0 -12`}
            fill="none"
            stroke="#c9a27a"
            strokeWidth="3.5"
            strokeLinecap="round"
            animate={{ y: [0, -5, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
        <motion.rect
          x="48" y="104" width="40" height="5" rx="2" fill="#F9C06A"
          animate={{ width: [0, 40, 40], opacity: [0, 1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </>
    );
  } else if (occasion === "celebration") {
    const confetti = [
      { x: 110, y: 60, c: "#e11d48" }, { x: 135, y: 40, c: "#F9C06A" },
      { x: 160, y: 70, c: "#603809" }, { x: 125, y: 90, c: "#10b981" },
      { x: 150, y: 105, c: "#8b5cf6" }, { x: 95, y: 45, c: "#F9C06A" },
      { x: 170, y: 40, c: "#e11d48" }, { x: 175, y: 95, c: "#38bdf8" },
    ];
    art = (
      <>
        <ellipse cx="80" cy="176" rx="55" ry="8" fill="#e8d5c4" />
        <path d="M32 168 L84 98 L112 128 Z" fill="#F9C06A" />
        <path d="M45 150 L66 128" stroke="#603809" strokeWidth="5" strokeLinecap="round" />
        <path d="M60 164 L82 134" stroke="#603809" strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="98" cy="113" rx="18" ry="8" transform="rotate(48 98 113)" fill="#603809" />
        {confetti.map((p, i) => (
          <motion.rect
            key={i}
            x={p.x}
            y={p.y}
            width="8"
            height="8"
            rx="2"
            fill={p.c}
            animate={{ x: [-18, 0, 6], y: [20, 0, -8], opacity: [0, 1, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.12 }}
          />
        ))}
      </>
    );
  } else {
    art = (
      <>
        <Steam />
        <SmileCup />
      </>
    );
  }

  return (
    <motion.svg
      key={occasion}
      viewBox="0 0 200 200"
      className="mx-auto mb-4 h-36 w-36"
      initial={{ scale: 0, rotate: -8 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.15, type: "spring", stiffness: 280, damping: 14 }}
    >
      {art}
    </motion.svg>
  );
}

export default function TableBooking() {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTable, setSelectedTable] = useState("");
  const [guests, setGuests] = useState(2);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    occasion: "",
    requests: "",
  });
  const [bookings, setBookings] = useState<Booking[]>([]);
  // snapshot of the confirmed booking, shown in the success popup
  const [confirmed, setConfirmed] = useState({ time: "", table: "" });

  // load saved bookings
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setBookings(JSON.parse(saved));
    } catch {}
  }, []);

  // a slot is booked if that date+time has the chosen table taken,
  // or every table type is already taken at that time
  function isSlotBooked(slot: string) {
    if (!form.date) return false;
    const atSlot = bookings.filter((b) => b.date === form.date && b.time === slot);
    if (atSlot.length >= tableTypes.length) return true;
    if (selectedTable) return atSlot.some((b) => b.table === selectedTable);
    return false;
  }

  // if the selected slot becomes booked (date/table changed), unselect it
  useEffect(() => {
    if (selectedTime && isSlotBooked(selectedTime)) setSelectedTime("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.date, selectedTable, bookings]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    const updated = [
      ...bookings,
      { date: form.date, time: selectedTime, table: selectedTable || "any" },
    ];
    setConfirmed({ time: selectedTime, table: selectedTable });
    setBookings(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    setLoading(false);
    setSubmitted(true);
  }

  // computed after mount (inside useEffect) so it is not evaluated during prerender
  const [today, setToday] = useState("");
  useEffect(() => {
    setToday(new Date().toLocaleDateString("en-CA")); // YYYY-MM-DD in local time
  }, []);

  return (
    <main className="relative flex flex-col w-full min-h-screen bg-[#442808] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/reservation-bg.jpg"
          alt="Coffee shop reservation ambiance"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F9C06A]/5 to-[#442808]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          // className="relative text-center z-10 px-6"
          className="relative z-10 mt-20 px-6 text-center sm:mt-0"
        >
          <p className="text-[#F9C06A] font-clicker_script text-4xl">Book Your Experience</p>
          <h1 className="font-playfair_display text-6xl md:text-7xl font-bold md:leading-tight mb-5">
            Reserve a Table
          </h1>
          <p className="text-white/60 font-playfair_display text-xl max-w-xl mx-auto">
            Secure your perfect spot and let us craft an unforgettable coffee experience for you.
          </p>
        </motion.div>
      </section>

      {/* Perks Section */}
      <section className="hidden md:block py-10 px-6 md:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#F9C06A]/40 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="text-3xl mb-3">{perk.icon}</div>
              <h3 className="font-playfair_display font-semibold text-sm text-white mb-2 leading-snug">{perk.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-24 px-6 md:px-20 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            className="md:sticky md:top-28"
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#F9C06A] font-clicker_script text-3xl mb-2">How It Works</p>
            <h2 className="font-playfair_display text-4xl font-bold mb-6 leading-tight">
              Three Steps to Your Perfect Coffee Moment
            </h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Choose Your Details", desc: "Pick your date, time, number of guests, and preferred seating area." },
                { step: "02", title: "Confirm Your Booking", desc: "Fill in your contact details and any special requests for your visit." },
                { step: "03", title: "Enjoy Your Experience", desc: "Arrive and let us take care of everything — starting with a welcome drink." },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="text-[#F9C06A] font-playfair_display text-4xl font-bold opacity-50 leading-none mt-1 min-w-[3rem]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-playfair_display text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coffee extras (fills the left column) */}
            <div className="mt-12 space-y-5">
              {/* Opening hours */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#F9C06A]/40 transition-all duration-300">
                <h3 className="font-playfair_display text-xl font-semibold mb-4">Opening Hours</h3>
                <div className="space-y-2 text-sm font-playfair_display">
                  <div className="flex justify-between">
                    <span className="text-white/60 text-md md:text-lg">Monday – Friday</span>
                    <span className="text-[#F9C06A] text-md md:text-lg">8:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60 text-md md:text-lg">Saturday – Sunday</span>
                    <span className="text-[#F9C06A] text-md md:text-lg">8:00 AM – 11:00 PM</span>
                  </div>
                </div>
                <p className="text-white/40 font-playfair_display text-md md:text-lg mt-4 leading-relaxed">
                  Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016
                </p>
              </div>

              {/* Signature brews */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#F9C06A]/40 transition-all duration-300">
                <h3 className="font-playfair_display text-xl font-semibold mb-4">Our Signature Brews</h3>
                <ul className="space-y-3">
                  {[
                    { icon: "☕", name: "Classic Cold Brew", note: "Steeped slow for 18 hours" },
                    { icon: "🍫", name: "Hazelnut Mocha", note: "Rich cocoa with roasted hazelnut" },
                    { icon: "🍯", name: "Caramel Latte", note: "Silky, sweet and perfectly balanced" },
                  ].map((drink) => (
                    <li key={drink.name} className="flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F9C06A]/10 text-xl">
                        {drink.icon}
                      </span>
                      <div>
                        <p className="font-playfair_display font-semibold text-sm">{drink.name}</p>
                        <p className="text-white/40 text-xs">{drink.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

             
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form
              id="reservation-form"
              onSubmit={handleSubmit}
              className="bg-white/[0.04] border border-white/10 rounded-3xl p-3 md:p-8 backdrop-blur-sm space-y-4"
            >
              <h2 className="font-playfair_display text-2xl font-bold mb-2">Reservation Details</h2>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-4">
              {/* Name */}
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F9C06A] text-lg" />
                <input
                  id="reservation-name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-[#F9C06A]/60 transition-colors font-playfair_display"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F9C06A] text-lg" />
                <input
                  id="reservation-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-[#F9C06A]/60 transition-colors font-playfair_display"
                />
              </div>

              </div>

              {/* Phone */}
              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F9C06A] text-lg" />
                <input
                  id="reservation-phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-[#F9C06A]/60 transition-colors font-playfair_display"
                />
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="relative">
                  <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F9C06A] text-sm md:text-lg" />
                  <input
                    id="reservation-date"
                    name="date"
                    type="date"
                    required
                    min={today || undefined}
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-8 md:pl-11 pr-4 text-white focus:outline-none focus:border-[#F9C06A]/60 transition-colors font-playfair_display [color-scheme:dark] text-sm"
                  />
                </div>
                <div className="relative">
                  <FiUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F9C06A] text-sm md:text-lg" />
                  <select
                    id="reservation-guests"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 md:pl-11 pl-8 pr-4 text-white focus:outline-none focus:border-[#F9C06A]/60 transition-colors font-playfair_display appearance-none cursor-pointer text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n} className="bg-[#442808] text-white">
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating (inside form) */}
              <div>
                <label className="flex items-center gap-2 text-white/60 text-sm mb-3 font-playfair_display">
                  <FiMapPin className="text-[#F9C06A]" />
                  Select Your Seating
                </label>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {tableTypes.map((table) => (
                    <button
                      key={table.id}
                      type="button"
                      id={`form-table-${table.id}`}
                      onClick={() => setSelectedTable(table.id)}
                      className={`flex items-center lg:flex-col lg:text-center gap-2 lg:gap-1 text-left py-3 px-3 rounded-xl border transition-all duration-200 font-playfair_display text-sm lg:text-[11px] lg:leading-tight ${
                        selectedTable === table.id
                          ? "border-[#F9C06A] bg-[#F9C06A]/15 text-[#F9C06A]"
                          : "border-white/10 bg-white/5 text-white/60 hover:border-white/25"
                      }`}
                    >
                      <span className="text-lg">{table.icon}</span>
                      <span>{table.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="flex items-center gap-2 text-white/60 text-sm mb-3 font-playfair_display">
                  <FiClock className="text-[#F9C06A]" />
                  Select a Time Slot
                </label>
                <div className="grid grid-cols-4 xl:grid-cols-5 gap-2">
                  {timeSlots.map((slot) => {
                    const booked = isSlotBooked(slot);
                    return (
                      <button
                        key={slot}
                        type="button"
                        id={`slot-${slot.replace(/\s|:/g, "-")}`}
                        disabled={booked}
                        title={booked ? "Already booked" : undefined}
                        onClick={() => setSelectedTime(slot)}
                        className={`text-xs py-2 px-1 rounded-lg border transition-all duration-200 font-playfair_display ${
                          booked
                            ? "border-red-400/20 bg-red-500/5 text-white/25 line-through cursor-not-allowed"
                            : selectedTime === slot
                            ? "border-[#F9C06A] bg-[#F9C06A]/15 text-[#F9C06A]"
                            : "border-white/10 bg-white/5 text-white/60 hover:border-white/25"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="mt-3 flex items-center gap-4 text-[11px] text-white/50 font-playfair_display">
                  <span className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded border border-white/25 bg-white/5" /> Available
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded border border-[#F9C06A] bg-[#F9C06A]/15" /> Selected
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded border border-red-400/30 bg-red-500/10" /> Booked
                  </span>
                </div>
              </div>

              {/* Occasion */}
              <select
                id="reservation-occasion"
                name="occasion"
                value={form.occasion}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white/60 focus:outline-none focus:border-[#F9C06A]/60 transition-colors font-playfair_display appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#442808]">Special Occasion (Optional)</option>
                <option value="birthday" className="bg-[#442808] text-white">🎂 Birthday</option>
                <option value="anniversary" className="bg-[#442808] text-white">💍 Anniversary</option>
                <option value="date" className="bg-[#442808] text-white">❤️ Date Night</option>
                <option value="business" className="bg-[#442808] text-white">💼 Business Meeting</option>
                <option value="celebration" className="bg-[#442808] text-white">🎉 Celebration</option>
              </select>

              {/* Special Requests */}
              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-[#F9C06A] text-lg" />
                <textarea
                  id="reservation-requests"
                  name="requests"
                  value={form.requests}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Special requests or dietary needs..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-[#F9C06A]/60 transition-colors font-playfair_display resize-none"
                />
              </div>

              {(!form.date || !selectedTime || !selectedTable) && (
                <p className="text-[#F9C06A]/70 text-xs text-center font-playfair_display">
                  Please select{" "}
                  {[
                    !form.date && "a date",
                    !selectedTime && "a time slot",
                    !selectedTable && "a seating type",
                  ]
                    .filter(Boolean)
                    .join(", ")}
                </p>
              )}

              <button
                type="submit"
                id="submit-reservation"
                disabled={loading || !selectedTime || !form.date || !selectedTable}
                className="w-full bg-[#F9C06A] text-black font-bold py-4 rounded-xl text-base font-playfair_display hover:brightness-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Reserving Your Table...
                  </>
                ) : (
                  "Confirm Reservation"
                )}
              </button>

              <p className="text-white/30 text-xs text-center font-playfair_display">
                By reserving, you agree to our cancellation policy. Free cancellation up to 2 hours before arrival.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Reservation success popup */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
            onClick={() => setSubmitted(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[95vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-8 text-center shadow-2xl"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#442808]/10 text-[#442808] transition hover:bg-[#442808]/20"
              >
                <FiX className="text-xl" />
              </button>

              <OccasionCartoon occasion={form.occasion} />

              <h1 className="font-clicker_script text-4xl font-bold text-[#442808] mb-3">Table Reserved!</h1>
              <p className="font-playfair_display text-lg text-[#442808]/80 mb-2">
                Thank you, <span className="font-bold text-[#442808]">{form.name}</span>. Your table has been reserved.
              </p>
              <p className="text-sm text-[#442808]/60 mb-6">
                A confirmation has been sent to <span className="font-bold text-[#442808]">{form.email}</span>
              </p>

              <div className="bg-[#F6EBDD] border border-[#e8d5c4] rounded-2xl p-5 text-left mb-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#442808]/60">Date</span>
                  <span className="text-[#442808] font-medium">{form.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#442808]/60">Time</span>
                  <span className="text-[#442808] font-medium">{confirmed.time}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#442808]/60">Guests</span>
                  <span className="text-[#442808] font-medium">{guests} {guests === 1 ? "Person" : "People"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#442808]/60">Table Type</span>
                  <span className="text-[#442808] font-medium">{tableTypes.find(t => t.id === confirmed.table)?.label || "Any available"}</span>
                </div>
              </div>

              <Link href="/">
                <button className="bg-[#F9C06A] text-black font-bold px-10 py-3.5 rounded-full hover:brightness-95 transition-all duration-300 font-playfair_display">
                  Back to Home
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}