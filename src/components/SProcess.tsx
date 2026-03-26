// 'use client';

// import { useRef } from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import SectionBackground from './SectionBackground';
// import LatticeBg from './LatticeBg';

// // ── Steps data ────────────────────────────────────────────────────────────────
// const STEPS = [
//     {
//         num: '01',
//         title: 'Discovery',
//         arabic: 'الكشف',
//         desc: 'We immerse ourselves in your world — understanding your vision, audience, and the legacy you wish to build. A foundation as strong as faith.',
//         icon: (
//             <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
//                 <circle cx="14" cy="14" r="6" stroke="#D4AF37" strokeWidth="1" />
//                 <circle cx="14" cy="14" r="12" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="3 3" />
//                 <line x1="14" y1="2" x2="14" y2="6" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
//                 <line x1="14" y1="22" x2="14" y2="26" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
//                 <line x1="2" y1="14" x2="6" y2="14" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
//                 <line x1="22" y1="14" x2="26" y2="14" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
//             </svg>
//         ),
//     },
//     {
//         num: '02',
//         title: 'Design',
//         arabic: 'التصميم',
//         desc: 'Where geometry meets intention. We craft interfaces that breathe — every pixel placed with the precision of a master calligrapher.',
//         icon: (
//             <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
//                 <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="none" stroke="#D4AF37" strokeWidth="1" />
//                 <polygon points="14,7 21,10.5 21,17.5 14,21 7,17.5 7,10.5" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
//             </svg>
//         ),
//     },
//     {
//         num: '03',
//         title: 'Development',
//         arabic: 'التطوير',
//         desc: 'Code as architecture. We engineer with the same meticulous care as a master builder — every function, clean; every commit, purposeful.',
//         icon: (
//             <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
//                 <polyline points="8,10 4,14 8,18" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
//                 <polyline points="20,10 24,14 20,18" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
//                 <line x1="16" y1="7" x2="12" y2="21" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
//             </svg>
//         ),
//     },
//     {
//         num: '04',
//         title: 'Deploy',
//         arabic: 'الإطلاق',
//         desc: 'The unveiling. We launch with performance so smooth it feels like Laylat al-Qadr — a night where every request is answered.',
//         icon: (
//             <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
//                 <path d="M14 4 L22 10 L22 20 Q14 26 14 26 Q14 26 6 20 L6 10 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
//                 <path d="M14 9 L10 17 L14 15 L18 17 Z" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
//             </svg>
//         ),
//     },
// ];

// // ── Step card ────────────────────────────────────────────────────────────────
// function StepCard({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
//     const isEven = index % 2 === 0;

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, margin: '-10% 0px -10% 0px' }}
//             transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
//             className={`relative flex items-center gap-6 md:gap-16 w-full
//                   ${isEven ? 'flex-row' : 'flex-row-reverse md:flex-row-reverse'} mb-16 md:mb-28`}
//         >
//             {/* Content side */}
//             <div className={`flex-1 ${isEven ? 'text-right md:pr-12' : 'text-left md:pl-12'}`}>
//                 <div
//                     className={`text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase mb-2 ${isEven ? 'justify-end' : 'justify-start'} flex`}
//                     style={{ color: '#D4AF37', opacity: 0.5 }}
//                 >
//                     {step.arabic}
//                 </div>
//                 <p
//                     className="text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.35em] mb-1 uppercase"
//                     style={{ color: '#D4AF37', opacity: 0.8 }}
//                 >
//                     Step {step.num}
//                 </p>
//                 <h3
//                     className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight"
//                     style={{ fontFamily: 'var(--font-playfair)', color: '#FFFFFF' }}
//                 >
//                     {step.title}
//                 </h3>
//                 <p
//                     className="text-xs md:text-base leading-relaxed max-w-md"
//                     style={{ color: 'rgba(255,255,255,0.5)', ...(isEven ? { marginLeft: 'auto' } : {}) }}
//                 >
//                     {step.desc}
//                 </p>
//             </div>

//             {/* Center node */}
//             <div className="flex-shrink-0 flex flex-col items-center relative z-10">
//                 <motion.div
//                     whileInView={{ scale: [0.8, 1.1, 1], opacity: [0, 1, 1] }}
//                     viewport={{ once: false, margin: '-20% 0px -20% 0px' }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="w-16 h-16 md:w-20 md:h-20 rounded-full border flex items-center justify-center relative"
//                     style={{ borderColor: 'rgba(212,175,55,0.3)', background: '#050505' }}
//                 >
//                     {/* Outer ring glow */}
//                     <div
//                         className="absolute inset-0 rounded-full"
//                         style={{
//                             background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
//                         }}
//                     />
//                     {step.icon}
//                     {/* Number badge */}
//                     <span
//                         className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[9px] flex items-center justify-center"
//                         style={{ background: '#D4AF37', color: '#050505', fontWeight: 700 }}
//                     >
//                         {index + 1}
//                     </span>
//                 </motion.div>
//             </div>

