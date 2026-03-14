'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GiCoffeeBeans } from 'react-icons/gi';
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';
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

const hours = [
    { days: 'Daily', time: '6:00 AM – 8:00 PM' },
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        await new Promise((r) => setTimeout(r, 1500));
        setSending(false);
        setSent(true);
    };

    return (
        <div className="page-transition">
            {/* Hero */}
            <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '96px', textAlign: 'center', background: 'var(--c-cream)' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ padding: '0 24px' }}>
                    <p className="font-script" style={{ color: 'var(--c-orange)', fontSize: '24px', marginBottom: '6px' }}>We Would Love to Hear From You</p>
                    <h1 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: 700, marginBottom: '20px' }}>Get In Touch</h1>
                    <BeanDivider />
                    <p style={{ color: 'var(--c-brown-500)', fontSize: '16px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>Whether you have a question, a reservation request, or just want to say hello — our doors and inbox are always open.</p>
                </motion.div>
            </section>

            {/* Content */}
            <section style={{ padding: '96px 0', background: 'var(--c-cream)' }}>
                <div className="section-container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>

                        {/* Left: Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <ScrollReveal>
                                <h2 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, marginBottom: '24px' }}>Visit Himalayan SIP</h2>

                                {[
                                    { icon: <HiLocationMarker style={{ color: 'var(--c-orange)', fontSize: '20px' }} />, title: 'Location', lines: ['Himalayan SIP Café', 'Chyasal, Lalitpur', 'Nepal'] },
                                    { icon: <HiPhone style={{ color: 'var(--c-orange)', fontSize: '20px' }} />, title: 'Phone', lines: ['+977 984 9671874'] },
                                    { icon: <HiMail style={{ color: 'var(--c-orange)', fontSize: '20px' }} />, title: 'Email', lines: ['hello@himalayansip.com', 'reservations@himalayansip.com'] },
                                ].map((tile) => (
                                    <div key={tile.title} className="card-hover"
                                        style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: '#fff', borderRadius: '16px', padding: '20px 24px', border: '1px solid var(--c-brown-100)', marginBottom: '12px' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(242,140,40,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{tile.icon}</div>
                                        <div>
                                            <p style={{ fontWeight: 600, color: 'var(--c-brown-800)', fontSize: '14px', marginBottom: '4px' }}>{tile.title}</p>
                                            {tile.lines.map((l, i) => <p key={i} style={{ color: 'var(--c-brown-500)', fontSize: '13px' }}>{l}</p>)}
                                        </div>
                                    </div>
                                ))}

                                {/* Hours */}
                                <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid var(--c-brown-100)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                                        <HiClock style={{ color: 'var(--c-orange)', fontSize: '20px' }} />
                                        <h3 className="font-serif" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--c-brown-800)' }}>Opening Hours</h3>
                                    </div>
                                    {hours.map((h) => (
                                        <div key={h.days} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--c-brown-50)', fontSize: '13px' }}>
                                            <span style={{ color: 'var(--c-brown-600)', fontWeight: 500 }}>{h.days}</span>
                                            <span style={{ color: 'var(--c-orange)', fontWeight: 700 }}>{h.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right: Form */}
                        <ScrollReveal delay={150}>
                            <div style={{ background: '#fff', borderRadius: '24px', padding: '48px 40px', border: '1px solid var(--c-brown-100)', boxShadow: '0 10px 40px rgba(62,39,35,0.06)' }}>
                                <h2 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, marginBottom: '6px' }}>Send Us a Message</h2>
                                <p style={{ color: 'var(--c-brown-500)', fontSize: '13px', marginBottom: '36px' }}>We typically respond within 4–6 hours. ☕</p>

                                {!sent ? (
                                    <form onSubmit={handleSubmit}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
                                            <div className="form-group">
                                                <input type="text" name="name" id="contact-name" placeholder=" " value={form.name} onChange={handleChange} required />
                                                <label htmlFor="contact-name">Your Name</label>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" id="contact-email" placeholder=" " value={form.email} onChange={handleChange} required />
                                                <label htmlFor="contact-email">Email Address</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="subject" id="contact-subject" placeholder=" " value={form.subject} onChange={handleChange} required />
                                            <label htmlFor="contact-subject">Subject</label>
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" id="contact-message" placeholder=" " value={form.message} onChange={handleChange} required />
                                            <label htmlFor="contact-message">Your Message</label>
                                        </div>
                                        <motion.button type="submit" disabled={sending}
                                            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                            className="btn-primary"
                                            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '8px', opacity: sending ? 0.75 : 1 }}>
                                            {sending ? (
                                                <>
                                                    <motion.div style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%' }}
                                                        animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
                                                    Sending...
                                                </>
                                            ) : (
                                                <><FiSend /> Send Message</>
                                            )}
                                        </motion.button>
                                    </form>
                                ) : (
                                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '48px 0' }}>
                                        <div style={{ fontSize: '56px', marginBottom: '16px' }}>☕</div>
                                        <h3 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>Message Sent!</h3>
                                        <p style={{ color: 'var(--c-brown-500)', fontSize: '14px', lineHeight: 1.7 }}>Thank you for reaching out. We will get back to you over a warm cup of coffee — very soon.</p>
                                    </motion.div>
                                )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section style={{ padding: '0 0 80px', background: 'var(--c-cream-dk)' }}>
                <div className="section-container">
                    <ScrollReveal>
                        <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', border: '4px solid #fff' }}>
                            <iframe title="Himalayan SIP Café Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.15370688127!2d85.33095!3d27.67517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19dcbb3d70f5%3A0x2b7a84e90f1bcc84!2sChyasal%2C%20Lalitpur%2044600!5e0!3m2!1sen!2s!4v1700000000001!5m2!1sen!2s"
                                width="100%" height="420" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
