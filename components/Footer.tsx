import Link from 'next/link'
import { Logo } from './Icons'

const services = [
  { label: 'Staffing & VA',    href: '#services' },
  { label: 'Data entry',        href: '#services' },
  { label: 'Manual QA',         href: '#services' },
  { label: 'Data engineering',  href: '#services' },
]
const company = [
  { label: 'About',         href: '#about' },
  { label: 'Testimonials',  href: '#testimonials' },
  { label: 'Contact',       href: '#contact' },
  { label: 'Free audit',    href: '#contact' },
]

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="#top" className="brand">
              <span className="brand-mark"><Logo /></span>
              <span className="brand-name">ET Data Solutions</span>
            </Link>
            <p>India-based outsourcing. Globally delivered. Operating since 2014.</p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h5>Services</h5>
              {services.map((l) => <Link key={l.label} href={l.href}>{l.label}</Link>)}
            </div>
            <div className="foot-col">
              <h5>Company</h5>
              {company.map((l) => <Link key={l.label} href={l.href}>{l.label}</Link>)}
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} ET Data Solutions. All rights reserved.</span>
          <span>Indore, India · Serving US, UK, Canada, AU</span>
        </div>
      </div>
    </footer>
  )
}
