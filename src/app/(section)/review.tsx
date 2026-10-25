// "use client"

// import React, { useState } from "react"
// import Image from "next/image"
// import { motion, AnimatePresence, Variants } from "framer-motion"
// import { FadeInView } from "../components/Animations/MotionComponents"

// interface Review {
//   id: number
//   quote: string
//   name: string
//   role: string
//   image: string
// }

// const reviewsData: Review[] = [
//   {
//     id: 1,
//     quote:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
//     name: "Jonny Thomas",
//     role: "Project Manager",
//     image: "/images/review/reviewer1.jpg",
//   },
//   {
//     id: 2,
//     quote:
//       "Bean Scene makes the finest morning cup I have tasted in years. The aroma and delicate blend gives me the energy and focus needed throughout my busy workday. Their fast service and dedication to premium roasted beans makes them my everyday choice!",
//     name: "Emily Watson",
//     role: "Creative Director",
//     image: "/images/review/reviewer2.jpg",
//   },
//   {
//     id: 3,
//     quote:
//       "The best coffee experience in the city! Every cup feels crafted with genuine passion. Whether I'm meeting clients or sitting down for quiet deep work, the atmosphere and quality coffee are second to none.",
//     name: "David Miller",
//     role: "Product Designer",
//     image: "/images/review/reviewer1.jpg",
//   },
// ]

// const ReviewSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [direction, setDirection] = useState<"left" | "right">("right")
//   const [activeModalReview, setActiveModalReview] = useState<Review | null>(null)

//   const handleNext = () => {
//     setDirection("right")
//     setCurrentIndex((prev) => (prev + 1) % reviewsData.length)
//   }

//   const handlePrev = () => {
//     setDirection("left")
//     setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length)
//   }

//   const currentReview = reviewsData[currentIndex]

//   // Slide animation variants
//   const slideVariants: Variants = {
//     enter: (dir: "left" | "right") => ({
//       x: dir === "right" ? 80 : -80,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         x: { type: "spring", stiffness: 260, damping: 28 },
//         opacity: { duration: 0.35 },
//       },
//     },
//     exit: (dir: "left" | "right") => ({
//       x: dir === "right" ? -80 : 80,
//       opacity: 0,
//       transition: {
//         x: { type: "spring", stiffness: 260, damping: 28 },
//         opacity: { duration: 0.25 },
//       },
//     }),
//   }

//   return (
//     <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#FFFEFC] px-5 py-20 sm:px-10 lg:px-20">
      
//       {/* Coffee blast - top right corner */}
//       <div className="pointer-events-none absolute -right-8 -top-10 z-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px]">
//         <Image
//           src="/images/diff/blastr.webp"
//           alt="Coffee splash decoration"
//           fill
//           className="object-contain"
//         />
//       </div>

//       {/* Coffee blast - bottom left corner */}
//       <div className="pointer-events-none absolute -bottom-10 -left-10 z-0 h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px]">
//         <Image
//           src="/images/diff/blastr.webp"
//           alt="Coffee splash decoration"
//           fill
//           className="scale-y-[-1] scale-x-[-1] object-contain"
//         />
//       </div>

//       {/* Heading & Subheading */}
//       <div className="relative z-10 mx-auto mb-16 flex w-full max-w-4xl flex-col items-center text-center sm:mb-20">
//         <FadeInView yOffset={25}>
//           <h2 className="font-playfair_display text-4xl font-bold tracking-tight text-[#603809] sm:text-5xl lg:text-6xl">
//             Our coffee perfection feedback
//           </h2>
//         </FadeInView>
//         <FadeInView yOffset={25} delay={0.1}>
//           <p className="mt-4 font-playfair_display text-lg text-[#707070] sm:text-xl">
//             Our customers has amazing things to say about us
//           </p>
//         </FadeInView>
//       </div>

//       {/* Main Review Card with Slide Navigation */}
//       <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-12">
        
