'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LatticeBg from './LatticeBg';

const FAQ_DATA = [
    {
        question: "How does Muslim Tech Lab integrate Halal principles into digital products?",
        answer: "Every line of code we write is guided by Islamic ethics. We ensure all platforms we build align with Sharia-compliant standards—from interest-free financial logic to ensuring content integrity and modest UI/UX practices."
    },
    {
        question: "What is the 'Noor' Design Philosophy?",
        answer: "Noor (Divine Light) translates into our digital craftsmanship as clarity, purpose, and radiance. We move away from cluttered interfaces to create 'digital sanctuaries' that provide peace and intuitive flow for the believer and the user alike."
    },
    {
        question: "Do you collaborate with global enterprises outside the Middle East?",
        answer: "Absolutely. Based in Dubai with a global vision, we serve visionaries from London to Kuala Lumpur. Our work bridges the gap between ancient wisdom and future-forward technology for the worldwide Ummah and beyond."
    },
    {
        question: "How do you handle 'Amanah' (Trust) regarding data privacy?",
        answer: "We view data as a sacred trust. Our engineering team implements state-of-the-art encryption and privacy-first architectures, ensuring that your users' information is guarded with the highest level of integrity and transparency."
    },
    {
        question: "Can you develop specialized platforms for Zakat and Awqaf?",
        answer: "Yes, we specialize in the digitized infrastructure of the Islamic economy. From complex Zakat calculators to transparent Waqf management systems, we build the tools that empower modern charitable ecosystems."
    }
];

function RubElHizbIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: isOpen ? 135 : 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
            <path
                d="M12 2L14.8 6.4L19.6 4.8L18 9.6L22.4 12.4L18 15.2L19.6 20L14.8 18.4L12 22.8L9.2 18.4L4.4 20L6 15.2L1.6 12.4L6 9.6L4.4 4.8L9.2 6.4L12 2Z"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </motion.svg>
    );
}

export default function SFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative bg-[var(--background)] py-24 md:py-32 overflow-hidden" id="faq">
            {/* <SectionBackground opacity={0.03} /> */}
            <LatticeBg></LatticeBg>

            {/* Noor glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)',
                }}
            />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 0.6, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[10px] tracking-[0.5em] uppercase mb-4"
                        style={{ color: '#D4AF37' }}
                    >
                        أسئلة مكررة · Wisdom Shared
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 px-2"
                        style={{ fontFamily: 'var(--font-playfair)', color: '#1a1a1a' }}
                    >
                        Frequently Asked <span className="text-[#D4AF37] italic">Questions</span>
                    </motion.h2>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {FAQ_DATA.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full text-left flex items-start justify-between gap-6 py-8 border-b border-black/10 transition-colors duration-300 group-hover:border-[#D4AF37]/30"
                                >
                                    <span
                                        className="text-base md:text-xl lg:text-2xl font-light transition-all duration-500 pr-4"
                                        style={{
                                            color: isOpen ? '#1a1a1a' : 'rgba(0,0,0,0.7)',
                                            fontFamily: 'var(--font-playfair)'
                                        }}
                                    >
                                        {item.question}
                                    </span>
                                    <div className="mt-1 flex-shrink-0">
                                        <RubElHizbIcon isOpen={isOpen} />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-8 pt-2">
                                                <p className="text-sm md:text-base leading-relaxed text-black/50 max-w-2xl">
                                                    {item.answer}
                                                </p>

                                                {/* Decorative Glow */}
                                                <div
                                                    className="w-32 h-[1px] mt-6"
                                                    style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Accent light for the bottom of section */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] opacity-20"
                style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }} />
        </section >
    );
}
