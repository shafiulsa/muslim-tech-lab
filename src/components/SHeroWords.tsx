'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Word sequence — shown after PageCurtain lifts ─────────────────────────────
const WORDS = [
    { en: 'Ihsan', ar: 'إحسان', sub: 'Excellence in every pixel' },
    { en: 'Amanah', ar: 'أمانة', sub: 'Trust as our foundation' },
    { en: 'Itqan', ar: 'إتقان', sub: 'Mastery in every commit' },
    { en: 'Strategic Growth', ar: 'النمو', sub: 'Scaling with purpose' },
    { en: 'Digital Sanctum', ar: 'الحرم', sub: 'Your brand\u2019s sacred space' },
];

// Timing (ms)
// PageCurtain total ≈ 2 400 ms  (60 % of 4 000)
// Words window        ≈ 1 600 ms  (40 % of 4 000)
// Each word           =  1 600 / 5 = 320 ms visible
// We give each word 600 ms for a luxurious feel → total word phase ≈ 3 000 ms
// Words start after curtain lifts ≈ 1 600 ms

const CURTAIN_LIFT_MS = 1600;   // when PageCurtain has fully opened
const WORD_DURATION_MS = 600;   // each word visible for
const TOTAL_INTRO_MS = CURTAIN_LIFT_MS + WORDS.length * WORD_DURATION_MS + 400; // +400 final hold

export default function SHeroWords({ onComplete }: { onComplete?: () => void }) {
    const [phase, setPhase] = useState<'hidden' | 'words' | 'done'>('hidden');
    const [wordIdx, setWordIdx] = useState(-1);     // -1 = none shown yet
    const [exiting, setExiting] = useState(false);   // whole section exits

    useEffect(() => {
        if (phase === 'done' && onComplete) {
            onComplete();
        }
    }, [phase, onComplete]);

    useEffect(() => {
        // Wait for the PageCurtain to lift before showing words
        const startTimer = setTimeout(() => {
            setPhase('words');
            setWordIdx(0);
        }, CURTAIN_LIFT_MS);

        return () => clearTimeout(startTimer);
    }, []);

    // Advance words one by one
    useEffect(() => {
        if (phase !== 'words') return;
        if (wordIdx < 0) return;

        if (wordIdx < WORDS.length - 1) {
            const t = setTimeout(() => setWordIdx((i) => i + 1), WORD_DURATION_MS);
            return () => clearTimeout(t);
        } else {
            // Last word — hold briefly then exit
            const t = setTimeout(() => {
                setExiting(true);
                setTimeout(() => setPhase('done'), 900);
            }, WORD_DURATION_MS + 300);
            return () => clearTimeout(t);
        }
    }, [phase, wordIdx]);

    if (phase === 'done') return null;

    const word = wordIdx >= 0 ? WORDS[wordIdx] : null;

    return (
        <motion.section
            className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[var(--background)]"
            animate={{ height: exiting ? 0 : '100vh', opacity: exiting ? 0 : 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            {/* Noor ambient glow behind the word */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                    background: word
                        ? 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.14) 0%, transparent 65%)'
                        : 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.00) 0%, transparent 65%)',
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            />

            {/* Girih lattice – very faint */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="girih-hero" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                        <polygon
                            points="40,3 77,21 77,59 40,77 3,59 3,21"
                            fill="none" stroke="#D4AF37" strokeWidth="0.5"
                        />
                        <polygon
                            points="40,14 66,27 66,53 40,66 14,53 14,27"
                            fill="none" stroke="#D4AF37" strokeWidth="0.3"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#girih-hero)" />
            </svg>

            {/* Alif line — vertical 1px gold spine */}
            <div
                className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full pointer-events-none"
                style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(212,175,55,0.25) 30%, rgba(212,175,55,0.25) 70%, transparent 100%)',
                }}
            />

            {/* Word display */}
            <div className="relative z-10 text-center px-6 w-full max-w-2xl mx-auto">
                <AnimatePresence mode="wait">
                    {word && (

                        <motion.div
                            key={wordIdx}
                            // initial এ ব্লার কমিয়ে ৪ বা ৫ করুন যাতে খুব বেশি ঝাপসা না লাগে
                            initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            // exit এ ব্লার কমিয়ে দিন যাতে ট্রানজিশন ক্লিন লাগে
                            exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                            // duration এবং easing আরও মাখনের মতো স্মুথ করা হয়েছে
                            transition={{
                                duration: 0.8,
                                ease: [0.215, 0.61, 0.355, 1] // Apple-style easeOutCubic
                            }}
                            className="flex flex-col items-center gap-4"
                        >
                            {/* Arabic word */}
                            <motion.p
                                className="text-[13px] tracking-[0.35em]"
                                style={{ color: 'rgba(212,175,55,0.55)', fontFamily: 'var(--font-inter)' }}
                            >
                                {word.ar}
                            </motion.p>

                            {/* English headline */}
                            <motion.h1
                                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight"
                                style={{ fontFamily: 'var(--font-playfair)', color: '#FFFFFF' }}
                            >
                                {word.en}
                            </motion.h1>

                            {/* Subline */}
                            <motion.p
                                className="text-[11px] tracking-[0.45em] uppercase mt-1"
                                style={{ color: 'rgba(212,175,55,0.45)' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.18, duration: 0.3 }}
                            >
                                {word.sub}
                            </motion.p>

                            {/* Progress dots */}
                            <div className="flex items-center gap-2 mt-6">
                                {WORDS.map((_, i) => (
                                    <div
                                        key={i}
                                        className="transition-all duration-300 rounded-full"
                                        style={{
                                            width: i === wordIdx ? '20px' : '5px',
                                            height: '5px',
                                            background: i === wordIdx
                                                ? '#D4AF37'
                                                : i < wordIdx
                                                    ? 'rgba(212,175,55,0.4)'
                                                    : 'rgba(255,255,255,0.1)',
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>


            {/* Bottom gold edge */}
            <div
                className="absolute bottom-0 left-0 w-full h-[1px] pointer-events-none"
                style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.3) 50%, transparent 100%)',
                }}
            />
        </motion.section>
    );
}
