'use client';

import { useState } from 'react';
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


// ── Tech icons as inline SVGs ─────────────────────────────────────────────────
const TECHS = [
    {
        name: 'React',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <ellipse cx="20" cy="20" rx="4" ry="4" fill="currentColor" />
                <ellipse cx="20" cy="20" rx="18" ry="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <ellipse cx="20" cy="20" rx="18" ry="7" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)" />
                <ellipse cx="20" cy="20" rx="18" ry="7" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)" />
            </svg>
        ),
    },
    {
        name: 'Next.js',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 28V12l16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 18v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        name: 'Supabase',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <path d="M10 26l10-18 10 18H10z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M15 26l5 8 5-8" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        name: 'TypeScript',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <rect x="8" y="8" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 18h12M20 18v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <text x="24" y="32" fontSize="8" fill="currentColor" fontWeight="bold" style={{ fontFamily: 'monospace' }}>S</text>
            </svg>
        ),
    },
    {
        name: 'Tailwind',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <path d="M10 20c0-4 2-6 6-6 4 0 5 3 9 3 4 0 5-1.5 5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10 28c0-4 2-6 6-6 4 0 5 3 9 3 4 0 5-1.5 5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        name: 'Three.js',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <polygon points="20,6 34,30 6,30" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <polygon points="20,14 28,28 12,28" stroke="currentColor" strokeWidth="0.8" fill="none" />
                <circle cx="20" cy="6" r="1.5" fill="currentColor" />
                <circle cx="34" cy="30" r="1.5" fill="currentColor" />
                <circle cx="6" cy="30" r="1.5" fill="currentColor" />
            </svg>
        ),
    },
    {
        name: 'GSAP',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 20h9M20 14v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M23 20l-3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        name: 'Framer',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <path d="M10 10h20v10H10z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 20l10 10V20H10z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 20l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        name: 'Prisma',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <path d="M8 30L20 8l12 20H8z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 30l6-14 6 14" stroke="currentColor" strokeWidth="0.8" />
            </svg>
        ),
    },
    {
        name: 'Firebase',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <path d="M12 32l8-22 4 9-4-3 8 16H12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        ),
    },
];

// Double the array for seamless loop
const TECH_DOUBLED = [...TECHS, ...TECHS];

// ── Girih frame hexagon ───────────────────────────────────────────────────────
function GirihFrame({ children, name }: { children: React.ReactNode; name: string }) {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            {/* <LatticeBg></LatticeBg> */}
            <div
                className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-default px-1"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div
                    className="relative w-16 h-16 flex items-center justify-center transition-all duration-500"
                    style={{
                        color: hovered ? '#D4AF37' : 'rgba(255,255,255,0.35)',
                        filter: hovered ? 'drop-shadow(0 0 8px rgba(212,175,55,0.6))' : 'none',
                        transform: hovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                >
                    {/* Hexagonal Girih border */}
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-full h-full transition-all duration-500"
                        style={{ opacity: hovered ? 1 : 0.4 }}
                    >
                        <polygon
                            points="32,2 60,17 60,47 32,62 4,47 4,17"
                            fill="none"
                            stroke={hovered ? '#D4AF37' : 'rgba(212,175,55,0.5)'}
                            strokeWidth="0.8"
                        />
                        <polygon
                            points="32,8 54,20 54,44 32,56 10,44 10,20"
                            fill="none"
                            stroke={hovered ? 'rgba(212,175,55,0.6)' : 'rgba(212,175,55,0.2)'}
                            strokeWidth="0.4"
                        />
                    </svg>
                    {children}
                </div>
                <span
                    className="text-[9px] tracking-widest uppercase transition-colors duration-300"
                    style={{ color: hovered ? '#D4AF37' : 'rgba(255,255,255,0.25)' }}
                >
                    {name}
                </span>
            </div>
        </>

    );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function STechStack() {
    return (
        <section className="relative bg-[var(--background)] py-28 overflow-hidden" id="stack">
            {/* Noor ambient top glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 70%)',
                }}
            />
            <LatticeBg></LatticeBg>
            {/* Noor glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)',
                }}
            />



            {/* Section header */}
            <div className="text-center mb-20 px-6">
                <p
                    className="text-[10px] tracking-[0.5em] uppercase mb-3"
                    style={{ color: '#D4AF37', opacity: 0.6 }}
                >
                    الأدوات · The Arsenal
                </p>
                <h2
                    className="text-3xl md:text-6xl font-bold"
                    style={{ fontFamily: 'var(--font-playfair)', color: '#1a1a1a' }}
                >
                    Our Tech{' '}
                    <span className="gold-text">Stack</span>
                </h2>
                <p
                    className="mt-4 text-sm max-w-md mx-auto leading-relaxed"
                    style={{ color: 'rgba(0,0,0,0.35)' }}
                >
                    Battle-tested tools wielded with mastery — because craftsmanship demands the finest instruments.
                </p>
            </div>

            <SectionBackground opacity={0.05} />

            {/* Fade masks */}
            <div className="relative">
                <div
                    className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, var(--background), transparent)' }}
                />
                <div
                    className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(270deg, var(--background), transparent)' }}
                />

                {/* Row 1 — left to right */}
                <div className="overflow-hidden mb-6">
                    <div className="flex gap-6 animate-marquee w-max">
                        {TECH_DOUBLED.map((tech, i) => (
                            <GirihFrame key={`top-${i}`} name={tech.name}>
                                {tech.icon}
                            </GirihFrame>
                        ))}
                    </div>
                </div>

                {/* Row 2 — right to left */}
                <div className="overflow-hidden">
                    <div className="flex gap-6 animate-marquee-reverse w-max">
                        {[...TECH_DOUBLED].reverse().map((tech, i) => (
                            <GirihFrame key={`bot-${i}`} name={tech.name}>
                                {tech.icon}
                            </GirihFrame>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Noor */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(212,175,55,0.05) 0%, transparent 70%)',
                }}
            />
        </section>
    );
}
