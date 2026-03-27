"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MAP_BG = "https://res.cloudinary.com/dtspre1ab/image/upload/v1774615801/Whisk_af2a59f270cf5ef835e47191c6b9c754dr_oq2eus.png";

const SERVICES = [
    { title: "Software Development", description: "Bespoke digital solutions crafted with precision and purpose.", icon: "⚡" },
    { title: "Web Development", description: "High-performance, cinematic web experiences.", icon: "🌐" },
    { title: "Automation", description: "Intelligent systems designed to streamline your workflow.", icon: "⚙️" },
    { title: "Email Marketing", description: "Thoughtful communication strategies.", icon: "📧" },
    { title: "Social Media Marketing", description: "Strategic storytelling for the global community.", icon: "📱" },
    { title: "Halal Ads", description: "Ethical advertising campaigns with high-impact ROI.", icon: "⚖️" },
];

// 3D Tilt Card Component for High "Opposite" Depth
const ServiceCard = ({ service, index, cardsRef }: any) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={(el) => { cardsRef.current[index] = el; }}
            // FIX: The cards themselves use white/15 for transparency, blending with the map
            className="group relative p-10 bg-white/25 backdrop-blur-xl border border-[#a16207]/15 rounded-2xl transition-all duration-500 hover:border-[#a16207]/40 hover:bg-white/50 hover:shadow-[0_40px_80px_rgba(161,98,7,0.12)] overflow-hidden"
        >
            <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                <span className="text-4xl mb-6 block drop-shadow-lg">{service.icon}</span>
                <h3 className="text-2xl font-serif text-[#1c1917] mb-4 group-hover:text-[#a16207] transition-colors duration-300">
                    {service.title}
                </h3>
                <p className="text-[#1c1917]/70 leading-relaxed font-sans text-base">
                    {service.description}
                </p>
            </div>
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(251,191,36,0.1)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
};

export default function PremiumServices() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current || !bgRef.current) return;

        const ctx = gsap.context(() => {
            // Subtle Parallax for the Background Map
            gsap.to(bgRef.current, {
                yPercent: 12, // Reduced slightly for smoother feel
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Reveal Animation for Cards
            cardsRef.current.forEach((card, index) => {
                gsap.fromTo(card, { y: 100, opacity: 0 }, {
                    y: 0, opacity: 1, duration: 1.2, ease: "power4.out",
                    scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" },
                    delay: index * 0.08
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={containerRef} className="relative min-h-screen py-32 px-6 md:px-20 overflow-hidden bg-[#fbf9f4]">
            {/* PARALLAX BACKGROUND with INCREASED TRANSPARENCY */}
            <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none scale-105">
                <div
                    className="absolute inset-0"
                    style={{ backgroundImage: `url(${MAP_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />

                {/* FIX: Changed from /80 (80% opaque) to /55 (55% opaque).
                    This makes the map much more visible.
                */}
                <div className="absolute inset-0 bg-[#fbf9f4]/75 backdrop-blur-[1px]" />

                {/* Gradient Accents */}
                <div className="absolute top-[-10%] right-[-5%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(251,191,36,0.15)_0%,transparent_75%)] blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(161,98,7,0.08)_0%,transparent_75%)] blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#a16207]/80 font-medium mb-3">Our Offerings</p>
                    <motion.h2 className="text-4xl md:text-7xl font-serif text-[#1c1917] mb-6 drop-shadow-sm leading-tight">
                        Our Digital Craftsmanship
                    </motion.h2>
                    <p className="text-lg text-[#1c1917]/70 max-w-2xl mx-auto font-sans italic">
                        Merging tradition with innovation for the modern global market.
                    </p>
                </div>

                {/* Perspective class added for 3D depth */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                    {SERVICES.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} cardsRef={cardsRef} />
                    ))}
                </div>
            </div>
        </section>
    );
}

