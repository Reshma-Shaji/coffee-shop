import Link from "next/link"
import Button from "@/app/components/ui/Button"
import CoffeeCartoon from "./components/CoffeeCartoon"

const NotFound = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-5 overflow-hidden bg-[#F6EBDD] px-5 py-16 text-center sm:px-10">
      <CoffeeCartoon mood="lost" className="h-44 w-44 sm:h-60 sm:w-60" />

      <h1 className="font-playfair_display text-7xl font-bold text-[#603809] sm:text-8xl lg:text-9xl">
        404
      </h1>

      <h2 className="font-playfair_display text-2xl font-bold text-[#603809] sm:text-3xl">
        Oops! This cup is empty
      </h2>

      <p className="max-w-md font-playfair_display text-base leading-[1.5] text-[#603809]/80 sm:text-xl">
        The page you are looking for got lost on its way to the coffee shop.
        Let&apos;s get you back to something fresh.
      </p>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <Link href="/">
          <Button textSize="sm">Back to Home</Button>
        </Link>
        <Link href="/menu">
          <Button textSize="sm">View Menu</Button>
        </Link>
      </div>
    </section>
  )
}

export default NotFound