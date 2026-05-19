import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CACES_FORMATIONS } from '../data.js'

const SANTE_SECURITE = [
  { title: 'S.S.T', prix: 'À partir de 159€', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=100&q=80' },
  { title: 'Formateur S.S.T', prix: 'À partir de 500€/pers', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=100&q=80' },
  { title: 'Sécurité des personnels', prix: 'À partir de 200€', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=100&q=80' },
  { title: 'Port du harnais', prix: 'À partir de 199€', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=80' },
  { title: 'EPI', prix: 'À partir de 500€', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&q=80' },
  { title: 'Gestes et Postures', prix: 'À partir de 500€', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=100&q=80' },
  { title: 'Guide file et Serre file', prix: 'Nous contacter', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=100&q=80' },
  { title: 'Manipulation des extincteurs', prix: 'Nous contacter', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=100&q=80' },
  { title: 'SSIAP 1', prix: 'À partir de 1155€ HT', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&q=80' },
  { title: 'SSIAP 2', prix: 'À partir de 360€', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=80' },
  { title: 'SSIAP 3', prix: 'À partir de 580€', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=100&q=80' },
]

const PREVENTION = [
  { title: 'AIPR', prix: 'À partir de 149€', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=100&q=80' },
  { title: 'Travail en hauteur', prix: 'À partir de 199€', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=100&q=80' },
  { title: 'Initiation au marquage au sol', prix: 'À partir de 1490€', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=100&q=80' },
  { title: 'Échafaudages fixes & roulants', prix: 'À partir de 269€', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=80' },
  { title: 'Outillage en espaces verts', prix: 'À partir de 1250€', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=100&q=80' },
  { title: 'Élingage et gestes de commandements', prix: 'À partir de 199€', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=100&q=80' },
  { title: 'Habilitations électriques', prix: 'À partir de 239€', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&q=80' },
  { title: 'CATEC®', prix: 'À partir de 700€', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&q=80' },
  { title: 'Amiante Opérateur & Encadrement', prix: 'Prix sur demande', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=80' },
  { title: 'PRAP IBC & MAC', prix: 'Prix sur demande', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=100&q=80' },
  { title: 'SECUFER', prix: 'Prix sur demande', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=100&q=80' },
  { title: 'Prévention risque plomb', prix: 'À partir de 299€/pers', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=100&q=80' },
  { title: 'PASI BTP®', prix: 'À partir de 290€/pers', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=100&q=80' },
]

export default function Services() {
  const [tab, setTab] = useState('caces')
  const [autresTab, setAutresTab] = useState('sante')

  return (
    <>
      <div className="page-header">
        <h1>Nos Formations</h1>
        <p>Accueil / Formations</p>
      </div>

      {/* Badges */}
      <section>
        <div className="container">
         

          {/* Tabs principaux */}
          <div style={{ display: 'flex', gap: 0, marginBottom: 40, borderBottom: '2px solid #eee', justifyContent: 'center' }}>
            {[['caces', 'Formations CACES®'], ['autres', 'Autres formations']].map(([key, label]) => (
              <button key={key} onClick={() => setTab(key)}
                style={{ padding: '14px 32px', background: 'none', border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 500, color: tab === key ? '#1E9BC4' : '#888', borderBottom: tab === key ? '2px solid #1E9BC4' : '2px solid transparent', marginBottom: -2, transition: '.3s', fontFamily: "'DM Sans', sans-serif" }}>
                {label}
              </button>
            ))}
          </div>

          {/* Formations CACES */}
          {tab === 'caces' && (
            <>
              <div style={{ textAlign: 'center', marginBottom: 32 }}>
                <div className="section-title">Formations CACES®</div>
                <p style={{ color: '#666', marginTop: 8, fontSize: 14 }}>Certifications valables 5 à 10 ans — Initiale et recyclage disponibles</p>
              </div>
              <div className="services-grid">
                {CACES_FORMATIONS.map(s => (
                  <div key={s.id} className="service-card">
                    <img src={s.img} alt={s.title} />
                    <div className="service-body">
                      <h5>{s.title}</h5>
                      <p style={{ fontWeight: 600, color: '#1E9BC4', fontSize: 13, marginBottom: 6 }}>{s.subtitle}</p>
                      <p>{s.desc}</p>
                      <div style={{ fontSize: 12, color: '#999', margin: '10px 0', lineHeight: 2 }}>
                        <span>⏱ {s.duree}</span><br />
                        <span>📅 Validité {s.validite}</span><br />
                        <span>💳 CPF / OPCO</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong style={{ color: '#1E9BC4', fontSize: 15 }}>{s.prix}</strong>
                        <Link to="/contact" className="service-link">S'inscrire →</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Autres formations */}
          {tab === 'autres' && (
            <>
              <div style={{ textAlign: 'center', marginBottom: 32 }}>
                <div className="section-title">Autres formations</div>
              </div>

              {/* Sous-onglets style LFP */}
              <div style={{ display: 'flex', gap: 12, marginBottom: 36, flexWrap: 'wrap' }}>
                {[['sante', 'Formations Santé & Sécurité'], ['prevention', 'Formations Prévention des risques']].map(([key, label]) => (
                  <button key={key} onClick={() => setAutresTab(key)}
                    style={{ padding: '10px 24px', borderRadius: 30, border: `2px solid #1E9BC4`, cursor: 'pointer', fontSize: 14, fontWeight: 500, background: autresTab === key ? '#1E9BC4' : 'transparent', color: autresTab === key ? '#fff' : '#1E9BC4', transition: '.3s', fontFamily: "'DM Sans', sans-serif" }}>
                    {label}
                  </button>
                ))}
              </div>

              {/* Liste style LFP — image + titre + prix en 3 colonnes */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0 40px' }}>
                {(autresTab === 'sante' ? SANTE_SECURITE : PREVENTION).map((f, i) => (
                  <Link to="/contact" key={i} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 16, padding: '16px 0', borderBottom: '1px solid #eee', transition: '.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#FFF5E6'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                    <img src={f.img} alt={f.title} style={{ width: 64, height: 64, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontWeight: 600, color: '#182333', fontSize: 14, marginBottom: 4 }}>{f.title}</div>
                      <div style={{ fontSize: 13, color: '#1E9BC4', fontWeight: 500 }}>{f.prix}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <div className="appointment-section" style={{ marginTop: 60 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-subtitle" style={{ color: '#FDA12B' }}>Inscription</div>
          <div className="section-title" style={{ color: '#fff', marginBottom: 16 }}>Une formation vous intéresse ?</div>
          <p style={{ color: 'rgba(255,255,255,.7)', marginBottom: 32, fontSize: 15, lineHeight: 1.8, maxWidth: 600, margin: '0 auto 32px' }}>
            Contactez-nous pour connaître les prochaines sessions, obtenir un devis ou démarrer votre dossier CPF / OPCO.
          </p>
          <Link to="/contact" className="btn-primary">Demander un devis gratuit</Link>
        </div>
      </div>
    </>
  )
}