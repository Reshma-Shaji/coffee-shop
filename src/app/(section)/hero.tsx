

import Image from "next/image"
import Button from "../components/ui/Button"
import Link from "next/link"
import AnimatedCoffeeText from "../components/Animations/AnimatedCoffeeText"

const Hero = () => {
  return (
    <section className="relative flex min-h-screen  w-full items-center justify-start overflow-hidden px-5 py-20 sm:px-8 md:px-12 lg:px-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/bg.webp"
          alt="backgroundimage"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover brightness-50"
        />
      </div>

      {/* Hero Content */}
      <div className="relative mt-10 flex w-full max-w-4xl flex-col items-start justify-center text-left leading-[0.9] md:mt-16 lg:mt-20 lg:gap-10">
        <h2 className="font-playfair_display text-xl sm:text-xl md:text-2xl lg:text-3xl">
          We’ve got your morning covered with
        </h2>

        {/* Handwriting cursive animation */}
        <div className="max-w-full origin-left scale-50 sm:scale-75 lg:scale-100">
          <AnimatedCoffeeText text="Coffee" />
        </div>

        <h2 className="max-w-[700px] font-playfair_display text-xl leading-relaxed sm:text-xl md:text-2xl lg:text-3xl lg:leading-[1.2]">
          It is best to start your day with a cup of coffee. Discover the
          best flavours coffee you will ever have. We provide the best
          for our customers.
        </h2>

        {/* Order Button */}
        <Button textSize="sm">
          <Link href="/table-booking">
            Order Now
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default Hero