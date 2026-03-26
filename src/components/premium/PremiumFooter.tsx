"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PremiumFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-20 px-6 md:px-20 bg-[#faf9f6]/80 border-t border-[var(--accent-gold)]/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Info */}
                    <div className="lg:col-span-2">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-3xl font-serif text-[var(--foreground)] mb-6"
                            style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                            Muslim Tech Lab
                        </motion.h3>
                        <p className="text-[var(--foreground)]/50 max-w-sm font-sans leading-relaxed mb-8">
                            Architecting premium digital sanctuaries through ethical engineering and award-winning design.
                        </p>
                        <div className="flex gap-6">
                            {['LinkedIn', 'Instagram', 'X'].map((social) => (
                                <motion.a
                                    key={social}
                                    href="#"
                                    whileHover={{ y: -2 }}
                                    className="text-[var(--foreground)]/40 hover:text-[var(--accent-gold)] font-sans text-sm tracking-widest uppercase transition-colors"
                                >
                                    {social}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Nav */}
                    <div>
                        <h4 className="text-[var(--accent-gold)] text-sm font-bold uppercase tracking-widest mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {['Services', 'Portfolio', 'Why Us', 'Wisdom'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] font-sans transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[var(--accent-gold)] text-sm font-bold uppercase tracking-widest mb-8">Contact</h4>
                        <ul className="space-y-4 font-sans text-[var(--foreground)]/60">
                            <li>
                                <a href="mailto:salam@muslimtechlab.com" className="hover:text-[var(--foreground)] transition-colors">
                                    salam@muslimtechlab.com
                                </a>
                            </li>
                            <li>
                                Dubai Design District,<br />
                                UAE.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-[var(--foreground)]/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[var(--foreground)]/30 text-sm font-sans">
                        © {currentYear} Muslim Tech Lab. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-[var(--foreground)]/30 text-sm font-sans">
                        <a href="#" className="hover:text-[var(--foreground)] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[var(--foreground)] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Subtle Gradient Accent */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />
        </footer>
    );
}
