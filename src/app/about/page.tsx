'use client';

import { motion } from 'framer-motion';
import { GiCoffeeBeans, GiPlantRoots } from 'react-icons/gi';
import { FiHeart, FiUsers, FiGlobe } from 'react-icons/fi';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

function BeanDivider() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
            {[0.4, 0.7, 1, 0.7, 0.4].map((op, i) => (
                <GiCoffeeBeans key={i} style={{ color: 'var(--c-orange)', opacity: op, fontSize: i === 2 ? '20px' : '13px' }} />
            ))}
        </div>
    );
}

const values = [
    { icon: <FiHeart style={{ fontSize: '28px', color: 'var(--c-orange)' }} />, title: 'Passion & Craft', desc: 'Every bean is sourced with intention. Every cup is poured with love. We believe coffee is an art form.' },
    { icon: <FiUsers style={{ fontSize: '28px', color: 'var(--c-orange)' }} />, title: 'Community First', desc: 'Himalayan SIP was born from a desire to create a space where people connect, rest, and grow together.' },
    { icon: <FiGlobe style={{ fontSize: '28px', color: 'var(--c-orange)' }} />, title: 'Sustainability', desc: 'From farm-to-cup sourcing to our living plant wall, we are building a greener café, one decision at a time.' },
];

const milestones = [
    { year: '2019', text: 'Founded with a single espresso machine and a dream.' },
    { year: '2021', text: 'Expanded to include our plant nursery wing.' },
    { year: '2023', text: "Sourced our first Himalayan-origin single estate lot." },
    { year: '2024', text: "Named Kathmandu's most beloved specialty café." },
];

