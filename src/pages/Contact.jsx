import { useState } from 'react'
import { FAQ } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', formation: '', message: '' })
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))
  const submit = e => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000) }

  const infos = [
    { icon: '📍', title: 'Siège social', text: 'Montataire (60), France', color: '#E63030' },
    { icon: '✉️', title: 'Email', text: 'contact@frc-technique.fr', color: '#1E9BC4' },
    { icon: '🕐', title: 'Horaires', text: 'Lun - Ven : 08h00 - 18h00', color: '#6DB33F' },
    { icon: '💳', title: 'Financement', text: 'CPF · OPCO · France Travail', color: '#E63030' },
  ]

  return (
    <>
      <div className="page-header">
        <h1>Nous Contacter</h1>
        <p>Accueil / Contact</p>
      </div>

      <section style={{ background: '#f8f9fa', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-subtitle">Contact</div>
            <div className="section-title">Parlons de votre projet de formation</div>
            <p style={{ color: '#666', fontSize: 15, marginTop: 12, maxWidth: 520, margin: '12px auto 0' }}>
              Vous souhaitez vous inscrire ou obtenir un devis ? Nous vous répondons sous 48h.
            </p>
          </div>

          {/* Cards info */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginBottom: 60 }}>
            {infos.map(c => (
              <div key={c.title} style={{
                background: '#fff',
                borderRadius: 12,
                padding: '28px 20px',
                textAlign: 'center',
                boxShadow: '0 4px 24px rgba(0,0,0,.06)',
                transform: 'translateY(0)',
                transition: 'transform .3s, box-shadow .3s',
                borderTop: `4px solid ${c.color}`,
                cursor: 'default'
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.12)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,.06)' }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: c.color + '15',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24, margin: '0 auto 16px'
                }}>{c.icon}</div>
                <h6 style={{ color: '#1A1A1A', fontSize: 15, fontWeight: 600, marginBottom: 6, fontFamily: "'Barlow Condensed', sans-serif" }}>{c.title}</h6>
                <p style={{ color: '#666', fontSize: 13, lineHeight: 1.6 }}>{c.text}</p>
              </div>
            ))}
          </div>

          {/* Formulaire */}
          <div style={{
            background: '#fff',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 8px 48px rgba(0,0,0,.08)',
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr'
          }}>
            {/* Côté gauche */}
            <div style={{
              background: 'linear-gradient(135deg, #1E9BC4 0%, #1E9BC4 100%)',
              padding: '48px 36px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center'
            }}>
              <h3 style={{ color: '#fff', fontSize: 28, marginBottom: 16, fontFamily: "'Barlow Condensed', sans-serif" }}>
                Prêt à vous former ?
              </h3>
              <p style={{ color: 'rgba(255,255,255,.85)', fontSize: 14, lineHeight: 1.8, marginBottom: 32 }}>
                Remplissez le formulaire et notre équipe vous contacte rapidement pour organiser votre formation CACES® ou sécurité.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {['✓ Réponse sous 48h', '✓ Devis gratuit', '✓ Financement CPF / OPCO', '✓ Groupes de 6 max'].map(i => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>{i}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40, padding: '20px', background: 'rgba(255,255,255,.1)', borderRadius: 10 }}>
                <div style={{ color: 'rgba(255,255,255,.7)', fontSize: 12, marginBottom: 4 }}>Certification</div>
                <div style={{ color: '#fff', fontSize: 18, fontWeight: 700, fontFamily: "'Barlow Condensed', sans-serif" }}>✅ Certifié Qualiopi</div>
                <div style={{ color: 'rgba(255,255,255,.7)', fontSize: 12, marginTop: 4 }}>SIREN : 880 704 754</div>
              </div>
            </div>

            {/* Formulaire */}
            <form onSubmit={submit} style={{ padding: '48px 36px' }}>
              <h4 style={{ color: '#1A1A1A', fontSize: 22, marginBottom: 28, fontFamily: "'Barlow Condensed', sans-serif" }}>
                Envoyez-nous un message
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>Nom *</label>
                  <input className="c-field" placeholder="Votre nom" value={form.name} onChange={set('name')} required style={{ borderRadius: 8 }} />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>Email *</label>
                  <input className="c-field" type="email" placeholder="Votre email" value={form.email} onChange={set('email')} required style={{ borderRadius: 8 }} />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>Téléphone</label>
                  <input className="c-field" placeholder="Votre téléphone" value={form.phone} onChange={set('phone')} style={{ borderRadius: 8 }} />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>Formation</label>
                  <input className="c-field" placeholder="Ex: CACES R489" value={form.formation} onChange={set('formation')} style={{ borderRadius: 8 }} />
                </div>
                <div style={{ gridColumn: '1/-1' }}>
                  <label style={{ fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>Message</label>
                  <textarea className="c-field" placeholder="Votre message..." value={form.message} onChange={set('message')} style={{ borderRadius: 8, height: 120, resize: 'none', width: '100%' }} />
                </div>
                <div style={{ gridColumn: '1/-1' }}>
                  <button type="submit" style={{
                    width: '100%', background: sent ? '#6DB33F' : '#1E9BC4',
                    color: '#fff', border: 'none', borderRadius: 8, padding: '16px',
                    fontSize: 15, fontWeight: 600, cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif", transition: '.3s',
                    boxShadow: '0 4px 16px rgba(30, 155, 196, 0.3)'
                  }}>
                    {sent ? '✓ Message envoyé !' : 'Envoyer le message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-subtitle">FAQ</div>
            <div className="section-title">Questions fréquentes</div>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {FAQ.map((f, i) => (
              <div key={i} style={{
                background: openFaq === i ? '#fff' : '#fff',
                borderRadius: 10, marginBottom: 12,
                boxShadow: openFaq === i ? '0 4px 20px rgba(0,0,0,.08)' : '0 2px 8px rgba(0,0,0,.04)',
                overflow: 'hidden', transition: '.3s',
                border: openFaq === i ? '1px solid #E63030' : '1px solid #eee'
              }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left', padding: '20px 24px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    fontSize: 15, fontWeight: 500, color: '#1A1A1A',
                    fontFamily: "'DM Sans', sans-serif"
                  }}>
                  {f.q}
                  <span style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: openFaq === i ? '#E63030' : '#f0f0f0',
                    color: openFaq === i ? '#fff' : '#666',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, transition: '.3s', flexShrink: 0,
                    transform: openFaq === i ? 'rotate(45deg)' : 'none'
                  }}>+</span>
                </button>
                {openFaq === i && (
                  <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, padding: '0 24px 20px' }}>{f.r}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}