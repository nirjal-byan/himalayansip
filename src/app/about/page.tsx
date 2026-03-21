'use client';

import { motion } from 'framer-motion';
import { GiCoffeeBeans, GiPlantSeed, GiSprout } from 'react-icons/gi';
import { FaLeaf } from 'react-icons/fa';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

/* ── Sub-components ───────────────────────────────────────────────── */

function BeanDivider({ icon: Icon = GiCoffeeBeans, color = 'var(--c-orange)' }: { icon?: any, color?: string }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', margin: '24px 0' }}>
            {[0.4, 0.7, 1, 0.7, 0.4].map((op, i) => (
                <Icon key={i} style={{ color, opacity: op, fontSize: i === 2 ? '22px' : '14px' }} />
            ))}
        </div>
    );
}

function SectionHeader({ sub, title, color = 'var(--c-brown-800)' }: { sub: string; title: string, color?: string }) {
    return (
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="font-script" style={{ color: 'var(--c-orange)', fontSize: '24px', marginBottom: '6px' }}>{sub}</p>
            <h2 className="font-serif" style={{ color, fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, marginBottom: '4px', lineHeight: 1.1 }}>{title}</h2>
            <BeanDivider />
        </div>
    );
}

/* ── Page Component ───────────────────────────────────────────────── */

