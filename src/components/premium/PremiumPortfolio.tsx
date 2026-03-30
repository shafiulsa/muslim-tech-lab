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


// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // Exact background from previous sections
// const MAP_BG = "https://res.cloudinary.com/dtspre1ab/image/upload/v1774615801/Whisk_af2a59f270cf5ef835e47191c6b9c754dr_oq2eus.png";

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
//     const bgRef = useRef<HTMLDivElement>(null); // For parallax map
//     const titleRef = useRef<HTMLHeadingElement>(null);
//     const svgPathRef = useRef<SVGPathElement>(null);

//     useEffect(() => {
//         if (!sectionRef.current) return;

//         const ctx = gsap.context(() => {
//             // Parallax Map Background
//             if (bgRef.current) {
//                 gsap.to(bgRef.current, {
//                     yPercent: 12,
//                     ease: "none",
//                     scrollTrigger: {
//                         trigger: sectionRef.current,
//                         start: "top bottom",
//                         end: "bottom top",
//                         scrub: true,
//                     },
//                 });
//             }

//             // SVG Path Animation
//             if (svgPathRef.current) {
//                 const path = svgPathRef.current;
//                 const pathLength = path.getTotalLength();
//                 gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

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

//             // Parallax effect for project images
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
//         <section id="portfolio" ref={sectionRef} className="relative min-h-screen py-32 px-6 md:px-20 bg-[#fbf9f4] overflow-hidden">

//             {/* --- REPLICATED BACKGROUND SYSTEM --- */}
//             <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none scale-105">
//                 <div
//                     className="absolute inset-0"
//                     style={{ backgroundImage: `url(${MAP_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//                 />
//                 {/* 75% Opacity Overlay */}
//                 <div className="absolute inset-0 bg-[#fbf9f4]/75 backdrop-blur-[1px]" />

//                 {/* Ambient Glows */}
//                 <div className="absolute top-[-10%] right-[-5%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(251,191,36,0.15)_0%,transparent_75%)] blur-[120px]" />
//                 <div className="absolute bottom-[-10%] left-[-5%] w-[55%] h-[55%] bg-[radial-gradient(circle,rgba(161,98,7,0.08)_0%,transparent_75%)] blur-[120px]" />
//             </div>

//             {/* Original Animated SVG Line - Positioned over the map */}
//             <div className="absolute top-0 right-0 w-[400px] h-[900px] opacity-20 pointer-events-none z-1">
//                 <svg width="100%" height="100%" viewBox="0 0 122 283" fill="none" preserveAspectRatio="xMidYMid meet">
//                     <path
//                         ref={svgPathRef}
//                         d="M109.949 3.19183C136.792 29.8687 78.605 114.639 26.9494 87.1918C-24.7062 59.7444 19.1293 164.18 93.9493 161.192C106.236 224.031 -14.0506 277.192 15.9494 218.192C45.9494 159.192 34.5621 285.617 93.9493 277.192"
//                         stroke="#a16207"
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
//                             className="text-[#a16207] uppercase tracking-widest text-sm font-bold mb-4 block"
//                         >
//                             Our Portfolio
//                         </motion.span>
//                         <h2
//                             ref={titleRef}
//                             className="text-4xl md:text-7xl font-serif text-[#1c1917]"
//                         >
//                             Case Studies of <span className="text-[#a16207] italic">Excellence</span>
//                         </h2>
//                     </div>
//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.3 }}
//                         className="text-lg text-[#1c1917]/70 max-w-sm font-sans"
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
//                             <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
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
//                                     <h3 className="text-3xl md:text-4xl text-white font-serif mb-4">
//                                         {project.title}
//                                     </h3>
//                                     <div className="flex items-center gap-4 text-[#a16207]">
//                                         <div className="h-[1px] w-8 bg-current" />
//                                         <p className="text-lg font-sans font-medium">{project.result}</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Static Content */}
//                             <div className="mt-8 flex justify-between items-start group-hover:opacity-0 transition-opacity duration-300">
//                                 <div>
//                                     <h3 className="text-2xl font-serif text-[#1c1917] mb-1">
//                                         {project.title}
//                                     </h3>
//                                     <p className="text-[#1c1917]/50 font-sans">{project.category}</p>
//                                 </div>
//                                 <span className="text-[#a16207] font-sans font-bold text-sm">{project.result}</span>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>

