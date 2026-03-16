'use client';

import Link from 'next/link';
import Image from 'next/image';
import BeanDivider from './BeanDivider';
import { FaInstagram, FaFacebookF, FaTripadvisor } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';

export default function Footer() {
    return (
        <footer style={{ background: '#3E2723', color: '#F5F1E8' }}>
            {/* Wave */}
            <div style={{ overflow: 'hidden', lineHeight: 0 }}>
                <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', fill: '#FFFFFF', display: 'block' }}>
                    <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
                </svg>
            </div>

            <div className="section-container" style={{ paddingTop: '60px', paddingBottom: '32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '48px' }}>

                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <Image src="/logo2.png" alt="Himalayan SIP Logo" width={140} height={140} style={{ borderRadius: '12px' }} />
                        </div>
                        <p style={{ color: '#D4BC94', fontSize: '13px', lineHeight: 1.7, marginBottom: '20px' }}>
                            A nature-based specialty coffee café and plant nursery nestled in the heart of Lalitpur. Every sip tells a story.
                        </p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            {[
                                { icon: <FaInstagram />, href: 'https://www.instagram.com/floristahut.himalayansip/' },
                                { icon: <FaFacebookF />, href: 'https://www.facebook.com/floristahut/' },
                                { icon: <FaTripadvisor />, href: 'https://www.tripadvisor.com/Restaurant_Review-g315764-d27775243-Reviews-Himalayan_Sip-Patan_Lalitpur_Kathmandu_Valley_Bagmati_Zone_Central_Region.html' },
                            ].map(({ icon, href }, i) => (
                                <a key={i} href={href} target="_blank" rel="noreferrer"
                                    style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #6D4C2E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4BC94', textDecoration: 'none', transition: 'all 0.3s', fontSize: '14px' }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--c-orange)'; (e.currentTarget as HTMLElement).style.color = 'var(--c-orange)'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#6D4C2E'; (e.currentTarget as HTMLElement).style.color = '#D4BC94'; }}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif" style={{ fontSize: '17px', fontWeight: 600, color: 'var(--c-orange)', marginBottom: '12px' }}>Quick Links</h4>
                        <BeanDivider />
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
                            {[{ href: '/', label: 'Home' }, { href: '/about', label: 'Our Story' }, { href: '/menu', label: 'Menu' }, { href: '/contact', label: 'Contact' }].map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} style={{ color: '#D4BC94', textDecoration: 'none', fontSize: '13px', transition: 'color 0.3s' }}
                                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--c-orange)'}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#D4BC94'}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-serif" style={{ fontSize: '17px', fontWeight: 600, color: 'var(--c-orange)', marginBottom: '12px' }}>Opening Hours</h4>
                        <BeanDivider />
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <HiClock style={{ color: 'var(--c-orange)', marginTop: '2px' }} />
                                <div>
                                    <p style={{ color: '#F5F1E8', fontSize: '13px', fontWeight: 600 }}>Open Everyday</p>
                                    <p style={{ color: '#D4BC94', fontSize: '13px' }}>6:00 AM – 8:00 PM</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif" style={{ fontSize: '17px', fontWeight: 600, color: 'var(--c-orange)', marginBottom: '12px' }}>Get In Touch</h4>
                        <BeanDivider />
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <HiLocationMarker style={{ color: 'var(--c-orange)', marginTop: '2px' }} />
                                <span style={{ color: '#D4BC94', fontSize: '13px' }}>Chyasal, Lalitpur, Nepal</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <HiPhone style={{ color: 'var(--c-orange)' }} />
                                <a href="tel:+9779849671874" style={{ color: '#D4BC94', textDecoration: 'none', fontSize: '13px' }}>+977 984 9671874</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <HiMail style={{ color: 'var(--c-orange)' }} />
                                <a href="mailto:himalayansip@gmail.com" style={{ color: '#D4BC94', textDecoration: 'none', fontSize: '13px' }}>himalayansip@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{ borderTop: '1px solid #5C4033', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    <p style={{ color: '#8B6340', fontSize: '12px' }}>© {new Date().getFullYear()} Himalayan SIP. All rights reserved.</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8B6340', fontSize: '12px' }}>
                        <BeanDivider />
                    </div>
                </div>
            </div>
        </footer>
    );
}
