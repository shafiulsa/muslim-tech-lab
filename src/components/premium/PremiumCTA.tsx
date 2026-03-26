"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PremiumCTA() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
            {/* Animated Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] blur-[100px]"
                />
            </div>

            <div className="relative z-10 text-center max-w-4xl px-6">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[var(--accent-gold)] uppercase tracking-[0.4em] text-sm font-bold mb-8 block"
                >
                    The Digital Sanctuary Awaits
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-8xl font-serif text-[var(--foreground)] lowercase leading-tight mb-16"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                >
                    Ready to Build Your <br />
                    <span className="text-[var(--accent-gold)] italic">Digital System?</span>
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(179,135,40,0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 bg-[var(--accent-gold)] text-white rounded-full text-lg font-sans font-bold transition-all duration-300 relative group overflow-hidden"
                    >
                        <span className="relative z-10">Start Project</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 border border-[var(--foreground)]/10 text-[var(--foreground)] rounded-full text-lg font-sans font-bold hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
                    >
                        Book Consultation
                    </motion.button>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-[var(--foreground)]/40 font-sans text-sm tracking-widest uppercase"
                >
                    Limited slots available for Q2 2026
                </motion.div>
            </div>
        </section>
    );
}
