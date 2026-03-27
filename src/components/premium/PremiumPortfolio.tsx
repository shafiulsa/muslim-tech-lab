// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const PROJECTS = [
//     {
//         title: "Digital Oasis",
//         category: "Web Experience",
//         result: "+140% Conversion Rate",
//         image: "/project/project-1.png",
//     },
//     {
//         title: "Noor Systems",
//         category: "Custom Software",
//         result: "Automated 80% Workflows",
//         image: "/project/project-2.png",
//     },
//     {
//         title: "Medina Marketing",
//         category: "Email Strategy",
//         result: "3x Open Rate Growth",
//         image: "/project/project-3.png",
//     },
//     {
//         title: "Qibla Connect",
//         category: "Mobile Application",
//         result: "500k+ Active Users",
//         image: "/project/project-4.png",
//     },
// ];

// export default function PremiumPortfolio() {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const titleRef = useRef<HTMLHeadingElement>(null);
//     const svgPathRef = useRef<SVGPathElement>(null);

//     useEffect(() => {
//         if (!sectionRef.current) return;

//         const ctx = gsap.context(() => {
//             // SVG Path Animation
//             if (svgPathRef.current) {
//                 const path = svgPathRef.current;
//                 const pathLength = path.getTotalLength();

//                 // Set initial state
//                 gsap.set(path, {
//                     strokeDasharray: pathLength,
//                     strokeDashoffset: pathLength,
//                 });

//                 // Animate on scroll
//                 gsap.to(path, {
//                     strokeDashoffset: 0,
//                     ease: "none",
//                     scrollTrigger: {
//                         trigger: sectionRef.current,
//                         start: "top center",
//                         end: "bottom center",
//                         scrub: 1.5,
//                     }
//                 });
//             }

//             // Title fade in
//             gsap.from(titleRef.current, {
//                 opacity: 0,
//                 y: 50,
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: titleRef.current,
//                     start: "top 80%",
//                 }
//             });

//             // Parallax effect for each project image
//             const cards = gsap.utils.toArray(".portfolio-card");
//             cards.forEach((card) => {
//                 const element = card as HTMLElement;
//                 const img = element.querySelector("img");
//                 gsap.to(img, {
//                     yPercent: 15,
//                     ease: "none",
//                     scrollTrigger: {
//                         trigger: element,
//                         start: "top bottom",
//                         end: "bottom top",
//                         scrub: true
//                     }
//                 });
//             });
//         }, sectionRef);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <section ref={sectionRef} className="relative min-h-screen py-32 px-6 md:px-20 bg-[#faf9f6] overflow-hidden">
//             {/* Background SVG Line */}
//             <div className="absolute top-0 right-0 w-[300px] h-[800px] opacity-20 pointer-events-none z-0">
//                 <svg width="100%" height="100%" viewBox="0 0 122 283" fill="none" preserveAspectRatio="xMidYMid meet">
//                     <path
//                         ref={svgPathRef}
//                         d="M109.949 3.19183C136.792 29.8687 78.605 114.639 26.9494 87.1918C-24.7062 59.7444 19.1293 164.18 93.9493 161.192C106.236 224.031 -14.0506 277.192 15.9494 218.192C45.9494 159.192 34.5621 285.617 93.9493 277.192"
//                         stroke="#E6D193"
//                         strokeWidth="2"
//                     />
//                 </svg>
//             </div>

//             <div className="max-w-7xl mx-auto relative z-10">
//                 <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
//                     <div className="max-w-2xl">
//                         <motion.span
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             viewport={{ once: true }}
//                             className="text-[var(--accent-gold)] uppercase tracking-widest text-sm font-bold mb-4 block"
//                         >
//                             Our Portfolio
//                         </motion.span>
//                         <h2
//                             ref={titleRef}
//                             className="text-4xl md:text-7xl font-serif text-[var(--foreground)]"
//                             style={{ fontFamily: 'var(--font-playfair)' }}
//                         >
//                             Case Studies of <span className="text-[var(--accent-gold)] italic">Excellence</span>
//                         </h2>
//                     </div>
//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.3 }}
//                         className="text-lg text-[var(--foreground)]/60 max-w-sm font-sans"
//                     >
//                         Success stories from the forefront of the Muslim digital economy.
//                     </motion.p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
//                     {PROJECTS.map((project, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true, margin: "-100px" }}
//                             transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
//                             className="portfolio-card group relative cursor-pointer"
//                         >
//                             {/* Card Body */}
//                             <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[var(--background)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
//                                 <Image
//                                     src={project.image}
//                                     alt={project.title}
//                                     fill
//                                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
//                                     className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
//                                 />

//                                 {/* Overlay Content */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
//                                     <span className="text-white/60 text-sm uppercase tracking-widest mb-2 font-bold">{project.category}</span>
//                                     <h3
//                                         className="text-3xl md:text-4xl text-white font-serif mb-4"
//                                         style={{ fontFamily: 'var(--font-playfair)' }}
//                                     >
//                                         {project.title}
//                                     </h3>
//                                     <div className="flex items-center gap-4 text-[var(--accent-gold)]">
//                                         <div className="h-[1px] w-8 bg-current" />
//                                         <p className="text-lg font-sans font-medium">{project.result}</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Static Content (visible on small screens or without hover) */}
//                             <div className="mt-8 flex justify-between items-start group-hover:opacity-0 transition-opacity duration-300">
//                                 <div>
//                                     <h3
//                                         className="text-2xl font-serif text-[var(--foreground)] mb-1"
//                                         style={{ fontFamily: 'var(--font-playfair)' }}
//                                     >
//                                         {project.title}
//                                     </h3>
//                                     <p className="text-[var(--foreground)]/50 font-sans">{project.category}</p>
//                                 </div>
//                                 <span className="text-[var(--accent-gold)] font-sans font-bold text-sm">{project.result}</span>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>

