'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const categories = ['All', 'Coffee', 'Specialty Drinks', 'Breakfast', 'Snacks', 'Desserts'];

const menuItems = [
    { name: 'Himalayan Pour-Over', desc: "Single-origin Nepal highland beans, slow brewed.", price: 'NPR 320', cat: 'Coffee', badge: true, emoji: '☕' },
    { name: 'Classic Espresso', desc: 'Double shot of our house-blend espresso.', price: 'NPR 240', cat: 'Coffee', badge: false, emoji: '🍵' },
    { name: 'Flat White', desc: 'Silky microfoam milk over a ristretto base.', price: 'NPR 290', cat: 'Coffee', badge: false, emoji: '☕' },
    { name: 'Cold Brew', desc: '18-hour cold extracted, smooth & bold.', price: 'NPR 310', cat: 'Coffee', badge: true, emoji: '🧊' },
    { name: 'Americano', desc: 'Espresso diluted with hot water, clean & bright.', price: 'NPR 220', cat: 'Coffee', badge: false, emoji: '☕' },
    { name: 'Cappuccino', desc: 'Equal parts espresso, steamed & foamed milk.', price: 'NPR 280', cat: 'Coffee', badge: false, emoji: '☕' },
    { name: 'Spiced Chai Latte', desc: 'House masala blend, whole milk, cinnamon foam.', price: 'NPR 280', cat: 'Specialty Drinks', badge: true, emoji: '🧋' },
    { name: 'Butterfly Pea Lemonade', desc: 'Color-changing pea flower & citrus blend.', price: 'NPR 300', cat: 'Specialty Drinks', badge: true, emoji: '🩵' },
    { name: 'Turmeric Golden Milk', desc: 'Anti-inflammatory spice blend in warm milk.', price: 'NPR 270', cat: 'Specialty Drinks', badge: false, emoji: '🌟' },
    { name: 'Matcha Latte', desc: 'Ceremonial grade matcha, oat milk.', price: 'NPR 320', cat: 'Specialty Drinks', badge: false, emoji: '🍵' },
    { name: 'Avocado Sourdough Toast', desc: 'House sourdough, smashed avocado, poached egg, seeds.', price: 'NPR 450', cat: 'Breakfast', badge: true, emoji: '🥑' },
    { name: 'Shakshuka', desc: 'Eggs baked in spiced tomato sauce, served with bread.', price: 'NPR 480', cat: 'Breakfast', badge: false, emoji: '🍳' },
    { name: 'Granola Bowl', desc: 'House granola, seasonal fruit, Greek yogurt, honey.', price: 'NPR 390', cat: 'Breakfast', badge: false, emoji: '🥣' },
    { name: 'Himalayan Omelette', desc: 'Three-egg omelette with vegetables & local cheese.', price: 'NPR 420', cat: 'Breakfast', badge: false, emoji: '🍳' },
    { name: 'Bruschetta Trio', desc: 'Three toppings on crisp sourdough — tomato, mushroom, brie.', price: 'NPR 380', cat: 'Snacks', badge: false, emoji: '🍞' },
    { name: 'Cheese & Charcuterie Board', desc: 'Curated board with local cheeses, nuts & dried fruits.', price: 'NPR 650', cat: 'Snacks', badge: true, emoji: '🧀' },
    { name: 'Hummus Platter', desc: "House hummus, pita, cucumber, olives & za'atar.", price: 'NPR 350', cat: 'Snacks', badge: false, emoji: '🫒' },
    { name: 'Sweet Potato Fries', desc: 'Crispy fries with sriracha aioli.', price: 'NPR 290', cat: 'Snacks', badge: false, emoji: '🍟' },
    { name: 'Sunrise Affogato', desc: 'Double espresso drowned over vanilla gelato.', price: 'NPR 380', cat: 'Desserts', badge: true, emoji: '🍦' },
    { name: 'Chocolate Lava Cake', desc: 'Warm dark chocolate cake, vanilla ice cream.', price: 'NPR 420', cat: 'Desserts', badge: false, emoji: '🍫' },
    { name: 'Cardamom Crème Brûlée', desc: 'Classic custard with a cardamom twist, caramelized sugar top.', price: 'NPR 390', cat: 'Desserts', badge: true, emoji: '🍮' },
    { name: 'Fresh Fruit Tart', desc: 'Buttery shell, pastry cream, seasonal fresh fruits.', price: 'NPR 360', cat: 'Desserts', badge: false, emoji: '🥧' },
];

