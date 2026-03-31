"use client";

import React, { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePreloadImages } from "@/hooks/usePreloadImages";
import { motion } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const FOLDERS = [
    { path: "/tech", frames: 155 },
];


const NARRATIVES = [
    {
        range: [0, 0.10],
        title: "Amanah in Every Byte",
        sub: "Architecting the future of Muslim Digital Innovation."
    },
    {
        range: [0.11, 0.25],
        title: "Architecture of Logic",
        sub: "Custom systems built for unshakeable stability."
    },
    {
        range: [0.26, 0.40],
        title: "Immersive Interfaces",
        sub: "High-performance storytelling through the web."
    },
    {
        range: [0.41, 0.55],
        title: "Infinite Efficiency",
        sub: "Intelligent workflows that reclaim your time."

    },
    {
        range: [0.56, 0.70],
        title: "Direct Connection",
        sub: "High-conversion strategies delivered with precision."
    },
    {
        range: [0.71, 0.85],
        title: "Digital Presence",
        sub: "Dominating the feed with premium aesthetic."
    },
    {
        range: [0.86, 1.0],
        title: "Ethical Growth",
        sub: "High-performance marketing, strictly Halal."
    },
];

export default function ScrollCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);

    const targetFrame = useRef(0);
    const currentFrame = useRef(0);

    const imageUrls = useMemo(() => {
        const urls: string[] = [];
        FOLDERS.forEach((folder) => {
            for (let i = 1; i <= folder.frames; i++) {
                // Filename format is ezgif-frame-001.jpg
                const paddedIndex = String(i).padStart(3, '0');
                urls.push(`${folder.path}/ezgif-frame-${paddedIndex}.jpg`);
            }
        });
        return urls;
    }, []);

    const { loadedRatio, images, isComplete } = usePreloadImages(imageUrls);

    const renderCanvas = (imgList: HTMLImageElement[], frameIdx: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        const safeIndex = Math.min(Math.max(0, Math.round(frameIdx)), imgList.length - 1);
        const img = imgList[safeIndex];

        // Skip drawing if the image failed to load or is broken (prevents flashing #d6d1ca)
        if (!img || img.naturalWidth === 0) return;

        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        ctx.fillStyle = "#d6d1ca";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Math.max guarantees object-cover bounds (no black bars)
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const w = img.width * scale;
        const h = img.height * scale;
        const x = (canvas.width - w) / 2;
        const y = (canvas.height - h) / 2;

        ctx.drawImage(img, x, y, w, h);
    };

    useEffect(() => {
        if (isComplete) {
            const timer = setTimeout(() => {
                window.dispatchEvent(new Event("show-navbar"));
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isComplete]);

    // After preloading is done, set up GSAP
    useEffect(() => {
        if (!isComplete || images.length === 0) return;

        renderCanvas(images, 0);

        const masterTl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        masterTl.to({}, { duration: 0.01 }, 1.0);

        if (scrollIndicatorRef.current) {
            masterTl.to(scrollIndicatorRef.current, { opacity: 0, y: 30, duration: 0.05, ease: "power2.out" }, 0.0);
        }

        NARRATIVES.forEach((n, i) => {
            const el = textRefs.current[i];
            if (!el) return;

            const duration = n.range[1] - n.range[0];
            const fadeDur = Math.min(0.04, duration * 0.3);

            if (i === 0 && n.range[0] === 0) {
                // First narrative starts completely visible, then fades out
                gsap.set(el, { opacity: 1, y: 0 });
                masterTl.to(el, { opacity: 0, y: -70, duration: fadeDur, ease: "power2.in" }, n.range[1] - fadeDur);
            } else {
                gsap.set(el, { opacity: 0, y: 70 });
                masterTl.to(el, { opacity: 1, y: 0, duration: fadeDur, ease: "power2.out" }, n.range[0]);
                masterTl.to(el, { opacity: 0, y: -70, duration: fadeDur, ease: "power2.in" }, n.range[1] - fadeDur);
            }
        });

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                targetFrame.current = self.progress * (images.length - 1);
            }
        });

        let animationFrameId: number;
        const loop = () => {
            currentFrame.current += (targetFrame.current - currentFrame.current) * 0.08;
            renderCanvas(images, currentFrame.current);
            animationFrameId = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            cancelAnimationFrame(animationFrameId);
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [isComplete, images]);

    return (
        <div ref={containerRef} className="relative w-full bg-[var(--background)]" style={{ height: "600vh" }}>
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center bg-[#d6d1ca] transition-opacity duration-1000 ${isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
            >
                <div className="flex flex-col items-center">
                    <span
                        className="text-[var(--foreground)] text-4xl sm:text-6xl md:text-8xl font-serif tracking-tight font-medium"
                        style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                        {/* <SHeroWords /> */}
                    </span>

                    <motion.div
                        className="flex flex-col items-center justify-center space-y-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        {/* Arabic Script: Large and Elegant */}
                        <span
                            className="text-6xl md:text-9xl font-serif mb-2"
                            style={{
                                background: 'linear-gradient(to bottom, #D4AF37 0%, #F5E1A4 50%, #B8860B 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.1))',
                                fontFamily: '"Playfair Display", serif' // Or a dedicated Arabic font if you have one loaded
                            }}
                        >
                            Muslim Tech Lab
                        </span>

                        {/* Latin Subtext: Clean and Spaced */}
                        <motion.span
                            className="text-sm md:text-lg tracking-[0.5em] uppercase font-sans font-bold"
                            style={{
                                color: '#A16207', // Deep bronze/gold for legibility
                                fontFamily: '"Inter", sans-serif',
                            }}
                            animate={{
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            As-salamu alaykum
                        </motion.span>

                        {/* Loading Percentage: Subtle and Modern */}
                        <div className="mt-12 flex flex-col items-center">
                            <div className="w-48 h-[1px] bg-[#A16207]/20 relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-[#A16207]"
                                    style={{ width: `${loadedRatio * 100}%` }}
                                />
                            </div>
                            <span className="text-[10px] uppercase tracking-widest mt-4 text-[#A16207]/60">
                                System Initialize — {Math.round(loadedRatio * 100)}%
                            </span>
                        </div>
                    </motion.div>
                    {/* <br />
                    <br />
                    loading...  {Math.round(loadedRatio * 100)} */}

                </div>
            </div>

            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[var(--background)]">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-0 h-full w-full pointer-events-none"
                    style={{ willChange: "contents" }}
                />

                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4 md:px-12 pointer-events-none">
                    {NARRATIVES.map((narrative, i) => (
                        <div
                            key={i}
                            ref={(el) => { textRefs.current[i] = el; }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-0 w-full max-w-[1000px]"
                            style={{ willChange: "opacity, transform" }}
                        >
                            <h2
                                className="text-[var(--white)] text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-medium mb-4 md:mb-6 drop-shadow-2xl px-4"
                                style={{ fontFamily: '"Playfair Display", serif' }}
                            >
                                {narrative.title}
                            </h2>
                            <p
                                className="text-[#ffd700] text-[16px] md:text-sm lg:text-base tracking-[0.2em] uppercase px-4"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                {narrative.sub}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Hero Scroll Indicator */}
                <div
                    ref={scrollIndicatorRef}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none z-20"
                >
                    <span className="text-[#f5f5f5] opacity-50 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: '"Inter", sans-serif' }}>
                        Scroll to Begin
                    </span>
                    <div className="w-[1px] h-12 bg-black/20 relative overflow-hidden">
                        <div className="w-full h-1/2 bg-black absolute top-0 left-0 animate-[bounce_2s_infinite]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
