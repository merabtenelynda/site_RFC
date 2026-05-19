export default function Team() {
  const team = [
    { name: 'Formateur CACES R482', role: 'Testeur certifié — Engins de chantier', spec: 'R482 · R483 · R490', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { name: 'Formateur CACES R489', role: 'Testeur certifié — Chariots élévateurs', spec: 'R489 · R485 · R484', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    { name: 'Formatrice Sécurité', role: 'Spécialiste prévention des risques', spec: 'SST · AIPR · Harnais', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  ]

  return (
    <>
      <div className="page-header">
        <h1>Notre Équipe</h1>
        <p>Accueil / Équipe</p>
      </div>

      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-subtitle">Notre équipe</div>
            <div className="section-title">Des formateurs certifiés et expérimentés</div>
            <p style={{ color: '#666', marginTop: 12, fontSize: 15, maxWidth: 600, margin: '12px auto 0' }}>
              Tous nos formateurs sont testeurs CACES® certifiés, en possession de leurs certifications en cours de validité et formés à la prévention des risques professionnels.
            </p>
          </div>
          <div className="team-grid">
            {team.map(m => (
              <div key={m.name} className="team-card">
                <img src={m.img} alt={m.name} />
                <div className="team-info">
                  <h5>{m.name}</h5>
                  <span>{m.role}</span>
                  <div style={{ fontSize: 11, color: '#FDA12B', marginTop: 4, fontWeight: 500 }}>{m.spec}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Engagements équipe */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 60 }}>
            {[
              { icon: '🎓', title: 'Testeurs certifiés', desc: 'Tous nos formateurs sont testeurs CACES® certifiés par un organisme agréé.' },
              { icon: '🛡️', title: 'Formation INRS', desc: 'Attestation de réussite en prévention des risques professionnels (INRS).' },
              { icon: '👥', title: 'Pédagogie active', desc: 'Groupes de 6 personnes max pour un accompagnement individualisé.' },
            ].map(e => (
              <div key={e.title} style={{ textAlign: 'center', padding: 28, background: '#f8f9fa', borderRadius: 8 }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{e.icon}</div>
                <h5 style={{ color: '#182333', fontSize: 18, marginBottom: 10 }}>{e.title}</h5>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}