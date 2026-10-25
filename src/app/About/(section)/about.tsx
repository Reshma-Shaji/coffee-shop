


"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import FadeIn from "@/app/components/Animations/FadeIn"
import Button from "@/app/components/ui/Button"

const stats = [
    { value: 10, suffix: "+", label: "Years of experience" },
    { value: 25, suffix: "", label: "Coffee blends" },
    { value: 50, suffix: "k", label: "Happy customers" },
    { value: 5, suffix: "", label: "Cafés across the city" },
]

/* ── Animated counter number ─────────────────────────────── */
function CountUp({ target, suffix, delay = 0 }: { target: number; suffix: string; delay?: number }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })
    const count = useMotionValue(0)
    const rounded = useTransform(count, (v) => Math.round(v))

    useEffect(() => {
        if (!inView) return
        const controls = animate(count, target, {
            duration: 2,
            delay,
            ease: [0.22, 1, 0.36, 1],
        })
        return controls.stop
    }, [inView, count, target, delay])

    return (
        <span
            ref={ref}
            className="font-playfair_display text-4xl font-bold text-[#603809] sm:text-5xl lg:text-6xl"
        >
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    )
}

/* ── About section ───────────────────────────────────────── */
const About = () => {
    return (
        <section className="relative flex min-h-screen w-full items-center justify-start overflow-hidden bg-[#F6EBDD] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <Image
                src="/images/discover/blast.webp"
                alt="coffee beans"
                width={377}
                height={272}
                className="pointer-events-none absolute bottom-0 right-0 h-[20vh] w-auto -scale-x-100 object-cover opacity-80 sm:h-[28vh] lg:h-[35vh]"
            />

            <div className="relative flex w-full flex-col items-center justify-center gap-10 sm:gap-12 lg:gap-16">
                {/* Text */}
                <div className="flex w-full flex-col items-center justify-center gap-5 text-center sm:gap-6 lg:w-1/2">
                    <FadeIn>
                        <h2 className="font-playfair_display text-4xl font-bold leading-[1.1] text-[#603809] sm:text-5xl lg:text-6xl">
                            About our coffee story
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <p className="font-playfair_display text-lg leading-[1.5] text-[#603809]/80 sm:text-xl lg:text-2xl">
                            Bean Scene began as a tiny corner shop with a big love for coffee. Today we work
                            directly with growers, roast in small batches and serve every cup with care. For us
                            coffee is more than a drink. It is a place to meet, think and slow down.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <Button textSize="sm">
                            <Link href={"/About"}>Read Our Story</Link>
                        </Button>
                    </FadeIn>
                </div>

                {/* Stats */}
                <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 lg:w-1/2">
                    {stats.map((item, i) => (
                        <FadeIn key={item.label} delay={i * 0.15}>
                            <div className="flex h-full flex-col items-center justify-center gap-2 rounded-3xl bg-[#FFFEFC] p-4 shadow-xl transition-transform duration-300 hover:-translate-y-2 sm:p-6 lg:p-10">
                                <CountUp
                                    target={item.value}
                                    suffix={item.suffix}
                                    delay={i * 0.2}
                                />
                                <span className="text-center font-playfair_display text-base text-[#603809]/80 sm:text-lg lg:text-xl">
                                    {item.label}
                                </span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About