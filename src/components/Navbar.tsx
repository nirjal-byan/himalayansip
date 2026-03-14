'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const leftLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
];

const rightLinks = [
    { href: '/menu', label: 'Menu' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkStyle = (href: string): React.CSSProperties => {
        const isHomePage = pathname === '/';
        const activeColor = 'var(--c-orange)';
        const defaultColor = (scrolled || !isHomePage) ? '#3E2723' : '#FFFFFF';
        
        return {
            textDecoration: 'none',
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: pathname === href ? activeColor : defaultColor,
            transition: 'color 0.3s',
        };
    };

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                background: scrolled ? '#FFFFFF' : 'transparent',
                backdropFilter: scrolled ? 'blur(8px)' : 'none',
                boxShadow: 'none',
            }}
        >
            {/* Desktop — split layout */}
            <div className="section-container nav-desktop" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                {/* Left links */}
                <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: '16px 0', justifyContent: 'flex-end', flex: 1 }}>
                    {leftLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} style={navLinkStyle(link.href)} className="nav-link">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Centre logo */}
                <Link href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', flexShrink: 0, padding: '6px 56px' }}>
                    <motion.div
                        whileHover={{ scale: 1.07 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Image
                            src={(pathname === '/' && !scrolled) ? "/logo2.png" : "/logo.png"}
                            alt="Himalayan SIP"
                            width={96}
                            height={96}
                            style={{ display: 'block', objectFit: 'contain' }}
                        />
                    </motion.div>
                </Link>

                {/* Right links */}
                <ul style={{ display: 'flex', gap: '32px', alignItems: 'center', listStyle: 'none', margin: 0, padding: '16px 0', flex: 1, justifyContent: 'flex-start' }}>
                    {rightLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} style={navLinkStyle(link.href)} className="nav-link">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile — logo + hamburger */}
            <div className="nav-mobile-header section-container" style={{ alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px' }}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <Image
                        src={(pathname === '/' && !scrolled) ? "/logo2.png" : "/logo.png"}
                        alt="Himalayan SIP"
                        width={60}
                        height={60}
                        style={{ borderRadius: '50%', objectFit: 'cover' }}
                    />
                </Link>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{ background: 'none', border: 'none', color: (scrolled || pathname !== '/') ? '#3E2723' : '#FFFFFF', fontSize: '26px', cursor: 'pointer' }}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ background: 'rgba(255,255,255,0.97)', borderTop: '1px solid #F5EFE0', overflow: 'hidden' }}
                    >
                        <ul style={{ listStyle: 'none', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[...leftLinks, ...rightLinks].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', padding: '8px 0', color: pathname === link.href ? 'var(--c-orange)' : '#3E2723' }}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .nav-desktop { display: flex; }
                .nav-mobile-header { display: none; }
                @media (max-width: 767px) {
                    .nav-desktop { display: none !important; }
                    .nav-mobile-header { display: flex !important; }
                }
            `}</style>
        </motion.nav>
    );
}
