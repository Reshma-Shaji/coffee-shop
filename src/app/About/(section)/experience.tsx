



"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/app/components/Animations/FadeIn"
import Button from "@/app/components/ui/Button"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

const experiences = [
    {
        title: "Dine In",
        text: "Relax in a cozy space with soft music, fresh pastries and coffee made just for you.",
        image: "/images/about/dine.webp",
    },
    {
        title: "Take Away",
        text: "Short on time? Grab your favourite brew to go and start your morning the right way.",
        image: "/images/about/take.webp",
    },
    {
        title: "Coffee Workshops",
        text: "Learn brewing from our baristas and discover how to make the perfect cup at home.",
        image: "/images/about/workshop.webp",
    },
]

const Experience = () => {
    // Cards per page: mobile = 1, tablet = 2, desktop = 3
    const [perPage, setPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        const updatePerPage = () => {
            const width = window.innerWidth
            setPerPage(width < 640 ? 1 : width < 1024 ? 2 : 3)
        }
        updatePerPage()
        window.addEventListener("resize", updatePerPage)
        return () => window.removeEventListener("resize", updatePerPage)
    }, [])

    // Go back to the first page whenever the layout changes
    useEffect(() => {
        setCurrentPage(0)
    }, [perPage])

    const totalPages = Math.ceil(experiences.length / perPage)
    const currentCards = experiences.slice(currentPage * perPage, currentPage * perPage + perPage)

    const handlePrev = () => {
        setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
    }

    return (
        <section className="relative flex h-full w-full flex-col items-center justify-center gap-10 overflow-hidden bg-[#603809] px-5 py-16 sm:gap-12 sm:px-8 sm:py-20 lg:px-20">
            <div className="flex flex-col items-center gap-4 text-center">
                <FadeIn>
                    <h2 className="font-playfair_display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                        Experience us
                    </h2>
                </FadeIn>
                <FadeIn delay={0.15}>
                    <p className="max-w-2xl font-playfair_display text-lg leading-[1.5] text-white/80 sm:text-xl lg:text-2xl">
                        There are many ways to enjoy Bean Scene. Pick the one that fits your day.
                    </p>
                </FadeIn>
            </div>

            {/* Cards with Left & Right Slider Arrows */}
            <div className="relative flex w-full items-center justify-center">
                {totalPages > 1 && (
                    <>
                        {/* Left Arrow Button */}
                        <button
                            type="button"
                            onClick={handlePrev}
                            aria-label="Previous Page"
                            className="absolute -left-3 z-20 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F9C06A] text-[#603809] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#eab057] active:scale-95 sm:-left-6 lg:-left-12 lg:h-14 lg:w-14"
                        >
                            <BiChevronLeft className="h-6 w-6 fill-current" />
                        </button>

                        {/* Right Arrow Button */}
                        <button
                            type="button"
                            onClick={handleNext}
                            aria-label="Next Page"
                            className="absolute -right-3 z-20 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F9C06A] text-[#603809] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#eab057] active:scale-95 sm:-right-6 lg:-right-12 lg:h-14 lg:w-14"
                        >
                            <BiChevronRight className="h-6 w-6 fill-current" />
                        </button>
                    </>
                )}

                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                    {currentCards.map((item, i) => (
                        <FadeIn key={`${item.title}-${currentPage}`} delay={i * 0.2}>
                            <div className="group h-full overflow-hidden rounded-3xl bg-[#FFFEFC] shadow-2xl transition-transform duration-300 hover:-translate-y-3">
                                <div className="relative h-[28vh] min-h-52 w-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex h-full flex-col items-start gap-3 p-5 sm:p-6 lg:p-8">
                                    <h3 className="font-playfair_display text-2xl font-bold text-[#603809] sm:text-3xl">
                                        {item.title}
                                    </h3>
                                    <p className="font-playfair_display text-base leading-[1.5] text-[#603809]/80 sm:text-lg">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            <FadeIn delay={0.3}>
                <Button textSize="sm">
                    <Link href={"/table-booking"}>Reserve a Table</Link>
                </Button>
            </FadeIn>
        </section>
    )
}

export default Experience