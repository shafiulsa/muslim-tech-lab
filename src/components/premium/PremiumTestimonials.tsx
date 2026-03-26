"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function PremiumTestimonials() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="relative py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[var(--accent-gold)] uppercase tracking-widest text-sm font-bold mb-4 block"
                >
                    Testimonials
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif text-[var(--foreground)]"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                >
                    Voices of <span className="text-[var(--accent-gold)]">Trust</span>
                </motion.h2>
            </div>

            {/* Marquee Container */}
            <div
                className="relative flex overflow-hidden group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    className={`flex whitespace-nowrap gap-8 py-10 ${isPaused ? 'pause-animation' : 'animate-marquee'}`}
                    style={{
                        animation: 'marquee 40s linear infinite',
                        animationPlayState: isPaused ? 'paused' : 'running'
                    }}
                >
                    {[...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
                        <div
                            key={index}
                            className="inline-block w-[350px] md:w-[450px] p-8 md:p-12 bg-[#faf9f6] rounded-3xl border border-[var(--accent-gold)]/10 shadow-[0_15px_35px_rgba(0,0,0,0.03)] group/card transition-all duration-500 hover:border-[var(--accent-gold)]/30 hover:-translate-y-2"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={56}
                                    height={56}
                                    className="w-14 h-14 rounded-full border border-[var(--accent-gold)]/20 shadow-sm"
                                />
                                <div>
                                    <h4 className="text-xl font-serif text-[var(--foreground)]" style={{ fontFamily: 'var(--font-playfair)' }}>
                                        {item.name}
                                    </h4>
                                    <p className="text-[var(--accent-gold)] text-sm font-sans font-medium uppercase tracking-wider">
                                        {item.country}
                                    </p>
                                </div>
                            </div>
                            <p className="text-lg md:text-xl text-[var(--foreground)]/70 italic font-sans leading-relaxed whitespace-normal">
                                &quot;{item.feedback}&quot;
                            </p>

                            {/* Decorative Star/Icon */}
                            <div className="mt-8 flex gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <span key={s} className="text-[var(--accent-gold)] text-sm">★</span>
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