//                 <div className="mt-24 text-center">
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="px-10 py-4 border border-[#1c1917]/10 rounded-full text-[#1c1917] font-sans font-bold hover:bg-[#1c1917] hover:text-white transition-all duration-300 group inline-flex items-center gap-4"
//                     >
//                         View All Projects
//                         <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
//                     </motion.button>
//                 </div>
//             </div>
//         </section>
//     );
// }


// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const MAP_BG = "https://res.cloudinary.com/dtspre1ab/image/upload/v1774615801/Whisk_af2a59f270cf5ef835e47191c6b9c754dr_oq2eus.png";

// const PROJECTS = [
//     { id: "01", title: "Digital Oasis", cat: "Web Experience", res: "+140% ROI", img: "/project/project-1.png" },
//     { id: "02", title: "Noor Systems", cat: "Custom Software", res: "80% Automation", img: "/project/project-2.png" },
//     { id: "03", title: "Medina Marketing", cat: "Email Strategy", res: "3x Open Rate", img: "/project/project-3.png" },
//     { id: "04", title: "Qibla Connect", cat: "Mobile App", res: "500k+ Users", img: "/project/project-4.png" },
// ];

// export default function AwwwardsPortfolio() {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const scrollRef = useRef<HTMLDivElement>(null);
//     const bgRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const section = sectionRef.current;
//         const scrollTrack = scrollRef.current;
//         if (!section || !scrollTrack) return;

//         const ctx = gsap.context(() => {
//             // Calculate how far to scroll: Total width of track minus window width
//             const scrollWidth = scrollTrack.offsetWidth - window.innerWidth;

//             // 1. Horizontal Scroll Animation
//             gsap.to(scrollTrack, {
//                 x: -scrollWidth,
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: section,
//                     pin: true,
//                     scrub: 1, // Smooth scrub for that "weighted" feel
//                     start: "top top",
//                     end: () => `+=${scrollWidth}`,
//                     invalidateOnRefresh: true,
//                 },
//             });

//             // 2. Parallax Background Movement
//             gsap.to(bgRef.current, {
//                 xPercent: -10, // Moves slightly slower than the cards for depth
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: section,
//                     scrub: true,
//                 }
//             });

//             // 3. Card Image Parallax (Internal)
//             const images = gsap.utils.toArray(".card-image");
//             images.forEach((img: any) => {
//                 gsap.to(img, {
//                     xPercent: 20,
//                     ease: "none",
//                     scrollTrigger: {
//                         trigger: img,
//                         containerAnimation: gsap.getById("mainScroll"), // Link to the horizontal movement
//                         scrub: true,
//                     }
//                 });
//             });
//         }, sectionRef);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <section
//             ref={sectionRef}
//             className="relative h-screen bg-[#fbf9f4] overflow-hidden"
//         >
//             {/* Background System */}
//             <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none scale-110">
//                 <div
//                     className="absolute inset-0 opacity-40"
//                     style={{ backgroundImage: `url(${MAP_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//                 />
//                 <div className="absolute inset-0 bg-[#fbf9f4]/60 backdrop-blur-[2px]" />
//             </div>

//             {/* Header Content - Aligned perfectly with other sections */}
//             <div className="absolute top-32 w-full px-6 md:px-20 z-20 pointer-events-none">
//                 <div className="max-w-7xl mx-auto">
//                     <motion.span
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         className="text-[#a16207] uppercase tracking-widest text-sm font-bold mb-4 block pointer-events-auto"
//                     >
//                         Selected Works
//                     </motion.span>
//                     <motion.h2
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                         className="text-4xl md:text-7xl font-serif text-[#1c1917] mb-6 drop-shadow-sm leading-tight pointer-events-auto"
//                     >
//                         Case <span className="italic text-[#a16207]">Studies</span>
//                     </motion.h2>
//                 </div>
//             </div>

