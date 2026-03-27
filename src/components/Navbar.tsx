'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Stack', href: '#stack' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // If already scrolled past 100px, we definitely want to show it (case of refresh)
            if (window.scrollY > 100 && !isVisible) {
                setIsVisible(true);
            }
        };

        const handleShowNavbar = () => setIsVisible(true);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('show-navbar', handleShowNavbar);

        // Initial check
        if (window.scrollY > 100) setIsVisible(true);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('show-navbar', handleShowNavbar);
        };
    }, [isVisible]);

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
                behavior: 'smooth'
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${scrolled ? 'py-4 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--foreground)]/5' : 'py-8 bg-transparent'
                }`}
        >
       

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-[var(--background)] border-b border-[var(--foreground)]/5 py-10 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 items-center">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-[var(--foreground)]/70 hover:text-[#d4af37] text-lg tracking-[0.3em] uppercase transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={(e) => scrollToSection(e, '#contact')}
                                className="mt-4 px-10 py-4 border border-[#d4af37] text-[#d4af37] text-sm tracking-[0.3em] uppercase"
                            >
                                Start Project
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