//         {/* Navigation Button: Previous (Left) */}
//         <button
//           type="button"
//           onClick={handlePrev}
//           aria-label="Previous Review"
//           className="absolute -left-2 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#F9C06A] text-[#603809] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#eab057] active:scale-95 sm:-left-6 sm:h-16 sm:w-16"
//         >
//           <svg
//             className="h-6 w-6 fill-current"
//             viewBox="0 0 24 24"
//           >
//             <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
//           </svg>
//         </button>

//         {/* Navigation Button: Next (Right) */}
//         <button
//           type="button"
//           onClick={handleNext}
//           aria-label="Next Review"
//           className="absolute -right-2 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#F9C06A] text-[#603809] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#eab057] active:scale-95 sm:-right-6 sm:h-16 sm:w-16"
//         >
//           <svg
//             className="h-6 w-6 fill-current"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
//           </svg>
//         </button>

//         {/* Card Box */}
//         <div className="relative rounded-2xl border border-[#F9C06A]/40 bg-[#FFF9F1] px-6 pt-10 pb-20 text-center shadow-[0_10px_35px_rgba(249,192,106,0.12)] sm:px-16 sm:pt-14 sm:pb-24">
          
//           {/* Big Quote symbol */}
//           <div className="absolute left-6 top-4 select-none font-playfair_display text-7xl font-bold leading-none text-[#603809] opacity-80 sm:left-10 sm:top-6 sm:text-8xl">
//             “
//           </div>

//           {/* Animated Slide Content */}
//           <div className="relative min-h-[220px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.div
//                 key={currentReview.id}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="flex w-full flex-col items-center justify-center"
//               >
//                 {/* Review Text - clamped to 2 lines with Read more trigger */}
//                 <div className="max-w-2xl text-center">
//                   <p className="line-clamp-2 font-playfair_display text-base leading-relaxed text-[#707070] sm:text-lg sm:leading-loose">
//                     {currentReview.quote}
//                   </p>
//                   <button
//                     type="button"
//                     onClick={() => setActiveModalReview(currentReview)}
//                     className="mt-1 font-playfair_display text-sm font-bold text-[#603809] underline underline-offset-4 hover:text-[#F9C06A] transition-colors"
//                   >
//                     Read more
//                   </button>
//                 </div>

//                 {/* Author Name */}
//                 <h3 className="mt-5 font-playfair_display text-2xl font-bold text-[#603809] sm:text-3xl">
//                   {currentReview.name}
//                 </h3>

//                 {/* Author Role */}
//                 <p className="mt-1 font-playfair_display text-base text-[#707070] sm:text-lg">
//                   {currentReview.role}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Reviewer Image: positioned half overlapping the bottom border */}
//           <div className="absolute -bottom-14 left-1/2 z-20 -translate-x-1/2 transform sm:-bottom-16">
//             <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-4 border-[#FFF9F1] shadow-xl sm:h-28 sm:w-28">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentReview.id}
//                   initial={{ opacity: 0, scale: 0.85 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.85 }}
//                   transition={{ duration: 0.3 }}
//                   className="relative h-full w-full"
//                 >
//                   <Image
//                     src={currentReview.image}
//                     alt={currentReview.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//         </div>

//         {/* Slide Indicators / Dots */}
//         <div className="mt-20 flex justify-center gap-2.5 sm:mt-24">
//           {reviewsData.map((review, idx) => (
//             <button
//               key={review.id}
//               onClick={() => {
//                 setDirection(idx > currentIndex ? "right" : "left")
//                 setCurrentIndex(idx)
//               }}
//               aria-label={`Go to slide ${idx + 1}`}
//               className={`h-2.5 rounded-full transition-all duration-300 ${
//                 idx === currentIndex
//                   ? "w-8 bg-[#603809]"
//                   : "w-2.5 bg-[#F9C06A]/60 hover:bg-[#F9C06A]"
//               }`}
//             />
//           ))}
//         </div>

//       </div>

//       {/* Read More Modal Popup (Ensures Section Height NEVER Changes) */}
//       <AnimatePresence>
//         {activeModalReview && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setActiveModalReview(null)}
//               className="absolute inset-0 bg-black/60 backdrop-blur-xs"
//             />

