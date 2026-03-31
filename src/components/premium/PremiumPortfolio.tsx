"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

const MAP_BG = "https://res.cloudinary.com/dtspre1ab/image/upload/v1774615801/Whisk_af2a59f270cf5ef835e47191c6b9c754dr_oq2eus.png";

const PROJECTS = [
    { id: "01", title: "Digital Oasis", cat: "Web Experience", res: "+140% ROI", img: "/project/project-1.png" },
    { id: "02", title: "Noor Systems", cat: "Custom Software", res: "80% Automation", img: "/project/project-2.png" },
    { id: "03", title: "Medina Marketing", cat: "Email Strategy", res: "3x Open Rate", img: "/project/project-3.png" },
    { id: "04", title: "Qibla Connect", cat: "Mobile App", res: "500k+ Users", img: "/project/project-4.png" },
    { id: "05", title: "Global Reach", cat: "Growth", res: "High Impact", img: "/project/project-1.png" },
    { id: "06", title: "Ethics Tech", cat: "AI", res: "99% Safety", img: "/project/project-2.png" },
];

export default function AwwwardsPortfolio() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLUListElement>(null);
    const proxyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardsRef.current || !sectionRef.current) return;

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".cards li");
            const spacing = 0.2;
            const snapTime = gsap.utils.snap(spacing);
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
                    scrub.vars.offset = self.progress * seamlessLoop.duration();
                    scrub.invalidate().restart();
                }
            });

            function scrollToOffset(offset: number) {
                let snappedTime = snapTime(offset);
                let progress = snappedTime / seamlessLoop.duration();
                progress = gsap.utils.clamp(0, 1, progress);
                let scroll = trigger.start + progress * (trigger.end - trigger.start);
                trigger.scroll(scroll);
            }

            Draggable.create(proxyRef.current, {
                type: "x",
                trigger: cardsRef.current,
                onPress() { this.startOffset = scrub.vars.offset; },
                onDrag() {
                    let newOffset = this.startOffset + (this.startX - this.x) * 0.001;
                    newOffset = gsap.utils.clamp(0, seamlessLoop.duration(), newOffset);
                    scrub.vars.offset = newOffset;
                    scrub.invalidate().restart();
                },
                onDragEnd() { scrollToOffset(scrub.vars.offset); }
            });

            // Set initial position without triggering a window scroll jump
            scrub.vars.offset = 0;
            scrub.invalidate().restart();

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
        <section ref={sectionRef} className="relative h-screen bg-[#fbf9f4] overflow-hidden flex flex-col">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none scale-110">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{ backgroundImage: `url(${MAP_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-[#fbf9f4]/60 backdrop-blur-[2px]" />
            </div>

            {/* Header Content - Relative positioning ensures it pushes the track down */}
            <div className="relative pt-20 md:pt-24 pb-8 w-full px-6 z-20 pointer-events-none text-center">
                <span className="text-[#a16207] uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Selected Works</span>
                <h2 className="text-5xl md:text-8xl font-serif text-[#1c1917] tracking-tight leading-none">Case <span className="italic text-[#a16207]">Studies</span></h2>
            </div>

            {/* Orbiting Gallery Track - Using flex-1 to occupy remaining space and justify-center */}
            <div className="relative flex-1 w-full flex items-start justify-center overflow-visible z-20 mt-4 md:mt-8">
                <ul ref={cardsRef} className="cards relative w-[20rem] h-[28rem] md:w-[28rem] md:h-[38rem] list-none p-0 m-0 cursor-grab active:cursor-grabbing">
                    {PROJECTS.map((project, i) => (
                        <li key={i} className="absolute inset-0 rounded-[2rem] overflow-hidden bg-[#1c1917] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.5)] border border-[#a16207]/20 group">
                            <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                priority={i < 2}
                                className="object-cover opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />

                            <div className="absolute inset-0 p-8 flex flex-col justify-between border-[1px] border-[#a16207]/30 rounded-[2rem] m-3">
                                <div className="flex justify-between items-start">
                                    <span className="text-[#a16207] text-[9px] font-bold uppercase tracking-widest leading-none rotate-90 origin-left mt-6">PROJECT</span>
                                    <span className="text-[#a16207] text-[10px] font-bold uppercase tracking-widest">{project.cat}</span>
                                </div>

                                <div className="text-center">
                                    <h3 className="text-white text-7xl md:text-8xl font-serif italic leading-none">{project.id}</h3>
                                    <p className="text-white/50 text-[9px] uppercase tracking-[0.4em] font-sans mt-3">{project.title}</p>
                                </div>

                                <div className="flex justify-between items-end border-t border-white/10 pt-6">
                                    <div className="flex flex-col">
                                        <span className="text-white/30 text-[8px] uppercase tracking-widest mb-1">Impact</span>
                                        <span className="text-white text-lg font-serif italic">{project.res}</span>
                                    </div>
                                    <span className="text-[#a16207] text-[9px] font-bold uppercase tracking-widest leading-none -rotate-90 origin-right mb-4 font-mono">EST. 2026</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div ref={proxyRef} className="invisible absolute" />

            {/* Scroll Hint */}
            <div className="relative pb-10 flex flex-col items-center gap-3 z-20">
                <span className="text-[8px] uppercase tracking-[0.8em] opacity-40">Orbit to Explore</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-[#1c1917] to-transparent opacity-20" />
            </div>
        </section>
    );
}