


import Link from "next/link"
import Button from "../components/ui/Button"
import Image from "next/image"
import ScrollDarkenParagraph from "../components/Animations/ScrollDarkenParagraph"
import FloatingCupMotion from "../components/Animations/FloatingCupMotion"

const Discover = () => {
    return (
        <section className="relative flex h-full w-full items-center justify-start overflow-hidden bg-[#FFFEFC] px-5 py-16 sm:px-10 lg:px-20 lg:py-0">
            <Image
                src="/images/discover/blast.webp"
                alt='coffee blast image'
                width={377}
                height={272}
                priority
                className='absolute left-0 bottom-0 h-[25vh] w-auto object-cover pointer-events-none lg:h-[40vh]'
            />

            <div className="relative flex w-full flex-col items-center justify-between gap-12 lg:flex-row">
                <div className="relative flex w-full flex-col items-start justify-center gap-6 leading-[.9] lg:w-1/2">
                    <h1 className="text-[#603809] text-4xl font-playfair_display font-bold sm:text-5xl lg:text-6xl">Discover the best coffee</h1>
                    
                    {/* Modular scroll darkening paragraph */}
                    <ScrollDarkenParagraph className="font-playfair_display text-lg leading-[1.5] sm:text-xl lg:text-2xl">
                        Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
                    </ScrollDarkenParagraph>
   
                    <Button textSize="sm"> 
                        <Link href={"/About"}>
                            Learn More
                        </Link>
                    </Button>
                </div>
                
                {/* Coffee cup with modular continuous floating motion */}
                <div className="relative flex w-full flex-col items-center justify-center lg:w-1/2">
                    <FloatingCupMotion>
                        <Image
                            src="/images/discover/beancup.webp"
                            alt='coffee cup'
                            width={500}
                            height={484}
                            priority
                            className='h-[50vh] w-auto max-w-full object-contain drop-shadow-2xl sm:h-[60vh] lg:h-[90vh]'
                        />
                    </FloatingCupMotion>
                </div>
            </div>
        </section>
    )
}

export default Discover