//             {/* Horizontal Scroll Track */}
//             <div
//                 ref={scrollRef}
//                 className="relative h-full flex items-center gap-12 px-[10vw] md:px-[20vw] w-fit"
//             >
//                 {PROJECTS.map((project, index) => (
//                     <div
//                         key={index}
//                         className="portfolio-card relative w-[70vw] md:w-[450px] lg:w-[600px] shrink-0 group"
//                     >
//                         {/* Project Index */}
//                         <div className="absolute -top-12 left-0 overflow-hidden h-10 w-24">
//                             <span className="text-4xl font-serif text-[#a16207]/30 italic block group-hover:-translate-y-full transition-transform duration-700">
//                                 {project.id}
//                             </span>
//                             <span className="text-4xl font-serif text-[#a16207] italic block group-hover:-translate-y-full transition-transform duration-700">
//                                 {project.id}
//                             </span>
//                         </div>

//                         {/* Image Container */}
//                         <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-stone-200">
//                             <div className="card-image relative w-[120%] h-full -left-[10%]">
//                                 <Image
//                                     src={project.img}
//                                     alt={project.title}
//                                     fill
//                                     className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
//                                 />
//                             </div>

//                             {/* Hover Overlay */}
//                             <div className="absolute inset-0 bg-[#1c1917]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                         </div>

//                         {/* Project Meta */}
//                         <div className="mt-8 flex justify-between items-end border-b border-[#1c1917]/10 pb-6">
//                             <div>
//                                 <p className="text-xs uppercase tracking-widest text-[#a16207] font-bold mb-2">{project.cat}</p>
//                                 <h3 className="text-3xl md:text-5xl font-serif text-[#1c1917]">{project.title}</h3>
//                             </div>
//                             <div className="text-right">
//                                 <p className="text-sm font-sans font-bold text-[#1c1917] uppercase mb-1">Result</p>
//                                 <p className="text-lg font-serif italic text-[#a16207]">{project.res}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}

//                 {/* Final CTA Card */}
//                 <div className="w-[40vw] flex flex-col justify-center items-start shrink-0">
//                     <h4 className="text-4xl font-serif text-[#1c1917] mb-8">Ready to start <br />your story?</h4>
//                     <button className="group flex items-center gap-6 text-[#a16207] font-bold uppercase tracking-widest">
//                         <span className="w-16 h-16 rounded-full border border-[#a16207] flex items-center justify-center group-hover:bg-[#a16207] group-hover:text-white transition-all duration-500">
//                             →
//                         </span>
//                         View All Projects
//                     </button>
//                 </div>
//             </div>

//             {/* Bottom Progress Bar */}
//             <div className="absolute bottom-12 left-20 right-20 h-[1px] bg-[#1c1917]/10 z-20">
//                 <motion.div
//                     className="h-full bg-[#a16207]"
//                     style={{ scaleX: 0, transformOrigin: "left" }}
//                 // You can link this to ScrollTrigger's progress
//                 />
//             </div>
//         </section>
//     );
// }

// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Draggable } from "gsap/Draggable";

// gsap.registerPlugin(ScrollTrigger, Draggable);

// const MAP_BG = "https://res.cloudinary.com/dtspre1ab/image/upload/v1774615801/Whisk_af2a59f270cf5ef835e47191c6b9c754dr_oq2eus.png";

// const PROJECTS = [
//     { id: "01", title: "Digital Oasis", cat: "Web Experience", res: "+140% ROI", img: "/project/project-1.png" },
//     { id: "02", title: "Noor Systems", cat: "Custom Software", res: "80% Automation", img: "/project/project-2.png" },
//     { id: "03", title: "Medina Marketing", cat: "Email Strategy", res: "3x Open Rate", img: "/project/project-3.png" },
//     { id: "04", title: "Qibla Connect", cat: "Mobile App", res: "500k+ Users", img: "/project/project-4.png" },
//     { id: "05", title: "Global Reach", cat: "Growth", res: "High Impact", img: "/project/project-1.png" },
//     { id: "06", title: "Ethics Tech", cat: "AI", res: "99% Safety", img: "/project/project-2.png" },
// ];

