"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Import technical icons
import { 
    Cpu, 
    Globe, 
    Zap, 
    MailCheck, 
    Share2, 
    ShieldCheck 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MAP_BG = "https://res.cloudinary.com/dtspre1ab/image/upload/v1774615801/Whisk_af2a59f270cf5ef835e47191c6b9c754dr_oq2eus.png";

const SERVICES = [
    { title: "Software Development", description: "Bespoke digital solutions crafted with precision and purpose.", icon: Cpu },
    { title: "Web Development", description: "High-performance, cinematic web experiences.", icon: Globe },
    { title: "Automation", description: "Intelligent systems designed to streamline your workflow.", icon: Zap },
    { title: "Email Marketing", description: "Thoughtful communication strategies.", icon: MailCheck },
    { title: "Social Media Marketing", description: "Strategic storytelling for the global community.", icon: Share2 },
    { title: "Halal Ads", description: "Ethical advertising campaigns with high-impact ROI.", icon: ShieldCheck },
];

const ServiceCard = ({ service, index, cardsRef }: any) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const IconComponent = service.icon;

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={(el) => { if (cardsRef.current) cardsRef.current[index] = el; }}
            className="group relative p-10 bg-white/25 backdrop-blur-xl border border-[#a16207]/15 rounded-2xl transition-all duration-500 hover:border-[#a16207]/40 hover:bg-white/50 hover:shadow-[0_40px_80px_rgba(161,98,7,0.12)] overflow-hidden"
        >
            <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                {/* TECHNICAL ICON BOX */}
                <div className="relative w-14 h-14 mb-8 flex items-center justify-center">
                    {/* Rotating HUD Ring */}
                    <div className="absolute inset-0 rounded-xl border border-[#a16207]/20 group-hover:rotate-45 transition-transform duration-700" />
                    <div className="absolute inset-2 rounded-lg border border-dashed border-[#a16207]/10 animate-[spin_8s_linear_infinite]" />
                    
                    <IconComponent 
                        className="w-7 h-7 text-[#a16207] opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(161,98,7,0.5)] transition-all duration-500" 
                        strokeWidth={1.5}
                    />
                </div>

                <h3 className="text-2xl font-serif text-[#1c1917] mb-4 group-hover:text-[#a16207] transition-colors duration-300">
                    {service.title}
                </h3>
                <p className="text-[#1c1917]/70 leading-relaxed font-sans text-base">
                    {service.description}
                </p>
                
                {/* Tech ID Label */}
                <div className="mt-8 flex items-center gap-2 opacity-30 group-hover:opacity-60 transition-opacity">
                    <span className="h-[1px] w-4 bg-[#a16207]" />
                    <span className="text-[10px] font-mono tracking-tighter text-[#1c1917]">SYS_v{index + 1}.0</span>
                </div>
            </div>
            
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
            gsap.to(bgRef.current, {
                yPercent: 12,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            cardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.fromTo(card, { y: 100, opacity: 0 }, {
                        y: 0, opacity: 1, duration: 1.2, ease: "power4.out",
                        scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" },
                        delay: index * 0.08
                    });
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={containerRef} className="relative min-h-screen py-32 px-6 md:px-20 overflow-hidden bg-[#fbf9f4]">
            <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none scale-105">
                <div
                    className="absolute inset-0"
                    style={{ backgroundImage: `url(${MAP_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-[#fbf9f4]/75 backdrop-blur-[1px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-[#a16207] font-bold mb-3">Core Infrastructure</p>
                    <motion.h2 className="text-4xl md:text-7xl font-serif text-[#1c1917] mb-6 drop-shadow-sm leading-tight">
                        Our Digital <span className="italic text-[#a16207]">Craftsmanship</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                    {SERVICES.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} cardsRef={cardsRef} />
                    ))}
                </div>
            </div>
        </section>
    );
}