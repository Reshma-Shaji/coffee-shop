


// // import FadeIn from "@/app/components/Animations/FadeIn"
// // import ContactForm from "./contactform"

// // const Contact = () => {
// //     return (
// //         <section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden bg-[#F6EBDD] px-5 py-28 sm:px-10 md:gap-12 md:py-36 lg:px-20">
// //             {/* Heading + short paragraph */}
// //             <div className="flex flex-col items-center gap-4 text-center">
// //                 <FadeIn>
// //                     <h2 className="font-playfair_display text-4xl font-bold text-[#603809] sm:text-5xl md:text-6xl">
// //                         Get in touch
// //                     </h2>
// //                 </FadeIn>
// //                 <FadeIn delay={0.15}>
// //                     <p className="max-w-2xl font-playfair_display text-base leading-[1.5] text-[#603809]/80 sm:text-lg md:text-xl">
// //                         Have a question, a reservation or just want to say hello? Leave your details and
// //                         we will reply as soon as we can.
// //                     </p>
// //                 </FadeIn>
// //             </div>

// //             {/* Form */}
// //             <div className="flex w-full items-center justify-center gap-8 lg:gap-16">
// //                 <FadeIn className="flex w-full items-center md:w-3/4 lg:w-1/2" x={-80}>
// //                     <ContactForm />
// //                 </FadeIn>
// //             </div>

// //             {/* Map */}
// //             <FadeIn className="w-full" delay={0.2}>
// //                 <iframe
// //                     title="Bean Scene cafe location"
// //                     src="https://www.google.com/maps?q=Akshya+Nagar+1st+Block+1st+Cross,+Rammurthy+Nagar,+Bangalore+560016&output=embed"
// //                     loading="lazy"
// //                     referrerPolicy="no-referrer-when-downgrade"
// //                     allowFullScreen
// //                     className="h-[35vh] w-full rounded-3xl border-0 shadow-2xl sm:h-[40vh] md:h-[45vh]"
// //                 />
// //             </FadeIn>
// //         </section>
// //     )
// // }

// // export default Contact



// import FadeIn from "@/app/components/Animations/FadeIn"
// import ContactForm from "./contactform"
// import { FiClock, FiMapPin, FiPhone, FiMail } from "react-icons/fi"

// const Contact = () => {
//     return (
//         <section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden bg-[#F6EBDD] px-5 py-28 sm:px-10 md:gap-12 md:py-36 lg:px-20">
//             {/* Heading + short paragraph */}
//             <div className="flex flex-col items-center gap-4 text-center">
//                 <FadeIn>
//                     <h2 className="font-playfair_display text-4xl font-bold text-[#603809] sm:text-5xl md:text-6xl">
//                         Get in touch
//                     </h2>
//                 </FadeIn>
//                 <FadeIn delay={0.15}>
//                     <p className="max-w-2xl font-playfair_display text-base leading-[1.5] text-[#603809]/80 sm:text-lg md:text-xl">
//                         Have a question, a reservation or just want to say hello? Leave your details and
//                         we will reply as soon as we can.
//                     </p>
//                 </FadeIn>
//             </div>

//             {/* Info (left) + Form (right) */}
//             <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
//                 {/* Cafe info */}
//                 <FadeIn className="flex w-full flex-col gap-4" x={-80}>
//                     {/* Opening hours */}
//                     <div className="flex items-start gap-4 rounded-2xl border border-[#603809]/15 bg-[#FFFEFC] p-2">
//                         <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F9C06A]/30 text-xl text-[#603809]">
//                             <FiClock />
//                         </span>
//                         <div className="font-playfair_display text-[#603809]">
//                             <h3 className="mb-2 text-lg font-bold">Opening Hours</h3>
//                             <p className="text-base text-[#603809]/80">Monday – Friday: 8:00 AM – 10:00 PM</p>
//                             <p className="text-base text-[#603809]/80">Saturday – Sunday: 8:00 AM – 11:00 PM</p>
//                         </div>
//                     </div>

//                     {/* Address */}
//                     <div className="flex items-start gap-4 rounded-2xl border border-[#603809]/15 bg-[#FFFEFC] p-2">
//                         <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F9C06A]/30 text-xl text-[#603809]">
//                             <FiMapPin />
//                         </span>
//                         <div className="font-playfair_display text-[#603809]">
//                             <h3 className="mb-2 text-lg font-bold">Address</h3>
//                             <p className="text-base text-[#603809]/80">
//                                 Akshya Nagar 1st Block 1st Cross,
//                                 <br />
//                                 Rammurthy Nagar, Bangalore-560016
//                             </p>
//                         </div>
//                     </div>

//                     {/* Phone */}
//                     <div className="flex items-start gap-4 rounded-2xl border border-[#603809]/15 bg-[#FFFEFC] p-2">
//                         <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F9C06A]/30 text-xl text-[#603809]">
//                             <FiPhone />
//                         </span>
//                         <div className="font-playfair_display text-[#603809]">
//                             <h3 className="mb-2 text-lg font-bold">Call Us</h3>
//                             <a
//                                 href="tel:+12029182132"
//                                 className="text-base text-[#603809]/80 transition-colors hover:text-[#603809]"
//                             >
//                                 +1 202-918-2132
//                             </a>
//                         </div>
//                     </div>

