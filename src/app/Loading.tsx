import CoffeeCartoon from "./components/CoffeeCartoon"

const Loading = () => {
  return (
    <section
      className="flex min-h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden bg-[#F6EBDD] px-5 text-center"
      role="status"
      aria-live="polite"
    >
      <div className="animate-bounce">
        <CoffeeCartoon mood="sleepy" className="h-40 w-40 sm:h-52 sm:w-52" />
      </div>

      <p className="font-playfair_display text-2xl font-bold text-[#603809] sm:text-3xl">
        Brewing your coffee
        <span className="inline-flex">
          <span className="animate-pulse">.</span>
          <span className="animate-pulse [animation-delay:200ms]">.</span>
          <span className="animate-pulse [animation-delay:400ms]">.</span>
        </span>
      </p>

      <p className="font-playfair_display text-base text-[#603809]/70 sm:text-lg">
        Just a moment, almost ready!
      </p>
    </section>
  )
}

export default Loading