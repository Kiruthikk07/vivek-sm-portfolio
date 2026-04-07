import { useEffect } from 'react'
import './App.css'

// ─── DATA ───────────────────────────────────────────────
const HERO_TAGS = ['SEO', 'Google Ads', 'Lead Gen', 'Social Media', 'Content']

const HERO_STATS = [
  { num: '15K+', label: 'Qualified Leads' },
  { num: '45%',  label: 'Traffic Growth' },
  { num: '15+',  label: 'Page 1 Rankings' },
  { num: '200+', label: 'Pages Optimised' },
]

const TRAITS = [
  { icon: '⚡', name: 'Data-Driven', desc: 'Every decision backed by analytics & real numbers' },
  { icon: '🎨', name: 'Creative',    desc: 'Content & campaigns that actually stop the scroll' },
  { icon: '🌐', name: 'Full-Funnel', desc: 'From awareness to conversion — I own the journey' },
]

const WORK_CARDS = [
  { brand: 'Walmart Vriddhi',         type: 'Lead Generation',    result: '15K+ Leads',      accent: 'coral' },
  { brand: 'Zuri Hotels',             type: 'SEO & Organic',      result: '45% Traffic ↑',   accent: 'teal' },
  { brand: 'Upshot Technologies',     type: 'SEO & Landing Pages',result: '7+ Leads/mo',     accent: 'purple' },
  { brand: 'Nypunya Aesthetic Clinic',type: 'Personal Branding',  result: '1.2K Followers',  accent: 'green' },
  { brand: 'ProClime',                type: 'Technical SEO',      result: '200 Pages in 1mo',accent: 'yellow' },
]

const WALMART_RESULTS = [
  'Generated 15,000+ qualified leads',
  'Targeted MSME & SME audiences with high intent',
  'Optimised campaigns for both quality & volume',
  'Managed full paid campaign lifecycle',
]

const ZURI_STATS = [
  { num: '45%', label: 'Organic Traffic Growth',     accent: 'coral' },
  { num: '40+', label: 'Monthly Bookings Organic',   accent: 'navy' },
  { num: '15+', label: 'Keywords on Page 1 Google',  accent: 'green' },
  { num: '2',   label: 'Quarters to Achieve This',   accent: 'purple' },
]

const ZURI_STRATEGY = [
  'Long-tail keyword targeting',
  'Travel intent content strategy',
  'Location-based SEO pages',
  'Booking conversion optimisation',
  'Regular content publishing',
]

const MORE_WINS = [
  {
    brand: 'Upshot Technologies',
    sub: 'SEO & Landing Page Optimisation',
    points: [
      '7+ qualified organic leads/month',
      'Location-based landing pages built',
      'Hidden SEO pages strategy deployed',
      'Course & location keywords targeted',
    ],
    tags: ['On-Page SEO', 'Local SEO', 'Landing Pages'],
    accent: 'purple',
  },
  {
    brand: 'Dr. Prashantha Kesari',
    sub: 'Nypunya Aesthetic Clinic, Bangalore',
    points: [
      '1,200+ Instagram followers organically',
      '20+ direct high-value surgery calls',
      'Google rating lifted 4.2 → 4.5',
      '1,000+ patient testimonials managed',
    ],
    tags: ['Local SEO (GMB)', 'Social Media', 'Personal Branding'],
    accent: 'coral',
  },
  {
    brand: 'ProClime',
    sub: 'Climate & Net Zero Consulting',
    points: [
      '200+ pages SEO-optimised in 1 month',
      '16% increase in organic traffic',
      'Strong keyword architecture built',
      'Technical SEO foundation deployed',
    ],
    tags: ['Technical SEO', 'On-Page SEO', 'Content Strategy'],
    accent: 'green',
  },
]

