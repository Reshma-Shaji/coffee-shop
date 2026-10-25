


"use client"

import Link from "next/link"
import Image from "next/image"
import Button from "../components/ui/Button"
import {
  KenBurnsBackground,
  StaggerContainer,
  StaggerItem,
  GentleFloat,
  FadeInView,
} from "../components/Animations/MotionComponents"

const Amazing = () => {
  return (
    <section className="relative flex w-full items-center overflow-hidden bg-[#3a1c06] px-6 py-16 sm:px-12 md:px-16 lg:px-24">
      {/* 1. Background image with slow zoom animation */}
      <KenBurnsBackground>
        <Image
          src="/images/amazing/img.webp"
          alt="coffee beans background"
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover object-center"
        />
      </KenBurnsBackground>

      {/* Scattered coffee beans anchored at the bottom-right */}
      <FadeInView
        yOffset={60}
        delay={0.2}
        className="pointer-events-none absolute bottom-0 right-0 z-20"
      >
        <Image
          src="/images/amazing/coffee_bean.webp"
          alt="scattered coffee beans"
          width={550}
          height={550}
          className="h-[160px] w-auto object-contain sm:h-[360px] lg:h-[520px]"
        />
      </FadeInView>

      {/* 2. Color overlay for rich coffee tone matching design */}
      <div className="absolute inset-0 z-0 bg-[#42210b]/75 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#2e1405]/75 via-[#3a1c06]/40 to-transparent" />

      {/* Main container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 sm:gap-10 lg:flex-row lg:items-center">
        
        {/* 3. Text content with staggered animation */}
        <StaggerContainer className="flex w-full flex-col items-start justify-center gap-5 sm:gap-6 lg:max-w-xl">
          <StaggerItem>
            <h1 className="font-playfair_display text-3xl font-bold leading-[1.18] text-white sm:text-5xl lg:text-6xl">
              Get a chance to have an Amazing morning
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="font-playfair_display text-base leading-relaxed text-[#F5EDE4]/90 sm:text-xl lg:text-2xl">
              We are giving you are one time opportunity to experience a better life with coffee.
            </p>
          </StaggerItem>

          <StaggerItem className="pt-2">
            <Button textSize="sm" size="sm">
              <Link href="/menu">Order Now</Link>
            </Button>
          </StaggerItem>
        </StaggerContainer>

        {/* 4. Right side: Floating Cup */}
        <div className="relative flex h-[300px] w-full items-center justify-center sm:h-[440px] lg:h-[500px] lg:w-[48%]">
          <FadeInView yOffset={50} delay={0.3} className="relative z-10">
            <GentleFloat yRange={14} rotateRange={1.2} duration={4.5}>
              <Image
                src="/images/amazing/coffee.webp"
                alt="takeaway coffee cup"
                width={360}
                height={520}
                priority
                className="h-[280px] w-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.65)] sm:h-[430px] lg:h-[560px]"
              />
            </GentleFloat>
          </FadeInView>
        </div>

      </div>
    </section>
  )
}

export default Amazing