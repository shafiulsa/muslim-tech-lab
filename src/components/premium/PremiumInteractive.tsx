"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function PremiumInteractive() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Mouse Position for Parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth Spring transition
    const springConfig = { damping: 25, stiffness: 150 };
    const smouseX = useSpring(mouseX, springConfig);
    const smouseY = useSpring(mouseY, springConfig);

    // Transform values for different layers
    const layer1X = useTransform(smouseX, [-500, 500], [-30, 30]);
    const layer1Y = useTransform(smouseY, [-500, 500], [-30, 30]);
    const layer2X = useTransform(smouseX, [-500, 500], [-60, 60]);
    const layer2Y = useTransform(smouseY, [-500, 500], [-60, 60]);
    const layer3X = useTransform(smouseX, [-500, 500], [-90, 90]);
    const layer3Y = useTransform(smouseY, [-500, 500], [-90, 90]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-screen flex items-center justify-center bg-[#faf9f6] overflow-hidden cursor-crosshair"
        >
            {/* Background Grain/Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10 text-center max-w-4xl px-6">
                <motion.div
                    style={{ x: layer1X, y: layer1Y }}
                    className="mb-8"
                >
                    <span className="text-[var(--accent-gold)] uppercase tracking-[0.4em] text-sm font-bold">
                        Interactive Sanctuary
                    </span>
                </motion.div>

                <motion.h2
                    style={{ x: layer2X, y: layer2Y, fontFamily: 'var(--font-playfair)' }}
                    className="text-5xl md:text-8xl font-serif text-[var(--foreground)] lowercase leading-tight mb-12"
                >
                    Innovation <br />
                    <span className="text-[var(--accent-gold)] italic">Without Boundaries</span>
                </motion.h2>

                <motion.p
                    style={{ x: layer1X, y: layer1Y }}
                    className="text-lg md:text-xl text-[var(--foreground)]/50 font-sans max-w-2xl mx-auto leading-relaxed"
                >
                    Experience the intersection of tradition and technology.
                    Every interaction is a step towards a more beautiful digital future.
                </motion.p>
            </div>

            {/* Parallax Floating Elements */}
            <motion.div
                style={{ x: layer2X, y: layer2Y }}
                className="absolute top-1/4 left-1/4 w-32 h-32 border border-[var(--accent-gold)]/20 rounded-full blur-sm"
            />
            <motion.div
                style={{ x: layer3X, y: layer3Y }}
                className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--accent-gold)]/5 rounded-full blur-3xl"
            />
            <motion.div
                style={{ x: layer2X, y: layer2Y }}
                className="absolute top-20 right-[15%] text-6xl opacity-20 select-none"
            >
                ✧
            </motion.div>
            <motion.div
                style={{ x: layer3X, y: layer3Y, rotate: 45 }}
                className="absolute bottom-20 left-[15%] w-16 h-16 border-2 border-[var(--accent-gold)]/30 rounded-lg opacity-40 select-none"
            />

            {/* Responsive "Aura" */}
            <motion.div
                style={{
                    x: layer1X,
                    y: layer1Y,
                    background: "radial-gradient(circle, rgba(179,135,40,0.08) 0%, transparent 70%)"
                }}
                className="absolute inset-0 pointer-events-none z-0"
            />
        </section>
    );
}