export default function MenuPage() {
    const [active, setActive] = useState('All');
    const filtered = active === 'All' ? menuItems : menuItems.filter((i) => i.cat === active);

    return (
        <div className="page-transition">
            {/* Hero */}
            <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '96px', textAlign: 'center', background: 'var(--c-cream)' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ padding: '0 24px' }}>
                    <p className="font-script" style={{ color: 'var(--c-orange)', fontSize: '24px', marginBottom: '6px' }}>Crafted for You</p>
                    <h1 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: 700, marginBottom: '20px' }}>Our Menu</h1>
                    <BeanDivider />
                    <p style={{ color: 'var(--c-brown-500)', fontSize: '16px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>Every item is thoughtfully sourced, carefully prepared, and served with warmth.</p>
                </motion.div>
            </section>

            {/* Category tabs — sticky */}
            <div style={{ position: 'sticky', top: 0, zIndex: 40, background: 'var(--c-cream)', padding: '14px 0', borderBottom: '1px solid var(--c-brown-100)' }}>
                <div className="section-container">
                    <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '2px' }}>
                        {categories.map((cat) => (
                            <button key={cat} onClick={() => setActive(cat)}
                                style={{ 
                                    position: 'relative', 
                                    flexShrink: 0, 
                                    padding: '10px 24px', 
                                    borderRadius: '4px', 
                                    border: 'none', 
                                    cursor: 'pointer', 
                                    fontFamily: 'Inter, sans-serif', 
                                    fontSize: '11px', 
                                    fontWeight: 600, 
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    transition: 'all 0.3s', 
                                    background: active === cat ? 'var(--c-orange)' : 'var(--c-brown-50)', 
                                    color: active === cat ? '#fff' : 'var(--c-brown-500)' 
                                }}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Menu grid */}
            <section style={{ padding: '64px 0', background: 'var(--c-cream)' }}>
                <div className="section-container">
                    <AnimatePresence mode="wait">
                        <motion.div key={active}
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.35 }}
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
                            {filtered.map((item, i) => (
                                <motion.div key={item.name}
                                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                                    className="card-hover"
                                    style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--c-brown-100)', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', background: 'linear-gradient(135deg, #5C4033, #1C0F0A)', position: 'relative' }}>
                                        {item.emoji}
                                        {item.badge && <span className="badge-signature" style={{ position: 'absolute', top: '10px', right: '10px' }}>Signature</span>}
                                    </div>
                                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        <h3 className="font-serif" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--c-brown-800)', marginBottom: '6px' }}>{item.name}</h3>
                                        <p style={{ color: 'var(--c-brown-500)', fontSize: '12px', lineHeight: 1.6, flex: 1 }}>{item.desc}</p>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '14px' }}>
                                            <span style={{ color: 'var(--c-orange)', fontWeight: 700, fontSize: '14px' }}>{item.price}</span>
                                            <span style={{ fontSize: '11px', color: 'var(--c-brown-400)', background: 'var(--c-brown-50)', padding: '2px 8px', borderRadius: '20px', fontFamily: 'Inter, sans-serif' }}>{item.cat}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                    {filtered.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '80px 0' }}>
                            <GiCoffeeBeans style={{ fontSize: '56px', color: 'var(--c-brown-200)', margin: '0 auto 16px', display: 'block' }} />
                            <p className="font-serif" style={{ color: 'var(--c-brown-400)', fontSize: '20px' }}>No items found.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Note */}
            <section style={{ padding: '48px 0', background: 'var(--c-cream-dk)' }}>
                <div className="section-container" style={{ textAlign: 'center' }}>
                    <ScrollReveal>
                        <GiCoffeeBeans style={{ color: 'var(--c-orange)', fontSize: '28px', margin: '0 auto 16px', display: 'block' }} />
                        <p className="font-serif" style={{ color: 'var(--c-brown-700)', fontSize: '16px', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
                            &ldquo;All our beans are ethically sourced from Himalayan and South Asian origin farms. Menu items may vary seasonally.&rdquo;
                        </p>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
