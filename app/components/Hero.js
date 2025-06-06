export default function Hero() {
  return (
    <section className="hero-section" id="home" role="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-content">
            <h1 className="hero-title fade-in">
              Gestisci le segnalazioni dei tuoi distributori in modo
              <span className="text-warning"> semplice e veloce</span>
            </h1>
            <p className="hero-subtitle fade-in">
              Il software mobile che rivoluziona la gestione del ticketing per distributori automatici. Affidabilità,
              velocità nella risposta e semplicità in un'unica soluzione.
            </p>
            <div className="fade-in">
              <a href="#promo" className="btn btn-warning btn-lg me-3" role="button">
                <i className="fas fa-rocket me-2" aria-hidden="true"></i>
                Scopri il Servizio
              </a>
              <a href="#demo" className="btn btn-outline-light btn-lg" role="button">
                <i className="fas fa-play me-2" aria-hidden="true"></i>
                Guarda Demo
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="/placeholder.svg?height=500&width=400"
              alt="App VendingCare su smartphone che mostra l'interfaccia di gestione segnalazioni"
              className="img-fluid fade-in"
              style={{ maxHeight: "500px" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
