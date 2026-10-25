"use client"

import { useEffect } from "react"
import Link from "next/link"
import Button from "@/app/components/ui/Button"
import CoffeeCartoon from "./components/CoffeeCartoon"

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-5 overflow-hidden bg-[#F6EBDD] px-5 py-16 text-center sm:px-10">
      <CoffeeCartoon mood="sad" className="h-44 w-44 sm:h-60 sm:w-60" />

      <h1 className="font-playfair_display text-4xl font-bold text-[#603809] sm:text-5xl lg:text-6xl">
        Something spilled!
      </h1>

      <p className="max-w-md font-playfair_display text-base leading-[1.5] text-[#603809]/80 sm:text-xl">
        Something went wrong while brewing this page. Please try again, or head
        back home.
      </p>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-[#603809] px-8 py-3 font-playfair_display text-base font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 active:scale-95"
        >
          Try Again
        </button>
        <Link href="/">
          <Button textSize="sm">Back to Home</Button>
        </Link>
      </div>
    </section>
  )
}

export default ErrorPage