// ── Islamic Lattice SVG background ───────────────────────────────────────────
export default function LatticeBg() {
    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ animation: 'lattice-pulse 6s ease-in-out infinite' }}
        >
            <defs>
                <pattern id="lattice-contact" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    {/* 8-pointed star */}
                    <polygon
                        points="40,4 47,20 64,12 56,28 72,36 56,44 64,56 47,48 40,64 33,48 16,56 24,44 8,36 24,28 16,12 33,20"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="0.5"
                    />
                    {/* Inner square */}
                    <rect x="28" y="28" width="24" height="24" fill="none" stroke="#D4AF37" strokeWidth="0.3" transform="rotate(45 40 40)" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lattice-contact)" />
        </svg>
    );
}
