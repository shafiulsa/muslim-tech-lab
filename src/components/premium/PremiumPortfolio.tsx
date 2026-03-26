"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
    {
        title: "Digital Oasis",
        category: "Web Experience",
        result: "+140% Conversion Rate",
        image: "https://assets.codepen.io/16327/portrait-image-12.jpg",
    },
    {
        title: "Noor Systems",
        category: "Custom Software",
        result: "Automated 80% Workflows",
        image: "https://assets.codepen.io/16327/portrait-image-8.jpg",
    },
    {
        title: "Medina Marketing",
        category: "Email Strategy",
        result: "3x Open Rate Growth",
        image: "https://assets.codepen.io/16327/portrait-image-4.jpg",
    },
    {
        title: "Qibla Connect",
        category: "Mobile Application",
        result: "500k+ Active Users",
        image: "https://assets.codepen.io/16327/portrait-image-3.jpg",
    },
];

export default function PremiumPortfolio() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Title fade in
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                }
            });

            // Parallax effect for each project image
            const cards = gsap.utils.toArray(".portfolio-card");
            cards.forEach((card) => {
                const element = card as HTMLElement;
                const img = element.querySelector("img");
                gsap.to(img, {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen py-32 px-6 md:px-20 bg-[#faf9f6]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[var(--accent-gold)] uppercase tracking-widest text-sm font-bold mb-4 block"
                        >
                            Our Portfolio
                        </motion.span>
                        <h2
                            ref={titleRef}
                            className="text-4xl md:text-7xl font-serif text-[var(--foreground)]"
                            style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                            Case Studies of <span className="text-[var(--accent-gold)] italic">Excellence</span>
                        </h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-[var(--foreground)]/60 max-w-sm font-sans"
                    >
                        Success stories from the forefront of the Muslim digital economy.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
                            className="portfolio-card group relative cursor-pointer"
                        >
                            {/* Card Body */}
                            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[var(--background)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                    <span className="text-white/60 text-sm uppercase tracking-widest mb-2 font-bold">{project.category}</span>
                                    <h3
                                        className="text-3xl md:text-4xl text-white font-serif mb-4"
                                        style={{ fontFamily: 'var(--font-playfair)' }}
                                    >
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-[var(--accent-gold)]">
                                        <div className="h-[1px] w-8 bg-current" />
                                        <p className="text-lg font-sans font-medium">{project.result}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Static Content (visible on small screens or without hover) */}
                            <div className="mt-8 flex justify-between items-start group-hover:opacity-0 transition-opacity duration-300">
                                <div>
                                    <h3
                                        className="text-2xl font-serif text-[var(--foreground)] mb-1"
                                        style={{ fontFamily: 'var(--font-playfair)' }}
                                    >
                                        {project.title}
                                    </h3>
                                    <p className="text-[var(--foreground)]/50 font-sans">{project.category}</p>
                                </div>
                                <span className="text-[var(--accent-gold)] font-sans font-bold text-sm">{project.result}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 border border-[var(--foreground)]/10 rounded-full text-[var(--foreground)] font-sans font-bold hover:bg-[var(--foreground)] hover:text-white transition-all duration-300 group inline-flex items-center gap-4"
                    >
                        View All Projects
                        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