const TOOLKIT = [
  {
    icon: '🔍', title: 'SEO', accent: 'coral',
    skills: ['On-Page SEO', 'Technical SEO', 'Local SEO (GMB)', 'Keyword Research', 'Competitor Analysis'],
  },
  {
    icon: '📣', title: 'Paid Marketing', accent: 'teal',
    skills: ['Google Ads', 'Campaign Setup', 'Audience Targeting', 'Funnel Optimisation', 'ROAS Tracking'],
  },
  {
    icon: '📱', title: 'Social Media', accent: 'purple',
    skills: ['Instagram Growth', 'LinkedIn Marketing', 'Content Strategy', 'Personal Branding', 'Testimonials'],
  },
  {
    icon: '✍️', title: 'Content & Web', accent: 'green',
    skills: ['Landing Pages', 'SEO Blogging', 'Website SEO', 'Location Pages', 'Conversion Copy'],
  },
]

const NUMBERS = [
  { icon: '👥', num: '15K+', label: 'Leads Generated',   accent: 'coral' },
  { icon: '📈', num: '45%',  label: 'Organic Traffic ↑', accent: 'navy' },
  { icon: '🔍', num: '15+',  label: 'Page 1 Keywords',   accent: 'teal' },
  { icon: '📞', num: '20+',  label: 'High-Value Calls',   accent: 'green' },
  { icon: '📄', num: '200+', label: 'Pages Optimised',   accent: 'purple' },
]

