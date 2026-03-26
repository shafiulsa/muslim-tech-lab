"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
    {
        title: "Software Development",
        description: "Bespoke digital solutions crafted with precision and purpose, echoing the principles of Itqan.",
        icon: "⚡",
    },
    {
        title: "Web Development",
        description: "High-performance, cinematic web experiences that blend Arab minimal aesthetics with modern tech.",
        icon: "🌐",
    },
    {
        title: "Automation",
        description: "Intelligent systems designed to streamline your workflow while maintaining human-centric values.",
        icon: "⚙️",
    },
    {
        title: "Email Marketing",
        description: "Thoughtful communication strategies that build genuine connections with your audience.",
        icon: "📧",
    },
    {
        title: "Social Media Marketing",
        description: "Strategic storytelling that resonates with the global Muslim community across all platforms.",
        icon: "📱",
    },
    {
        title: "Halal Ads",
        description: "Ethical advertising campaigns that align with your values and deliver high-impact ROI.",
        icon: "⚖️",
    },
];

export default function PremiumServices() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                gsap.fromTo(
                    card,
                    {
                        y: 100,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                        delay: index * 0.1,
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen py-32 px-6 md:px-20 bg-[#faf9f6] overflow-hidden"
        >
            {/* Subtle background glow */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(179,135,40,0.05)_0%,transparent_70%)] blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(179,135,40,0.05)_0%,transparent_70%)] blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-serif text-[var(--foreground)] mb-6"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Our Digital Craftsmanship
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-[var(--foreground)]/60 max-w-2xl mx-auto font-sans"
                    >
                        We merge tradition with innovation to deliver premium digital solutions
                        that elevate your brand in the modern Arab market.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="group relative p-10 bg-white/50 backdrop-blur-sm border border-[var(--accent-gold)]/10 rounded-2xl transition-all duration-500 hover:border-[var(--accent-gold)]/30 hover:bg-white/80 hover:shadow-[0_20px_40px_rgba(179,135,40,0.05)] overflow-hidden"
                        >
                            {/* Card Hover Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(179,135,40,0.03)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <span className="text-4xl mb-6 block drop-shadow-sm">{service.icon}</span>
                                <h3
                                    className="text-2xl font-serif text-[var(--foreground)] mb-4 group-hover:text-[var(--accent-gold)] transition-colors duration-300"
                                    style={{ fontFamily: 'var(--font-playfair)' }}
                                >
                                    {service.title}
                                </h3>
                                <p className="text-[var(--foreground)]/60 leading-relaxed font-sans">
                                    {service.description}
                                </p>
                            </div>

                            {/* Decorative Corner Accent */}
                            <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                                <div className="absolute top-0 right-0 w-[2px] h-4 bg-[var(--accent-gold)]/20 group-hover:h-8 transition-all duration-500" />
                                <div className="absolute top-0 right-0 h-[2px] w-4 bg-[var(--accent-gold)]/20 group-hover:w-8 transition-all duration-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
