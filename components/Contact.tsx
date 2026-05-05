import { ArrowRight, Mail, Phone, MapPin } from './Icons'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal>
          <div className="contact-card">
            <div className="contact-grid">
              <div>
                <div className="eyebrow">Contact</div>
                <h2>Let's see if we're <span className="serif-italic">a fit</span>.</h2>
                <p>30-minute call. No deck, no pitch — we'll walk through what's slowing you down and tell you honestly whether we're the right team for it.</p>
                <a href="mailto:bobby@etdatasolutions.com" className="btn-primary">
                  Book a free consultation
                  <ArrowRight />
                </a>
              </div>
              <div className="contact-meta">
                <a href="mailto:bobby@etdatasolutions.com">
                  <Mail />
                  bobby@etdatasolutions.com
                </a>
                <a href="tel:+13023579776">
                  <Phone />
                  +1-302-357-9776 · US
                </a>
                <a href="tel:+916265348189">
                  <Phone />
                  +91 62653 48189 · India
                </a>
                <span>
                  <MapPin />
                  Indore, India · serving globally
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
