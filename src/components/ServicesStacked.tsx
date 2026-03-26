'use client';

import { BentoCard } from './grid/BentoCard';
import LatticeBg from './LatticeBg';
import SectionBackground from './SectionBackground';

export default function ServicesStacked() {
    return (
        <section
            className="py-24 px-4 md:px-12 relative overflow-hidden bg-[var(--background)]"
            id="services"
        >
            {/* <SectionBackground opacity={0.05} /> */}
            <LatticeBg></LatticeBg>

            {/* Noor glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)',
                }}
            />

            {/* --- PRIMARY BACKGROUND SYSTEM --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* The "Noor" Glow (Radiant Divine Light) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent blur-[140px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-24 relative">
                    <h2 className="text-[var(--foreground)] text-5xl md:text-7xl font-medium tracking-tight mb-4"
                        style={{ fontFamily: '"Playfair Display", serif' }}>
                        Our Services
                    </h2>
                    <p className="text-[#d4af37] text-xs tracking-[0.6em] uppercase font-bold opacity-70">
                        Ethical Engineering • Digital Excellence
                    </p>
                </div>

                {/* --- BENTO GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-auto md:auto-rows-[400px]">

                    {/* 1. Software Development */}
                    <BentoCard
                        tag="System Architecture"
                        title="Software Development"
                        description="Custom-built logic designed for scalability, rooted in technical excellence."
                        className="md:col-span-1 border-[#d4af37]/20"
                    >
                        <div className="w-full h-full flex items-center justify-center relative">
                            {/* Rub el Hizb Geometry */}
                            <div className="w-28 h-28 border border-[#d4af37]/40 rotate-45 absolute animate-[spin_10s_linear_infinite]" />
                            <div className="w-28 h-28 border border-[#d4af37]/20 absolute" />
                            <div className="z-10 text-[#d4af37] text-4xl font-serif">S</div>
                        </div>
                    </BentoCard>

                    {/* 2. Web Development */}
                    <BentoCard
                        tag="Immersive Interfaces"
                        title="Web Development"
                        description="Digital storytelling through pixel-perfect frameworks and elegant motion."
                        className="md:col-span-2 border-[#d4af37]/20 "
                    >
                        <div className="absolute inset-0 opacity-[0.08] pointer-events-none overflow-hidden">
                            <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <pattern id="arches" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                    <path d="M50 100 C 50 20, 0 20, 0 100 M50 100 C 50 20, 100 20, 100 100" stroke="#d4af37" strokeWidth="0.5" />
                                </pattern>
                                <rect width="100%" height="100%" fill="url(#arches)" />
                            </svg>
                        </div>
                        <div className="relative z-10 w-full h-full flex items-center justify-center md:justify-end md:pr-12">
                            {/* Floating Cards with Mihrab Top */}
                            <div className="flex gap-4 scale-75 md:scale-100">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-24 h-36 rounded-t-full border border-[#d4af37]/30 bg-[var(--background)] shadow-[0_0_20px_rgba(212,175,55,0.1)]" />
                                ))}
                            </div>
                        </div>
                    </BentoCard>

                    {/* 3. Automation */}
                    <BentoCard
                        tag="Intelligent Workflows"
                        title="Automation"
                        description="Reclaiming time through autonomous systems and ethical AI integration."
                        className="md:col-span-1 border-[#d4af37]/10"
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="relative w-36 h-36 flex items-center justify-center">
                                {/* Circular Geometric Pattern */}
                                <div className="absolute inset-0 border border-[#d4af37]/10 rounded-full animate-[spin_20s_linear_infinite]" />
                                <div className="absolute inset-4 border border-[#d4af37]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                <span className="text-[#d4af37] font-serif text-2xl tracking-widest">AI</span>
                            </div>
                        </div>
                    </BentoCard>

                    {/* 4. Marketing */}
                    <BentoCard
                        tag="Digital Presence"
                        title="Marketing & Socials"
                        description="Establishing brand authority through strategic reach and premium aesthetics."
                        className="md:col-span-1 border-[#d4af37]/10"
                    >
                        <div className="w-full h-full flex items-center justify-center gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-[1px] bg-gradient-to-t from-[#d4af37] to-transparent"
                                    style={{ height: `${20 + i * 15}px`, opacity: 0.2 + i * 0.1 }} />
                            ))}
                        </div>
                    </BentoCard>

                    {/* 5. Halal Ads */}
                    <BentoCard
                        tag="Ethical Growth"
                        title="Halal Ads"
                        description="Marketing campaigns rooted in integrity and strictly compliant standards."
                        className="md:col-span-1 border-[#d4af37]/20"
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center relative">
                            {/* Geometric Seal */}
                            <div className="w-24 h-24 border border-[#d4af37]/40 rounded-full flex items-center justify-center">
                                <div className="w-20 h-20 border-[0.5px] border-[#d4af37]/20 rounded-full flex items-center justify-center">
                                    <span className="text-[#d4af37] text-[10px] font-bold tracking-[0.3em] uppercase">Ethical</span>
                                </div>
                            </div>
                            <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#d4af37]/20 to-transparent" />
                        </div>
                    </BentoCard>

                </div>
            </div>
        </section>
    );
}
