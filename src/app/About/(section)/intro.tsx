import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/app/components/Animations/FadeIn"
import Button from "@/app/components/ui/Button"


const Introduce = () => {
    return (
        <section className="relative flex h-full w-full items-center justify-start overflow-hidden bg-[#FFFEFC] px-20 py-28 md:py-36">
            <div className="relative flex w-full items-center justify-between gap-16">
              {/* Video */}
<FadeIn className="relative flex w-1/2 items-center justify-center" x={-120}>
    <video
        src="/videos/vid2.mp4"
        poster="/images/introduce/barista.webp"
        autoPlay
        muted
        loop
        playsInline
        className="h-[60vh] w-auto max-w-full rounded-3xl object-cover drop-shadow-2xl"
    />
</FadeIn>

                {/* Text */}
                <div className="flex w-1/2 flex-col items-start justify-center gap-6">
                    <FadeIn>
                        <p className="font-playfair_display text-xl font-bold uppercase tracking-[0.3em] text-[#F9C06A]">
                            Welcome
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <h2 className="font-playfair_display text-6xl font-bold leading-[1.1] text-[#603809]">
                            Let us introduce Bean Scene
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="font-playfair_display text-2xl leading-[1.5] text-[#603809]/80">
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