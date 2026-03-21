'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import BeanDivider from '@/components/BeanDivider';
import { FiX, FiMaximize2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const menuPages = [
    'HIMALAYANSIP-menucovernew.pdf.jpg',
    'A1.png',
    'A2.png',
    'A4-2.pdf.jpg',
    'A4-3.pdf.jpg',
    'A4-4.pdf.jpg',
    'A4-5.pdf.jpg',
    'A4-6.pdf.jpg'
];

export default function MenuPage() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Lock body scroll when modal is open and handle keyboard nav
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
            
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') setSelectedIndex(null);
                if (e.key === 'ArrowLeft') setSelectedIndex(prev => prev !== null ? (prev === 0 ? menuPages.length - 1 : prev - 1) : null);
                if (e.key === 'ArrowRight') setSelectedIndex(prev => prev !== null ? (prev === menuPages.length - 1 ? 0 : prev + 1) : null);
            };
            window.addEventListener('keydown', handleKeyDown);
            
            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('keydown', handleKeyDown);
            };
        } else {
            document.body.style.overflow = 'unset';
            return () => { document.body.style.overflow = 'unset'; };
        }
    }, [selectedIndex]);

    return (
        <div className="page-transition" style={{ paddingTop: '120px', background: 'var(--c-cream)', minHeight: '100vh' }}>
            <section style={{ padding: '40px 0 80px' }}>
                <div className="section-container">
                    <ScrollReveal>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h1 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 700, marginBottom: '16px' }}>Our Menu</h1>
                            <BeanDivider margin="0 0 16px" />
                            <p style={{ color: 'var(--c-brown-500)', fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                                Explore our carefully curated selection of single-origin coffees, handcrafted beverages, and artisanal pastries. Click any page to view full screen.
                            </p>
                        </div>
                        
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                            gap: '40px',
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}>
                            {menuPages.map((src, i) => (
                                <motion.div 
                                    className="menu-card"
                                    key={i} 
                                    whileHover={{ y: -10 }}
                                    onClick={() => setSelectedIndex(i)}
                                    style={{ 
                                        borderRadius: '24px', 
                                        overflow: 'hidden', 
                                        boxShadow: '0 20px 60px rgba(0,0,0,0.1)', 
                                        border: '4px solid #fff', 
                                        background: '#fff',
                                        cursor: 'pointer',
                                        position: 'relative'
                                    }}
                                >
                                    <img src={`/${src}`} alt={`Himalayan SIP Menu Page ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                                    <div className="overlay" style={{ 
                                        position: 'absolute', 
                                        inset: 0, 
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        justifyContent: 'flex-end',
                                        padding: '16px'
                                    }}>
                                        <span className="overlay-btn" style={{ 
                                            background: 'transparent', 
                                            color: '#fff', 
                                            width: '40px',
                                            height: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '8px'
                                        }}>
                                            <FiMaximize2 size={24} />
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedIndex(null)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(28,15,10,0.95)',
                            zIndex: 99999,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '40px',
                            cursor: 'zoom-out'
                        }}
                    >
                        <motion.button 
                            className="nav-btn"
                            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
                            style={{ 
                                position: 'absolute', 
                                top: '40px', 
                                right: '40px', 
                                background: 'rgba(255,255,255,0.1)', 
                                border: 'none', 
                                width: '50px', 
                                height: '50px', 
                                borderRadius: '50%', 
                                color: '#fff', 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'background 0.3s ease',
                                zIndex: 100000
                            }}
                        >
                            <FiX size={24} />
                        </motion.button>
                        
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'relative' }}>
                            <button 
                                className="nav-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedIndex(prev => prev !== null ? (prev === 0 ? menuPages.length - 1 : prev - 1) : null);
                                }}
                                style={{
                                    position: 'absolute',
                                    left: '20px',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s ease',
                                    zIndex: 100000
                                }}
                            >
                                <FiChevronLeft size={32} />
                            </button>

                            <motion.img 
                                key={selectedIndex}
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0, transition: { duration: 0.2 } }}
                                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                                src={`/${menuPages[selectedIndex]}`} 
                                alt={`Menu Page ${selectedIndex + 1}`} 
                                style={{ 
                                    maxHeight: '85vh', 
                                    maxWidth: '85vw', 
                                    objectFit: 'contain',
                                    borderRadius: '8px',
                                    boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                                    cursor: 'default'
                                }} 
                                onClick={(e) => e.stopPropagation()} 
                            />

                            <button 
                                className="nav-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedIndex(prev => prev !== null ? (prev === menuPages.length - 1 ? 0 : prev + 1) : null);
                                }}
                                style={{
                                    position: 'absolute',
                                    right: '20px',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s ease',
                                    zIndex: 100000
                                }}
                            >
                                <FiChevronRight size={32} />
                            </button>
                        </div>
                        
                        <div style={{
                            position: 'absolute',
                            bottom: '40px',
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '15px',
                            fontWeight: 600,
                            letterSpacing: '2px',
                            background: 'rgba(0,0,0,0.6)',
                            padding: '10px 20px',
                            borderRadius: '30px',
                            fontFamily: 'Inter, sans-serif'
                        }}>
                            {selectedIndex + 1} / {menuPages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .menu-card .overlay {
                    opacity: 0;
                    background: rgba(62,39,35,0.0);
                    transition: all 0.3s ease;
                }
                .menu-card:hover .overlay {
                    opacity: 1;
                    background: rgba(62,39,35,0.4);
                }
                .menu-card .overlay-btn {
                    transform: translateY(10px);
                    transition: transform 0.3s ease;
                }
                .menu-card:hover .overlay-btn {
                    transform: translateY(0);
                }
                .nav-btn:hover {
                    background: var(--c-orange) !important;
                }
            `}</style>
        </div>
    );
}
