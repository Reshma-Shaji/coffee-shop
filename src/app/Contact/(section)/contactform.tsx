"use client"

import { useState } from "react"

const inputClass =
    "w-full rounded-xl border border-[#603809]/30 bg-[#FFFEFC] px-5 py-3 font-playfair_display text-lg text-[#603809] placeholder:text-[#603809]/50 outline-none transition-colors focus:border-[#603809]"

const ContactForm = () => {
    const [sent, setSent] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.currentTarget))
        console.log(data) // TODO: send to your API route / email service
        setSent(true)
        e.currentTarget.reset()
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 justify-center items-center">
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className={inputClass}
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className={inputClass}
                />

            <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className={inputClass}
            />

            <textarea
                name="message"
                placeholder="Your message"
                rows={4}
                required
                className={`${inputClass} resize-none`}
            />

            <button
                type="submit"
                className="w-fit rounded-full bg-[#F9C06A] px-10 py-3 font-playfair_display text-lg font-bold text-[#603809] transition-transform duration-300 hover:scale-105"
            >
                Send Message
            </button>

            {sent && (
                <p className="font-playfair_display text-lg text-[#603809]">
                    Thank you! We will get back to you soon.
                </p>
            )}
        </form>
    )
}

export default ContactForm