//             {/* Modal Dialog Box */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 20 }}
//               transition={{ duration: 0.25 }}
//               className="relative z-10 w-full max-w-lg rounded-2xl border border-[#F9C06A] bg-[#FFF9F1] p-6 text-center shadow-2xl sm:p-8"
//             >
//               <button
//                 type="button"
//                 onClick={() => setActiveModalReview(null)}
//                 aria-label="Close"
//                 className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#603809]/10 text-[#603809] hover:bg-[#603809] hover:text-white transition-colors"
//               >
//                 ✕
//               </button>

//               <div className="mb-4 text-center font-playfair_display text-5xl font-bold leading-none text-[#603809]">
//                 “
//               </div>

//               <div className="max-h-[350px] overflow-y-auto px-2">
//                 <p className="font-playfair_display text-base leading-relaxed text-[#707070] sm:text-lg">
//                   {activeModalReview.quote}
//                 </p>
//               </div>

//               <div className="mt-6 border-t border-[#F9C06A]/30 pt-4">
//                 <h4 className="font-playfair_display text-xl font-bold text-[#603809]">
//                   {activeModalReview.name}
//                 </h4>
//                 <p className="font-playfair_display text-sm text-[#707070]">
//                   {activeModalReview.role}
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }

// export default ReviewSection


"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { FadeInView } from "../components/Animations/MotionComponents"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

interface Review {
  id: number
  quote: string
  name: string
  role: string
  image: string
}