// export default function AwwwardsPortfolio() {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const cardsRef = useRef<HTMLUListElement>(null);
//     const proxyRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (!cardsRef.current || !sectionRef.current) return;

//         const ctx = gsap.context(() => {
//             const cards = gsap.utils.toArray(".cards li");
//             const spacing = 0.1;
//             const snapTime = gsap.utils.snap(spacing);
//             let iteration = 0;

//             // Set initial invisible state
//             gsap.set(cards, { xPercent: 400, opacity: 0, scale: 0 });

//             // The animation for each individual card
//             const animateFunc = (element: any) => {
//                 const tl = gsap.timeline();
//                 tl.fromTo(element,
//                     { scale: 0, opacity: 0 },
//                     { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false }
//                 ).fromTo(element,
//                     { xPercent: 400 },
//                     { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, 0
//                 );
//                 return tl;
//             };

//             const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
//             const playhead = { offset: 0 };
//             const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

//             // Scrubbing tween for smooth transitions
//             const scrub = gsap.to(playhead, {
//                 offset: 0,
//                 onUpdate() {
//                     seamlessLoop.time(wrapTime(playhead.offset));
//                 },
//                 duration: 0.5,
//                 ease: "power3",
//                 paused: true
//             });

//             // Main ScrollTrigger for pinning and progress
//             const trigger = ScrollTrigger.create({
//                 trigger: sectionRef.current,
//                 start: "top top",
//                 end: "+=3000",
//                 pin: true,
//                 onUpdate(self) {
//                     let scroll = self.scroll();
//                     if (scroll > self.end - 1) {
//                         wrap(1, 2);
//                     } else if (scroll < 1 && self.direction < 0) {
//                         wrap(-1, self.end - 2);
//                     } else {
//                         scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
//                         scrub.invalidate().restart();
//                     }
//                 }
//             });

//             const wrap = (iterationDelta: number, scrollTo: number) => {
//                 iteration += iterationDelta;
//                 trigger.scroll(scrollTo);
//                 trigger.update();
//             };

//             function scrollToOffset(offset: number) {
//                 let snappedTime = snapTime(offset);
//                 let progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
//                 let scroll = gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end);
//                 if (progress >= 1 || progress < 0) {
//                     return wrap(Math.floor(progress), scroll);
//                 }
//                 trigger.scroll(scroll);
//             }

//             // Draggable Logic
//             Draggable.create(proxyRef.current, {
//                 type: "x",
//                 trigger: cardsRef.current,
//                 onPress() {
//                     this.startOffset = scrub.vars.offset;
//                 },
//                 onDrag() {
//                     scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
//                     scrub.invalidate().restart();
//                 },
//                 onDragEnd() {
//                     scrollToOffset(scrub.vars.offset);
//                 }
//             });
//         }, sectionRef);

//         return () => {
//             ctx.revert();
//             ScrollTrigger.getAll().forEach(t => t.kill());
//         };
//     }, []);

//     // Loop builder function
//     function buildSeamlessLoop(items: any[], spacing: number, animateFunc: any) {
//         let overlap = Math.ceil(1 / spacing),
//             startTime = items.length * spacing + 0.5,
//             loopTime = (items.length + overlap) * spacing + 1,
//             rawSequence = gsap.timeline({ paused: true }),
//             seamlessLoop = gsap.timeline({
//                 paused: true,
//                 repeat: -1,
//                 onRepeat() {
//                     this._time === this._dur && (this._tTime += this._dur - 0.01);
//                 }
//             }),
//             l = items.length + overlap * 2,
//             time, i, index;

//         for (i = 0; i < l; i++) {
//             index = i % items.length;
//             time = i * spacing;
//             rawSequence.add(animateFunc(items[index]), time);
//         }