//             {/* Empty opposite side */}
//             <div className="flex-1" />
//         </motion.div>
//     );
// }

// // ── Main component ────────────────────────────────────────────────────────────
// export default function SProcess() {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const lineRef = useRef<SVGLineElement>(null);

//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ['start 80%', 'end 20%'],
//     });

//     // Animate SVG line stroke from 0 → full
//     const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [800, 0]);

//     return (
//         <section
//             ref={containerRef}
//             className="relative bg-[#050505] py-24 md:py-32 overflow-hidden"
//             id="process"
//         >
//             <SectionBackground opacity={0.03} />
//             {/* Ambient glows */}
//             {/* Section header */}
//             {/* Noor glow */}
//             <div
//                 className="absolute inset-0 pointer-events-none"
//                 style={{
//                     background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)',
//                 }}
//             />
//             <LatticeBg></LatticeBg>

//             <div className="text-center mb-24">
//                 <p
//                     className="text-[10px] tracking-[0.5em] uppercase mb-3"
//                     style={{ color: '#D4AF37', opacity: 0.6 }}
//                 >
//                     الطريق · The Path
//                 </p>
//                 <h2
//                     className="text-4xl md:text-6xl font-bold"
//                     style={{ fontFamily: 'var(--font-playfair)', color: '#FFFFFF' }}
//                 >
//                     Our{' '}
//                     <span className="gold-text">Process</span>
//                 </h2>

//             </div>

//             {/* Timeline wrapper */}
//             <div className="relative max-w-4xl mx-auto">
//                 {/* The Alif Line — SVG vertical line that fills on scroll */}
//                 <svg
//                     className="absolute left-1/2 top-0 -translate-x-1/2 h-full"
//                     width="2"
//                     style={{ overflow: 'visible' }}
//                 >
//                     {/* Track (dim) */}
//                     <line
//                         x1="1" y1="0" x2="1" y2="100%"
//                         stroke="rgba(212,175,55,0.1)"
//                         strokeWidth="1"
//                     />
//                     {/* Animated fill */}
//                     <motion.line
//                         ref={lineRef}
//                         x1="1" y1="0" x2="1" y2="800"
//                         stroke="#D4AF37"
//                         strokeWidth="1.5"
//                         strokeDasharray="800"
//                         style={{ strokeDashoffset }}
//                         strokeLinecap="round"
//                         filter="url(#alifGlow)"
//                     />
//                     <defs>
//                         <filter id="alifGlow" x="-400%" y="0" width="900%" height="100%">
//                             <feGaussianBlur stdDeviation="3" result="blur" />
//                             <feMerge>
//                                 <feMergeNode in="blur" />
//                                 <feMergeNode in="SourceGraphic" />
//                             </feMerge>
//                         </filter>
//                     </defs>
//                 </svg>

//                 {/* Steps */}
//                 {STEPS.map((step, i) => (
//                     <StepCard key={step.num} step={step} index={i} />
//                 ))}
//             </div>

//             {/* Bottom Noor glow */}
//             <div
//                 className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
//                 style={{
//                     background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(212,175,55,0.06) 0%, transparent 70%)',
//                 }}
//             />
//         </section>
//     );
// }


'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LatticeBg from './LatticeBg';

// ── Steps data ────────────────────────────────────────────────────────────────
const STEPS = [
    {
        num: '01',
        title: 'Discovery',
        arabic: 'الكشف',
        desc: 'We immerse ourselves in your world — understanding your vision, audience, and the legacy you wish to build. A foundation as strong as faith.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="6" stroke="#D4AF37" strokeWidth="1" />
                <circle cx="14" cy="14" r="12" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="14" y1="2" x2="14" y2="6" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
                <line x1="14" y1="22" x2="14" y2="26" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
                <line x1="2" y1="14" x2="6" y2="14" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
                <line x1="22" y1="14" x2="26" y2="14" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Design',
        arabic: 'التصميم',
        desc: 'Where geometry meets intention. We craft interfaces that breathe — every pixel placed with the precision of a master calligrapher.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="none" stroke="#D4AF37" strokeWidth="1" />
                <polygon points="14,7 21,10.5 21,17.5 14,21 7,17.5 7,10.5" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Development',
        arabic: 'التطوير',
        desc: 'Code as architecture. We engineer with the same meticulous care as a master builder — every function, clean; every commit, purposeful.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <polyline points="8,10 4,14 8,18" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="20,10 24,14 20,18" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="7" x2="12" y2="21" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        num: '04',
        title: 'Deploy',
        arabic: 'الإطلاق',
        desc: 'The unveiling. We launch with performance so smooth it feels like Laylat al-Qadr — a night where every request is answered.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4 L22 10 L22 20 Q14 26 14 26 Q14 26 6 20 L6 10 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
                <path d="M14 9 L10 17 L14 15 L18 17 Z" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
            </svg>
        ),
    },
];

