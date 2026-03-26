"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

const SLIDER_DATA = [
    { src: "/slider/halal add.jpeg", title: "Inner Chamber" },
    { src: "/slider/automation.jpeg", title: "System Core" },
    { src: "/slider/email.jpeg", title: "Digital Pulse" },
    { src: "/slider/software-1.jpeg", title: "Architectural Flow" },
];

const STATIC_IMAGES = [
    "/slider/automation.jpeg",
    "/slider/email.jpeg",
    "/slider/software-1.jpeg",
    "/slider/software-2.jpeg",
    "/slider/web.jpeg",
    "https://assets.codepen.io/16327/portrait-pattern-3.jpg",
    "https://assets.codepen.io/16327/portrait-image-1.jpg",
];

export default function BentoGallery() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide logic for the center bento item
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDER_DATA.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (!galleryRef.current || !sectionRef.current) return;

        const galleryElement = galleryRef.current;
        const galleryItems = galleryElement.querySelectorAll(".gallery__item");

        gsap.set(galleryItems, { clearProps: "all" });

        const ctx = gsap.context(() => {
            galleryElement.classList.add("gallery--final");
            const flipState = Flip.getState(galleryItems);
            galleryElement.classList.remove("gallery--final");

            const flip = Flip.to(flipState, {
                simple: true,
                ease: "expoScale(1, 5)",
                absolute: true,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: galleryElement,
                    start: "center center",
                    end: "+=150%",
                    scrub: 1,
                    pin: sectionRef.current,
                    anticipatePin: 1,
                }
            });

            tl.add(flip);
        }, sectionRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative w-full">
            {/* Top Headline Label */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
                <p className="text-4xl uppercase tracking-widest opacity-40 mb-2">Not Everything</p>
                {/* <h2 className="text- font-serif">is Visible</h2> */}
            </div>

            <div className="gallery-wrap">
                <div ref={galleryRef} className="gallery gallery--bento gallery--switch">
                    {/* Items 1 & 2 */}
                    <div className="gallery__item"><img src={STATIC_IMAGES[0]} alt="" /></div>
                    <div className="gallery__item"><img src={STATIC_IMAGES[1]} alt="" /></div>

                    {/* CENTRAL AUTO SLIDER (Item 3) */}
                    <div className="gallery__item slider-focus">
                        {SLIDER_DATA.map((item, idx) => (
                            <div 
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                                <div className="absolute bottom-8 left-8 text-white z-10">
                                    <h3 className="text-2xl font-serif italic tracking-wide">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                        {/* Navigation Visuals */}
                        <div className="absolute bottom-8 right-8 flex gap-3 z-10 opacity-70">
                            <div className="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm">←</div>
                            <div className="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm">→</div>
                        </div>
                    </div>

                    {/* Remaining Items */}
                    <div className="gallery__item"><img src={STATIC_IMAGES[2]} alt="" /></div>
                    <div className="gallery__item"><img src={STATIC_IMAGES[3]} alt="" /></div>
                    <div className="gallery__item"><img src={STATIC_IMAGES[4]} alt="" /></div>
                    <div className="gallery__item"><img src={STATIC_IMAGES[5]} alt="" /></div>
                    <div className="gallery__item"><img src={STATIC_IMAGES[6]} alt="" /></div>
                </div>
            </div>

            <style jsx>{`
                .gallery-wrap {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    background: var(--background); /* Back to your original light/var background */
                }

                .gallery {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .gallery__item {
                    position: relative;
                    overflow: hidden;
                    border-radius: 12px;
                    background: rgba(0,0,0,0.05);
                }

                .gallery__item img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }

                .gallery--bento {
                    display: grid;
                    gap: 24px;
                    /* Focused center column: sides are narrower (0.8fr) than the middle (1.5fr) */
                    grid-template-columns: 0.8fr 1.5fr 0.8fr;
                    grid-template-rows: repeat(4, 18vh);
                    justify-content: center;
                    align-content: center;
                    padding: 0 5vw;
                }

                /* Grid Positioning */
                .gallery--bento .gallery__item:nth-child(1) { grid-area: 1 / 1 / 3 / 2; }
                .gallery--bento .gallery__item:nth-child(2) { grid-area: 1 / 2 / 2 / 3; }
                .gallery--bento .gallery__item:nth-child(3) { grid-area: 2 / 2 / 4 / 3; } /* Slider Area */
                .gallery--bento .gallery__item:nth-child(4) { grid-area: 1 / 3 / 3 / 3; }
                .gallery--bento .gallery__item:nth-child(5) { grid-area: 3 / 1 / 3 / 2; }
                .gallery--bento .gallery__item:nth-child(6) { grid-area: 3 / 3 / 5 / 4; }
                .gallery--bento .gallery__item:nth-child(7) { grid-area: 4 / 1 / 5 / 2; }
                .gallery--bento .gallery__item:nth-child(8) { grid-area: 4 / 2 / 5 / 3; }

                /* Final state class (Zoom effect remains) */
                .gallery--final.gallery--bento {
                    grid-template-columns: repeat(3, 100vw);
                    grid-template-rows: repeat(4, 49.5vh);
                    gap: 0;
                }

                .gallery--final.gallery--bento .gallery__item {
                    border-radius: 0;
                }
            `}</style>
        </div>
    );
}


// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Flip } from "gsap/Flip";

// gsap.registerPlugin(ScrollTrigger, Flip);

// // Data for the central auto-sliding focus point
// const SLIDER_DATA = [
//     { src: "/slider/halal add.jpeg", title: "Inner Chamber" },
//     { src: "/slider/automation.jpeg", title: "System Core" },
//     { src: "/slider/email.jpeg", title: "Digital Pulse" },
//     { src: "/slider/software-1.jpeg", title: "Architectural Flow" },
// ];

// // Data for the surrounding static bento items
// const BENTO_ITEMS = [
//     { src: "/slider/automation.jpeg", title: "Automation" }, // Item 1
//     { src: "/slider/email.jpeg", title: "Email Services" },   // Item 2
//     // Item 3 is the SLIDER_DATA above
//     { src: "/slider/software-1.jpeg", title: "Software One" }, // Item 4
//     { src: "/slider/software-2.jpeg", title: "Software Two" }, // Item 5
//     { src: "/slider/web.jpeg", title: "Web Design" },         // Item 6
//     { src: "https://assets.codepen.io/16327/portrait-pattern-3.jpg", title: "Pattern Study" }, // Item 7
//     { src: "https://assets.codepen.io/16327/portrait-image-1.jpg", title: "Visual Arts" },     // Item 8
// ];

// export default function BentoGallery() {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const galleryRef = useRef<HTMLDivElement>(null);
//     const [currentSlide, setCurrentSlide] = useState(0);

//     // Auto-slide logic for the center bento item (Item 3)
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % SLIDER_DATA.length);
//         }, 3500);
//         return () => clearInterval(timer);
//     }, []);

//     useEffect(() => {
//         if (!galleryRef.current || !sectionRef.current) return;

//         const galleryElement = galleryRef.current;
//         const galleryItems = galleryElement.querySelectorAll(".gallery__item");

//         gsap.set(galleryItems, { clearProps: "all" });

//         let ctx = gsap.context(() => {
//             galleryElement.classList.add("gallery--final");
//             const flipState = Flip.getState(galleryItems);
//             galleryElement.classList.remove("gallery--final");

//             const flip = Flip.to(flipState, {
//                 simple: true,
//                 ease: "expoScale(1, 5)",
//                 absolute: true,
//             });

//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: galleryElement,
//                     start: "center center",
//                     end: "+=150%",
//                     scrub: 1,
//                     pin: sectionRef.current,
//                     anticipatePin: 1,
//                 }
//             });

//             tl.add(flip);
//         }, sectionRef);

//         return () => {
//             ctx.revert();
//             ScrollTrigger.getAll().forEach(t => t.kill());
//         };
//     }, []);

//     return (
//         <div ref={sectionRef} className="relative w-full">
//             <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
//                 <p className="text-sm uppercase tracking-widest opacity-40 mb-2">Not Everything</p>
//                 <h2 className="text-4xl font-serif">is Visible</h2>
//             </div>

//             <div className="gallery-wrap">
//                 <div ref={galleryRef} className="gallery gallery--bento gallery--switch">
//                     {/* Items 1 & 2 */}
//                     <div className="gallery__item bento-with-title">
//                         <img src={BENTO_ITEMS[0].src} alt="" />
//                         <span className="bento-title">{BENTO_ITEMS[0].title}</span>
//                     </div>
//                     <div className="gallery__item bento-with-title">
//                         <img src={BENTO_ITEMS[1].src} alt="" />
//                         <span className="bento-title">{BENTO_ITEMS[1].title}</span>
//                     </div>

//                     {/* ITEM 3: CENTRAL FOCUS CAROUSEL */}
//                     <div className="gallery__item slider-focus">
//                         {SLIDER_DATA.map((item, idx) => (
//                             <div 
//                                 key={idx}
//                                 className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
//                             >
//                                 <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
//                                 <div className="absolute bottom-8 left-8 text-white z-10">
//                                     <h3 className="text-2xl font-serif italic tracking-wide">{item.title}</h3>
//                                 </div>
//                             </div>
//                         ))}
//                         <div className="absolute bottom-8 right-8 flex gap-3 z-10 opacity-70">
//                             <div className="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm">←</div>
//                             <div className="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm">→</div>
//                         </div>
//                     </div>

//                     {/* Remaining Items (4 through 8) */}
//                     {BENTO_ITEMS.slice(2).map((item, idx) => (
//                         <div key={idx} className="gallery__item bento-with-title">
//                             <img src={item.src} alt="" />
//                             <span className="bento-title">{item.title}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <style jsx>{`
//                 .gallery-wrap {
//                     position: relative;
//                     width: 100%;
//                     height: 100vh;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     overflow: hidden;
//                     background: var(--background);
//                 }

//                 .gallery {
//                     position: relative;
//                     width: 100%;
//                     height: 100%;
//                 }

//                 .gallery__item {
//                     position: relative;
//                     overflow: hidden;
//                     border-radius: 12px;
//                     background: rgba(0,0,0,0.05);
//                 }

//                 .bento-title {
//                     position: absolute;
//                     bottom: 15px;
//                     left: 15px;
//                     color: white;
//                     font-size: 0.85rem;
//                     font-weight: 500;
//                     text-shadow: 0 2px 4px rgba(0,0,0,0.3);
//                     opacity: 0.8;
//                 }

//                 .gallery__item img {
//                     object-fit: cover;
//                     width: 100%;
//                     height: 100%;
//                 }

//                 .gallery--bento {
//                     display: grid;
//                     gap: 24px;
//                     /* Larger center column for focus */
//                     grid-template-columns: 0.8fr 1.5fr 0.8fr;
//                     grid-template-rows: repeat(4, 18vh);
//                     justify-content: center;
//                     align-content: center;
//                     padding: 0 5vw;
//                 }

//                 /* Grid Areas */
//                 .gallery--bento .gallery__item:nth-child(1) { grid-area: 1 / 1 / 3 / 2; }
//                 .gallery--bento .gallery__item:nth-child(2) { grid-area: 1 / 2 / 2 / 3; }
//                 .gallery--bento .gallery__item:nth-child(3) { grid-area: 2 / 2 / 4 / 3; }
//                 .gallery--bento .gallery__item:nth-child(4) { grid-area: 1 / 3 / 3 / 3; }
//                 .gallery--bento .gallery__item:nth-child(5) { grid-area: 3 / 1 / 3 / 2; }
//                 .gallery--bento .gallery__item:nth-child(6) { grid-area: 3 / 3 / 5 / 4; }
//                 .gallery--bento .gallery__item:nth-child(7) { grid-area: 4 / 1 / 5 / 2; }
//                 .gallery--bento .gallery__item:nth-child(8) { grid-area: 4 / 2 / 5 / 3; }

//                 /* Final State (Scroll Zoom) */
//                 .gallery--final.gallery--bento {
//                     grid-template-columns: repeat(3, 100vw);
//                     grid-template-rows: repeat(4, 49.5vh);
//                     gap: 0;
//                 }

//                 .gallery--final.gallery--bento .gallery__item {
//                     border-radius: 0;
//                 }
                
//                 .gallery--final.gallery--bento .bento-title,
//                 .gallery--final.gallery--bento .slider-focus h3 {
//                     display: none; /* Hides titles once zoomed in for a cleaner look */
//                 }
//             `}</style>
//         </div>
//     );
// }

// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Flip } from "gsap/Flip";

// gsap.registerPlugin(ScrollTrigger, Flip);

// const SLIDER_DATA = [
//     { src: "/slider/halal add.jpeg", title: "Inner Chamber" },
//     { src: "/slider/automation.jpeg", title: "System Core" },
//     { src: "/slider/email.jpeg", title: "Digital Pulse" },
//     { src: "/slider/software-1.jpeg", title: "Architectural Flow" },
// ];

// const BENTO_ITEMS = [
//     { src: "/slider/automation.jpeg", title: "Automation" },
//     { src: "/slider/email.jpeg", title: "Email Services" },
//     { src: "/slider/software-1.jpeg", title: "Software Architecture" },
//     { src: "/slider/software-2.jpeg", title: "Cloud Systems" },
//     { src: "/slider/web.jpeg", title: "Web Interface" },
//     { src: "https://assets.codepen.io/16327/portrait-pattern-3.jpg", title: "Pattern Analysis" },
//     { src: "https://assets.codepen.io/16327/portrait-image-1.jpg", title: "Visual Identity" },
// ];

// export default function BentoGallery() {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const galleryRef = useRef<HTMLDivElement>(null);
//     const titleRef = useRef<HTMLDivElement>(null);
//     const [currentSlide, setCurrentSlide] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % SLIDER_DATA.length);
//         }, 3500);
//         return () => clearInterval(timer);
//     }, []);

//     useEffect(() => {
//         if (!galleryRef.current || !sectionRef.current) return;

//         const galleryElement = galleryRef.current;
//         const galleryItems = galleryElement.querySelectorAll(".gallery__item");

//         gsap.set(galleryItems, { clearProps: "all" });

//         // let ctx = gsap.context(() => {
//         //     galleryElement.classList.add("gallery--final");
//         //     const flipState = Flip.getState(galleryItems);
//         //     galleryElement.classList.remove("gallery--final");

//         //     const tl = gsap.timeline({
//         //         scrollTrigger: {
//         //             trigger: sectionRef.current,
//         //             start: "top top",
//         //             end: "+=150%",
//         //             scrub: 1,
//         //             pin: true,
//         //             anticipatePin: 1,
//         //         }
//         //     });

//         //     // 1. Fade out the title as we start scrolling
//         //     tl.to(titleRef.current, {
//         //         opacity: 0,
//         //         y: -50,
//         //         duration: 0.2
//         //     }, 0);

//         //     // 2. Perform the Flip zoom
//         //     tl.to(Flip.to(flipState, {
//         //         simple: true,
//         //         ease: "none",
//         //         absolute: true,
//         //     }), 0);

//         // }, sectionRef);
// let ctx = gsap.context(() => {
//     // 1. Capture the 'final' state
//     galleryElement.classList.add("gallery--final");
//     const flipState = Flip.getState(galleryItems);
//     galleryElement.classList.remove("gallery--final");

//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top top",
//             end: "+=150%",
//             scrub: 1,
//             pin: true,
//             anticipatePin: 1,
//         }
//     });

//     // FIX: Fade out title
//     tl.to(titleRef.current, {
//         opacity: 0,
//         y: -50,
//         duration: 0.2
//     }, 0); // '0' here is the start position

//     // FIX: The Flip animation must be passed as the first argument
//     // The position '0' must be the second argument
//     tl.add(
//         Flip.to(flipState, {
//             simple: true,
//             ease: "none",
//             absolute: true,
//         }), 
//         0 // This ensures it starts at the same time as the title fade
//     );

// }, sectionRef);
//         return () => {
//             ctx.revert();
//             ScrollTrigger.getAll().forEach(t => t.kill());
//         };
//     }, []);

//     return (
//         <div ref={sectionRef} className="relative w-full overflow-hidden bg-[var(--background)]">
//             <div className="gallery-wrap flex flex-col items-center justify-center min-h-screen">
                
//                 {/* Fixed Title Section */}
//                 <div ref={titleRef} className="mb-12 text-center">
//                     <p className="text-xs uppercase tracking-[0.3em] opacity-40 mb-3">Portfolio</p>
//                     <h2 className="text-5xl md:text-6xl font-serif leading-tight">
//                         Not Everything <br /> is Visible
//                     </h2>
//                 </div>

//                 <div ref={galleryRef} className="gallery gallery--bento">
//                     {/* Item 1 & 2 */}
//                     <div className="gallery__item">
//                         <img src={BENTO_ITEMS[0].src} alt="" />
//                         <span className="bento-title">{BENTO_ITEMS[0].title}</span>
//                     </div>
//                     <div className="gallery__item">
//                         <img src={BENTO_ITEMS[1].src} alt="" />
//                         <span className="bento-title">{BENTO_ITEMS[1].title}</span>
//                     </div>

//                     {/* ITEM 3: CENTRAL FOCUS CAROUSEL */}
//                     <div className="gallery__item slider-focus">
//                         {SLIDER_DATA.map((item, idx) => (
//                             <div 
//                                 key={idx}
//                                 className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
//                             >
//                                 <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
//                                 <div className="absolute bottom-6 left-6 text-white z-10">
//                                     <h3 className="text-xl font-serif italic">{item.title}</h3>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Remaining Items */}
//                     {BENTO_ITEMS.slice(2).map((item, idx) => (
//                         <div key={idx} className="gallery__item">
//                             <img src={item.src} alt="" />
//                             <span className="bento-title">{item.title}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <style jsx>{`
//                 .gallery {
//                     position: relative;
//                     width: 100%;
//                     max-width: 1400px;
//                 }

//                 .gallery__item {
//                     position: relative;
//                     overflow: hidden;
//                     border-radius: 16px;
//                     background: rgba(0,0,0,0.03);
//                     transition: border-radius 0.5s ease;
//                 }

//                 .bento-title {
//                     position: absolute;
//                     bottom: 12px;
//                     left: 12px;
//                     color: white;
//                     font-size: 0.75rem;
//                     text-transform: uppercase;
//                     letter-spacing: 0.1em;
//                     opacity: 0.8;
//                     text-shadow: 0 2px 4px rgba(0,0,0,0.5);
//                 }

//                 .gallery__item img {
//                     object-fit: cover;
//                     width: 100%;
//                     height: 100%;
//                 }

//                 .gallery--bento {
//                     display: grid;
//                     gap: 20px;
//                     grid-template-columns: 0.9fr 1.4fr 0.9fr;
//                     grid-template-rows: repeat(4, 16vh);
//                     padding: 0 2rem;
//                 }

//                 /* Grid Area Assignments */
//                 .gallery--bento .gallery__item:nth-child(1) { grid-area: 1 / 1 / 3 / 2; }
//                 .gallery--bento .gallery__item:nth-child(2) { grid-area: 1 / 2 / 2 / 3; }
//                 .gallery--bento .gallery__item:nth-child(3) { grid-area: 2 / 2 / 4 / 3; }
//                 .gallery--bento .gallery__item:nth-child(4) { grid-area: 1 / 3 / 3 / 3; }
//                 .gallery--bento .gallery__item:nth-child(5) { grid-area: 3 / 1 / 3 / 2; }
//                 .gallery--bento .gallery__item:nth-child(6) { grid-area: 3 / 3 / 5 / 4; }
//                 .gallery--bento .gallery__item:nth-child(7) { grid-area: 4 / 1 / 5 / 2; }
//                 .gallery--bento .gallery__item:nth-child(8) { grid-area: 4 / 2 / 5 / 3; }

//                 /* Final State: Full Screen Zoom */
//                 .gallery--final.gallery--bento {
//                     grid-template-columns: repeat(3, 100vw);
//                     grid-template-rows: repeat(4, 49.5vh);
//                     gap: 0;
//                     padding: 0;
//                 }

//                 .gallery--final.gallery--bento .gallery__item {
//                     border-radius: 0;
//                 }

//                 .gallery--final.gallery--bento .bento-title {
//                     display: none;
//                 }
//             `}</style>
//         </div>
//     );
// }




