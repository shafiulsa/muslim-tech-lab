'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionBackground from './SectionBackground';
import LatticeBg from './LatticeBg';

// ── Testimonial data ──────────────────────────────────────────────────────────
const TESTIMONIALS = [
    {
        quote:
            '"They did not merely build our website — they crafted a digital sanctuary. Every pixel sang with purpose and every interaction felt like a du\'a answered."',
        author: 'Aisha Al-Rashidi',
        role: 'Founder, Noor Cosmetics · Dubai',
        glow: 'rgba(212,175,55,0.22)',
    },
    {
        quote:
            '"Working with Muslim Tech Lab felt like collaborating with artists who understood our soul. The result was beyond what we dared to imagine — and it converts."',
        author: 'Ibrahim Qureshi',
        role: 'CEO, Al Badr Investments · London',
        glow: 'rgba(180,212,55,0.12)',
    },
    {
        quote:
            '"In an industry full of noise, they delivered silence — clean, purposeful, magnificent. Our dashboard reduced onboarding time by 60% on day one."',
        author: 'Fatimah Malik',
        role: 'CTO, Zakat Platform · Dhaka',
        glow: 'rgba(212,100,55,0.10)',
    },
];

// ── Mihrab arch SVG ───────────────────────────────────────────────────────────
function MihrabArch() {
    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMin meet"
            style={{ opacity: 0.07, width: '100%', height: 'auto', maxHeight: '100%' }}
        >
            {/* Outer arch */}
            <path
                d="M200 580 L200 280 Q200 80 400 60 Q600 80 600 280 L600 580 Z"
                stroke="#D4AF37"
                strokeWidth="1"
                fill="none"
            />
            {/* Inner arch */}
            <path
                d="M240 570 L240 290 Q240 120 400 105 Q560 120 560 290 L560 570 Z"
                stroke="#D4AF37"
                strokeWidth="0.5"
                fill="none"
            />
            {/* Keystone detail at top */}
            <path
                d="M355 60 Q400 40 445 60"
                stroke="#D4AF37"
                strokeWidth="1"
                fill="none"
            />
            {/* Muqarnas-style geometric trim */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
                <line
                    key={i}
                    x1={300 + i * 40}
                    y1="95"
                    x2={310 + i * 40}
                    y2="85"
                    stroke="#D4AF37"
                    strokeWidth="0.5"
                />
            ))}
            {/* Side columns */}
            <line x1="195" y1="580" x2="195" y2="380" stroke="#D4AF37" strokeWidth="0.5" />
            <line x1="605" y1="580" x2="605" y2="380" stroke="#D4AF37" strokeWidth="0.5" />
            {/* Capital decorations */}
            <polygon points="185,380 205,380 200,370 190,370" fill="none" stroke="#D4AF37" strokeWidth="0.4" />
            <polygon points="595,380 615,380 610,370 600,370" fill="none" stroke="#D4AF37" strokeWidth="0.4" />
        </svg>
    );
}

// ── Navigation dots ───────────────────────────────────────────────────────────
function NavDot({ active, onClick }: { active: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="w-2 h-2 rounded-full transition-all duration-400 focus:outline-none"
            style={{
                background: active ? '#D4AF37' : 'rgba(212,175,55,0.25)',
                transform: active ? 'scale(1.4)' : 'scale(1)',
                boxShadow: active ? '0 0 8px rgba(212,175,55,0.6)' : 'none',
            }}
        />
    );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function STestimonials() {
    const [active, setActive] = useState(0);

    // Auto-advance every 5 s
    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const current = TESTIMONIALS[active];

    return (
        <section className="relative bg-[var(--background)] py-24 md:py-32 overflow-hidden" id="testimonials">
            <SectionBackground opacity={0.04} />
            {/* Decorative Mihrab SVG Background */}
            {/* Animated Noor glow that changes colour */}
            <LatticeBg></LatticeBg>

            {/* Noor glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)',
                }}
            />

            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${current.glow} 0%, transparent 65%)` }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                style={{ animation: 'noor-pulse 8s ease-in-out infinite' }}
            />

            {/* Mihrab arch */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full max-w-3xl h-full relative">
                    <MihrabArch />
                </div>
            </div>

            {/* Section label */}
            <div className="text-center mb-16 relative z-10">
                <p
                    className="text-[10px] tracking-[0.5em] uppercase"
                    style={{ color: '#D4AF37', opacity: 0.6 }}
                >
                    شهادات · Testimonials
                </p>
            </div>

            {/* Quote slider */}
            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center min-h-[400px] md:min-h-[300px] flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 24, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -24, scale: 0.97 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="flex flex-col items-center"
                    >
                        {/* Decorative gold opener */}
                        <div
                            className="text-5xl leading-none mb-8 font-light"
                            style={{ color: 'rgba(212,175,55,0.5)', fontFamily: 'Georgia, serif' }}
                        >
                            ❝
                        </div>

                        <blockquote
                            className="text-lg md:text-2xl lg:text-3xl font-light leading-relaxed mb-10 px-2"
                            style={{ fontFamily: 'var(--font-playfair)', color: '#1a1a1a' }}
                        >
                            {current.quote}
                        </blockquote>

                        {/* Author */}
                        <div className="flex flex-col items-center gap-2">
                            <div
                                className="w-8 h-[1px]"
                                style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
                            />
                            <p
                                className="text-sm font-medium tracking-widest uppercase"
                                style={{ color: '#D4AF37' }}
                            >
                                {current.author}
                            </p>
                            <p
                                className="text-xs tracking-wide"
                                style={{ color: 'rgba(0,0,0,0.4)' }}
                            >
                                {current.role}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Nav dots */}
                <div className="flex items-center gap-4 mt-12">
                    {TESTIMONIALS.map((_, i) => (
                        <NavDot key={i} active={i === active} onClick={() => setActive(i)} />
                    ))}
                </div>

                {/* Prev / Next */}
                <div className="flex items-center gap-6 mt-6">
                    <button
                        onClick={() => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                        className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                        style={{ borderColor: 'rgba(212,175,55,0.2)', color: 'rgba(255,255,255,0.3)' }}
                        aria-label="Previous testimonial"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => setActive((a) => (a + 1) % TESTIMONIALS.length)}
                        className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                        style={{ borderColor: 'rgba(212,175,55,0.2)', color: 'rgba(255,255,255,0.3)' }}
                        aria-label="Next testimonial"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}