export default function AboutPage() {
    return (
        <div className="page-transition">
            {/* Hero */}
            <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '96px', textAlign: 'center', overflow: 'hidden', background: 'var(--c-cream)' }}>
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

            {/* Story */}
            <section style={{ padding: '96px 0', background: 'var(--c-cream)' }}>
                <div className="section-container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
                        <ScrollReveal>
                            <p className="font-script" style={{ color: 'var(--c-orange)', fontSize: '20px', marginBottom: '8px' }}>The Beginning</p>
                            <h2 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 700, marginBottom: '24px' }}>A Café Rooted in Nature</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--c-brown-600)', lineHeight: 1.8, fontSize: '15px' }}>
                                <p>Himalayan SIP was born from a wanderer's love for two things: a perfectly brewed cup of coffee and the quiet magic of mountains. Our founders, avid trekkers and coffee lovers, dreamed of a place where Lalitpur's vibrant energy met the calm of the Himalayas.</p>
                                <p>We opened our doors with a simple mission — to serve exceptional specialty coffee in an environment that felt alive and nourishing. The plant nursery wasn't an afterthought; it was the soul of the concept.</p>
                                <p>Today, Himalayan SIP is a sanctuary for coffee lovers, plant enthusiasts, readers, thinkers, and anyone who needs a few moments of peace in the city.</p>
                            </div>
                            <div style={{ marginTop: '32px' }}>
                                <Link href="/contact" className="btn-primary">Visit Us Today</Link>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                {[{ emoji: '☕', label: 'Specialty Coffee', bg: '#3E2723' }, { emoji: '🌿', label: 'Plant Nursery', bg: '#5C4033' }, { emoji: '🏔️', label: 'Mountain Roots', bg: '#6D4C2E' }, { emoji: '❤️', label: 'Community', bg: '#4A3728' }].map((item, i) => (
                                    <div key={i} className="card-hover" style={{ borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '140px', background: `linear-gradient(135deg, ${item.bg}, #1C0F0A)` }}>
                                        <span style={{ fontSize: '36px', marginBottom: '8px' }}>{item.emoji}</span>
                                        <span className="font-serif" style={{ color: '#F5F1E8', fontSize: '13px' }}>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section style={{ padding: '96px 0', background: 'var(--c-cream-dk)' }}>
                <div className="section-container">
                    <ScrollReveal>
                        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                            <p className="font-script" style={{ color: 'var(--c-orange)', fontSize: '24px', marginBottom: '6px' }}>What We Stand For</p>
                            <h2 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700 }}>Our Values</h2>
                            <BeanDivider />
                        </div>
                    </ScrollReveal>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                        {values.map((v, i) => (
                            <ScrollReveal key={v.title} delay={i * 150}>
                                <div className="card-hover" style={{ background: '#fff', borderRadius: '24px', padding: '40px 28px', textAlign: 'center', border: '1px solid var(--c-brown-100)' }}>
                                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(242,140,40,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                        {v.icon}
                                    </div>
                                    <h3 className="font-serif" style={{ fontSize: '19px', fontWeight: 700, color: 'var(--c-brown-800)', marginBottom: '12px' }}>{v.title}</h3>
                                    <p style={{ color: 'var(--c-brown-500)', fontSize: '14px', lineHeight: 1.7 }}>{v.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Milestones */}
            <section style={{ padding: '96px 0', background: 'var(--c-cream)' }}>
                <div className="section-container">
                    <ScrollReveal>
                        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                            <p className="font-script" style={{ color: 'var(--c-orange)', fontSize: '24px', marginBottom: '6px' }}>Our Journey</p>
                            <h2 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700 }}>Milestones</h2>
                            <BeanDivider />
                        </div>
                    </ScrollReveal>

                    <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'var(--c-brown-200)', transform: 'translateX(-50%)' }} />
                        {milestones.map((m, i) => (
                            <ScrollReveal key={m.year} delay={i * 150}>
                                <div style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', marginBottom: '40px', position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: '50%', top: '20px', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--c-orange)', border: '3px solid var(--c-cream)', transform: 'translateX(-50%)', zIndex: 1 }} />
                                    <div className="card-hover" style={{ background: '#fff', borderRadius: '16px', padding: '20px 24px', border: '1px solid var(--c-brown-100)', width: 'calc(50% - 32px)', marginLeft: i % 2 === 0 ? 0 : 'auto', marginRight: i % 2 === 0 ? 'auto' : 0 }}>
                                        <span className="font-script" style={{ color: 'var(--c-orange)', fontSize: '22px', display: 'block', marginBottom: '4px' }}>{m.year}</span>
                                        <p style={{ color: 'var(--c-brown-600)', fontSize: '14px', lineHeight: 1.7 }}>{m.text}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nursery */}
            <section style={{ padding: '96px 0', background: 'var(--c-cream)' }}>
                <div className="section-container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '56px', alignItems: 'center' }}>
                        <ScrollReveal>
                            <GiPlantRoots style={{ fontSize: '64px', color: 'var(--c-orange)', opacity: 0.8, marginBottom: '24px' }} />
                            <p className="font-script" style={{ color: 'var(--c-orange)', fontSize: '20px', marginBottom: '8px' }}>Green Sanctuary</p>
                            <h2 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 700, marginBottom: '20px' }}>The Plant Nursery</h2>
                            <p style={{ color: 'var(--c-brown-500)', lineHeight: 1.8, fontSize: '15px', marginBottom: '12px' }}>Our plant nursery is an extension of the café's philosophy — that beauty, calm, and connection should be woven into everyday life.</p>
                            <p style={{ color: 'var(--c-brown-500)', lineHeight: 1.8, fontSize: '15px' }}>Take a cutting home, repot something you love, or simply sit surrounded by greenery with your latte in hand.</p>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                {['🌱', '🌿', '🪴', '🌺'].map((emoji, i) => (
                                    <div key={i} className="card-hover" style={{ borderRadius: '16px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '44px', background: 'var(--c-brown-50)', border: '1px solid var(--c-brown-100)' }}>{emoji}</div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section style={{ padding: '96px 0', background: 'var(--c-cream)' }}>
                <div className="section-container">
                    <ScrollReveal>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <p className="font-script" style={{ color: 'var(--c-orange)', fontSize: '24px', marginBottom: '6px' }}>Come Find Us</p>
                            <h2 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700 }}>Located in Lalitpur</h2>
                            <BeanDivider />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', border: '4px solid #fff' }}>
                            <iframe title="Himalayan SIP Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.15370688127!2d85.33095!3d27.67517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19dcbb3d70f5%3A0x2b7a84e90f1bcc84!2sChyasal%2C%20Lalitpur%2044600!5e0!3m2!1sen!2s!4v1700000000001!5m2!1sen!2s"
                                width="100%" height="400" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
