"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
    {
        name: "Ahmed Al-Maktoum",
        country: "United Arab Emirates",
        feedback: "The level of precision and cultural alignment in their work is unmatched. A true partner for any premium brand in the Middle East.",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AA&backgroundColor=B38728",
    },
    {
        name: "Sara Al-Saud",
        country: "Saudi Arabia",
        feedback: "They didn't just build a website; they captured the soul of our mission. The scrollytelling experience is breathtaking.",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=SS&backgroundColor=B38728",
    },
    {
        name: "Omar Al-Kuwari",
        country: "Qatar",
        feedback: "Efficiency, transparency, and top-tier design. Muslim Tech Lab is the gold standard for digital agencies.",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=OA&backgroundColor=B38728",
    },
    {
        name: "Fatima Hassan",
        country: "Kuwait",
        feedback: "Finally, an agency that understands our values and translates them into world-class digital products.",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=FH&backgroundColor=B38728",
    },
    {
        name: "Zaid Al-Ali",
        country: "Oman",
        feedback: "The automation systems they implemented have transformed our operations. Professionalism at its finest.",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=ZA&backgroundColor=B38728",
    },
];
// Provided Asset
const TESTI_BG = "https://res.cloudinary.com/dtspre1ab/image/upload/v1774622178/start_f_tvwket.png";

export default function PremiumTestimonials() {
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !bgRef.current) return;

        const ctx = gsap.context(() => {
            // Parallax for the Background (fixed feel)
            gsap.to(bgRef.current, {
                yPercent: 10,
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
        <section id="testimonials" ref={containerRef} className="relative py-32 overflow-hidden bg-[#faf9f6]">

            {/* COMPOSITE BACKGROUND WRAPPER */}
            <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none scale-105">
                {/* 1. Base Layer (The map image) */}
                <div
                    className="absolute inset-0 opacity-100"
                    style={{
                        backgroundImage: `url(${TESTI_BG})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* 2. OVERLAY LAYER: Light cream wash blending map with Aged Paper tone */}
                <div className="absolute inset-0 bg-[#faf9f6]/82 backdrop-blur-[2px]" />

                {/* 3. Gradient Accent Glows */}
                <div className="absolute top-[-20%] left-[-15%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(251,191,36,0.1)_0%,transparent_75%)] blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(161,98,7,0.06)_0%,transparent_75%)] blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[#a16207] uppercase tracking-widest text-xs font-bold mb-4 block"
                >
                    Testimonials
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif text-[#1c1917]"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                >
                    Voices of <span className="text-[#a16207] italic">Trust</span>
                </motion.h2>
            </div>

            {/* Marquee Container (with defined Z-index) */}
            <div
                className="relative flex overflow-hidden group z-10"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    className={`flex whitespace-nowrap gap-8 py-10 ${isPaused ? 'pause-animation' : 'animate-marquee'}`}
                    style={{
                        animation: 'marquee 50s linear infinite',
                        animationPlayState: isPaused ? 'paused' : 'running'
                    }}
                >
                    {[...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
                        <div
                            key={index}
                            className="inline-block w-[350px] md:w-[450px] p-8 md:p-12 bg-white/40 backdrop-blur-xl rounded-3xl border border-[#a16207]/10 shadow-[0_15px_35px_rgba(161,98,7,0.03)] group/card transition-all duration-500 hover:border-[#a16207]/30 hover:-translate-y-2"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={56}
                                    height={56}
                                    className="w-14 h-14 rounded-full border border-[#a16207]/20 shadow-sm"
                                />
                                <div>
                                    <h4 className="text-xl font-serif text-[#1c1917]">
                                        {item.name}
                                    </h4>
                                    <p className="text-[#a16207] text-sm font-sans font-medium uppercase tracking-wider">
                                        {item.country}
                                    </p>
                                </div>
                            </div>
                            <p className="text-lg md:text-xl text-[#1c1917]/70 italic font-sans leading-relaxed whitespace-normal">
                                &quot;{item.feedback}&quot;
                            </p>

                            {/* Decorative Star/Icon */}
                            <div className="mt-8 flex gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <span key={s} className="text-[#a16207] text-sm">★</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                }
            `}</style>
        </section>
    );
}