// ─── HOOKS ──────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-l, .reveal-r')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function useNavScroll() {
  useEffect(() => {
    const nav = document.querySelector('.nav')
    const links = document.querySelectorAll('.nav a')
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      nav.classList.toggle('nav--solid', window.scrollY > 80)
      let cur = ''
      sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 200) cur = s.id })
      links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${cur}`))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

function useBlobParallax() {
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      document.querySelector('.blob-1')?.style.setProperty('transform', `translateY(${y * 0.15}px)`)
      document.querySelector('.blob-2')?.style.setProperty('transform', `translateY(${y * -0.1}px)`)
      document.querySelector('.blob-3')?.style.setProperty('transform', `translateY(${y * 0.08}px)`)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

// ─── TILT CARD ──────────────────────────────────────────
function TiltCard({ className, children }) {
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 8
    const y = ((e.clientY - r.top)  / r.height - 0.5) * 8
    e.currentTarget.style.transform = `translateY(-6px) rotateX(${-y}deg) rotateY(${x}deg)`
  }
  const handleLeave = (e) => { e.currentTarget.style.transform = '' }
  return (
    <div className={className} onMouseMove={handleMove} onMouseLeave={handleLeave} style={{ transformStyle: 'preserve-3d', perspective: '800px' }}>
      {children}
    </div>
  )
}

// ─── COMPONENTS ─────────────────────────────────────────

function Nav() {
  useNavScroll()
  return (
    <nav className="nav">
      <div className="nav-logo">VM.</div>
      <ul>
        {['about', 'works', 'toolkit', 'numbers', 'contact'].map((id) => (
          <li key={id}><a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a></li>
        ))}
      </ul>
    </nav>
  )
}

function Hero() {
  useBlobParallax()
  return (
    <section id="hero" className="hero">
      <div className="blob blob-1" /><div className="blob blob-2" /><div className="blob blob-3" />
      <div className="eyebrow"><span className="eyebrow-dot" />Available for opportunities</div>
      <h1 className="hero-name">Vivek M.</h1>
      <p className="hero-role">Digital Marketing Specialist</p>
      <p className="hero-tagline">I help brands grow through SEO,<br />performance marketing &amp; social strategy.</p>
      <div className="hero-tags">
        {HERO_TAGS.map((t) => <span key={t} className="htag">{t}</span>)}
      </div>
      <div className="hero-stats">
        {HERO_STATS.map((s, i) => (
          <div key={s.label} className={`hstat hstat-${i}`}>
            <div className="hstat-num">{s.num}</div>
            <div className="hstat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="scroll-cue"><div className="scroll-line" /><span>SCROLL</span></div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="reveal-l">
          <div className="about-deco" />
          <div className="about-hey">Hey,<br />I'm<br />Vivek!</div>
          <div className="about-loc">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Coimbatore
          </div>
        </div>
        <div className="reveal-r">
          <span className="badge badge-coral">About Me</span>
          <p className="about-bio">
            A results-driven digital marketer who loves turning data into growth. Whether it's ranking on Page 1, generating thousands of leads, or building a brand from scratch, I make it happen with strategy, creativity and hustle.
          </p>
          <div className="traits">
            {TRAITS.map((t, i) => (
              <div key={t.name} className={`trait reveal delay-${i+1}`}>
                <div className={`trait-icon ti-${i}`}>{t.icon}</div>
                <div><div className="trait-name">{t.name}</div><div className="trait-desc">{t.desc}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Works() {
  return (
    <section id="works" className="works">
      <div className="section-head reveal">
        <span className="badge badge-teal">Portfolio</span>
        <h2 className="section-title">What I've Worked On</h2>
        <p className="section-sub">5 brands · 5 industries · real results</p>
      </div>
      <div className="works-row works-top">
        {WORK_CARDS.slice(0, 3).map((c, i) => (
          <TiltCard key={c.brand} className={`work-card wc-${c.accent} reveal delay-${i+1}`}>
            <div className="wc-brand">{c.brand}</div>
            <div className="wc-type">{c.type}</div>
            <span className={`wc-result wr-${c.accent}`}>{c.result}</span>
          </TiltCard>
        ))}
      </div>
      <div className="works-row works-bot">
        {WORK_CARDS.slice(3).map((c, i) => (
          <TiltCard key={c.brand} className={`work-card wc-${c.accent} reveal delay-${i+4}`}>
            <div className="wc-brand">{c.brand}</div>
            <div className="wc-type">{c.type}</div>
            <span className={`wc-result wr-${c.accent}`}>{c.result}</span>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}

function CaseWalmart() {
  return (
    <section id="walmart" className="case case-walmart">
      <div className="case-inner">
        <div className="reveal-l">
          <span className="badge badge-coral">Case Study 01</span>
          <h2 className="section-title" style={{color:'var(--coral)'}}>Walmart Vriddhi</h2>
          <p className="case-meta">Lead Generation Campaign · 2022–2023 · Role: Digital Marketing Executive</p>
          <p className="case-desc">Ran digital campaigns to onboard MSMEs &amp; SMEs onto Walmart Vriddhi — enabling businesses to sell on Flipkart. Handled end-to-end strategy from targeting to conversion.</p>
          <div className="mini-tags">
            {['Lead Generation','Paid Campaigns','Audience Targeting','Funnel Optimisation'].map(t=><span key={t} className="mini-tag">{t}</span>)}
          </div>
          <div className="result-list">
            {WALMART_RESULTS.map(r=>(
              <div key={r} className="result-item"><span className="rarrow">→</span>{r}</div>
            ))}
          </div>
        </div>
        <div className="reveal-r">
          <div className="big-stat-card">
            <div className="bs-icon">🚀</div>
            <div className="bs-num">15,000+</div>
            <div className="bs-name">QUALIFIED LEADS</div>
            <div className="bs-sub">MSMEs &amp; SMEs<br/>with high purchase intent</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CaseZuri() {
  return (
    <section id="zuri" className="case case-zuri">
      <div className="case-inner">
        <div className="reveal-l">
          <span className="badge badge-teal">Case Study 02</span>
          <h2 className="section-title" style={{color:'var(--teal)'}}>Zuri Hotels &amp; Resorts</h2>
          <p className="case-meta">SEO &amp; Organic Growth · 5-Star Chain · Kerala · Karnataka · Goa</p>
          <p className="case-desc">Scaled organic bookings for a premium 5-star hotel chain through smart SEO, keyword ranking, and content strategy, no ad spend required.</p>
          <div className="mini-tags">
            {['SEO Strategy','Keyword Ranking','Content Optimisation','Conversion Growth'].map(t=><span key={t} className="mini-tag">{t}</span>)}
          </div>
        </div>
        <div className="reveal-r">
          <div className="zuri-stats">
            {ZURI_STATS.map(s=>(
              <div key={s.label} className={`zs-card zs-${s.accent}`}>
                <div className="zs-num">{s.num}</div>
                <div className="zs-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="strategy-box">
            <div className="strategy-title">Strategy Used</div>
            {ZURI_STRATEGY.map(s=><div key={s} className="strategy-item"><span>→</span>{s}</div>)}
          </div>
        </div>
      </div>
    </section>
  )
}

function MoreWins() {
  return (
    <section id="more-wins" className="more-wins">
      <div className="section-head reveal">
        <span className="badge badge-purple">More Wins</span>
        <h2 className="section-title">More Wins</h2>
      </div>
      <div className="wins-grid">
        {MORE_WINS.map((w, i) => (
          <TiltCard key={w.brand} className={`win-card wn-${w.accent} reveal delay-${i+1}`}>
            <div className="wn-brand">{w.brand}</div>
            <div className="wn-sub">{w.sub}</div>
            <div className="wn-points">
              {w.points.map(p=><div key={p} className="wn-point"><span>→</span>{p}</div>)}
            </div>
            <div className="wn-tags">
              {w.tags.map(t=><span key={t} className="wn-tag">{t}</span>)}
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}

function Toolkit() {
  return (
    <section id="toolkit" className="toolkit">
      <div className="toolkit-wrap">
      <div className="section-head reveal">
        <span className="badge badge-yellow">Skills</span>
        <h2 className="section-title">My Toolkit</h2>
        <p className="section-sub">Skills I use every day</p>
      </div>
      <div className="toolkit-grid">
        {TOOLKIT.map((t, i) => (
          <div key={t.title} className={`tk-card reveal delay-${i+1}`}>
            <div className="tk-head">
              <div className={`tk-icon tk-${t.accent}`}>{t.icon}</div>
              <div className="tk-title">{t.title}</div>
            </div>
            <div className="tk-skills">
              {t.skills.map(s=><span key={s} className="tk-skill">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

function Numbers() {
  return (
    <section id="numbers" className="numbers">
      <div className="section-head reveal">
        <span className="badge badge-yellow">Impact</span>
        <h2 className="section-title">By the Numbers</h2>
      </div>
      <div className="numbers-grid">
        {NUMBERS.map((n, i) => (
          <TiltCard key={n.label} className={`num-card nc-${n.accent} reveal delay-${i+1}`}>
            <div className="nc-icon">{n.icon}</div>
            <div className="nc-num">{n.num}</div>
            <div className="nc-label">{n.label}</div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="reveal">
          <h2 className="contact-title">Let's work<br />together!</h2>
          <p className="contact-sub">Open to opportunities in digital marketing, SEO &amp; performance marketing.</p>
        </div>
        <div className="contact-cards reveal">
          <a href="mailto:mvivekraz@gmail.com" className="cc cc-coral">
            <div className="cc-icon">✉️</div>
            <div className="cc-label">Email</div>
            <div className="cc-value">mvivekraz@gmail.com</div>
          </a>
          <a href="tel:+918883542106" className="cc cc-teal">
            <div className="cc-icon">📞</div>
            <div className="cc-label">Phone</div>
            <div className="cc-value">+91 8883542106</div>
          </a>
          <div className="cc cc-purple">
            <div className="cc-icon">📍</div>
            <div className="cc-label">Location</div>
            <div className="cc-value">Coimbatore, India</div>
          </div>
        </div>
        <div className="reveal">
          <a href="https://linkedin.com" className="linkedin-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
        </div>
        <p className="footer-note reveal">Thanks for stopping by....</p>
      </div>
    </section>
  )
}

// ─── APP ────────────────────────────────────────────────
export default function App() {
  useScrollReveal()
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Works />
      <CaseWalmart />
      <CaseZuri />
      <MoreWins />
      <Toolkit />
      <Numbers />
      <Contact />
    </>
  )
}
