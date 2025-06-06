export default function PromoSection() {
  const promoPlans = [
    {
      name: "Base",
      price: "29",
      period: "/mese",
      features: [
        "Fino a 10 distributori",
        "Gestione segnalazioni base",
        "Notifiche email",
        "Supporto via email",
        "Dashboard semplificata",
      ],
      buttonText: "Inizia Gratis",
      buttonClass: "btn-outline-primary",
    },
    {
      name: "Avanzato",
      price: "59",
      period: "/mese",
      features: [
        "Fino a 50 distributori",
        "Gestione segnalazioni avanzata",
        "Notifiche push e SMS",
        "Supporto prioritario",
        "Analytics dettagliati",
        "Integrazione API",
        "Reportistica avanzata",
      ],
      buttonText: "Più Popolare",
      buttonClass: "btn-primary",
      featured: true,
    },
    {
      name: "Business",
      price: "99",
      period: "/mese",
      features: [
        "Distributori illimitati",
        "Tutte le funzionalità",
        "Supporto 24/7",
        "Manager dedicato",
        "Personalizzazioni",
        "Formazione inclusa",
      ],
      buttonText: "Contattaci",
      buttonClass: "btn-outline-primary",
    },
  ]

  return (
    <section className="promo-section" id="promo" role="region" aria-labelledby="promo-title">
      <div className="container">
        <div className="text-center mb-5">
          <h2 id="promo-title" className="display-4 fw-bold text-primary mb-3">
            Promo del Mese
          </h2>
          <p className="lead text-muted">
            Scegli il piano perfetto per le tue esigenze. Tutti i piani includono 30 giorni di prova gratuita.
          </p>
        </div>

        <div className="row g-4">
          {promoPlans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className={`card promo-card ${plan.featured ? "featured" : ""}`}>
                <div className="card-body text-center">
                  <h3 className="card-title h4 fw-bold mb-3">{plan.name}</h3>
                  <div className="promo-price">
                    €{plan.price}
                    <span className="promo-period">{plan.period}</span>
                  </div>

                  <ul className="promo-features">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>

                  <button className={`btn ${plan.buttonClass} w-100`} aria-label={`Seleziona piano ${plan.name}`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
