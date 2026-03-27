"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section for highlight
            const sections = NAV_LINKS.map(link => link.href.substring(1));
            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= (element.offsetTop - 150)) {
                    current = section;
                }
            }
            setActiveSection(current);
        };

        const handleShowNavbar = () => setIsVisible(true);

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("show-navbar", handleShowNavbar);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("show-navbar", handleShowNavbar);
        };
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                } ${scrolled
                    ? "py-4 bg-[#fbf9f4]/90 backdrop-blur-md border-b border-[#a16207]/10 shadow-sm"
                    : "py-8 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="#"
                    className="group flex items-center gap-3"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        <div className="absolute inset-0 border border-[#a16207]/40 rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                        <span className="text-[#a16207] font-serif text-xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
                            M
                        </span>
                    </div>
                    <span
                        className={`font-medium tracking-[0.2em] uppercase text-sm hidden sm:block transition-colors duration-500 ${scrolled ? 'text-[#1c1917]' : 'text-white/90'}`}
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        Muslim Tech Lab
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-300 font-bold relative ${isActive ? 'text-[#a16207]' : scrolled ? 'text-[#1c1917]/70 hover:text-[#a16207]' : 'text-white/70 hover:text-[#a16207]'
                                    }`}
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#a16207]"
                                    />
                                )}
                            </Link>
                        )
                    })}
                    <Link
                        href="#contact"
                        onClick={(e) => scrollToSection(e, "#contact")}
                        className={`px-6 py-2 border text-[10px] tracking-[0.3em] uppercase transition-all duration-300 font-bold rounded-full ${scrolled
                                ? 'border-[#a16207]/30 text-[#a16207] hover:bg-[#a16207] hover:text-white'
                                : 'border-[#a16207]/30 text-white hover:border-[#a16207] hover:text-[#a16207]'
                            }`}
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        Start Project
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 z-[110]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span
                            className={`w-full h-[2px] rounded-full transition-all duration-300 origin-left ${scrolled || mobileMenuOpen ? "bg-[#a16207]" : "bg-[#a16207]"
                                } ${mobileMenuOpen ? "rotate-45 translate-y-[-1px]" : ""}`}
                        />
                        <span
                            className={`w-full h-[2px] rounded-full transition-all duration-300 ${scrolled || mobileMenuOpen ? "bg-[#a16207]" : "bg-[#a16207]"
                                } ${mobileMenuOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`w-full h-[2px] rounded-full transition-all duration-300 origin-left ${scrolled || mobileMenuOpen ? "bg-[#a16207]" : "bg-[#a16207]"
                                } ${mobileMenuOpen ? "-rotate-45 translate-y-[1px]" : ""}`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-0 left-0 w-full h-[100dvh] bg-[#fbf9f4] z-[105] flex flex-col items-center justify-center overflow-hidden"
                    >
                        <div
                            className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: `url('https://res.cloudinary.com/dtspre1ab/image/upload/v1774526683/map_nptp8s.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        />
                        <div className="absolute inset-0 bg-[#fbf9f4]/80 backdrop-blur-md pointer-events-none" />

                        <div className="relative z-10 flex flex-col gap-8 items-center text-center">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-[#1c1917] hover:text-[#a16207] text-2xl tracking-[0.3em] uppercase transition-colors font-serif"
                                    style={{ fontFamily: 'var(--font-playfair)' }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={(e) => scrollToSection(e, "#contact")}
                                className="mt-8 px-10 py-4 bg-[#1c1917] hover:bg-[#a16207] text-white text-sm tracking-[0.3em] uppercase transition-all duration-300 rounded-full font-bold shadow-lg"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                Start Project
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}