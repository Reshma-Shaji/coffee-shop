import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/app/components/Animations/FadeIn"
import Button from "@/app/components/ui/Button"


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
    return (
        <section className="relative flex h-full w-full flex-col items-center justify-center gap-12 overflow-hidden bg-[#603809] px-20 py-20">
            <div className="flex flex-col items-center gap-4 text-center">
                <FadeIn>
                    <h2 className="font-playfair_display text-6xl font-bold text-white">
                        Experience us
                    </h2>
                </FadeIn>
                <FadeIn delay={0.15}>
                    <p className="max-w-2xl font-playfair_display text-2xl leading-[1.5] text-white/80">
                        There are many ways to enjoy Bean Scene. Pick the one that fits your day.
                    </p>
                </FadeIn>
            </div>

            <div className="grid w-full grid-cols-3 gap-8">
                {experiences.map((item, i) => (
                    <FadeIn key={item.title} delay={i * 0.2}>
                        <div className="group overflow-hidden rounded-3xl bg-[#FFFEFC] shadow-2xl transition-transform duration-300 hover:-translate-y-3">
                            <div className="relative h-[28vh] w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-3 p-8">
                                <h3 className="font-playfair_display text-3xl font-bold text-[#603809]">
                                    {item.title}
                                </h3>
                                <p className="font-playfair_display text-lg leading-[1.5] text-[#603809]/80">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
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