//         rawSequence.time(startTime);
//         seamlessLoop.to(rawSequence, {
//             time: loopTime,
//             duration: loopTime - startTime,
//             ease: "none"
//         }).fromTo(rawSequence, { time: overlap * spacing + 1 }, {
//             time: startTime,
//             duration: startTime - (overlap * spacing + 1),
//             immediateRender: false,
//             ease: "none"
//         });
//         return seamlessLoop;
//     }

//     return (
//         <section ref={sectionRef} className="relative h-screen bg-[#fbf9f4] overflow-hidden font-sans">
//             {/* Background System (RETAINED) */}
//             <div className="absolute inset-0 z-0 pointer-events-none scale-110">
//                 <div
//                     className="absolute inset-0 opacity-40"
//                     style={{ backgroundImage: `url(${MAP_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//                 />
//                 <div className="absolute inset-0 bg-[#fbf9f4]/60 backdrop-blur-[2px]" />
//             </div>

//             {/* Header Content (RETAINED) */}
//             <div className="absolute top-24 w-full px-6 md:px-20 z-20 pointer-events-none text-center">
//                 <motion.span
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     className="text-[#a16207] uppercase tracking-widest text-sm font-bold mb-4 block"
//                 >
//                     Selected Works
//                 </motion.span>
//                 <motion.h2
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="text-4xl md:text-7xl font-serif text-[#1c1917] mb-6"
//                 >
//                     Case <span className="italic text-[#a16207]">Studies</span>
//                 </motion.h2>
//             </div>

//             {/* Orbiting Gallery Track */}
//             <div className="relative w-full h-full flex items-center justify-center">
//                 <ul ref={cardsRef} className="cards relative w-[18rem] h-[26rem] list-none p-0 m-0 cursor-grab active:cursor-grabbing">
//                     {PROJECTS.map((project, i) => (
//                         <li key={i} className="absolute inset-0 rounded-xl overflow-hidden bg-white shadow-2xl border border-[#a16207]/10 group">
//                             <Image
//                                 src={project.img}
//                                 alt={project.title}
//                                 fill
//                                 className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//                             />
//                             {/* Project Meta Layer */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-transparent to-transparent p-8 flex flex-col justify-end">
//                                 <span className="text-[#a16207] text-xs font-bold uppercase tracking-widest mb-2">{project.cat}</span>
//                                 <h3 className="text-white text-2xl font-serif italic mb-4">{project.title}</h3>
//                                 <div className="flex justify-between items-center pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                                     <span className="text-white/40 text-[10px] uppercase tracking-tighter">Impact</span>
//                                     <span className="text-white text-sm font-bold">{project.res}</span>
//                                 </div>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Required Proxy for Draggable */}
//             <div ref={proxyRef} className="invisible absolute h-10 w-10" />

//             {/* Hint */}
//             <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 flex flex-col items-center gap-2">
//                 <div className="w-[1px] h-10 bg-[#1c1917] animate-pulse" />
//                 <span className="text-[10px] uppercase tracking-[0.4em]">Scroll or Drag</span>
//             </div>
//         </section>
//     );
// }

// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Draggable } from "gsap/Draggable";

// gsap.registerPlugin(ScrollTrigger, Draggable);

// const MAP_BG = "https://res.cloudinary.com/dtspre1ab/image/upload/v1774615801/Whisk_af2a59f270cf5ef835e47191c6b9c754dr_oq2eus.png";

// const PROJECTS = [
//     { id: "01", title: "Digital Oasis", cat: "Web Experience", res: "+140% ROI", img: "/project/project-1.png" },
//     { id: "02", title: "Noor Systems", cat: "Custom Software", res: "80% Automation", img: "/project/project-2.png" },
//     { id: "03", title: "Medina Marketing", cat: "Email Strategy", res: "3x Open Rate", img: "/project/project-3.png" },
//     { id: "04", title: "Qibla Connect", cat: "Mobile App", res: "500k+ Users", img: "/project/project-4.png" },
//     { id: "05", title: "Global Reach", cat: "Growth", res: "High Impact", img: "/project/project-1.png" },
//     { id: "06", title: "Ethics Tech", cat: "AI", res: "99% Safety", img: "/project/project-2.png" },
// ];

