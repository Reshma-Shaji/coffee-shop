// "use client"

// import React, { useState } from 'react'
// import ScrollDarkenParagraph from '../components/Animations/ScrollDarkenParagraph'
// import Image from 'next/image'
// import Button from '../components/ui/Button'
// import { motion, AnimatePresence } from 'framer-motion'

// const Enjoy = () => {
//   const coffeecard = [
//     {
//       image: "/images/enjoy/imge1.webp",
//       title: "Cappuccino",
//       des: "Coffee 50% | Milk 50%",
//       price: "$8.50",
//     },
//     {
//       image: "/images/enjoy/imge2.webp",
//       title: "Chai Latte",
//       des: "Coffee 50% | Milk 50%",
//       price: "$8.50",
//     },
//     {
//       image: "/images/enjoy/imge3.webp",
//       title: "Macchiato",
//       des: "Coffee 50% | Milk 50%",
//       price: "$8.50",
//     },
//     {
//       image: "/images/enjoy/imge4.webp",
//       title: "Espresso",
//       des: "Coffee 50% | Milk 50%",
//       price: "$8.50",
//     },
   
   
//     {
//       image: "/images/enjoy/img5.webp",
//       title: "Caramel Macchiato",
//       des: "Coffee 50% | Milk 50%",
//       price: "$8.50",
//     },
//      {
//       image: "/images/enjoy/img6.webp",
//       title: "Cappuccino Special",
//       des: "Coffee 50% | Milk 50%",
//       price: "$8.50",
//     },
//     {
//       image: "/images/enjoy/img7.webp",
//       title: "Espresso Roast",
//       des: "Coffee 50% | Milk 50%",
//       price: "$8.50",
//     },
//      {
//       image: "/images/enjoy/img8.webp",
//       title: "Chai Latte Gold",
//       des: "Coffee 50% | Milk 50%",
//       price: "$8.50",
//     },
//   ]

//   // Page 0 = first 4 cards, Page 1 = next 4 cards
//   const [currentPage, setCurrentPage] = useState(0)
//   const totalPages = Math.ceil(coffeecard.length / 4)

//   const currentCards = coffeecard.slice(currentPage * 4, currentPage * 4 + 4)

//   const handlePrev = () => {
//     setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
//   }

//   const handleNext = () => {
//     setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
//   }

//   return (
//     <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#FFFEFC] px-20 py-16">

//       <div className="relative flex w-full flex-col items-center justify-center gap-6">

//         <h1 className="text-center text-8xl font-playfair_display font-bold tracking-tight text-[#603809]">
//           Enjoy a new blend of coffee style
//         </h1>

//         <ScrollDarkenParagraph className="font-playfair_display text-3xl leading-[1.5]">
//           Explore all flavours of coffee with us. There is always a new cup worth experiencing
//         </ScrollDarkenParagraph>

//         {/* 4 Cards Container with Left & Right Slider Arrows */}
//         <div className="relative flex w-full items-center justify-center">

//           {/* Left Arrow Button */}
//           <button
//             type="button"
//             onClick={handlePrev}
//             aria-label="Previous Page"
//             className="absolute -left-12 z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F9C06A] text-[#603809] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#eab057] active:scale-95"
//           >
//             <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
//               <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
//             </svg>
//           </button>

//           {/* Right Arrow Button */}
//           <button
//             type="button"
//             onClick={handleNext}
//             aria-label="Next Page"
//             className="absolute -right-12 z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F9C06A] text-[#603809] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#eab057] active:scale-95"
//           >
//             <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
//               <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
//             </svg>
//           </button>

//           {/* Exactly 4 Cards displayed */}
//           <div className="grid w-full grid-cols-4 gap-6">
//             <AnimatePresence mode="wait">
//               {currentCards.map((coffee, index) => (
//                 <motion.div
//                   key={`${coffee.title}-${currentPage}-${index}`}
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -15 }}
//                   transition={{ duration: 0.35, delay: index * 0.05 }}
//                   className="flex flex-col items-center border border-[#F9C06A] bg-[#FFF9F1] text-center gap-2 py-4 px-2"
//                 >
//                   <Image
//                     src={coffee.image}
//                     alt={coffee.title}
//                     width={220}
//                     height={220}
//                     className="h-[35vh] w-[35vh] object-cover"
//                   />

//                   <h2 className="text-4xl font-playfair_display tracking-[1px] font-bold text-[#603809]">
//                     {coffee.title}
//                   </h2>

//                   <p className="text-2xl font-playfair_display text-[#1E1E1E]">
//                     {coffee.des}
//                   </p>

//                   <p className="text-2xl font-playfair_display font-bold text-[#603809]">
//                     {coffee.price}
//                   </p>

//                   <div className="">
//                     <Button>Order Now</Button>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }

