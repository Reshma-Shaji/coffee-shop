


import Link from "next/link"
import Image from "next/image"
import Button from "../components/ui/Button"


const Different = () => {
  const features = [
    {
      icon: "/images/diff/bdg3.webp",
      title: "Supreme Beans",
      description: "Beans that provides great taste",
    },
    {
      icon: "/images/diff/bdg1.webp",
      title: "High Quality",
      description: "We provide the highest quality",
    },
    {
      icon: "/images/diff/bdg4.webp",
      title: "Extraordinary",
      description: "Coffee like you have never tasted",
    },
    {
      icon: "/images/diff/bdg2.webp",
      title: "Affordable Price",
      description: "Our Coffee prices are easy to afford",
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFEFC] px-5 py-16 sm:px-10 lg:px-20">

      {/* Coffee splash - top right */}
      <Image
        src="/images/diff/blastr.webp"
        alt="Coffee splash"
        width={377}
        height={272}
        className="pointer-events-none absolute -right-5 -top-10 z-0 h-[20vh] w-auto object-contain sm:-right-10 sm:-top-20 sm:h-[30vh] lg:h-[40vh]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">

        {/* Heading */}
        <h1 className="text-center font-playfair_display text-4xl font-bold leading-tight text-[#603809] sm:text-5xl lg:text-6xl">
          Why are we different?
        </h1>

        <p className="mt-4 text-center font-playfair_display text-lg leading-relaxed text-[#707070] sm:text-xl">
          We don’t just make your coffee, we make your day!
        </p>

        {/* Feature cards */}
        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex min-h-[200px] flex-col items-center justify-center border border-[#F9C06A]/50 px-5 py-7 text-center transition-colors duration-300 hover:bg-[#FCE6C8] sm:min-h-[250px] ${
                index === 0 ? "bg-[#FCE6C8]/70" : "bg-[#FFF9F1]"
              }`}
            >
              <div className="relative mb-5 h-20 w-20">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>

              <h2 className="font-playfair_display text-xl font-bold text-[#603809] sm:text-2xl">
                {feature.title}
              </h2>

              <p className="mt-2 max-w-[190px] font-playfair_display text-base leading-6 text-[#707070] sm:text-lg">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-7 flex flex-col items-center text-center">
          <p className="font-playfair_display text-base leading-relaxed text-[#707070] sm:text-lg">
            Great ideas start with great coffee, Lets help you achieve that
          </p>

          <h2 className="mt-1 font-playfair_display text-2xl font-bold text-[#603809] sm:text-3xl">
            Get started today.
          </h2>

          <div className="mt-5">
            <Button textSize="sm">
              <Link href="/About">
                Join Us
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Different