// export default function AwwwardsPortfolio() {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const cardsRef = useRef<HTMLUListElement>(null);
//     const proxyRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (!cardsRef.current || !sectionRef.current) return;

//         const ctx = gsap.context(() => {
//             const cards = gsap.utils.toArray(".cards li");
//             const spacing = 0.2; // Increased spacing for a wider spread
//             const snapTime = gsap.utils.snap(spacing);
//             let iteration = 0;

//             // Initial state: Hidden on the right
//             gsap.set(cards, { xPercent: 300, opacity: 0, scale: 0.6 });

//             const animateFunc = (element: any) => {
//                 const tl = gsap.timeline();
//                 tl.fromTo(element,
//                     { scale: 0.6, opacity: 0.2 },
//                     { 
//                         scale: 1, // Full size at center
//                         opacity: 1, 
//                         zIndex: 100, 
//                         duration: 0.5, 
//                         yoyo: true, 
//                         repeat: 1, 
//                         ease: "power2.inOut", 
//                         immediateRender: false 
//                     }
//                 ).fromTo(element,
//                     { xPercent: 220 }, // Starts visible on right flank
//                     { xPercent: -220, duration: 1, ease: "none", immediateRender: false }, 0 // Ends visible on left flank
//                 );
//                 return tl;
//             };

//             const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
//             const playhead = { offset: 0 };
//             const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

//             const scrub = gsap.to(playhead, {
//                 offset: 0,
//                 onUpdate() {
//                     seamlessLoop.time(wrapTime(playhead.offset));
//                 },
//                 duration: 0.7,
//                 ease: "expo.out",
//                 paused: true
//             });

//             const trigger = ScrollTrigger.create({
//                 trigger: sectionRef.current,
//                 start: "top top",
//                 end: "+=3500",
//                 pin: true,
//                 onUpdate(self) {
//                     let scroll = self.scroll();
//                     if (scroll > self.end - 1) {
//                         wrap(1, 2);
//                     } else if (scroll < 1 && self.direction < 0) {
//                         wrap(-1, self.end - 2);
//                     } else {
//                         scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
//                         scrub.invalidate().restart();
//                     }
//                 }
//             });

//             const wrap = (iterationDelta: number, scrollTo: number) => {
//                 iteration += iterationDelta;
//                 trigger.scroll(scrollTo);
//                 trigger.update();
//             };

//             function scrollToOffset(offset: number) {
//                 let snappedTime = snapTime(offset);
//                 let progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
//                 let scroll = gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end);
//                 if (progress >= 1 || progress < 0) return wrap(Math.floor(progress), scroll);
//                 trigger.scroll(scroll);
//             }

//             Draggable.create(proxyRef.current, {
//                 type: "x",
//                 trigger: cardsRef.current,
//                 onPress() { this.startOffset = scrub.vars.offset; },
//                 onDrag() {
//                     scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
//                     scrub.invalidate().restart();
//                 },
//                 onDragEnd() { scrollToOffset(scrub.vars.offset); }
//             });

//             // GURANTEE FIRST CARD IS CENTERED ON LOAD
//             scrollToOffset(spacing * 0); 
            
//         }, sectionRef);

//         return () => ctx.revert();
//     }, []);

//     function buildSeamlessLoop(items: any[], spacing: number, animateFunc: any) {
//         let overlap = Math.ceil(1 / spacing),
//             startTime = items.length * spacing + 0.5,
//             loopTime = (items.length + overlap) * spacing + 1,
//             rawSequence = gsap.timeline({ paused: true }),
//             seamlessLoop = gsap.timeline({
//                 paused: true,
//                 repeat: -1,
//                 onRepeat() { this._time === this._dur && (this._tTime += this._dur - 0.01); }
//             }),
//             l = items.length + overlap * 2,
//             time, i, index;

