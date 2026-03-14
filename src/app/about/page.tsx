'use client';

import { motion } from 'framer-motion';
import { GiCoffeeBeans } from 'react-icons/gi';
import ScrollReveal from '@/components/ScrollReveal';

function BeanDivider() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
            {[0.4, 0.7, 1, 0.7, 0.4].map((op, i) => (
                <GiCoffeeBeans key={i} style={{ color: 'var(--c-orange)', opacity: op, fontSize: i === 2 ? '20px' : '13px' }} />
            ))}
        </div>
    );
}

export default function AboutPage() {
    return (
        <div className="page-transition">
            {/* Hero (Who We Are) */}
            <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '160px', textAlign: 'center', overflow: 'hidden', background: 'var(--c-cream)' }}>
                {[...Array(8)].map((_, i) => (
                    <motion.div key={i} style={{ position: 'absolute', left: `${5 + (i * 12) % 90}%`, top: `${10 + (i * 17) % 80}%`, fontSize: `${14 + (i % 3) * 8}px`, opacity: 0.04 }}
                        animate={{ rotate: 360 }} transition={{ duration: 12 + i * 2, repeat: Infinity, ease: 'linear' }}>
                        <GiCoffeeBeans style={{ color: 'var(--c-orange)' }} />
                    </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                    style={{ position: 'relative', zIndex: 1, padding: '0 24px' }}>
                    <p className="font-script" style={{ color: 'var(--c-orange)', fontSize: '24px', marginBottom: '6px' }}>Who We Are</p>
                    <h1 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: 700, marginBottom: '20px' }}>Our Story</h1>
                    <BeanDivider />
                    <p style={{ color: 'var(--c-brown-500)', fontSize: '17px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
                        Born from a love of mountains, nature, and extraordinary coffee — Himalayan SIP is more than a café. It is a state of mind.
                    </p>
                </motion.div>
            </section>
        </div>
    );
}
