// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const FAQ_DATA = [
//     {
//         question: "What is the 'Muslim Tech Lab' philosophy?",
//         answer: "We combine ethical engineering with cultural precision to build digital products that resonate with Islamic values and modern standards.",
//     },
//     {
//         question: "How do you ensure Halal-first engineering?",
//         answer: "Our process prioritizes transparency, equity, and the avoidance of unethical practices (Riba/Gharar) in all our technical solutions and business contracts.",
//     },
//     {
//         question: "What regions do you serve?",
//         answer: "While we operate from our digital sanctuary in Rangpur, our primary partners are in the Middle East and the global Muslim diaspora.",
//     },
//     {
//         question: "Do you offer post-launch support?",
//         answer: "Yes, we provide comprehensive 'Amanah-based' maintenance and scaling support to ensure long-term excellence for your digital assets.",
//     },
// ];

// const MAP_BG = "https://res.cloudinary.com/dtspre1ab/image/upload/v1774526683/map_nptp8s.png";

// export default function PremiumFAQ() {
//     const [activeIndex, setActiveIndex] = useState<number | null>(0);
//     const containerRef = useRef<HTMLDivElement>(null);
//     const bgRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (!containerRef.current || !bgRef.current) return;

//         const ctx = gsap.context(() => {
//             gsap.to(bgRef.current, {
//                 yPercent: 12,
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: containerRef.current,
//                     start: "top bottom",
//                     end: "bottom top",
//                     scrub: true,
//                 },
//             });
//         }, containerRef);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <section ref={containerRef} className="relative py-32 overflow-hidden bg-[#faf9f6]">
//             {/* PARALLAX BACKGROUND */}
//             <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none scale-105">
//                 <div
//                     className="absolute inset-0 opacity-40 grayscale-[0.5]"
//                     style={{ backgroundImage: `url(${MAP_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//                 />
//                 <div className="absolute inset-0 bg-[#faf9f6]/85 backdrop-blur-[1px]" />

//                 {/* Ambient Glows */}
//                 <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(251,191,36,0.08)_0%,transparent_70%)] blur-[100px]" />
//                 <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(161,98,7,0.05)_0%,transparent_70%)] blur-[100px]" />
//             </div>

//             <div className="max-w-4xl mx-auto px-6 relative z-10">
//                 <div className="text-center mb-20">
//                     <motion.span
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         className="text-[#a16207] uppercase tracking-widest text-xs font-bold mb-4 block"
//                     >
//                         Inquiry
//                     </motion.span>
//                     <motion.h2
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         className="text-4xl md:text-5xl font-serif text-[#1c1917]"
//                         style={{ fontFamily: 'var(--font-playfair)' }}
//                     >
//                         Common <span className="text-[#a16207] italic">Inquiries</span>
//                     </motion.h2>
//                 </div>

//                 <div className="space-y-4">
//                     {FAQ_DATA.map((item, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.1 }}
//                             className="bg-white/40 backdrop-blur-sm border border-[#a16207]/10 rounded-2xl overflow-hidden"
//                         >
//                             <button
//                                 onClick={() => setActiveIndex(activeIndex === index ? null : index)}
//                                 className="w-full px-8 py-6 flex items-center justify-between text-left group transition-colors hover:bg-[#a16207]/5"
//                             >
//                                 <span className="text-lg font-serif text-[#1c1917]" style={{ fontFamily: 'var(--font-playfair)' }}>
//                                     {item.question}
//                                 </span>
//                                 <span className={`text-[#a16207] transition-transform duration-500 ${activeIndex === index ? 'rotate-180' : ''}`}>
//                                     ▼
//                                 </span>
//                             </button>

//                             <AnimatePresence>
//                                 {activeIndex === index && (
//                                     <motion.div
//                                         initial={{ height: 0, opacity: 0 }}
//                                         animate={{ height: "auto", opacity: 1 }}
//                                         exit={{ height: 0, opacity: 0 }}
//                                         transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
//                                     >
//                                         <div className="px-8 pb-8 text-[#1c1917]/70 font-sans leading-relaxed">
//                                             {item.answer}
//                                         </div>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQ_DATA = [
    {
        question: "What is the 'Muslim Tech Lab' philosophy?",
        answer: "We combine ethical engineering with cultural precision to build digital products that resonate with Islamic values and modern standards.",
    },
    {
        question: "How do you ensure Halal-first engineering?",
        answer: "Our process prioritizes transparency, equity, and the avoidance of unethical practices (Riba/Gharar) in all our technical solutions and business contracts.",
    },
    {
        question: "What regions do you serve?",
        answer: "While we operate from our digital sanctuary in Rangpur, our primary partners are in the Middle East and the global Muslim diaspora.",
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes, we provide comprehensive 'Amanah-based' maintenance and scaling support to ensure long-term excellence for your digital assets.",
    },
];

// Replaced with the First Section's Map URL
const MAP_BG = "https://res.cloudinary.com/dtspre1ab/image/upload/v1774615801/Whisk_af2a59f270cf5ef835e47191c6b9c754dr_oq2eus.png";

export default function PremiumFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !bgRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(bgRef.current, {
                yPercent: 12, // Exact parallax match
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative py-32 overflow-hidden bg-[#fbf9f4]">
            {/* PARALLAX BACKGROUND - EXACT MATCH TO FIRST SECTION */}
            <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none scale-105">
                <div
                    className="absolute inset-0"
                    style={{ backgroundImage: `url(${MAP_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                
                {/* Overlay match: 75% opacity and backdrop blur */}
                <div className="absolute inset-0 bg-[#fbf9f4]/75 backdrop-blur-[1px]" />

                {/* Exact Gradient Accents from First Section */}
                <div className="absolute top-[-10%] right-[-5%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(251,191,36,0.15)_0%,transparent_75%)] blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(161,98,7,0.08)_0%,transparent_75%)] blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#a16207] uppercase tracking-widest text-xs font-bold mb-4 block"
                    >
                        Inquiry
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-serif text-[#1c1917] mb-6 drop-shadow-sm leading-tight"
                    >
                        Common <span className="text-[#a16207] italic">Inquiries</span>
                    </motion.h2>
                    <p className="text-lg text-[#1c1917]/70 max-w-2xl mx-auto font-sans italic">
                        Guidance on our shared digital journey.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQ_DATA.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            // Card styling match: white/40 backdrop blur
                            className="bg-white/40 backdrop-blur-md border border-[#a16207]/10 rounded-2xl overflow-hidden hover:border-[#a16207]/30 transition-colors duration-500"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group transition-colors hover:bg-[#a16207]/5"
                            >
                                <span className="text-lg md:text-xl font-serif text-[#1c1917] transition-colors group-hover:text-[#a16207]">
                                    {item.question}
                                </span>
                                <span className={`text-[#a16207] transition-transform duration-500 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="px-8 pb-8 text-[#1c1917]/70 font-sans leading-relaxed text-base">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
