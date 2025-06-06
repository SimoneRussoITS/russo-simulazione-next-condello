export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "VendingCare ha rivoluzionato la gestione delle nostre segnalazioni. Prima impiegavamo ore per coordinare gli interventi, ora tutto è automatizzato e velocissimo. Il ROI è stato immediato!",
      author: "Marco Rossi",
      company: "SnackItalia Distribution",
      rating: 5,
    },
    {
      quote:
        "Finalmente un software pensato per chi lavora sul campo! L'interfaccia è intuitiva e la velocità di risposta del supporto è eccezionale. I nostri clienti sono molto più soddisfatti.",
      author: "Laura Bianchi",
      company: "VendingPlus Roma",
      rating: 5,
    },
    {
      quote:
        "La semplicità d'uso unita alla potenza delle funzionalità rende VendingCare indispensabile. Abbiamo ridotto i tempi di intervento del 70% e migliorato significativamente il servizio clienti.",
      author: "Giuseppe Verdi",
      company: "AutomaticService Milano",
      rating: 5,
    },
  ]

  return (
    <section className="testimonials-section" id="testimonianze" role="region" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="text-center mb-5">
          <h2 id="testimonials-title" className="display-4 fw-bold text-primary mb-3">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="lead text-muted">Oltre 500 aziende si fidano di VendingCare per gestire le loro segnalazioni</p>
        </div>

        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card h-100">
                <div className="testimonial-rating mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star" aria-hidden="true"></i>
                  ))}
                  <span className="sr-only">{testimonial.rating} stelle su 5</span>
                </div>
                <blockquote className="testimonial-quote">"{testimonial.quote}"</blockquote>
                <div className="testimonial-author">{testimonial.author}</div>
                <div className="testimonial-company">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
