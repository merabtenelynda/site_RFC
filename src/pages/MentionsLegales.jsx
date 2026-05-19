export default function MentionsLegales() {
  return (
    <>
      <div className="page-header">
        <h1>Mentions Légales</h1>
        <p>Accueil / Mentions Légales</p>
      </div>

      <section>
        <div className="container" style={{ maxWidth: 800 }}>

          <div style={{ marginBottom: 40 }}>
            <div className="section-tag">
              <div>
                <div className="section-subtitle">Éditeur du site</div>
                <div className="section-title">Informations légales</div>
              </div>
            </div>
            <div style={{ marginTop: 24, lineHeight: 2, color: '#666', fontSize: 15 }}>
              <p><strong style={{ color: '#182333' }}>Raison sociale :</strong> FRC TECHNIQUE</p>
              <p><strong style={{ color: '#182333' }}>Forme juridique :</strong> SAS — Société par Actions Simplifiée</p>
              <p><strong style={{ color: '#182333' }}>Capital social :</strong> 50 000,00 €</p>
              <p><strong style={{ color: '#182333' }}>SIREN :</strong> 880 704 754</p>
              <p><strong style={{ color: '#182333' }}>SIRET :</strong> 880 704 754 00022</p>
              <p><strong style={{ color: '#182333' }}>N° TVA Intracommunautaire :</strong> FR47 880 704 754</p>
              <p><strong style={{ color: '#182333' }}>Siège social :</strong> Montataire (60), France</p>
              <p><strong style={{ color: '#182333' }}>Date de création :</strong> 6 janvier 2020</p>
              <p><strong style={{ color: '#182333' }}>Activité (NAF) :</strong> Formation continue d'adultes (85.59A)</p>
              <p><strong style={{ color: '#182333' }}>Directeur de publication :</strong> Mickaël TROUSSELLE</p>
              <p><strong style={{ color: '#182333' }}>Email :</strong> contact@frc-technique.fr</p>
              <p><strong style={{ color: '#182333' }}>Certification :</strong> Qualiopi</p>
            </div>
          </div>

          <div style={{ marginBottom: 40 }}>
            <div className="section-tag">
              <div>
                <div className="section-subtitle">Hébergement</div>
                <div className="section-title">Hébergeur du site</div>
              </div>
            </div>
            <div style={{ marginTop: 24, lineHeight: 2, color: '#666', fontSize: 15 }}>
              <p><strong style={{ color: '#182333' }}>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong style={{ color: '#182333' }}>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
              <p><strong style={{ color: '#182333' }}>Site :</strong> <a href="https://vercel.com" target="_blank" rel="noreferrer" style={{ color: '#FDA12B' }}>www.vercel.com</a></p>
            </div>
          </div>

          <div style={{ marginBottom: 40 }}>
            <div className="section-tag">
              <div>
                <div className="section-subtitle">Propriété intellectuelle</div>
                <div className="section-title">Droits et contenu</div>
              </div>
            </div>
            <p style={{ marginTop: 24, lineHeight: 1.9, color: '#666', fontSize: 15 }}>
              L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété exclusive de FRC TECHNIQUE ou de ses partenaires. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est strictement interdite.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <div className="section-tag">
              <div>
                <div className="section-subtitle">Responsabilité</div>
                <div className="section-title">Limitation de responsabilité</div>
              </div>
            </div>
            <p style={{ marginTop: 24, lineHeight: 1.9, color: '#666', fontSize: 15 }}>
              FRC TECHNIQUE s'efforce de maintenir les informations de ce site à jour et exactes. Cependant, la société ne peut être tenue responsable des erreurs, omissions ou résultats obtenus suite à une mauvaise utilisation des informations publiées.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}