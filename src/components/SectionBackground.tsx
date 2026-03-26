'use client';

import React from 'react';

interface SectionBackgroundProps {
    opacity?: number;
    patternId?: string;
    animate?: boolean;
}

export default function SectionBackground({
    opacity = 0.05,
    patternId = "lattice-pattern",
    animate = true
}: SectionBackgroundProps) {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                style={animate ? { animation: 'lattice-pulse 8s ease-in-out infinite' } : {}}
            >
                <defs>
                    <pattern id={patternId} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        {/* 8-pointed star / Geometric Girih element */}
                        <polygon
                            points="50,5 58,25 79,15 69,35 89,45 69,55 79,75 58,65 50,85 42,65 21,75 31,55 11,45 31,35 21,15 42,25"
                            fill="none"
                            stroke="#D4AF37"
                            strokeWidth="0.5"
                            style={{ opacity }}
                        />
                        {/* Connecting lines */}
                        <line x1="50" y1="5" x2="50" y2="85" stroke="#D4AF37" strokeWidth="0.2" style={{ opacity: opacity * 0.5 }} />
                        <line x1="11" y1="45" x2="89" y2="45" stroke="#D4AF37" strokeWidth="0.2" style={{ opacity: opacity * 0.5 }} />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>

            {/* Cinematic Radial Glows (Flares) */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
            />
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] opacity-15 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #b38728 0%, transparent 70%)' }}
            />

            {/* Subtle Radial Gradient Overlay to fade edges */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, var(--background) 95%)'
                }}
            />

            {/* Alternative approach for the fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)] opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-transparent to-[var(--background)] opacity-40" />
        </div>
    );
}
