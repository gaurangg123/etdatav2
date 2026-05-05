import Link from 'next/link'
import { Logo } from './Icons'

const links = [
  { label: 'Home',         href: '#top' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

export function Navbar() {
  return (
    <nav className="nav">
      <Link href="#top" className="brand">
        <span className="brand-mark">
          <Logo />
        </span>
        <span>
          <span className="brand-name">ET Data Solutions</span>
        </span>
      </Link>
      <div className="nav-links">
        {links.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </div>
      <Link href="#contact" className="nav-cta">
        Free Consultation
      </Link>
    </nav>
  )
}