export default function AboutPage() {
    return (
        <div className="page-transition" style={{ background: 'var(--c-cream)' }}>
            
            {/* ══ HERO SECTION ══════════════════════════════════════════════ */}
            <section style={{ 
                position: 'relative', 
                paddingTop: '160px', 
                paddingBottom: '96px', 
                textAlign: 'center', 
                background: 'var(--c-cream)' 
            }}>
                {/* Subtle Background Elements (Matching the spirit of other pages) */}
                {[...Array(6)].map((_, i) => (
                    <motion.div key={i} style={{ position: 'absolute', left: `${10 + (i * 15) % 80}%`, top: `${20 + (i * 12) % 60}%`, fontSize: `${12 + (i % 2) * 6}px`, opacity: 0.03, pointerEvents: 'none' }}
                        animate={{ rotate: 360 }} transition={{ duration: 15 + i * 5, repeat: Infinity, ease: 'linear' }}>
                        <GiCoffeeBeans style={{ color: 'var(--c-orange)' }} />
                    </motion.div>
                ))}

                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', zIndex: 1, padding: '0 24px', maxWidth: '800px', margin: '0 auto' }}
                >
                    <p className="font-script" style={{ color: 'var(--c-orange)', fontSize: '24px', marginBottom: '8px' }}>Our Story</p>
                    <h1 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: 700, marginBottom: '20px', lineHeight: 1.1 }}>
                        Where Coffee Meets the Earth
                    </h1>
                    <BeanDivider />
                    <p style={{ color: 'var(--c-brown-500)', fontSize: '17px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
                        Himalayan SIP is a unique fusion of a specialty café and a lush plant nursery, born at the foot of the Himalayas to offer a sanctuary for both the soul and the soil.
                    </p>
                </motion.div>
            </section>

            {/* ══ OUR IDENTITY ══════════════════════════════════════════════ */}
            <section style={{ padding: '120px 0', position: 'relative' }}>
                <div className="section-container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
                        <ScrollReveal>
                            <div style={{ position: 'relative' }}>
                                <div style={{ 
                                    borderRadius: '24px', 
                                    overflow: 'hidden', 
                                    boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
                                    aspectRatio: '4/5'
                                }}>
                                    <img src="/6.jpeg" alt="Inside Himalayan SIP" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                {/* Floating Badge */}
                                <motion.div 
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                    style={{ 
                                        position: 'absolute', 
                                        bottom: '-30px', 
                                        right: '-30px', 
                                        background: 'var(--c-orange)', 
                                        padding: '24px', 
                                        borderRadius: '20px', 
                                        color: '#FFF',
                                        boxShadow: '0 20px 40px rgba(255,108,61,0.3)',
                                        display: 'none' // Hidden on small screens via CSS/JS logic if needed, but keeping for aesthetic
                                    }}
                                    className="desktop-only"
                                >
                                    <GiCoffeeBeans fontSize="40px" />
                                </motion.div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div style={{ padding: '20px' }}>
                                <SectionHeader sub="The Concept" title="Beans & Beyond" />
                                <p style={{ color: 'var(--c-brown-600)', fontSize: '17px', lineHeight: 1.8, marginBottom: '24px' }}>
                                    The "SIP" in our name stands for more than just a drink; it's an invitation to pause. We believe that a great cup of coffee is best enjoyed in the company of nature. 
                                </p>
                                <p style={{ color: 'var(--c-brown-600)', fontSize: '17px', lineHeight: 1.8, marginBottom: '32px' }}>
                                    Every bean we roast and every leaf we steep carries the spirit of the mountains. Our specialty brews are sourced directly from high-altitude farms, supporting local growers while delivering an authentic Himalayan experience to your table.
                                </p>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                    <div>
                                        <h4 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: '20px', marginBottom: '10px' }}>Sustainable</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--c-brown-500)', lineHeight: 1.6 }}>Directly sourced from local Himalayan farmers.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: '20px', marginBottom: '10px' }}>Specialty</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--c-brown-500)', lineHeight: 1.6 }}>Masterfully roasted beans and hand-plucked teas.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ══ THE NURSERY SECTION ═══════════════════════════════════════ */}
            <section style={{ 
                padding: '120px 0', 
                background: 'var(--c-brown-800)', 
                color: 'var(--c-cream)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Leaves */}
                <motion.div 
                    animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }} 
                    transition={{ duration: 10, repeat: Infinity }}
                    style={{ position: 'absolute', top: '-50px', left: '-50px', opacity: 0.1, fontSize: '300px' }}
                >
                    <FaLeaf />
                </motion.div>

                <div className="section-container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center', direction: 'rtl' }}>
                        <ScrollReveal>
                            <div style={{ direction: 'ltr' }}>
                                <div style={{ 
                                    borderRadius: '24px', 
                                    overflow: 'hidden', 
                                    boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
                                    aspectRatio: '4/5'
                                }}>
                                    <img src="/outdoor.jpg" alt="Plant Nursery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div style={{ direction: 'ltr', padding: '20px' }}>
                                <SectionHeader sub="The Nursery" title="A Green Sanctuary" color="var(--c-cream)" />
                                <p style={{ fontSize: '17px', lineHeight: 1.8, marginBottom: '24px', opacity: 0.9 }}>
                                    Step into our indoor-outdoor garden, a meticulously curated escape filled with exotic mountain plants, succulents, and lush tropical greenery.
                                </p>
                                <p style={{ fontSize: '17px', lineHeight: 1.8, marginBottom: '32px', opacity: 0.9 }}>
                                    We aren't just a place to sit; we are a living gallery. Every plant you see contributes to the therapeutic atmosphere of Himalayan SIP. And for those who wish to take a piece of this sanctuary home, most of our plants are available for purchase during your visit.
                                </p>
                                
                                <div style={{ 
                                    background: 'rgba(255,255,255,0.05)', 
                                    padding: '32px', 
                                    borderRadius: '20px', 
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    marginBottom: '40px'
                                }}>
                                    <div style={{ display: 'flex', gap: '16px' }}>
                                        <GiPlantSeed style={{ color: 'var(--c-orange)', fontSize: '24px' }} />
                                        <p style={{ fontSize: '14px', lineHeight: 1.6 }}>While we don't list our plants online, our nursery is open daily for physical browsing and purchase.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ══ CORE VALUES / FOOTER CTA ══════════════════════════════════ */}
            <section style={{ padding: '120px 24px', textAlign: 'center' }}>
                <ScrollReveal>
                    <SectionHeader sub="Our Purpose" title="Breathe, Sip, Repeat" />
                    <p style={{ color: 'var(--c-brown-500)', fontSize: '18px', maxWidth: '700px', margin: '0 auto 60px', lineHeight: 1.8 }}>
                        Whether you're looking for a peaceful spot for remote work, a quiet place to read, or just a beautiful setting for a chat, our visual and natural ambiance delivers a getaway like no other in Lalitpur.
                    </p>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                        <Link href="/menu" className="btn-pill-primary">View Menu</Link>
                    </div>
                </ScrollReveal>
            </section>

            {/* Extra style to fix the direction logic on desktop-only badge */}
            <style jsx>{`
                @media (max-width: 991px) {
                    .desktop-only { display: none !important; }
                }
            `}</style>

        </div>
    );
}
