"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MAP_BG = "https://res.cloudinary.com/dtspre1ab/image/upload/v1774526683/map_nptp8s.png";

export default function PremiumContact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !bgRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(bgRef.current, {
                yPercent: 12,
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
        <section id="contact" ref={containerRef} className="relative py-32 overflow-hidden bg-[#faf9f6]">
            {/* PARALLAX BACKGROUND */}
            <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none scale-105">
                <div
                    className="absolute inset-0 opacity-40 grayscale-[0.8]"
                    style={{ backgroundImage: `url(${MAP_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-[#faf9f6]/92 backdrop-blur-[2px]" />

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-[#a16207]/5 rounded-full pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-[#a16207]/5 rounded-full pointer-events-none" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* Left Side: Text & Info */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[#a16207] uppercase tracking-widest text-xs font-bold mb-4 block"
                        >
                            Connection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif text-[#1c1917] mb-12"
                            style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                            Start a <span className="text-[#a16207] italic">Conversation</span>
                        </motion.h2>

                        <div className="space-y-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex gap-6"
                            >
                                <div className="text-2xl text-[#a16207]">✉</div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#a16207] font-bold mb-1">Email Our Sanctuary</p>
                                    <p className="text-2xl font-serif text-[#1c1917]" style={{ fontFamily: 'var(--font-playfair)' }}>peace@muslimtechlab.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-6"
                            >
                                <div className="text-2xl text-[#a16207]">✆</div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#a16207] font-bold mb-1">WhatsApp Channel</p>
                                    <p className="text-2xl font-serif text-[#1c1917]" style={{ fontFamily: 'var(--font-playfair)' }}>+880 1711 000000</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex gap-6"
                            >
                                <div className="text-2xl text-[#a16207]">📍</div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#a16207] font-bold mb-1">Global HQ</p>
                                    <p className="text-2xl font-serif text-[#1c1917]" style={{ fontFamily: 'var(--font-playfair)' }}>Digital Sanctuary, Rangpur</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-10 md:p-14 bg-white/40 backdrop-blur-xl rounded-[40px] border border-[#a16207]/10 shadow-[0_20px_50px_rgba(161,98,7,0.05)]"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#a16207] font-bold ml-1">Your Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-[#a16207]/20 py-3 focus:border-[#a16207] outline-none transition-colors text-[#1c1917]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#a16207] font-bold ml-1">Email Address</label>
                                    <input type="email" className="w-full bg-transparent border-b border-[#a16207]/20 py-3 focus:border-[#a16207] outline-none transition-colors text-[#1c1917]" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-[#a16207] font-bold ml-1">The Mission / Project Description</label>
                                <textarea rows={4} className="w-full bg-transparent border-b border-[#a16207]/20 py-3 focus:border-[#a16207] outline-none transition-colors text-[#1c1917] resize-none" />
                            </div>

                            <button className="w-full py-6 bg-[#1c1917] hover:bg-[#a16207] text-white rounded-full text-xs uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:shadow-[0_10px_30px_rgba(161,98,7,0.3)]">
                                Begin the Journey
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>

            {/* Minimal Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </section>
    );
}
