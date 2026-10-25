



import Link from "next/link"
import FadeIn from "@/app/components/Animations/FadeIn"
import Button from "@/app/components/ui/Button"

const Introduce = () => {
    return (
        <section className="relative flex h-full w-full items-center justify-start overflow-hidden bg-[#FFFEFC] px-5 py-28 sm:px-8 sm:py-24 md:px-12 md:py-36 lg:px-20">
            <div className="relative flex w-full flex-col items-center justify-between gap-10 md:flex-row md:gap-12 lg:gap-16">
                {/* Video */}
                <FadeIn className="relative flex w-full items-center justify-center md:w-1/2" x={-120}>
                    <video
                        src="/videos/vid2.mp4"
                        poster="/images/introduce/barista.webp"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-[45vh] w-auto max-w-full rounded-3xl object-cover drop-shadow-2xl sm:h-[50vh] md:h-[55vh] lg:h-[60vh]"
                    />
                </FadeIn>

                {/* Text */}
                <div className="flex w-full flex-col items-start justify-center gap-5 sm:gap-6 md:w-1/2">
                    <FadeIn>
                        <p className="font-playfair_display text-lg font-bold uppercase tracking-[0.3em] text-[#F9C06A] sm:text-xl">
                            Welcome
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <h2 className="font-playfair_display text-4xl font-bold leading-[1.1] text-[#603809] sm:text-5xl lg:text-6xl">
                            Let us introduce Bean Scene
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="font-playfair_display text-lg leading-[1.5] text-[#603809]/80 sm:text-xl lg:text-2xl">
                            We started with one simple idea: every cup should feel like a small celebration.
                            Our beans are carefully sourced, slowly roasted and brewed fresh, so every sip
                            gives you the rich aroma and smooth taste you deserve.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.45}>
                        <Button textSize="sm">
                            <Link href={"/menu"}>View Menu</Link>
                        </Button>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}

export default Introduce