//                 <div className="mt-24 text-center">
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="px-10 py-4 border border-[var(--foreground)]/10 rounded-full text-[var(--foreground)] font-sans font-bold hover:bg-[var(--foreground)] hover:text-white transition-all duration-300 group inline-flex items-center gap-4"
//                     >
//                         View All Projects
//                         <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
//                     </motion.button>
//                 </div>
//             </div>
//         </section>
//     );
// }


"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Exact background from previous sections
const MAP_BG = "https://res.cloudinary.com/dtspre1ab/image/upload/v1774615801/Whisk_af2a59f270cf5ef835e47191c6b9c754dr_oq2eus.png";

const PROJECTS = [
    {
        title: "Digital Oasis",
        category: "Web Experience",
        result: "+140% Conversion Rate",
        image: "/project/project-1.png",
    },
    {
        title: "Noor Systems",
        category: "Custom Software",
        result: "Automated 80% Workflows",
        image: "/project/project-2.png",
    },
    {
        title: "Medina Marketing",
        category: "Email Strategy",
        result: "3x Open Rate Growth",
        image: "/project/project-3.png",
    },
    {
        title: "Qibla Connect",
        category: "Mobile Application",
        result: "500k+ Active Users",
        image: "/project/project-4.png",
    },
];

export default function PremiumPortfolio() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null); // For parallax map
    const titleRef = useRef<HTMLHeadingElement>(null);
    const svgPathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Parallax Map Background
            if (bgRef.current) {
                gsap.to(bgRef.current, {
                    yPercent: 12,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }

            // SVG Path Animation
            if (svgPathRef.current) {
                const path = svgPathRef.current;
                const pathLength = path.getTotalLength();
                gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

                gsap.to(path, {
                    strokeDashoffset: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: 1.5,
                    }
                });
            }

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

            // Parallax effect for project images
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
        <section id="portfolio" ref={sectionRef} className="relative min-h-screen py-32 px-6 md:px-20 bg-[#fbf9f4] overflow-hidden">

            {/* --- REPLICATED BACKGROUND SYSTEM --- */}
            <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none scale-105">
                <div
                    className="absolute inset-0"
                    style={{ backgroundImage: `url(${MAP_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                {/* 75% Opacity Overlay */}
                <div className="absolute inset-0 bg-[#fbf9f4]/75 backdrop-blur-[1px]" />

                {/* Ambient Glows */}
                <div className="absolute top-[-10%] right-[-5%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(251,191,36,0.15)_0%,transparent_75%)] blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(161,98,7,0.08)_0%,transparent_75%)] blur-[120px]" />
            </div>

            {/* Original Animated SVG Line - Positioned over the map */}
            <div className="absolute top-0 right-0 w-[400px] h-[900px] opacity-20 pointer-events-none z-1">
                <svg width="100%" height="100%" viewBox="0 0 122 283" fill="none" preserveAspectRatio="xMidYMid meet">
                    <path
                        ref={svgPathRef}
                        d="M109.949 3.19183C136.792 29.8687 78.605 114.639 26.9494 87.1918C-24.7062 59.7444 19.1293 164.18 93.9493 161.192C106.236 224.031 -14.0506 277.192 15.9494 218.192C45.9494 159.192 34.5621 285.617 93.9493 277.192"
                        stroke="#a16207"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[#a16207] uppercase tracking-widest text-sm font-bold mb-4 block"
                        >
                            Our Portfolio
                        </motion.span>
                        <h2
                            ref={titleRef}
                            className="text-4xl md:text-7xl font-serif text-[#1c1917]"
                        >
                            Case Studies of <span className="text-[#a16207] italic">Excellence</span>
                        </h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-[#1c1917]/70 max-w-sm font-sans"
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
                            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                    className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                    <span className="text-white/60 text-sm uppercase tracking-widest mb-2 font-bold">{project.category}</span>
                                    <h3 className="text-3xl md:text-4xl text-white font-serif mb-4">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-[#a16207]">
                                        <div className="h-[1px] w-8 bg-current" />
                                        <p className="text-lg font-sans font-medium">{project.result}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Static Content */}
                            <div className="mt-8 flex justify-between items-start group-hover:opacity-0 transition-opacity duration-300">
                                <div>
                                    <h3 className="text-2xl font-serif text-[#1c1917] mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-[#1c1917]/50 font-sans">{project.category}</p>
                                </div>
                                <span className="text-[#a16207] font-sans font-bold text-sm">{project.result}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 border border-[#1c1917]/10 rounded-full text-[#1c1917] font-sans font-bold hover:bg-[#1c1917] hover:text-white transition-all duration-300 group inline-flex items-center gap-4"
                    >
                        View All Projects
                        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}