export default function CGV() {
  return (
    <>
      <div className="page-header">
        <h1>Conditions Générales de Vente</h1>
        <p>Accueil / CGV</p>
      </div>

      <section>
        <div className="container" style={{ maxWidth: 800 }}>

          {[
            {
              subtitle: 'Article 1',
              title: 'Objet',
              content: `Les présentes Conditions Générales de Vente s'appliquent à toutes les prestations de formation professionnelle réalisées par FRC TECHNIQUE (SAS, SIREN 880 704 754), dont le siège est à Montataire (60). Toute inscription à une formation implique l'acceptation sans réserve des présentes CGV.`,
            },
            {
              subtitle: 'Article 2',
              title: 'Inscriptions',
              content: `L'inscription est effective à réception du bulletin d'inscription dûment complété et signé, accompagné du règlement ou d'une prise en charge par un organisme financeur (OPCO, CPF, France Travail). FRC TECHNIQUE se réserve le droit de refuser toute inscription si les prérequis nécessaires ne sont pas remplis.`,
            },
            {
              subtitle: 'Article 3',
              title: 'Tarifs et paiement',
              content: `Les prix sont indiqués en euros HT sauf mention contraire. Le règlement s'effectue par virement bancaire, chèque ou prise en charge OPCO/CPF. En cas de financement CPF ou OPCO, le stagiaire doit s'assurer de la validation de sa prise en charge avant le début de la formation.`,
            },
            {
              subtitle: 'Article 4',
              title: 'Annulation et report',
              content: `Toute annulation doit être notifiée par écrit à l'adresse contact@frc-technique.fr. Annulation plus de 15 jours avant le début : aucun frais. Annulation entre 8 et 14 jours : 50% du montant dû. Annulation moins de 7 jours : 100% du montant dû. FRC TECHNIQUE se réserve le droit d'annuler ou reporter une session en cas d'effectif insuffisant (minimum 2 stagiaires), sans indemnité.`,
            },
            {
              subtitle: 'Article 5',
              title: 'Déroulement des formations',
              content: `Les formations se déroulent en groupes de 6 personnes maximum pour garantir un temps de conduite optimal. Chaque stagiaire doit se présenter muni d'une pièce d'identité valide et d'un justificatif d'aptitude médicale délivré par le médecin du travail.`,
            },
            {
              subtitle: 'Article 6',
              title: 'Certification et résultats',
              content: `Le certificat CACES® est délivré par l'organisme testeur agréé (DEKRA ou équivalent) à l'issue de l'évaluation théorique et pratique. FRC TECHNIQUE ne peut être tenu responsable en cas d'échec du stagiaire aux épreuves. Une note minimale de 70/100 est requise pour l'obtention du certificat.`,
            },
            {
              subtitle: 'Article 7',
              title: 'Réclamations',
              content: `Toute réclamation doit être adressée par écrit à contact@frc-technique.fr dans un délai de 30 jours suivant la formation. FRC TECHNIQUE s'engage à répondre dans un délai de 10 jours ouvrés.`,
            },
            {
              subtitle: 'Article 8',
              title: 'Droit applicable',
              content: `Les présentes CGV sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents du ressort de Montataire (60) seront seuls compétents.`,
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