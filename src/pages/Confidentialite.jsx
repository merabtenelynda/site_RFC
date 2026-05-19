export default function Confidentialite() {
  return (
    <>
      <div className="page-header">
        <h1>Politique de Confidentialité</h1>
        <p>Accueil / Confidentialité</p>
      </div>

      <section>
        <div className="container" style={{ maxWidth: 800 }}>

          {[
            {
              subtitle: 'Article 1',
              title: 'Responsable du traitement',
              content: `FRC TECHNIQUE, SAS au capital de 50 000€, SIREN 880 704 754, dont le siège est à Montataire (60), représentée par Mickaël TROUSSELLE, est responsable du traitement de vos données personnelles. Contact RGPD : contact@frc-technique.fr`,
            },
            {
              subtitle: 'Article 2',
              title: 'Données collectées',
              content: `Nous collectons les données suivantes via le formulaire de contact et d'inscription : nom et prénom, adresse email, numéro de téléphone, formation souhaitée, message. Ces données sont collectées avec votre consentement explicite et sont nécessaires au traitement de votre demande.`,
            },
            {
              subtitle: 'Article 3',
              title: 'Finalités du traitement',
              content: `Vos données sont utilisées pour : traiter votre demande d'inscription ou de devis, vous envoyer des informations relatives à votre formation, gérer la relation client et la facturation, respecter nos obligations légales en tant qu'organisme de formation.`,
            },
            {
              subtitle: 'Article 4',
              title: 'Durée de conservation',
              content: `Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre dernière interaction avec FRC TECHNIQUE. Les données de facturation sont conservées 10 ans conformément aux obligations comptables légales.`,
            },
            {
              subtitle: 'Article 5',
              title: 'Partage des données',
              content: `Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées uniquement avec les organismes testeurs CACES® (DEKRA ou équivalent) dans le cadre de l'organisation des examens, et avec les organismes financeurs (OPCO, France Travail) dans le cadre de la prise en charge de votre formation.`,
            },
            {
              subtitle: 'Article 6',
              title: 'Vos droits',
              content: `Conformément au RGPD, vous disposez des droits suivants : droit d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité de vos données. Pour exercer ces droits, contactez-nous à contact@frc-technique.fr. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).`,
            },
            {
              subtitle: 'Article 7',
              title: 'Cookies',
              content: `Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est utilisé. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, ce qui peut affecter certaines fonctionnalités du site.`,
            },
            {
              subtitle: 'Article 8',
              title: 'Sécurité',
              content: `FRC TECHNIQUE met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation. Le site est hébergé sur Vercel Inc., infrastructure sécurisée certifiée.`,
            },
          ].map(item => (
            <div key={item.title} style={{ marginBottom: 36 }}>
              <div className="section-tag">
                <div>
                  <div className="section-subtitle">{item.subtitle}</div>
                  <div className="section-title">{item.title}</div>
                </div>
              </div>
              <p style={{ marginTop: 16, lineHeight: 1.9, color: '#666', fontSize: 15 }}>{item.content}</p>
            </div>
          ))}

        </div>
      </section>
    </>
  )
}