// ── Step card ────────────────────────────────────────────────────────────────
function StepCard({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-20% 0px -20% 0px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className={`relative flex items-center gap-8 md:gap-16 w-full
                  ${isEven ? 'flex-row' : 'flex-row-reverse'} mb-20 md:mb-28`}
        >
            {/* Content side */}
            <div className={`flex-1 ${isEven ? 'text-right md:pr-12' : 'text-left md:pl-12'}`}>
                <div
                    className={`text-[10px] tracking-[0.5em] uppercase mb-2 ${isEven ? 'justify-end' : 'justify-start'} flex`}
                    style={{ color: '#D4AF37', opacity: 0.5 }}
                >
                    {step.arabic}
                </div>
                <p
                    className="text-[11px] tracking-[0.35em] mb-1 uppercase"
                    style={{ color: '#D4AF37', opacity: 0.8 }}
                >
                    Step {step.num}
                </p>
                <h3
                    className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                    style={{ fontFamily: 'var(--font-playfair)', color: '#1a1a1a' }}
                >
                    {step.title}
                </h3>
                <p
                    className="text-sm md:text-base leading-relaxed max-w-md"
                    style={{ color: 'rgba(0,0,0,0.5)', ...(isEven ? { marginLeft: 'auto' } : {}) }}
                >
                    {step.desc}
                </p>
            </div>

            {/* Center node */}
            <div className="flex-shrink-0 flex flex-col items-center relative z-10">
                <motion.div
                    whileInView={{ scale: [0.8, 1.1, 1], opacity: [0, 1, 1] }}
                    viewport={{ once: false, margin: '-20% 0px -20% 0px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border flex items-center justify-center relative"
                    style={{ borderColor: 'rgba(212,175,55,0.3)', background: 'var(--background)' }}
                >
                    {/* Outer ring glow */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
                        }}
                    />
                    {step.icon}
                    {/* Number badge */}
                    <span
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[9px] flex items-center justify-center"
                        style={{ background: '#D4AF37', color: '#1a1a1a', fontWeight: 700 }}
                    >
                        {index + 1}
                    </span>
                </motion.div>
            </div>

            {/* Empty opposite side */}
            <div className="flex-1" />
        </motion.div>
    );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function SProcess() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<SVGLineElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 80%', 'end 20%'],
    });

    // Animate SVG line stroke from 0 → full
    const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [800, 0]);

    return (
        <section
            ref={containerRef}
            className="relative bg-[var(--background)] py-28 md:py-40 px-6 md:px-0"
            id="process"
        >

            <LatticeBg></LatticeBg>

            {/* Noor glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)',
                }}
            />
            {/* Section header */}
            <div className="text-center mb-24">
                <p
                    className="text-[10px] tracking-[0.5em] uppercase mb-3"
                    style={{ color: '#D4AF37', opacity: 0.6 }}
                >
                    الطريق · The Path
                </p>
                <h2
                    className="text-4xl md:text-6xl font-bold"
                    style={{ fontFamily: 'var(--font-playfair)', color: '#1a1a1a' }}
                >
                    Our{' '}
                    <span className="gold-text">Process</span>
                </h2>
            </div>

            {/* Timeline wrapper */}
            <div className="relative max-w-4xl mx-auto">
                {/* The Alif Line — SVG vertical line that fills on scroll */}
                <svg
                    className="absolute left-1/2 top-0 -translate-x-1/2 h-full hidden md:block"
                    width="2"
                    style={{ overflow: 'visible' }}
                >
                    {/* Track (dim) */}
                    <line
                        x1="1" y1="0" x2="1" y2="100%"
                        stroke="rgba(212,175,55,0.1)"
                        strokeWidth="1"
                    />
                    {/* Animated fill */}
                    <motion.line
                        ref={lineRef}
                        x1="1" y1="0" x2="1" y2="800"
                        stroke="#D4AF37"
                        strokeWidth="1.5"
                        strokeDasharray="800"
                        style={{ strokeDashoffset }}
                        strokeLinecap="round"
                        filter="url(#alifGlow)"
                    />
                    <defs>
                        <filter id="alifGlow" x="-400%" y="0" width="900%" height="100%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>

                {/* Steps */}
                {STEPS.map((step, i) => (
                    <StepCard key={step.num} step={step} index={i} />
                ))}
            </div>

            {/* Bottom Noor glow */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(212,175,55,0.06) 0%, transparent 70%)',
                }}
            />
        </section>
    );
}
