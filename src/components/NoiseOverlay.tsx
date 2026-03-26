"use client";

import React from "react";

/**
 * NoiseOverlay
 * Creates a persistent, animated cinematic grain effect.
 * This is a key part of the Obsidian Assembly aesthetic.
 */
export default function NoiseOverlay() {
    return (
        <div className="noise-overlay pointer-events-none fixed inset-0 z-[99999]" aria-hidden="true">
            <style jsx>{`
        .noise-overlay {
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          opacity: 0.045;
          filter: contrast(120%) brightness(100%);
          mix-blend-mode: overlay;
          animation: noise-move 0.2s steps(8) infinite;
        }

        @keyframes noise-move {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-1%, -1%); }
          20% { transform: translate(-2%, 1%); }
          30% { transform: translate(1%, -2%); }
          40% { transform: translate(-1%, 2%); }
          50% { transform: translate(-2%, -1%); }
          60% { transform: translate(2%, 1%); }
          70% { transform: translate(1%, 2%); }
          80% { transform: translate(-2%, -2%); }
          90% { transform: translate(2%, -1%); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
        </div>
    );
}
