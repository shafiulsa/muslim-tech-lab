'use client';

import { useRef, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import SectionBackground from './SectionBackground';

// ── Islamic Lattice SVG background ───────────────────────────────────────────
function LatticeBg() {
    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ animation: 'lattice-pulse 6s ease-in-out infinite' }}
        >
            <defs>
                <pattern id="lattice-contact" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    {/* 8-pointed star */}
                    <polygon
                        points="40,4 47,20 64,12 56,28 72,36 56,44 64,56 47,48 40,64 33,48 16,56 24,44 8,36 24,28 16,12 33,20"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="0.5"
                    />
                    {/* Inner square */}
                    <rect x="28" y="28" width="24" height="24" fill="none" stroke="#D4AF37" strokeWidth="0.3" transform="rotate(45 40 40)" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lattice-contact)" />
        </svg>
    );
}


// ── Islamic Lattice SVG background ───────────────────────────────────────────
// Reusable LatticeBg is now handled by SectionBackground component

// ── Gold-bottom input ────────────────────────────────────────────────────────
function GoldInput({
    label, type = 'text', name, isTextarea = false
}: {
    label: string; type?: string; name: string; isTextarea?: boolean;
}) {
    const [focused, setFocused] = useState(false);

    const base: React.CSSProperties = {
        background: 'transparent',
        border: 'none',
        borderBottom: `1px solid ${focused ? '#D4AF37' : 'rgba(212,175,55,0.25)'}`,
        borderRadius: 0,
        color: '#1a1a1a',
        outline: 'none',
        fontFamily: 'var(--font-inter)',
        fontSize: '14px',
        padding: '12px 0',
        width: '100%',
        transition: 'border-color 0.3s ease',
        resize: 'none' as const,
    };

    return (
        <div className="relative mb-8">
            <label
                className="block text-[10px] tracking-[0.4em] uppercase mb-1 transition-colors duration-300"
                style={{ color: focused ? '#D4AF37' : 'rgba(212,175,55,0.5)' }}
            >
                {label}
            </label>
            {isTextarea ? (
                <textarea
                    name={name}
                    rows={4}
                    required
                    style={base}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    required
                    style={base}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            )}
            {/* Focus glow line */}
            <motion.div
                animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-[1px] w-full origin-left"
                style={{
                    background: 'linear-gradient(90deg, #D4AF37, #FFE066, #D4AF37)',
                    boxShadow: '0 0 6px rgba(212,175,55,0.6)',
                }}
            />
        </div>
    );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function SContact() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = data.get('name') as string;
        const email = data.get('email') as string;
        const message = data.get('message') as string;
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:hello@muslimtechlab.com?subject=${subject}&body=${body}`;
        setSent(true);
    };

    return (
        <section className="relative bg-[var(--background)] py-24 md:py-32 overflow-hidden" id="contact">
            {/* Lattice background */}
            <LatticeBg></LatticeBg>
            {/* <SectionBackground opacity={0.06} /> */}

            {/* Noor glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)',
                }}
            />

            {/* Section header */}
            <div className="text-center mb-20 relative z-10 px-6">
                <p
                    className="text-[10px] tracking-[0.5em] uppercase mb-3"
                    style={{ color: '#D4AF37', opacity: 0.6 }}
                >
                    تواصل معنا · Let's Connect
                </p>
                <h2
                    className="text-4xl md:text-6xl font-bold"
                    style={{ fontFamily: 'var(--font-playfair)', color: '#1a1a1a' }}
                >
                    The Divine{' '}
                    <span className="gold-text">Handshake</span>
                </h2>
            </div>

            {/* 2-column layout */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

                {/* Left — Agency info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div
                        className="text-[11px] tracking-[0.45em] uppercase mb-2"
                        style={{ color: '#D4AF37', opacity: 0.6 }}
                    >
                        Agency
                    </div>
                    <h3
                        className="text-2xl md:text-4xl font-bold mb-4 md:mb-6"
                        style={{ fontFamily: 'var(--font-playfair)', color: '#1a1a1a' }}
                    >
                        Muslim Tech Lab
                    </h3>
                    <p
                        className="text-sm leading-relaxed mb-10 max-w-sm"
                        style={{ color: 'rgba(0,0,0,0.45)' }}
                    >
                        Crafting digital sanctuaries for brands that carry meaning. We believe every pixel is an amanah — a trust that must be fulfilled with excellence.
                    </p>

                    {/* Info rows */}
                    {[
                        { label: 'Location', value: 'Rangpur, Bangladesh 5400' },
                        { label: 'Email', value: 'hello@muslimtechlab.com' },
                        { label: 'Availability', value: 'Open to Projects Worldwide' },
                    ].map(({ label, value }) => (
                        <div key={label} className="mb-6">
                            <p
                                className="text-[9px] tracking-[0.4em] uppercase mb-1"
                                style={{ color: '#D4AF37', opacity: 0.5 }}
                            >
                                {label}
                            </p>
                            <p className="text-sm" style={{ color: 'rgba(0,0,0,0.7)' }}>{value}</p>
                        </div>
                    ))}

                    {/* Social links */}
                    <div className="flex flex-wrap gap-4 md:gap-5 mt-8">
                        {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((s) => (
                            <a
                                key={s}
                                href={`https://${s.toLowerCase()}.com`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[10px] md:text-[9px] tracking-widest uppercase transition-colors duration-300 hover:text-[#D4AF37]"
                                style={{ color: 'rgba(0,0,0,0.3)' }}
                            >
                                {s}
                            </a>
                        ))}
                    </div>

                    {/* Decorative Alif line */}
                    <div
                        className="mt-12 w-16 h-[1px]"
                        style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }}
                    />
                </motion.div>

                {/* Right — Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {sent ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-20">
                            {/* 8-pointed star icon */}
                            <svg viewBox="0 0 60 60" width="48" height="48" fill="none" className="mb-6">
                                <polygon
                                    points="30,2 37,22 58,22 42,35 48,55 30,42 12,55 18,35 2,22 23,22"
                                    stroke="#D4AF37"
                                    strokeWidth="1"
                                    fill="none"
                                />
                            </svg>
                            <h3
                                className="text-2xl font-bold mb-3"
                                style={{ fontFamily: 'var(--font-playfair)', color: '#1a1a1a' }}
                            >
                                Jazakallahu Khayran
                            </h3>
                            <p className="text-sm" style={{ color: 'rgba(0,0,0,0.45)' }}>
                                Your message was received. We shall return with excellence, insha'Allah.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <GoldInput label="Your Name" name="name" />
                            <GoldInput label="Email Address" name="email" type="email" />
                            <GoldInput label="Your Message" name="message" isTextarea />

                            <motion.button
                                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(212,175,55,0.3)' }}
                                whileTap={{ scale: 0.97 }}
                                type="submit"
                                className="w-full py-4 mt-2 text-[11px] tracking-[0.4em] uppercase font-medium transition-all duration-300 relative overflow-hidden"
                                style={{
                                    background: 'transparent',
                                    border: '1px solid rgba(212,175,55,0.4)',
                                    color: '#D4AF37',
                                    cursor: 'pointer',
                                }}
                            >
                                <span className="relative z-10">Send Message · أرسل رسالة</span>
                                {/* Hover fill */}
                                <motion.div
                                    className="absolute inset-0"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.4 }}
                                    style={{ background: 'rgba(212,175,55,0.07)' }}
                                />
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>

            {/* Footer line */}
            <div
                className="relative z-10 mt-24 mx-6 md:mx-auto md:max-w-6xl border-t flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
                <p
                    className="text-[10px] tracking-widest uppercase"
                    style={{ color: 'rgba(255,255,255,0.2)' }}
                >
                    © 2025 Muslim Tech Lab · Rangpur, Bangladesh
                </p>
                <p
                    className="text-[10px] tracking-widest"
                    style={{ color: 'rgba(212,175,55,0.3)' }}
                >
                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                </p>
            </div>
        </section>
    );
}
