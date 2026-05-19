import { Link } from 'react-router-dom'
import { STATS } from '../data.js'
import apropos from '../assets/apropos.jpg'

export default function About() {
  return (
    <>
      <div className="page-header">
        <h1>Qui sommes-nous ?</h1>
        <p>Accueil / À propos</p>
      </div>

      {/* Présentation */}
      <section>
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              <img className="about-img" src={apropos} alt="FRC Technique" />
            
            </div>
            <div>
              <div className="section-tag">
                <div>
                  <div className="section-subtitle">À propos</div>
                  <div className="section-title">FRC Technique — Votre partenaire formation depuis 2020</div>
                </div>
              </div>
              <p style={{ marginTop: 20, lineHeight: 1.8, color: '#666' }}>
                FRC Technique est un organisme de formation professionnelle certifié Qualiopi, créé en janvier 2020 et basé à Montataire (60). Spécialisés dans les formations CACES® et la prévention des risques, nous intervenons auprès des professionnels du BTP, de la logistique et de l'industrie.
              </p>
              <p style={{ marginTop: 12, lineHeight: 1.8, color: '#666' }}>
                Notre approche : des groupes de 6 personnes maximum, du matériel récent, et des formateurs certifiés qui s'adaptent au niveau de chaque stagiaire pour garantir un taux de réussite proche de 100%.
              </p>
              <div className="about-checks">
                {['Certifié Qualiopi', 'Éligible CPF', 'Formateurs certifiés'].map(c => (
                  <div key={c} className="check-item"><div className="check-icon">✓</div><span>{c}</span></div>
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
                <Link to="/contact" className="btn-primary">Nous contacter</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div style={{ background: '#1E9BC4', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, textAlign: 'center' }}>
            {STATS.map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 48, fontWeight: 800, color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.85)', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nos engagements */}
      <section style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="features-grid">
            <div>
              <div className="section-tag">
                <div>
                  <div className="section-subtitle">Nos engagements</div>
                  <div className="section-title">Une expérience de formation unique</div>
                </div>
              </div>
              <p style={{ marginTop: 20, color: '#666', lineHeight: 1.8 }}>
                Toutes les conditions sont réunies pour faire de votre formation CACES® une expérience unique et efficace.
              </p>
              <div className="features-list">
                {[
                  { title: 'Certifié Qualiopi', desc: 'Certification nationale, gage de qualité reconnu par l\'État.' },
                  { title: 'Groupes de 6 max', desc: 'Temps de conduite optimal pour chaque stagiaire.' },
                  { title: '98% de réussite', desc: 'Pédagogie adaptée au niveau de chaque candidat.' },
                  { title: 'Matériel récent', desc: 'Engins et équipements aux normes pour un apprentissage optimal.' },
                ].map(it => (
                  <div key={it.title} className="feature-item">
                    <h6><span className="check-icon">✓</span>{it.title}</h6>
                    <p>{it.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-img-wrap">
              <img className="about-img" src="https://i.pinimg.com/1200x/12/37/ad/1237ad0c5aa2f0b13ee102343068a33e.jpg" alt="formation" />
              <div className="exp-badge">
                <span className="num">98%</span>
                <span className="lbl">Réussite</span>
                <span className="sub">CACES®</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}