
"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { 
    Cpu, 
    Binary, 
    Network, 
    Orbit, 
    Layers3, 
    BrainCircuit 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, Draggable);

const MAP_BG = "https://res.cloudinary.com/dtspre1ab/image/upload/v1774615801/Whisk_af2a59f270cf5ef835e47191c6b9c754dr_oq2eus.png";

const PROJECTS = [
    { id: "01", title: "Neural Gateway", cat: "AI Logic Core", res: "99% Efficiency", icon: BrainCircuit },
    { id: "02", title: "Synapse Mesh", cat: "Network Mesh", res: "3ms Latency", icon: Network },
    { id: "03", title: "Binary Shift", cat: "Data Flow", res: "40Gbps Sync", icon: Binary },
    { id: "04", title: "Core Protocol", cat: "Infrastructure", res: "Zero Downtime", icon: Cpu },
    { id: "05", title: "Vector Orbit", cat: "Scalability", res: "1B+ Ops/Sec", icon: Orbit },
    { id: "06", title: "Cloud Layers", cat: "Virtualization", res: "Distributed", icon: Layers3 },
];

export default function PremiumServices() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLUListElement>(null);
    const proxyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardsRef.current || !sectionRef.current) return;

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".cards li");
            const spacing = 0.2;
            const snapTime = gsap.utils.snap(spacing);
            let iteration = 0;

            gsap.set(cards, { xPercent: 300, opacity: 0, scale: 0.6 });

            const animateFunc = (element: any) => {
                const tl = gsap.timeline();
                tl.fromTo(element,
                    { scale: 0.6, opacity: 0.2 },
                    { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power2.inOut", immediateRender: false }
                ).fromTo(element,
                    { xPercent: 220 },
                    { xPercent: -220, duration: 1, ease: "none", immediateRender: false }, 0
                );
                return tl;
            };

            const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
            const playhead = { offset: 0 };
            const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

            const scrub = gsap.to(playhead, {
                offset: 0,
                onUpdate() { seamlessLoop.time(wrapTime(playhead.offset)); },
                duration: 0.7,
                ease: "expo.out",
                paused: true
            });

            const trigger = ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=3500",
                pin: true,
                onUpdate(self) {
                    let scroll = self.scroll();
                    if (scroll > self.end - 1) {
                        wrap(1, 2);
                    } else if (scroll < 1 && self.direction < 0) {
                        wrap(-1, self.end - 2);
                    } else {
                        scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
                        scrub.invalidate().restart();
                    }
                }
            });

            const wrap = (iterationDelta: number, scrollTo: number) => {
                iteration += iterationDelta;
                trigger.scroll(scrollTo);
                trigger.update();
            };

            function scrollToOffset(offset: number) {
                let snappedTime = snapTime(offset);
                let progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
                let scroll = gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end);
                if (progress >= 1 || progress < 0) return wrap(Math.floor(progress), scroll);
                trigger.scroll(scroll);
            }

            Draggable.create(proxyRef.current, {
                type: "x",
                trigger: cardsRef.current,
                onPress() { this.startOffset = scrub.vars.offset; },
                onDrag() {
                    scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
                    scrub.invalidate().restart();
                },
                onDragEnd() { scrollToOffset(scrub.vars.offset); }
            });

            scrollToOffset(spacing * 0); 
            
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    function buildSeamlessLoop(items: any[], spacing: number, animateFunc: any) {
        let overlap = Math.ceil(1 / spacing),
            startTime = items.length * spacing + 0.5,
            loopTime = (items.length + overlap) * spacing + 1,
            rawSequence = gsap.timeline({ paused: true }),
            seamlessLoop = gsap.timeline({
                paused: true,
                repeat: -1,
                onRepeat() { this._time === this._dur && (this._tTime += this._dur - 0.01); }
            }),
            l = items.length + overlap * 2,
            time, i, index;

        for (i = 0; i < l; i++) {
            index = i % items.length;
            time = i * spacing;
            rawSequence.add(animateFunc(items[index]), time);
        }

        rawSequence.time(startTime);
        seamlessLoop.to(rawSequence, { time: loopTime, duration: loopTime - startTime, ease: "none" })
            .fromTo(rawSequence, { time: overlap * spacing + 1 }, {
                time: startTime, duration: startTime - (overlap * spacing + 1), immediateRender: false, ease: "none"
            });
        return seamlessLoop;
    }

    return (
        <section ref={sectionRef} className="relative h-screen bg-[#fbf9f4] overflow-hidden font-sans">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none scale-110">
                <div
                    className="absolute inset-0 opacity-20 grayscale"
                    style={{ backgroundImage: `url(${MAP_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-[#fbf9f4]/90 backdrop-blur-[2px]" />
            </div>

            {/* Header */}
            <div className="absolute top-12 left-12 z-20 pointer-events-none">
                <span className="text-[#0ea5e9] uppercase tracking-[0.4em] text-[10px] font-bold block mb-1">CORE PROTOCOL</span>
                <h2 className="text-4xl md:text-5xl font-serif text-[#1c1917] tracking-tight leading-none">AETHER <span className="italic text-[#0ea5e9]">Systems</span></h2>
            </div>

            {/* Orbiting Track */}
            <div className="relative w-full h-full flex items-center justify-center pt-24">
                <ul ref={cardsRef} className="cards relative w-[22rem] h-[32rem] md:w-[30rem] md:h-[40rem] list-none p-0 m-0 cursor-grab active:cursor-grabbing">
                    {PROJECTS.map((project, i) => {
                        const IconComponent = project.icon;
                        return (
                            <li key={i} className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-[#1c1917] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.8)] border border-sky-950/40 group">
                                {/* Technical Procedural Grid */}
                                <div className="absolute inset-0 z-0 pointer-events-none p-16">
                                    <ProceduralTechGrid seed={i} />
                                </div>
                                
                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-12 flex flex-col justify-between border-[1px] border-sky-900 rounded-[2.5rem] m-3 z-10">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <span className="text-[#0ea5e9] text-[9px] uppercase tracking-widest leading-none rotate-90 origin-left mt-6">GSAP</span>
                                            <span className="text-[#0ea5e9] text-[9px] uppercase tracking-widest leading-none rotate-90 origin-left mt-10">ORBIT</span>
                                        </div>
                                        <span className="text-[#0ea5e9] text-xs font-mono font-bold uppercase tracking-widest">{project.cat}</span>
                                    </div>

                                    <div className="text-center group-hover:scale-110 transition-transform duration-700">
                                        <IconComponent className="w-32 h-32 text-[#0ea5e9] opacity-60 group-hover:opacity-100 transition-opacity duration-1000 mx-auto" />
                                        <p className="text-white text-base uppercase tracking-[0.6em] font-mono mt-8 font-extrabold">{project.title}</p>
                                    </div>

                                    <div className="flex justify-between items-end border-t border-sky-900 pt-8 mt-4">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-white/30 text-[9px] uppercase tracking-widest font-mono">ID</span>
                                            <span className="text-white text-6xl font-serif italic leading-none">{project.id}</span>
                                        </div>
                                        <div className="text-right flex flex-col gap-2">
                                            <span className="text-white/30 text-[9px] uppercase tracking-widest font-mono">Perf Index</span>
                                            <span className="text-[#0ea5e9] text-xl font-serif italic">{project.res}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div ref={proxyRef} className="invisible absolute h-10 w-10" />
        </section>
    );
}

// Fixed Sub-component
function ProceduralTechGrid({ seed }: { seed: number }) {
    const rows = 12;
    const cols = 8;
    const shapes = ['rect', 'circle', 'line', 'cross'];
    const seededRandom = (n: number) => {
        const x = Math.sin(n) * 10000;
        return x - Math.floor(x);
    };

    return (
        <svg width="100%" height="100%" viewBox={`0 0 ${cols * 10} ${rows * 10}`} fill="none" opacity={0.1}>
            <defs>
                <linearGradient id={`grad-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity={0.2} />
                </linearGradient>
            </defs>
            {[...Array(rows)].map((_, r) => (
                [...Array(cols)].map((_, c) => {
                    const rnd = seededRandom(seed * 100 + r * cols + c);
                    const x = c * 10 + 5;
                    const y = r * 10 + 5;
                    if (rnd > 0.6) return null;
                    const shapeIndex = Math.floor(rnd * shapes.length * 2) % shapes.length;
                    const shape = shapes[shapeIndex];

                    if (shape === 'rect') return <rect key={`r-${r}-${c}`} x={x - 3} y={y - 3} width={6} height={6} stroke={`url(#grad-${seed})`} strokeWidth={0.5} />;
                    if (shape === 'circle') return <circle key={`c-${r}-${c}`} cx={x} cy={y} r={3} stroke={`url(#grad-${seed})`} strokeWidth={0.5} />;
                    if (shape === 'line') return <line key={`l-${r}-${c}`} x1={x - 3} y1={y} x2={x + 3} y2={y} stroke={`url(#grad-${seed})`} strokeWidth={0.5} />;
                    if (shape === 'cross') return (
                        <g key={`x-${r}-${c}`}>
                            <line x1={x - 2} y1={y - 2} x2={x + 2} y2={y + 2} stroke={`url(#grad-${seed})`} strokeWidth={0.5} />
                            <line x1={x + 2} y1={y - 2} x2={x - 2} y2={y + 2} stroke={`url(#grad-${seed})`} strokeWidth={0.5} />
                        </g>
                    );
                    return null;
                })
            ))}
        </svg>
    );
}
