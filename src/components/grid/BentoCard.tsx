"use client";

import { ReactNode } from "react";

interface BentoCardProps {
    title: string;
    description: string;
    className?: string;
    children?: ReactNode;
    tag?: string;
}

export function BentoCard({ title, description, className = "", children, tag }: BentoCardProps) {
    return (
        <div className={`group relative overflow-hidden rounded-[2.5rem] bg-[#ece9e4] p-8 transition-all duration-500 hover:bg-[#e4e1db] ring-1 ring-black/5 hover:ring-black/10 ${className}`}>
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-black/5 blur-[80px] transition-all duration-700 group-hover:bg-black/10" />

            {/* Layout Wrap */}
            <div className="relative z-10 flex h-full flex-col justify-between">

                {/* Top Section: Visuals / Children */}
                <div className="mb-6 flex-1">
                    {children}
                </div>

                {/* Bottom Section: Text */}
                <div>
                    {tag && (
                        <span className="mb-4 inline-block rounded-full bg-black/5 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                            {tag}
                        </span>
                    )}
                    <h3 className="mb-2 text-2xl font-medium text-[#1a1a1a] tracking-wide" style={{ fontFamily: '"Playfair Display", serif' }}>
                        {title}
                    </h3>
                    <p className="w-full md:max-w-[80%] text-sm leading-relaxed text-black/50" style={{ fontFamily: '"Inter", sans-serif' }}>
                        {description}
                    </p>
                </div>
            </div>

            {/* Subtle Inner Shadow for Depth */}
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]" />
        </div>
    );
}
