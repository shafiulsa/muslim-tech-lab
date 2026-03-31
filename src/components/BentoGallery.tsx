
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
// Ensure Roboto is available via your layout or import it here
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

gsap.registerPlugin(ScrollTrigger, Flip);


const SLIDER_DATA = [
    { src: "/slider/halal add.jpeg", title: "Halal Ads" },
    { src: "/slider/automation.jpeg", title: "Automation" },
    { src: "/slider/email.jpeg", title: "Email Marketing" },
    { src: "/slider/software-1.jpeg", title: "Software Development" },
];

const STATIC_IMAGES = [
    { src: "/slider/automation.jpeg", title: "Automation" },
    { src: "/slider/email.jpeg", title: "Email Marketing" },
    { src: "/slider/software-1.jpeg", title: "Software Development" },
    { src: "/slider/software-2.jpeg", title: "Web Development" }, 
    { src: "/slider/web.jpeg", title: "Web Development" },
    { src: "/slider/automation.jpeg", title: "Social Media Marketing" }, 
    { src: "/slider/email.jpeg", title: "Email Marketing" },
];

export default function BentoGallery() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

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
        <div ref={sectionRef} className={`relative w-full ${roboto.className}`}>
            <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
                <p className="text-4xl uppercase tracking-widest opacity-40 mb-2">Not Everything</p>
            </div>

            <div className="gallery-wrap">
                <div ref={galleryRef} className="gallery gallery--bento gallery--switch">
                    {/* Item 1 */}
                    <div className="gallery__item">
                        <Image src={STATIC_IMAGES[0].src} alt="" fill sizes="25vw" className="object-cover" />
                        <div className="item-overlay"><span>{STATIC_IMAGES[0].title}</span></div>
                    </div>
                    {/* Item 2 */}
                    <div className="gallery__item">
                        <Image src={STATIC_IMAGES[1].src} alt="" fill sizes="25vw" className="object-cover" />
                        <div className="item-overlay"><span>{STATIC_IMAGES[1].title}</span></div>
                    </div>

                    {/* CENTRAL AUTO SLIDER (Item 3) */}
                    <div className="gallery__item slider-focus">
                        {SLIDER_DATA.map((item, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <Image src={item.src} alt={item.title} fill sizes="50vw" className="object-cover" />
                                <div className="absolute bottom-8 left-8 text-white z-10">
                                    <h3 className="text-2xl font-bold tracking-tight uppercase">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                        <div className="absolute bottom-8 right-8 flex gap-3 z-10 opacity-70">
                            <div className="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm">←</div>
                            <div className="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm">→</div>
                        </div>
                    </div>

                    {/* Remaining Items (4-8) */}
                    {STATIC_IMAGES.slice(2).map((img, i) => (
                        <div key={i} className="gallery__item">
                            <Image src={img.src} alt="" fill sizes="25vw" className="object-cover" />
                            <div className="item-overlay"><span>{img.title}</span></div>
                        </div>
                    ))}
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
                    background: var(--background);
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

                .item-overlay {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: flex-end;
                    padding: 1.5rem;
                    /* Gradient for legibility */
                    background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%);
                    z-index: 10;
                }

                .item-overlay span {
                    color: white;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 0.875rem;
                    letter-spacing: 0.05em;
                }

                .gallery--bento {
                    display: grid;
                    gap: 24px;
                    grid-template-columns: 0.8fr 1.5fr 0.8fr;
                    grid-template-rows: repeat(4, 18vh);
                    justify-content: center;
                    align-content: center;
                    padding: 0 5vw;
                }

                .gallery--bento .gallery__item:nth-child(1) { grid-area: 1 / 1 / 3 / 2; }
                .gallery--bento .gallery__item:nth-child(2) { grid-area: 1 / 2 / 2 / 3; }
                .gallery--bento .gallery__item:nth-child(3) { grid-area: 2 / 2 / 4 / 3; }
                .gallery--bento .gallery__item:nth-child(4) { grid-area: 1 / 3 / 3 / 3; }
                .gallery--bento .gallery__item:nth-child(5) { grid-area: 3 / 1 / 3 / 2; }
                .gallery--bento .gallery__item:nth-child(6) { grid-area: 3 / 3 / 5 / 4; }
                .gallery--bento .gallery__item:nth-child(7) { grid-area: 4 / 1 / 5 / 2; }
                .gallery--bento .gallery__item:nth-child(8) { grid-area: 4 / 2 / 5 / 3; }

                .gallery--final.gallery--bento {
                    grid-template-columns: repeat(3, 100vw);
                    grid-template-rows: repeat(4, 49.5vh);
                    gap: 0;
                }

                .gallery--final.gallery--bento .gallery__item {
                    border-radius: 0;
                }

                /* Keep titles visible even in final state, or set opacity 0 if preferred */
                .gallery--final .item-overlay {
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
            `}</style>
        </div>
    );
}
