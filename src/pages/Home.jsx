import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CACES_FORMATIONS, TESTIMONIALS, STATS, STEPS, FAQ, SLIDES } from '../data.js'
import hero from '../assets/hero.png'
import apropos from '../assets/apropos.jpg'
import formations from '../assets/formations.jpg'
import pratique from '../assets/pratique.jpg'
import examen from '../assets/examen.png'
import certificat from '../assets/certificat.png'
import vert1 from '../assets/vert1.png'
import vert2 from '../assets/vert2.png'
import vert3 from '../assets/vert3.png'
import vert4 from '../assets/vert4.png'
const FACTS = [
  { num: '01', title: 'Formation théorique', desc: 'Dure généralement une journée (7h). Elle se déroule en groupe dans une salle de formation. Réglementation, sécurité, responsabilités.', img: '/src/assets/formations.jpg' },
  { num: '02', title: 'Formation pratique', desc: 'Dure entre 1 et 3 jours sur aire d\'exercice spécifique dotée des équipements requis. Groupes de 6 personnes maximum.', img: '/src/assets/pratique.jpg' },
  { num: '03', title: 'Passage du CACES®', desc: 'Validation des compétences théoriques et pratiques. Note minimale de 70/100 requise. Certificat valable 5 à 10 ans.', img: '/src/assets/examen.png' },
  { num: '04', title: 'Obtention du certificat', desc: 'Après validation, vous recevez votre certificat CACES® sous quelques jours. Valable 5 à 10 ans selon la catégorie.', img: '/src/assets/certificat.png' },
]
function Hero() {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef(null)
  const go = (n) => {
    setIdx((n + SLIDES.length) % SLIDES.length)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 5000)
  }
  useEffect(() => {
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 5000)
    return () => clearInterval(timerRef.current)
  }, [])
  const s = SLIDES[idx]
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'relative', height: 600, display: 'flex', alignItems: 'center' }}>
        <img src={s.img} alt={s.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,.75), rgba(0,0,0,.35))' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h5 style={{ color: '#1E9BC4', fontSize: 16, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>{s.sub}</h5>
          <h1 style={{ color: '#fff', fontSize: 'clamp(32px,5vw,58px)', lineHeight: 1.1, maxWidth: 700, marginBottom: 24 }}>{s.title}</h1>
          <div style={{ display: 'flex', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}>
            {['Certifié Qualiopi', 'Éligible CPF', 'Financement OPCO'].map(t => (
              <span key={t} style={{ color: 'rgba(255,255,255,.8)', fontSize: 14 }}>● {t}</span>
            ))}
          </div>
          <Link to="/services" className="btn-primary" style={{ marginRight: 12 }}>Nos formations</Link>
          <Link to="/contact" className="btn-primary" style={{ background: 'transparent', border: '2px solid #fff' }}>Nous contacter</Link>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 2 }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => go(i)} style={{ width: i === idx ? 24 : 8, height: 8, borderRadius: 4, background: i === idx ? '#1E9BC4' : 'rgba(255,255,255,.4)', border: 'none', cursor: 'pointer', transition: '.3s' }} />
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: 24, right: 24, display: 'flex', gap: 10, zIndex: 2 }}>
        <button onClick={() => go(idx - 1)} style={{ width: 48, height: 48, borderRadius: '50%', background: '#182333', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer' }}>‹</button>
        <button onClick={() => go(idx + 1)} style={{ width: 48, height: 48, borderRadius: '50%', background: '#182333', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer' }}>›</button>
      </div>
    </div>
  )
}

export default function Home() {
  const [testiIdx, setTestiIdx] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', formation: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))
  const submit = e => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000) }

  return (
    <>
      <Hero />

      {/* Stats */}
      <div style={{ background: '#1E9BC4', padding: '32px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, textAlign: 'center' }}>
            {STATS.map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 42, fontWeight: 800, color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.85)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* À propos */}
      <section>
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              <img className="about-img" src="/src/assets/apropos.jpg" alt="FRC Technique" />
              
            </div>
            <div>
              <div className="section-tag">
                <div>
                  <div className="section-subtitle">Qui sommes-nous ?</div>
                  <div className="section-title">FRC Technique — Centre de formation professionnelle</div>
                </div>
              </div>
              <p style={{ marginTop: 20, lineHeight: 1.8, color: '#666' }}>
                FRC Technique est un organisme de formation certifié Qualiopi, spécialisé dans les formations CACES® et la prévention des risques professionnels. Basé à Montataire, nous intervenons auprès des entreprises du BTP, de la logistique et de l'industrie.
              </p>
              <p style={{ marginTop: 12, lineHeight: 1.8, color: '#666' }}>
                Nos formateurs sont des testeurs certifiés avec une solide expérience terrain. Chaque formation est adaptée au niveau du stagiaire pour garantir la réussite aux épreuves CACES®.
              </p>
              <div className="about-checks">
                {['Certifié Qualiopi', 'Éligible CPF', 'Formateurs certifiés'].map(c => (
                  <div key={c} className="check-item"><div className="check-icon">✓</div><span>{c}</span></div>
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
                <Link to="/about" className="btn-primary">En savoir plus</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Formations */}
      <section style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div className="section-tag">
              <div>
                <div className="section-subtitle">Nos formations</div>
                <div className="section-title">CACES® & Sécurité professionnelle</div>
              </div>
            </div>
            <Link to="/services" className="btn-primary">Toutes les formations</Link>
          </div>
          <div className="services-grid">
            {CACES_FORMATIONS.slice(0, 8).map(s => (
              <div key={s.id} className="service-card">
                <img src={s.img} alt={s.title} />
                <div className="service-body">
                  <h5>{s.title}</h5>
                  <p>{s.desc}</p>
                  <Link to="/services" className="service-link">En savoir plus →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Facts */}
    <div style={{ padding: '48px 0 0' }}>
  <div className="container">
    <div className="section-tag">
      <div>
        <div className="section-subtitle">Processus</div>
<div className="section-title">Comment obtenir votre CACES® ?</div>
      </div>
    </div>
  </div>
</div>
      <div className="facts-grid">
        {FACTS.map(f => (
          <div key={f.num} className="fact-card">
            <img className="fact-img" src={f.img} alt={f.title} />
            <div className="fact-overlay">
              <div className="fact-num">{f.num}</div>
              <div className="fact-title">{f.title}</div>
              <div className="fact-desc">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Financement */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-subtitle">Financement</div>
            <div className="section-title">Votre formation éligible à des financements</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
            {[
              { icon: '💳', title: 'Financement via CPF', desc: 'Vous disposez d\'un compte formation tout au long de votre vie professionnelle. Cumulez des droits comptabilisés en euros.' },
              { icon: '🏢', title: 'Financement via les OPCO', desc: 'Les salariés peuvent se tourner vers l\'OPCO référent de leur entreprise pour développer leurs compétences.' },
              { icon: '🇫🇷', title: 'Financement via France Travail', desc: 'France Travail accompagne les demandeurs d\'emploi et certains créateurs d\'entreprise dans leur projet de formation.' },
            ].map(f => (
              <div key={f.title} style={{ background: '#f8f9fa', borderRadius: 8, padding: 28, textAlign: 'center', borderTop: '4px solid #1E9BC4' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{f.icon}</div>
                <h5 style={{ color: '#182333', marginBottom: 12, fontSize: 18 }}>{f.title}</h5>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/contact" className="btn-primary">Tester mon éligibilité</Link>
          </div>
        </div>
      </section>

      
      {/* Inscription */}
      <div className="appointment-section">
        <div className="container">
          <div className="appt-grid">
            <div>
              <div className="section-subtitle" style={{ color: '#1E9BC4' }}>Inscription</div>
              <div className="section-title" style={{ color: '#fff' }}>Inscrivez-vous à une formation CACES® ou Sécurité</div>
              <p className="appt-desc">Remplissez ce formulaire pour vous inscrire ou demander un devis. Nous vous recontactons sous 48h.</p>
              <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['✓ Certifié Qualiopi', '✓ Groupes de 6 personnes max', '✓ Matériel récent', '✓ Formateurs certifiés'].map(i => (
                  <span key={i} style={{ color: 'rgba(255,255,255,.85)', fontSize: 14 }}>{i}</span>
                ))}
              </div>
            </div>
            <form className="appt-form" onSubmit={submit}>
              <input className="form-field" placeholder="Votre nom" value={form.name} onChange={set('name')} required />
              <input className="form-field" type="email" placeholder="Votre email" value={form.email} onChange={set('email')} required />
              <input className="form-field" placeholder="Votre téléphone" value={form.phone} onChange={set('phone')} />
              <input className="form-field" placeholder="Formation souhaitée (ex: CACES R489)" value={form.formation} onChange={set('formation')} />
              <textarea className="form-field full" placeholder="Votre message..." value={form.message} onChange={set('message')} />
              <button className="submit-btn" type="submit">{sent ? '✓ Demande envoyée !' : 'Obtenir un devis gratuit'}</button>
            </form>
          </div>
        </div>
      </div>

      {/* Témoignages */}
      <section style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-subtitle">Témoignages</div>
            <div className="section-title">Il y a un avant et un après FRC Technique</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} style={{ background: '#fff', borderRadius: 8, padding: 28, borderLeft: '4px solid #1E9BC4' }}>
                <div style={{ color: '#1E9BC4', fontSize: 18, marginBottom: 12 }}>★★★★★</div>
                <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 20 }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#1E9BC4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 18 }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#182333', fontSize: 14 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: '#1E9BC4' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-subtitle">FAQ</div>
            <div className="section-title">Vous avez des questions ? Nous avons les réponses</div>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {FAQ.map((f, i) => (
              <div key={i} style={{ borderBottom: '1px solid #eee', overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', textAlign: 'left', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 16, fontWeight: 500, color: '#182333', fontFamily: "'DM Sans', sans-serif" }}>
                  {f.q}
                  <span style={{ color: '#1E9BC4', fontSize: 20, transition: '.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                {openFaq === i && <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, paddingBottom: 20 }}>{f.r}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}