//                     {/* Email */}
//                     <div className="flex items-start gap-4 rounded-2xl border border-[#603809]/15 bg-[#FFFEFC] p-2">
//                         <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F9C06A]/30 text-xl text-[#603809]">
//                             <FiMail />
//                         </span>
//                         <div className="font-playfair_display text-[#603809]">
//                             <h3 className="mb-2 text-lg font-bold">Email Us</h3>
//                             <a
//                                 href="mailto:beanscene@mail.com"
//                                 className="text-base text-[#603809]/80 transition-colors hover:text-[#603809]"
//                             >
//                                 beanscene@mail.com
//                             </a>
//                         </div>
//                     </div>
//                 </FadeIn>

//                 {/* Form */}
//                 <FadeIn className="flex w-full items-center" x={80}>
//                     <ContactForm />
//                 </FadeIn>
//             </div>

//             {/* Map */}
//             <FadeIn className="w-full" delay={0.2}>
//                 <iframe
//                     title="Bean Scene cafe location"
//                     src="https://www.google.com/maps?q=Akshya+Nagar+1st+Block+1st+Cross,+Rammurthy+Nagar,+Bangalore+560016&output=embed"
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     allowFullScreen
//                     className="h-[35vh] w-full rounded-3xl border-0 shadow-2xl sm:h-[40vh] md:h-[45vh]"
//                 />
//             </FadeIn>
//         </section>
//     )
// }

// export default Contact




import Link from "next/link";
import FadeIn from "@/app/components/Animations/FadeIn";
import ContactForm from "./contactform";
import { FiClock, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden bg-[#F6EBDD] px-5 py-28 sm:px-10 md:gap-12 md:py-36 lg:px-20">
      {/* Heading + short paragraph */}
      <div className="flex flex-col items-center gap-4 text-center">
        <FadeIn>
          <h2 className="font-playfair_display text-4xl font-bold text-[#603809] sm:text-5xl md:text-6xl">
            Get in touch
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="max-w-2xl font-playfair_display text-base leading-[1.5] text-[#603809]/80 sm:text-lg md:text-xl">
            Have a question, a reservation or just want to say hello? Leave
            your details and we will reply as soon as we can.
          </p>
        </FadeIn>
      </div>

      {/* Info (left) + Form (right) */}
      <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Cafe info */}
        <FadeIn className="flex w-full flex-col gap-4" x={-80}>
          {/* Opening hours */}
          <div className="flex items-start gap-4 rounded-2xl border border-[#603809]/15 bg-[#FFFEFC] p-2">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F9C06A]/30 text-xl text-[#603809]">
              <FiClock />
            </span>

            <div className="font-playfair_display text-[#603809]">
              <h3 className="mb-2 text-lg font-bold">Opening Hours</h3>
              <p className="text-base text-[#603809]/80">
                Monday – Friday: 8:00 AM – 10:00 PM
              </p>
              <p className="text-base text-[#603809]/80">
                Saturday – Sunday: 8:00 AM – 11:00 PM
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 rounded-2xl border border-[#603809]/15 bg-[#FFFEFC] p-2">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F9C06A]/30 text-xl text-[#603809]">
              <FiMapPin />
            </span>

            <div className="font-playfair_display text-[#603809]">
              <h3 className="mb-2 text-lg font-bold">Address</h3>

              <Link
                href="https://www.google.com/maps/search/?api=1&query=Akshya+Nagar+1st+Block+1st+Cross%2C+Rammurthy+Nagar%2C+Bangalore-560016"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[#603809]/80 transition-colors hover:text-[#603809]"
              >
                Akshya Nagar 1st Block 1st Cross,
                <br />
                Rammurthy Nagar, Bangalore-560016
              </Link>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 rounded-2xl border border-[#603809]/15 bg-[#FFFEFC] p-2">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F9C06A]/30 text-xl text-[#603809]">
              <FiPhone />
            </span>

            <div className="font-playfair_display text-[#603809]">
              <h3 className="mb-2 text-lg font-bold">Call Us</h3>

              <Link
                href="tel:+12029182132"
                className="text-base text-[#603809]/80 transition-colors hover:text-[#603809]"
              >
                +1 202-918-2132
              </Link>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 rounded-2xl border border-[#603809]/15 bg-[#FFFEFC] p-2">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F9C06A]/30 text-xl text-[#603809]">
              <FiMail />
            </span>

            <div className="font-playfair_display text-[#603809]">
              <h3 className="mb-2 text-lg font-bold">Email Us</h3>

              <Link
                href="mailto:beanscene@mail.com"
                className="text-base text-[#603809]/80 transition-colors hover:text-[#603809]"
              >
                beanscene@mail.com
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Form */}
        <FadeIn className="flex w-full items-center" x={80}>
          <ContactForm />
        </FadeIn>
      </div>

      {/* Map */}
      <FadeIn className="w-full" delay={0.2}>
        <iframe
          title="Bean Scene cafe location"
          src="https://www.google.com/maps?q=Akshya+Nagar+1st+Block+1st+Cross,+Rammurthy+Nagar,+Bangalore+560016&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-[35vh] w-full rounded-3xl border-0 shadow-2xl sm:h-[40vh] md:h-[45vh]"
        />
      </FadeIn>
    </section>
  );
};

export default Contact;
