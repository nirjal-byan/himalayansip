'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import BeanDivider from '@/components/BeanDivider';

export default function MenuPage() {
    return (
        <div className="page-transition" style={{ paddingTop: '120px', background: 'var(--c-cream)' }}>
            <section style={{ padding: '40px 0 80px' }}>
                <div className="section-container">
                    <ScrollReveal>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <h1 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 700, marginBottom: '16px' }}>Our Menu</h1>
                            <BeanDivider margin="0 0 16px" />
                            <p style={{ color: 'var(--c-brown-500)', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
                                View our full selections below.
                            </p>
                        </div>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                            gap: '32px',
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}>
                            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', border: '4px solid #fff', background: '#fff' }}>
                                <img src="/A1.png" alt="Himalayan SIP Menu Page 1" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', border: '4px solid #fff', background: '#fff' }}>
                                <img src="/A2.png" alt="Himalayan SIP Menu Page 2" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
