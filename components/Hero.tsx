import Link from 'next/link'
import { ArrowRight, Shield, Clock, Star } from './Icons'
import { Reveal } from './Reveal'

const stats = [
  { n: '99%',  label: 'Accuracy rate',    sub: 'Multi-level QC on every project', brand: true  },
  { n: '10+',  label: 'Years experience', sub: 'Operating globally since 2014',   brand: false },
  { n: '100+', label: 'Clients served',   sub: 'Across US, UK, Canada & AU',      brand: false },
  { n: '24/7', label: 'Always on',        sub: 'No gaps · any timezone',          brand: true  },
]

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <Reveal>
            <div className="pill">
              <span className="pill-dot" />
              Now accepting new clients · 7-day delivery
            </div>
            <h1>
              The work that
              <br />
              <span className="accent">slows you down</span>
              <br />
              doesn't have to.
            </h1>
            <p className="lede hero-sub">
              ET Data Solutions handles staffing, data entry, QA testing, and data engineering — quietly, accurately, and on schedule. Your team stays focused on what only they can do.
            </p>
            <div className="hero-cta">
              <Link href="#contact" className="btn-primary">
                Book a free consultation
                <ArrowRight />
              </Link>
              <Link href="#services" className="btn-secondary">
                See what we handle
              </Link>
            </div>
            <div className="trust-row">
              <span><Shield size={13} /> 30-day guarantee</span>
              <span><Clock size={13} /> First delivery in 7 days</span>
              <span><Star size={13} /> Rated 4.9 / 5 by clients</span>
            </div>
          </Reveal>

          <Reveal className="float">
            <div className="glass-card">
              <span className="blob-a" />
              <span className="blob-b" />
              <div className="dash">
                <div className="dash-bar">
                  <div className="dash-dots"><span /><span /><span /></div>
                  <div className="dash-title">operations · live</div>
                </div>
                <div className="dash-grid">
                  {stats.map((s) => (
                    <div key={s.label} className="dash-cell">
                      <div className={`dash-num${s.brand ? ' brand' : ''}`}>{s.n}</div>
                      <div className="dash-label">{s.label}</div>
                      <div className="dash-sub">{s.sub}</div>
                    </div>
                  ))}
                </div>
                <Link href="#contact" className="dash-foot">
                  Get a free operations audit
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
