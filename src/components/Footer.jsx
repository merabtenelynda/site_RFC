import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40, paddingBottom: 48 }}>

          {/* Logo + description */}
          <div>
<img src="/src/assets/logo.png" alt="FRC Technique" style={{ height: 50, width: 'auto' }} />          <p className="footer-desc">Organisme de formation certifié Qualiopi, spécialisé dans les formations CACES® et la prévention des risques. Montataire (60).</p>
         
          </div>

          {/* Liens rapides */}
          <div>
            <h4>Liens rapides</h4>
            <div className="footer-links">
              <Link to="/">Accueil</Link>
              <Link to="/about">À propos</Link>
              <Link to="/services">Formations</Link>
              <Link to="/team">Notre équipe</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4>Contact</h4>
            <div className="footer-info">
              <p>📍 Montataire (60), France</p>
              <p>✉️ contact@frc-technique.fr</p>
              <p>🕐 Lun - Ven : 08h - 18h</p>
              <p>✅ Certifié Qualiopi</p>
              <p>💳 SIREN : 880 704 754</p>
            </div>
          </div>

          {/* Mentions légales */}
          <div>
            <h4>Informations légales</h4>
           <div className="footer-links">
 <Link to="/mentions-legales" onClick={() => window.scrollTo(0,0)}>Mentions légales</Link>
<Link to="/cgv" onClick={() => window.scrollTo(0,0)}>CGV</Link>
<Link to="/confidentialite" onClick={() => window.scrollTo(0,0)}>Politique de confidentialité</Link>
  <a href="#!">Accessibilité</a>
  <a href="#!">Personnes en situation de handicap</a>
  <a href="#!">Certification Qualiopi</a>
</div>

          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <span>© 2026 FRC Technique. Tous droits réservés.</span>
          <span>Certifié <strong style={{ color: '#1E9BC4' }}>Qualiopi</strong> — SIREN 880 704 754</span>
        </div>
      </div>
    </footer>
  )
}