import { Reveal } from './Reveal'

const featured = {
  quote: 'They became part of how our company operates. We stopped thinking of them as a vendor about three months in — they just know the work better than we do at this point.',
  initials: 'SM',
  name: 'Sarah Marshall',
  role: 'VP Operations · Logistics SaaS, UK',
}
const minis = [
  {
    quote: '99% accuracy isn\u2019t marketing — we audited a quarter\u2019s output and found three errors in 14,000 records.',
    initials: 'DR',
    name: 'Daniel Rao',
    role: 'CTO · Healthtech, US',
    avatarStyle: { background: 'linear-gradient(135deg,#3dd4c0,#4d7cff)' },
  },
  {
    quote: 'Faster than hiring locally, half the cost, and the QA team flagged issues our devs had missed for months.',
    initials: 'EN',
    name: 'Emma Nordstrom',
    role: 'Head of Product · Fintech, AU',
    avatarStyle: { background: 'linear-gradient(135deg,#ff5a1f,#ffb088)' },
  },
]

export function Testimonials() {
  return (
    <section id="testimonials">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Testimonials</div>
          <h2>What clients <span className="serif-italic">actually say</span>.</h2>
        </Reveal>
        <Reveal stagger>
          <div className="tmnl-grid">
            <div className="tmnl tmnl-featured">
              <span className="tmnl-quote-mark">"</span>
              <p className="tmnl-quote">{featured.quote}</p>
              <div className="tmnl-attr">
                <div className="tmnl-avatar">{featured.initials}</div>
                <div>
                  <div className="tmnl-name">{featured.name}</div>
                  <div className="tmnl-role">{featured.role}</div>
                </div>
              </div>
            </div>
            <div className="tmnl-stack">
              {minis.map((m) => (
                <div key={m.name} className="tmnl-mini">
                  <p>"{m.quote}"</p>
                  <div className="tmnl-attr">
                    <div className="tmnl-avatar" style={m.avatarStyle}>{m.initials}</div>
                    <div>
                      <div className="tmnl-name">{m.name}</div>
                      <div className="tmnl-role">{m.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
