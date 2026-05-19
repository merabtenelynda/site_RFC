import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 10); setVisible(window.scrollY > 80) }
    window.addEventListener('scroll', onScroll)
    setTimeout(() => setVisible(true), 400)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [location])

  return (
    <nav className={`navbar${visible ? ' visible' : ''}${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <img src="/src/assets/logo.png" alt="FRC Technique" style={{ height: 80, width: 'auto' }} />
        </Link>
        <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Formations</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>À propos</Link></li>
{/* <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Équipe</Link></li> */}          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
        <Link to="/contact" className="btn-primary" style={{ fontSize: 13, padding: '10px 20px', marginLeft: 16, display: window.innerWidth < 768 ? 'none' : 'inline-block' }}>
          Obtenir un devis
        </Link>
      </div>
    </nav>
  )
}