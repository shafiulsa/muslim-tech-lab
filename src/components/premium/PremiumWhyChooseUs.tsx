"use client";

import React from "react";
import { motion } from "framer-motion";

const POINTS = [
    {
        title: "Halal-first approach",
        description: "Ethical engineering that respects your values and maintains the highest standards of integrity.",
        icon: "🕌",
    },
    {
        title: "Arab market focused",
        description: "Deep understanding of cultural nuances and consumer behavior in the MENA region.",
        icon: "🌍",
    },
    {
        title: "Automation-driven systems",
        description: "Smarter workflows that save time and resources, allowing you to focus on what matters most.",
        icon: "🚀",
    },
    {
        title: "Transparent workflow",
        description: "Clear communication and real-time updates through every phase of the project.",
        icon: "💎",
    },
    {
        title: "ROI-focused results",
        description: "Data-backed strategies designed to maximize your digital growth and performance.",
        icon: "📈",
    },
];

export default function PremiumWhyChooseUs() {
    return (
        <section className="relative min-h-screen flex items-center py-32 px-6 md:px-20 bg-[#faf9f6] overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M0,50 Q25,45 50,50 T100,50"
                        fill="none"
                        stroke="var(--accent-gold)"
                        strokeWidth="0.1"
                        className="opacity-30"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                {/* Left: Content */}
                <div>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[var(--accent-gold)] uppercase tracking-widest text-sm font-bold mb-4 block"
                    >
                        Why Partner With Us?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-serif text-[var(--foreground)] mb-12"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Architecting the Future of the <span className="text-[var(--accent-gold)]">Muslim Digital Market</span>
                    </motion.h2>

                    <div className="space-y-8">
                        {POINTS.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex gap-6 group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--accent-gold)]/5 flex items-center justify-center text-2xl group-hover:bg-[var(--accent-gold)] group-hover:text-white transition-all duration-300">
                                    {point.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-[var(--foreground)] mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                                        {point.title}
                                    </h3>
                                    <p className="text-[var(--foreground)]/60 font-sans leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: Visual Section */}
                <div className="relative aspect-square lg:aspect-auto h-full min-h-[500px] flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        className="relative w-full max-w-md h-full max-h-md"
                    >
                        {/* Abstract Geometry / Illustration */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(179,135,40,0.1)_0%,transparent_70%)] rounded-full animate-pulse" />

                        {/* Floating elements representing points */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[10%] left-[10%] p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-[var(--accent-gold)]/10 z-20"
                        >
                            <span className="text-3xl">🕌</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[20%] right-[10%] p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-[var(--accent-gold)]/10 z-20"
                        >
                            <span className="text-3xl">🌍</span>
                        </motion.div>

                        <motion.div
                            animate={{ x: [0, 15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-[40%] right-[5%] p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-[var(--accent-gold)]/10 z-20"
                        >
                            <span className="text-3xl">🚀</span>
                        </motion.div>

                        {/* Central Ornament */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 border border-[var(--accent-gold)]/20 rounded-full flex items-center justify-center">
                                <div className="w-48 h-48 border border-[var(--accent-gold)]/40 rounded-full flex items-center justify-center rotate-45">
                                    <div className="w-32 h-32 bg-[var(--accent-gold)]/10 rounded-full flex items-center justify-center">
                                        <div className="w-16 h-16 bg-[var(--accent-gold)] rounded-full opacity-20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
