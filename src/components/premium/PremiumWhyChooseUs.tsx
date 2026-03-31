"use client";

import React from "react";
import { motion } from "framer-motion";
// Using Lucide for a clean, technical aesthetic
import { 
    ShieldCheck, 
    Globe, 
    Zap, 
    Layers, 
    BarChart3, 
    Cpu, 
    Network, 
    Orbit 
} from "lucide-react";

const POINTS = [
    {
        title: "Halal-first approach",
        description: "Ethical engineering that respects your values and maintains the highest standards of integrity.",
        icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
        title: "Arab market focused",
        description: "Deep understanding of cultural nuances and consumer behavior in the MENA region.",
        icon: <Globe className="w-6 h-6" />,
    },
    {
        title: "Automation-driven systems",
        description: "Smarter workflows that save time and resources, allowing you to focus on what matters most.",
        icon: <Zap className="w-6 h-6" />,
    },
    {
        title: "Transparent workflow",
        description: "Clear communication and real-time updates through every phase of the project.",
        icon: <Layers className="w-6 h-6" />,
    },
    {
        title: "ROI-focused results",
        description: "Data-backed strategies designed to maximize your digital growth and performance.",
        icon: <BarChart3 className="w-6 h-6" />,
    },
];

export default function PremiumWhyChooseUs() {
    const ACCENT_COLOR = "#a16207"; // Matching your portfolio gold

    return (
        <section className="relative min-h-screen flex items-center py-32 px-6 md:px-20 bg-[#fbf9f4] overflow-hidden">
            {/* Background Technical Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(${ACCENT_COLOR} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                
                {/* Left: Content */}
                <div>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[#a16207] uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
                    >
                        Strategic Partnership
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-serif text-[#1c1917] mb-12 leading-[1.1]"
                    >
                        Architecting the Future of the <span className="text-[#a16207] italic">Muslim Digital Market</span>
                    </motion.h2>

                    <div className="space-y-10">
                        {POINTS.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex gap-6 group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#a16207]/5 flex items-center justify-center text-[#a16207] border border-[#a16207]/10 group-hover:bg-[#a16207] group-hover:text-white transition-all duration-500 ease-expo">
                                    {point.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-[#1c1917] mb-2 font-medium">
                                        {point.title}
                                    </h3>
                                    <p className="text-[#1c1917]/60 font-sans leading-relaxed text-sm md:text-base max-w-md">
                                        {point.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: Technical Constellation Visual */}
                <div className="relative h-[600px] flex items-center justify-center">
                    
                    {/* Central Core */}
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[400px] h-[400px] border border-[#a16207]/10 rounded-full flex items-center justify-center"
                    >
                        <div className="w-[300px] h-[300px] border border-[#a16207]/20 border-dashed rounded-full" />
                    </motion.div>

                    {/* Floating Tech Nodes */}
                    <div className="relative w-full h-full">
                        
                        {/* Node 1: AI/Logic */}
                        <TechNode 
                            delay={0} 
                            x="20%" y="15%" 
                            icon={<Cpu className="w-8 h-8" />} 
                            label="Neural Core"
                        />

                        {/* Node 2: Network/Global */}
                        <TechNode 
                            delay={1.5} 
                            x="75%" y="25%" 
                            icon={<Network className="w-8 h-8" />} 
                            label="Global Mesh"
                        />

                        {/* Node 3: Growth */}
                        <TechNode 
                            delay={0.8} 
                            x="65%" y="70%" 
                            icon={<Orbit className="w-8 h-8" />} 
                            label="Scalability"
                        />

                        {/* Node 4: Security */}
                        <TechNode 
                            delay={2.2} 
                            x="15%" y="75%" 
                            icon={<ShieldCheck className="w-8 h-8" />} 
                            label="Protocol"
                        />

                        {/* Center Brand Pulse */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div 
                                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="w-32 h-32 bg-[#a16207]/20 rounded-full blur-3xl"
                            />
                            <div className="relative w-20 h-20 bg-white border border-[#a16207]/20 rounded-2xl shadow-2xl flex items-center justify-center z-30">
                                <Zap className="w-10 h-10 text-[#a16207] fill-[#a16207]/10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Sub-component for the Floating Tech Nodes
function TechNode({ x, y, icon, label, delay }: { x: string, y: string, icon: React.ReactNode, label: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ 
                opacity: { duration: 1, delay },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay } 
            }}
            style={{ left: x, top: y }}
            className="absolute z-20"
        >
            <div className="bg-white/90 backdrop-blur-xl border border-[#a16207]/10 p-5 rounded-2xl shadow-[0_20px_50px_rgba(161,98,7,0.1)] flex flex-col items-center gap-3 group hover:border-[#a16207]/40 transition-colors duration-500">
                <div className="text-[#a16207] group-hover:scale-110 transition-transform duration-500">
                    {icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#1c1917]/40 group-hover:text-[#a16207] transition-colors">
                    {label}
                </span>
            </div>
        </motion.div>
    );
}