// export default Enjoy
"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ScrollDarkenParagraph from '../components/Animations/ScrollDarkenParagraph'
import Image from 'next/image'
import Button from '../components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { BiChevronLeft, BiChevronRight, BiChevronsLeft } from 'react-icons/bi'

const Enjoy = () => {
  const coffeecard = [
    {
      image: "/images/enjoy/imge1.webp",
      title: "Cappuccino",
      des: "Coffee 50% | Milk 50%",
      price: "$8.50",
    },
    {
      image: "/images/enjoy/imge2.webp",
      title: "Chai Latte",
      des: "Coffee 50% | Milk 50%",
      price: "$8.50",
    },
    {
      image: "/images/enjoy/imge3.webp",
      title: "Macchiato",
      des: "Coffee 50% | Milk 50%",
      price: "$8.50",
    },
    {
      image: "/images/enjoy/imge4.webp",
      title: "Espresso",
      des: "Coffee 50% | Milk 50%",
      price: "$8.50",
    },
   
   
    {
      image: "/images/enjoy/img5.webp",
      title: "Caramel Macchiato",
      des: "Coffee 50% | Milk 50%",
      price: "$8.50",
    },
     {
      image: "/images/enjoy/img6.webp",
      title: "Cappuccino Special",
      des: "Coffee 50% | Milk 50%",
      price: "$8.50",
    },
    {
      image: "/images/enjoy/img7.webp",
      title: "Espresso Roast",
      des: "Coffee 50% | Milk 50%",
      price: "$8.50",
    },
     {
      image: "/images/enjoy/img8.webp",
      title: "Chai Latte Gold",
      des: "Coffee 50% | Milk 50%",
      price: "$8.50",
    },
  ]

  // Cards per page: mobile = 1, tablet = 2, desktop = 4
  const [perPage, setPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const updatePerPage = () => {
      const width = window.innerWidth
      setPerPage(width < 768 ? 1 : width < 1024 ? 2 : 4)
    }
    updatePerPage()
    window.addEventListener('resize', updatePerPage)
    return () => window.removeEventListener('resize', updatePerPage)
  }, [])

  // Go back to the first page whenever the layout changes
  useEffect(() => {
    setCurrentPage(0)
  }, [perPage])

  const totalPages = Math.ceil(coffeecard.length / perPage)

  const currentCards = coffeecard.slice(currentPage * perPage, currentPage * perPage + perPage)

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#FFFEFC] px-5 py-16 sm:px-10 lg:px-20">

      <div className="relative flex w-full flex-col items-center justify-center gap-6">

        <h1 className="text-center text-4xl font-playfair_display font-bold tracking-tight text-[#603809] sm:text-6xl lg:text-8xl">
          Enjoy a new blend of coffee style
        </h1>

        <ScrollDarkenParagraph className="font-playfair_display text-lg leading-[1.5] sm:text-2xl lg:text-3xl">
          Explore all flavours of coffee with us. There is always a new cup worth experiencing
        </ScrollDarkenParagraph>

        {/* Cards Container with Left & Right Slider Arrows */}
        <div className="relative flex w-full items-center justify-center">

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Page"
            className="absolute -left-3 z-20 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F9C06A] text-[#603809] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#eab057] active:scale-95 sm:-left-6 lg:-left-12 lg:h-14 lg:w-14"
          >
            
            <BiChevronLeft className="h-6 w-6 fill-current" viewBox="0 0 24 24"/>

          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Page"
            className="absolute -right-3 z-20 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F9C06A] text-[#603809] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#eab057] active:scale-95 sm:-right-6 lg:-right-12 lg:h-14 lg:w-14"
          >
            
            <BiChevronRight  className="h-6 w-6 fill-current" viewBox="0 0 24 24"/>

          </button>

          {/* Cards displayed: 1 on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="wait">
              {currentCards.map((coffee, index) => (
                <motion.div
                  key={`${coffee.title}-${currentPage}-${index}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="flex flex-col items-center border border-[#F9C06A] bg-[#FFF9F1] text-center gap-2 py-4 px-2"
                >
                  <Image
                    src={coffee.image}
                    alt={coffee.title}
                    width={220}
                    height={220}
                    className="h-[35vh] w-[35vh] object-cover"
                  />

                  <h2 className="text-2xl font-playfair_display tracking-[1px] font-bold text-[#603809] lg:text-4xl">
                    {coffee.title}
                  </h2>

                  <p className="text-lg font-playfair_display text-[#1E1E1E] lg:text-2xl">
                    {coffee.des}
                  </p>

                  <p className="text-xl font-playfair_display font-bold text-[#603809] lg:text-2xl">
                    {coffee.price}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link href="/menu">
                      <Button>Order Now</Button>
                    </Link>
                    <Link href="/table-booking">
                      <Button>Reserve Now</Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Enjoy