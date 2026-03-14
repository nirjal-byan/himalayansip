'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { GiCoffeeBeans } from 'react-icons/gi';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ScrollReveal from '@/components/ScrollReveal';

/* ── Sub-components ───────────────────────────────────────────────── */

function BeanDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
      {[0.4, 0.7, 1, 0.7, 0.4].map((op, i) => (
        <GiCoffeeBeans key={i} style={{ color: 'var(--c-orange)', opacity: op, fontSize: i === 2 ? '20px' : '13px' }} />
      ))}
    </div>
  );
}

function SectionHeader({ sub, title, body }: { sub: string; title: string; body?: string }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
      <p className="font-script" style={{ color: 'var(--c-orange)', fontSize: '24px', marginBottom: '6px' }}>{sub}</p>
      <h2 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, marginBottom: '4px' }}>{title}</h2>
      <BeanDivider />
      {body && <p style={{ color: 'var(--c-brown-500)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontSize: '15px' }}>{body}</p>}
    </div>
  );
}

/* ── Data ─────────────────────────────────────────────────────────── */
/* ── Page component ───────────────────────────────────────────────── */
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Real Google Reviews Data
  const allReviews = [
    { name: 'Reeya Mishra', loc: 'Local Guide', text: 'Loved the place, nice vibe. Perfect place for a cup of coffee. As a plant lover I loved the theme and aesthetics of the place. Owner was very sweet and welcoming.' },
    { name: 'Alley Fan', loc: 'Local Guide', text: 'Great coffee, cozy vibe! Super cozy space filled with lovely potted plants. I just ordered a black coffee, and wow... couldn\'t sleep the whole night!' },
    { name: 'Sagar Shrestha', loc: '1 Review', text: 'Whether you\'re looking for a peaceful spot for remote work, a quiet place to read, or just a beautiful setting for a chat, this cafe\'s visual ambiance delivers.' },
    { name: 'Subash Joshi', loc: 'Local Guide', text: 'Such a peaceful environment and cozy vibes. Plenty space and has such nice Ambience. Bakery item and food was top notch. cheesecake was mouth watering.' },
    { name: 'Abhinav Joshi', loc: 'Food Traveller', text: 'If you\'re looking for a budget friendly space to chill out in, this is the place for you. Enjoy indoor or outdoor garden dining surrounded by beautiful plants.' },
    { name: 'Rosina Adhikari', loc: '1 Review', text: 'I recently visited Himalayan Sip and had an amazing time. Their breakfast was fresh, delicious, and beautifully served. Drinks were equally impressive.' },
    { name: 'Kreepa Timsina', loc: 'Local Guide', text: 'The one and only green therapeutic cafe in town. Water elements, filled with plants, which by the way you can buy and a green natural atrium.' },
    { name: 'Rabi Shrestha', loc: 'Local Guide', text: 'Great ambience and aura. If you are a plant lover, this place is definitely a go for you. The food and vibe of this place is wonderful.' },
    { name: 'Gracie Sharma', loc: 'Local Guide', text: 'In love with the ambiance here. Once you stay for a while you don’t want to leave. A good place to go if you want to feel relaxed.' },
    { name: 'Tika Joshi', loc: 'Local Guide', text: 'The ambiance is incredible, with plants everywhere, creating a cozy and refreshing atmosphere. The staff were friendly and attentive.' },
    { name: 'Hidne Manchhe', loc: 'Local Guide', text: 'The ambience here is amazing. Greenery and peaceful. Perfect for a date, casual coffee and tea, remote work or just grabbing a book.' },
    { name: 'Pradip Magar', loc: '2 Reviews', text: 'Offers a refined cafe experience with consistent quality. The ambience is calming, the drinks are refreshing and staff make you feel truly welcomed.' }
  ];

  const [activeSet, setActiveSet] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const reviewsPerPage = 3;
  const totalSets = Math.ceil(allReviews.length / reviewsPerPage);
  const currentReviews = allReviews.slice(activeSet * reviewsPerPage, (activeSet + 1) * reviewsPerPage);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveSet((prev) => (prev + newDirection + totalSets) % totalSets);
  };

  // Auto-transition reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSets]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      filter: 'blur(10px)'
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: 'blur(0px)'
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      filter: 'blur(10px)'
    })
  };

  return (
    <div className="page-transition">

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section ref={heroRef}
        style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#1C0F0A', zIndex: 0 }}>

        {/* Hero image */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/hero.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.8) 100%)' }} />

        {/* Animated bg beans */}
        {[...Array(10)].map((_, i) => (
          <motion.div key={i}
            style={{ position: 'absolute', left: `${8 + (i * 9) % 84}%`, top: `${12 + (i * 11) % 72}%`, fontSize: `${14 + (i % 3) * 8}px`, opacity: 0.08 }}
            animate={{ rotate: 360, y: [0, -10, 0] }}
            transition={{ duration: 10 + i, repeat: Infinity, ease: 'linear', delay: i * 0.6 }}>
            <GiCoffeeBeans style={{ color: 'var(--c-orange)' }} />
          </motion.div>
        ))}

        <motion.div style={{ opacity: heroOpacity, position: 'relative', zIndex: 1, textAlign: 'center', padding: '80px 24px 0', width: '100%', maxWidth: '700px', margin: '0 auto' }}>


          <motion.h1 className="font-serif"
            initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
            style={{ color: '#FFFFFF', fontSize: 'clamp(40px, 7vw, 84px)', fontWeight: 700, lineHeight: 1.1, marginBottom: '8px', textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 8px 32px rgba(0,0,0,0.6)' }}>
            Himalayan SIP
          </motion.h1>

          <motion.p className="font-script"
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}
            style={{ color: 'var(--c-orange)', fontSize: 'clamp(22px, 4vw, 38px)', marginBottom: '8px' }}>
            Beans &amp; Beyond
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
            <BeanDivider />
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.3, duration: 0.7 }}
            style={{ color: 'rgba(255,255,255,0.95)', fontSize: '18px', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.7, textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            A nature-based specialty café &amp; plant nursery at the foot of the Himalayas
          </motion.p>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.6, duration: 0.7 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <Link href="/menu" className="btn-pill-primary">Explore Menu</Link>
            <Link href="/contact" className="btn-pill-outline">Visit Us</Link>
          </motion.div>
        </motion.div>


      </section>

      {/* ══ ABOUT / OUR STORY ═══════════════════════════════════════════ */}
      <section style={{ position: 'relative', zIndex: 5, background: 'var(--c-cream)', padding: '120px 0 60px' }}>
        <div className="section-container">
          <ScrollReveal>
            <p style={{ color: 'var(--c-brown-500)', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.8, textAlign: 'center', maxWidth: '960px', margin: '0 auto 100px' }}>
              Welcome to Himalayan SIP, where the art of tea and coffee meets the serene flavors of the Himalayas. We invite you to a peaceful sanctuary designed for you to unwind, relax, and savor an exceptional selection of mountain-inspired brews and bites.
            </p>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <ScrollReveal>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(62,39,35,0.15)', position: 'relative' }}>
                <img src="/6.jpeg" alt="Himalayan Coffee Heritage" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }} />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div style={{ paddingRight: '20px' }}>
                <span style={{ color: 'var(--c-orange)', fontWeight: 600, fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Our Story</span>
                <h2 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 700, marginBottom: '28px', lineHeight: 1.15 }}>
                  The Journey from <br />Mountain to Cup
                </h2>
                <p style={{ color: 'var(--c-brown-500)', fontSize: '15.5px', lineHeight: 1.8, marginBottom: '20px' }}>
                  At Himalayan SIP, our mission is to serve you the finest tea and coffee, sourced directly from the rich, high-altitude landscapes of Nepal and beyond. Every cup is a celebration of the unique terroir and tradition that defines our home.
                </p>
                <p style={{ color: 'var(--c-brown-500)', fontSize: '15.5px', lineHeight: 1.8, marginBottom: '40px' }}>
                  From the refreshing clarity of our Himalayan green tea to the soul-warming depth of traditional butter tea, our signature drinks are crafted for a balanced, meditative experience. For the coffee purists, we offer rich, aromatic brews using locally grown beans, roasted to perfection to honor their natural complexity.
                </p>
                <Link href="/about" className="btn-secondary">
                  Learn More →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ PHOTO COLLAGE ═══════════════════════════════════════════════ */}
      <section style={{ position: 'relative', zIndex: 10, background: 'var(--c-cream)', padding: '0' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', padding: '96px 24px 48px' }}>
          <ScrollReveal>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--c-orange)' }}>
              A Glimpse Inside
            </span>
            <h2 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, marginTop: '12px', marginBottom: '0', lineHeight: 1.1 }}>
              Life at Himalayan SIP
            </h2>
          </ScrollReveal>
        </div>

        {/* Collage grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 2fr 1.2fr',
          gridTemplateRows: 'auto',
          gap: '16px',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px 16px',
        }}>
          {/* Left column — tall + small */}
          <div style={{ display: 'grid', gridTemplateRows: '2fr 1fr', gap: '16px' }}>
            <ScrollReveal delay={0}>
              <div style={{ overflow: 'hidden', borderRadius: '8px', height: '360px' }}>
                <img src="/11.jpeg" alt="Himalayan SIP" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div style={{ overflow: 'hidden', borderRadius: '8px', height: '180px' }}>
                <img src="/4.jpeg" alt="Himalayan SIP" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              </div>
            </ScrollReveal>
          </div>

          {/* Centre column — large feature */}
          <ScrollReveal delay={150}>
            <div style={{ overflow: 'hidden', borderRadius: '8px', height: '556px' }}>
              <img src="/1.jpg" alt="Himalayan SIP" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            </div>
          </ScrollReveal>

          {/* Right column — small + tall */}
          <div style={{ display: 'grid', gridTemplateRows: '1fr 2fr', gap: '16px' }}>
            <ScrollReveal delay={100}>
              <div style={{ overflow: 'hidden', borderRadius: '8px', height: '180px' }}>
                <img src="/7.jpeg" alt="Himalayan SIP" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0}>
              <div style={{ overflow: 'hidden', borderRadius: '8px', height: '360px' }}>
                <img src="/2.jpg" alt="Himalayan SIP" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Bottom row — 4 equal images */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          {['5.jpeg','3.jpg','10.jpeg','8.jpeg'].map((img, i) => (
            <ScrollReveal key={img} delay={i * 80}>
              <div style={{ overflow: 'hidden', borderRadius: '8px', height: '220px' }}>
                <img src={`/${img}`} alt="Himalayan SIP" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Last row — 3 wide images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', maxWidth: '1200px', margin: '0 auto', padding: '16px 16px 32px' }}>
          {['9.jpeg','coffeeplantandcake.jpg','6.jpeg'].map((img, i) => (
            <ScrollReveal key={img} delay={i * 100}>
              <div style={{ overflow: 'hidden', borderRadius: '8px', height: '240px' }}>
                <img src={`/${img}`} alt="Himalayan SIP" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      
      {/* ══ TESTIMONIALS ═══════════════════════════════════════════════ */}
      <section style={{ position: 'relative', zIndex: 10, padding: '120px 0', background: 'var(--c-cream)', overflow: 'hidden' }}>
        <div className="section-container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--c-orange)' }}>
                Reviews
              </span>
              <h2 className="font-serif" style={{ color: 'var(--c-brown-800)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, marginTop: '12px', marginBottom: '0', lineHeight: 1.1 }}>
                Shared Experiences
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', position: 'relative' }}>
            <button 
              onClick={() => paginate(-1)}
              style={{ background: 'none', border: '1px solid var(--c-brown-200)', borderRadius: '50%', width: '48px', height: '48px', minWidth: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--c-brown-500)', transition: 'all 0.3s ease', zIndex: 10 }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--c-orange)', e.currentTarget.style.color = 'var(--c-orange)', e.currentTarget.style.background = 'rgba(255,108,61,0.05)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--c-brown-200)', e.currentTarget.style.color = 'var(--c-brown-500)', e.currentTarget.style.background = 'none')}
            >
              <FiChevronLeft fontSize="24px" />
            </button>

            <div style={{ flex: 1, position: 'relative', minHeight: '380px', overflow: 'hidden' }}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeSet}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 400, damping: 40, mass: 0.8 },
                    opacity: { duration: 0.15 }
                  }}
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                    gap: '24px',
                    width: '100%'
                  }}
                >
                  {currentReviews.map((review) => (
                    <div key={review.name} style={{ 
                      background: '#FFFFFF', 
                      borderRadius: '16px', 
                      padding: '40px 32px', 
                      border: '1px solid var(--c-brown-100)', 
                      position: 'relative',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <FaQuoteRight style={{ position: 'absolute', top: '32px', right: '32px', color: 'var(--c-orange)', opacity: 0.15, fontSize: '24px' }} />
                      
                      <p style={{ color: 'var(--c-brown-600)', fontSize: '15px', lineHeight: 1.8, marginBottom: '32px', flex: 1, fontStyle: 'italic', marginTop: '12px' }}>
                        &quot;{review.text}&quot;
                      </p>

                      <div>
                        <p style={{ fontWeight: 700, color: 'var(--c-brown-800)', fontSize: '14px', marginBottom: '2px' }}>{review.name}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <button 
              onClick={() => paginate(1)}
              style={{ background: 'none', border: '1px solid var(--c-brown-200)', borderRadius: '50%', width: '48px', height: '48px', minWidth: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--c-brown-500)', transition: 'all 0.3s ease', zIndex: 10 }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--c-orange)', e.currentTarget.style.color = 'var(--c-orange)', e.currentTarget.style.background = 'rgba(255,108,61,0.05)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--c-brown-200)', e.currentTarget.style.color = 'var(--c-brown-500)', e.currentTarget.style.background = 'none')}
            >
              <FiChevronRight fontSize="24px" />
            </button>
          </div>

          {/* Navigation Bullets */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '64px' }}>
            {[...Array(totalSets)].map((_, i) => (
              <button key={i} 
                onClick={() => {
                  setDirection(i > activeSet ? 1 : -1);
                  setActiveSet(i);
                }}
                style={{ 
                  width: activeSet === i ? '24px' : '8px', 
                  height: '8px', 
                  borderRadius: '4px', 
                  background: activeSet === i ? 'var(--c-orange)' : 'var(--c-brown-200)',
                  opacity: activeSet === i ? 1 : 0.5,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: 'none',
                  padding: 0
                }} 
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