//         for (i = 0; i < l; i++) {
//             index = i % items.length;
//             time = i * spacing;
//             rawSequence.add(animateFunc(items[index]), time);
//         }

//         rawSequence.time(startTime);
//         seamlessLoop.to(rawSequence, { time: loopTime, duration: loopTime - startTime, ease: "none" })
//             .fromTo(rawSequence, { time: overlap * spacing + 1 }, {
//                 time: startTime, duration: startTime - (overlap * spacing + 1), immediateRender: false, ease: "none"
//             });
//         return seamlessLoop;
//     }

//     return (
//         <section ref={sectionRef} className="relative h-screen bg-[#fbf9f4] overflow-hidden">
//             {/* Background (Fixed) */}
//             <div className="absolute inset-0 z-0 pointer-events-none scale-110">
//                 <div
//                     className="absolute inset-0 opacity-40"
//                     style={{ backgroundImage: `url(${MAP_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//                 />
//                 <div className="absolute inset-0 bg-[#fbf9f4]/60 backdrop-blur-[2px]" />
//             </div>

//             {/* Header Content */}
//             <div className="absolute top-16 w-full px-6 z-20 pointer-events-none text-center">
//                 <span className="text-[#a16207] uppercase tracking-[0.4em] text-[10px] font-bold block mb-2">Selected Works</span>
//                 <h2 className="text-6xl md:text-8xl font-serif text-[#1c1917] tracking-tight leading-none">Case <span className="italic text-[#a16207]">Studies</span></h2>
//             </div>

//             {/* Orbiting Gallery Track */}
//             <div className="relative w-full h-full flex items-center justify-center pt-24">
//                 {/* INCREASED WIDTH AND HEIGHT FOR "SUITABLE BIG" LOOK */}
//                 <ul ref={cardsRef} className="cards relative w-[24rem] h-[34rem] md:w-[32rem] md:h-[42rem] list-none p-0 m-0 cursor-grab active:cursor-grabbing">
//                     {PROJECTS.map((project, i) => (
//                         <li key={i} className="absolute inset-0 rounded-[2rem] overflow-hidden bg-[#1c1917] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.5)] border border-[#a16207]/20 group">
//                             <Image
//                                 src={project.img}
//                                 alt={project.title}
//                                 fill
//                                 priority={i < 2}
//                                 className="object-cover opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-1000"
//                             />
                            
//                             {/* Meta Info Overlay */}
//                             <div className="absolute inset-0 p-10 flex flex-col justify-between border-[1px] border-[#a16207]/30 rounded-[2rem] m-3">
//                                 <div className="flex justify-between items-start">
//                                     <span className="text-[#a16207] text-[10px] font-bold uppercase tracking-widest leading-none rotate-90 origin-left mt-6">PROJECT</span>
//                                     <span className="text-[#a16207] text-xs font-bold uppercase tracking-widest">{project.cat}</span>
//                                 </div>

//                                 <div className="text-center">
//                                     <h3 className="text-white text-8xl md:text-9xl font-serif italic leading-none">{project.id}</h3>
//                                     <p className="text-white/50 text-[10px] uppercase tracking-[0.4em] font-sans mt-4">{project.title}</p>
//                                 </div>

//                                 <div className="flex justify-between items-end border-t border-white/10 pt-6">
//                                     <div className="flex flex-col">
//                                         <span className="text-white/30 text-[9px] uppercase tracking-widest mb-1">Impact</span>
//                                         <span className="text-white text-xl font-serif italic">{project.res}</span>
//                                     </div>
//                                     <span className="text-[#a16207] text-[10px] font-bold uppercase tracking-widest leading-none -rotate-90 origin-right mb-6">EST. 2026</span>
//                                 </div>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             <div ref={proxyRef} className="invisible absolute h-10 w-10" />
            
//             <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30 flex flex-col items-center gap-3">
//                 <span className="text-[9px] uppercase tracking-[0.8em]">Orbit to Explore</span>
//                 <div className="w-[1px] h-12 bg-gradient-to-b from-[#1c1917] to-transparent" />
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