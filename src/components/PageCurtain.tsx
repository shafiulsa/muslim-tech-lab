'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageCurtain() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setVisible(false), 1800);
        return () => clearTimeout(t);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="curtain"
                    className="fixed inset-0 z-[9999] flex flex-col pointer-events-none"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 1.2, ease: 'easeInOut' }}
                >
                    {/* Top Panel */}
                    <motion.div
                        className="flex-1 w-full relative overflow-hidden"
                        style={{ background: '#d6d1ca' }}
                        initial={{ scaleY: 1, originY: 0 }}
                        animate={{ scaleY: 0, originY: 0 }}
                        transition={{ duration: 1.1, delay: 0.35, ease: [0.76, 0, 1, 1] }}
                    >
                        {/* Mihrab arch golden edge at bottom */}
                        <div
                            className="absolute bottom-0 left-0 w-full h-[3px]"
                            style={{
                                background: 'linear-gradient(90deg, transparent 0%, #D4AF37 30%, #FFE066 50%, #D4AF37 70%, transparent 100%)',
                                boxShadow: '0 0 18px 4px rgba(212,175,55,0.6)',
                            }}
                        />
                        {/* Girih pattern overlay */}
                        <svg
                            className="absolute inset-0 w-full h-full opacity-[0.06]"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <pattern id="girih-curtain" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                    <polygon points="30,2 58,16 58,44 30,58 2,44 2,16" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                                    <polygon points="30,10 50,20 50,40 30,50 10,40 10,20" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
                                    <line x1="30" y1="2" x2="30" y2="10" stroke="#D4AF37" strokeWidth="0.3" />
                                    <line x1="58" y1="16" x2="50" y2="20" stroke="#D4AF37" strokeWidth="0.3" />
                                    <line x1="58" y1="44" x2="50" y2="40" stroke="#D4AF37" strokeWidth="0.3" />
                                    <line x1="30" y1="58" x2="30" y2="50" stroke="#D4AF37" strokeWidth="0.3" />
                                    <line x1="2" y1="44" x2="10" y2="40" stroke="#D4AF37" strokeWidth="0.3" />
                                    <line x1="2" y1="16" x2="10" y2="20" stroke="#D4AF37" strokeWidth="0.3" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#girih-curtain)" />
                        </svg>

                        {/* Agency wordmark centered */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-center"
                            >
                                <div
                                    className="text-[11px] tracking-[0.35em] uppercase mb-3"
                                    style={{ color: '#D4AF37', fontFamily: 'var(--font-inter)' }}
                                >
                                    بسم الله الرحمن الرحيم
                                </div>
                                <div
                                    className="text-3xl md:text-5xl font-bold tracking-tight"
                                    style={{ fontFamily: 'var(--font-playfair)', color: '#1a1a1a' }}
                                >
                                    Muslim Tech Lab
                                </div>
                                <div
                                    className="text-[10px] tracking-[0.5em] uppercase mt-2"
                                    style={{ color: '#D4AF37', opacity: 0.7 }}
                                >
                                    Premium Digital Agency · Rangpur
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Bottom Panel */}
                    <motion.div
                        className="flex-1 w-full relative overflow-hidden"
                        style={{ background: '#d6d1ca' }}
                        initial={{ scaleY: 1, originY: 1 }}
                        animate={{ scaleY: 0, originY: 1 }}
                        transition={{ duration: 1.1, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <div
                            className="absolute top-0 left-0 w-full h-[3px]"
                            style={{
                                background: 'linear-gradient(90deg, transparent 0%, #D4AF37 30%, #FFE066 50%, #D4AF37 70%, transparent 100%)',
                                boxShadow: '0 0 18px 4px rgba(212,175,55,0.6)',
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
