'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionBackground from './SectionBackground';
import LatticeBg from './LatticeBg';

// ── Project data ──────────────────────────────────────────────────────────────
const PROJECTS = [
    {
        num: '01',
        title: 'Noor E-Commerce',
        category: 'Full-Stack Development',
        tags: ['Next.js', 'Supabase', 'Stripe'],
        year: '2025',
        color: 'from-[#1a1200] to-[var(--background)]',
    },
    {
        num: '02',
        title: 'Hijab Luxe Brand',
        category: 'Brand Identity & Web',
        tags: ['Figma', 'Three.js', 'GSAP'],
        year: '2025',
        color: 'from-[#0a1400] to-[var(--background)]',
    },
    {
        num: '03',
        title: 'Zakat Dashboard',
        category: 'SaaS Platform',
        tags: ['React', 'TypeScript', 'Prisma'],
        year: '2024',
        color: 'from-[#120a00] to-[var(--background)]',
    },
    {
        num: '04',
        title: 'Al Fajr Media',
        category: 'Content & Motion',
        tags: ['After Effects', 'Framer', 'CMS'],
        year: '2024',
        color: 'from-[#0a0012] to-[var(--background)]',
    },
    {
        num: '05',
        title: 'Masjid Connect',
        category: 'Mobile Application',
        tags: ['React Native', 'Expo', 'Firebase'],
        year: '2024',
        color: 'from-[#001210] to-[var(--background)]',
    },
    {
        num: '06',
        title: 'Islamic Studies AI',
        category: 'AI Product',
        tags: ['GPT-4', 'Python', 'Next.js'],
        year: '2025',
        color: 'from-[#001020] to-[var(--background)]',
    },
];

// ── Octagon frame SVG for project number ─────────────────────────────────────
function OctagonFrame({ number }: { number: string }) {
    return (
        <div className="relative w-14 h-14 flex items-center justify-center mb-6">
            <svg
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
            >
                <polygon
                    points="16,2 40,2 54,16 54,40 40,54 16,54 2,40 2,16"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    opacity="0.8"
                />
                <polygon
                    points="20,6 36,6 50,20 50,36 36,50 20,50 6,36 6,20"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="0.3"
                    opacity="0.4"
                />
            </svg>
            <span
                className="relative z-10 text-xs font-light tracking-widest"
                style={{ color: '#D4AF37', fontFamily: 'var(--font-inter)' }}
            >
                {number}
            </span>
        </div>
    );
}

// ── Single project card ───────────────────────────────────────────────────────
function SProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
    return (
        <motion.article
            whileHover={{ scale: 1.025, y: -6 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`relative flex-shrink-0 w-[280px] sm:w-[340px] md:w-[420px] h-[480px] sm:h-[520px] md:h-[600px] 
                  rounded-b-2xl overflow-hidden bg-gradient-to-b ${project.color}
                  border border-white/[0.06] cursor-pointer group`}
            style={{
                clipPath: 'ellipse(120% 100% at 50% 0%)',
            }}
        >
            {/* Inner border arch */}
            <div
                className="absolute inset-0 rounded-b-2xl"
                style={{
                    clipPath: 'ellipse(100% 100% at 50% 0%)',
                    background: 'linear-gradient(180deg, rgba(212,175,55,0.06) 0%, transparent 40%)',
                }}
            />

            {/* Noor glow center */}
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                    background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
                }}
            />

            {/* Girih pattern */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id={`girih-${project.num}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        <polygon points="30,2 58,16 58,44 30,58 2,44 2,16" fill="none" stroke="#D4AF37" strokeWidth="0.6" />
                        <line x1="30" y1="2" x2="30" y2="58" stroke="#D4AF37" strokeWidth="0.2" />
                        <line x1="2" y1="30" x2="58" y2="30" stroke="#D4AF37" strokeWidth="0.2" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#girih-${project.num})`} />
            </svg>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                <div>
                    <OctagonFrame number={project.num} />
                    <p
                        className="text-[10px] tracking-[0.4em] uppercase mb-3"
                        style={{ color: '#D4AF37', opacity: 0.7 }}
                    >
                        {project.category}
                    </p>
                    <h3
                        className="text-2xl md:text-3xl font-bold leading-tight mb-4"
                        style={{ fontFamily: 'var(--font-playfair)', color: '#1a1a1a' }}
                    >
                        {project.title}
                    </h3>
                </div>

                <div>
                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] tracking-widest uppercase px-2.5 py-1 border rounded-sm"
                                style={{ borderColor: 'rgba(212,175,55,0.25)', color: 'rgba(212,175,55,0.7)' }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-black/30 text-xs tracking-widest">{project.year}</span>
                        <motion.div
                            whileHover={{ x: 4 }}
                            className="flex items-center gap-2 text-xs tracking-widest uppercase"
                            style={{ color: '#D4AF37' }}
                        >
                            View
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Gold bottom edge glow */}
            <div
                className="absolute bottom-0 left-0 w-full h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
            />
        </motion.article>
    );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function SPortfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Horizontal translation: moves cards left as user scrolls down through section
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-58%']);

    return (
        <section
            ref={containerRef}
            className="relative h-[400vh] bg-[var(--background)]"
            style={{ height: `${PROJECTS.length * 80 + 50}vh` }}
            id="portfolio"
        >
            <SectionBackground opacity={0.03} />
            <LatticeBg></LatticeBg>

            {/* Noor glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)',
                }}
            />



            {/* Sticky horizontal scroll viewport */}
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                {/* Section header */}
                <div className="px-6 md:px-16 mb-6 md:mb-10 flex items-end justify-between">
                    <div>
                        <p
                            className="text-[10px] tracking-[0.45em] uppercase mb-2"
                            style={{ color: '#D4AF37', opacity: 0.7 }}
                        >
                            Our Work
                        </p>
                        <h2
                            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-none"
                            style={{ fontFamily: 'var(--font-playfair)', color: '#1a1a1a' }}
                        >
                            Selected
                            <br />
                            <span className="gold-text">Portfolio</span>
                        </h2>
                    </div>
                    <div className="hidden md:flex items-center gap-3 text-black/30 text-xs tracking-widest">
                        <span>Scroll →</span>
                        <div className="w-12 h-[1px]" style={{ background: 'rgba(212,175,55,0.4)' }} />
                        <span>{PROJECTS.length} Projects</span>
                    </div>
                </div>

                {/* Horizontal track — desktop */}
                <div className="hidden md:block overflow-hidden pl-16">
                    <motion.div
                        className="flex gap-6 w-max"
                        style={{ x }}
                        transition={{ type: 'spring', stiffness: 40, damping: 30 }}
                    >
                        {PROJECTS.map((p) => (
                            <SProjectCard key={p.num} project={p} />
                        ))}
                    </motion.div>
                </div>

                {/* Vertical stack — mobile */}
                <div className="md:hidden overflow-x-auto scrollbar-none px-6 flex gap-5 pb-4">
                    {PROJECTS.map((p) => (
                        <div key={p.num} className="flex-shrink-0 w-[300px]">
                            <SProjectCard project={p} />
                        </div>
                    ))}
                </div>

                {/* Noor ambient glow */}
                <div
                    className="absolute bottom-0 left-0 w-full h-64 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(212,175,55,0.05) 0%, transparent 70%)',
                    }}
                />
            </div>
        </section>
    );
}