const reviewsData: Review[] = [
  {
    id: 1,
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
    name: "Jonny Thomas",
    role: "Project Manager",
    image: "/images/review/reviewer1.jpg",
  },
  {
    id: 2,
    quote:
      "Bean Scene makes the finest morning cup I have tasted in years. The aroma and delicate blend gives me the energy and focus needed throughout my busy workday. Their fast service and dedication to premium roasted beans makes them my everyday choice!",
    name: "Emily Watson",
    role: "Creative Director",
    image: "/images/review/reviewer2.jpg",
  },
  {
    id: 3,
    quote:
      "The best coffee experience in the city! Every cup feels crafted with genuine passion. Whether I'm meeting clients or sitting down for quiet deep work, the atmosphere and quality coffee are second to none.",
    name: "David Miller",
    role: "Product Designer",
    image: "/images/review/reviewer1.jpg",
  },
]

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [activeModalReview, setActiveModalReview] = useState<Review | null>(null)

  const handleNext = () => {
    setDirection("right")
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length)
  }

  const handlePrev = () => {
    setDirection("left")
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length)
  }

  const currentReview = reviewsData[currentIndex]

  // Slide animation variants
  const slideVariants: Variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.35 },
      },
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -80 : 80,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.25 },
      },
    }),
  }

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#FFFEFC] px-5 py-10 sm:px-10 lg:px-20">
      
      {/* Coffee blast - top right corner */}
      <div className="pointer-events-none absolute -right-6 -top-0 z-0 h-[180px] w-[180px] sm:-right-8 sm:-top-10 sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px]">
        <Image
          src="/images/diff/blastr.webp"
          alt="Coffee splash decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* Coffee blast - bottom left corner */}
      <div className="pointer-events-none absolute -bottom-6 -left-6 z-0 h-[170px] w-[170px] sm:-bottom-10 sm:-left-10 sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px]">
        <Image
          src="/images/diff/blastr.webp"
          alt="Coffee splash decoration"
          fill
          className="scale-y-[-1] scale-x-[-1] object-contain"
        />
      </div>

      {/* Heading & Subheading */}
      <div className="relative z-10 mx-auto mb-10 flex w-full max-w-4xl flex-col items-center text-center sm:mb-20">
        <FadeInView yOffset={25}>
          <h2 className="font-playfair_display text-3xl font-bold tracking-tight text-[#603809] sm:text-5xl lg:text-6xl">
            Our coffee perfection feedback
          </h2>
        </FadeInView>
        <FadeInView yOffset={25} delay={0.1}>
          <p className="mt-4 font-playfair_display text-base text-[#707070] sm:text-xl">
            Our customers has amazing things to say about us
          </p>
        </FadeInView>
      </div>

      {/* Main Review Card with Slide Navigation */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-12">
        
        {/* Navigation Button: Previous (Left) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Review"
          className="absolute -left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#F9C06A] text-[#603809] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#eab057] active:scale-95 sm:-left-6 sm:h-16 sm:w-16"
        >
          {/* <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg> */}
          <BiChevronLeft             className="h-6 w-6 fill-current"
/>
        </button>

        {/* Navigation Button: Next (Right) */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Review"
          className="absolute -right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#F9C06A] text-[#603809] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#eab057] active:scale-95 sm:-right-6 sm:h-16 sm:w-16"
        >
          {/* <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
          </svg> */}
          <BiChevronRight             className="h-6 w-6 fill-current"
/>
        </button>

        {/* Card Box */}
        <div className="relative rounded-2xl border border-[#F9C06A]/40 bg-[#FFF9F1] px-6 pt-10 pb-20 text-center shadow-[0_10px_35px_rgba(249,192,106,0.12)] sm:px-16 sm:pt-14 sm:pb-24">
          
          {/* Big Quote symbol */}
          <div className="absolute left-6 top-4 select-none font-playfair_display text-5xl font-bold leading-none text-[#603809] opacity-80 sm:left-10 sm:top-6 sm:text-8xl">
            “
          </div>

          {/* Animated Slide Content */}
          <div className="relative min-h-[220px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentReview.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex w-full flex-col items-center justify-center"
              >
                {/* Review Text - clamped to 2 lines with Read more trigger */}
                <div className="max-w-2xl text-center">
                  <p className="line-clamp-2 font-playfair_display text-base leading-relaxed text-[#707070] sm:text-lg sm:leading-loose">
                    {currentReview.quote}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveModalReview(currentReview)}
                    className="mt-1 font-playfair_display text-sm font-bold text-[#603809] underline underline-offset-4 hover:text-[#F9C06A] transition-colors"
                  >
                    Read more
                  </button>
                </div>

                {/* Author Name */}
                <h3 className="mt-5 font-playfair_display text-xl font-bold text-[#603809] sm:text-3xl">
                  {currentReview.name}
                </h3>

                {/* Author Role */}
                <p className="mt-1 font-playfair_display text-base text-[#707070] sm:text-lg">
                  {currentReview.role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Reviewer Image: positioned half overlapping the bottom border */}
          <div className="absolute -bottom-14 left-1/2 z-20 -translate-x-1/2 transform sm:-bottom-16">
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-4 border-[#FFF9F1] shadow-xl sm:h-28 sm:w-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={currentReview.image}
                    alt={currentReview.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Slide Indicators / Dots */}
        <div className="mt-20 flex justify-center gap-2.5 sm:mt-24">
          {reviewsData.map((review, idx) => (
            <button
              key={review.id}
              onClick={() => {
                setDirection(idx > currentIndex ? "right" : "left")
                setCurrentIndex(idx)
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-[#603809]"
                  : "w-2.5 bg-[#F9C06A]/60 hover:bg-[#F9C06A]"
              }`}
            />
          ))}
        </div>

      </div>

      {/* Read More Modal Popup (Ensures Section Height NEVER Changes) */}
      <AnimatePresence>
        {activeModalReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalReview(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Dialog Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-lg rounded-2xl border border-[#F9C06A] bg-[#FFF9F1] p-6 text-center shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setActiveModalReview(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#603809]/10 text-[#603809] hover:bg-[#603809] hover:text-white transition-colors"
              >
                ✕
              </button>

              <div className="mb-4 text-center font-playfair_display text-5xl font-bold leading-none text-[#603809]">
                “
              </div>

              <div className="max-h-[350px] overflow-y-auto px-2">
                <p className="font-playfair_display text-base leading-relaxed text-[#707070] sm:text-lg">
                  {activeModalReview.quote}
                </p>
              </div>

              <div className="mt-6 border-t border-[#F9C06A]/30 pt-4">
                <h4 className="font-playfair_display text-xl font-bold text-[#603809]">
                  {activeModalReview.name}
                </h4>
                <p className="font-playfair_display text-sm text-[#707070]">
                  {activeModalReview.role}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ReviewSection