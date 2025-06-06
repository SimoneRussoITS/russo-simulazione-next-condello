export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>
              <i className="fas fa-cogs me-2" aria-hidden="true"></i>
              VendingCare
            </h5>
            <p className="mb-3">
              La soluzione completa per la gestione delle segnalazioni dei distributori automatici. Affidabilità,
              velocità e semplicità in un'unica piattaforma mobile.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Seguici su Facebook" title="Facebook">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="#" aria-label="Seguici su Twitter" title="Twitter">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#" aria-label="Seguici su LinkedIn" title="LinkedIn">
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a href="#" aria-label="Seguici su Instagram" title="Instagram">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Servizi</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#servizio">Gestione Ticket</a>
              </li>
              <li>
                <a href="#servizio">Monitoraggio</a>
              </li>
              <li>
                <a href="#servizio">Analytics</a>
              </li>
              <li>
                <a href="#servizio">Supporto 24/7</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Azienda</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#chi-siamo">Chi Siamo</a>
              </li>
              <li>
                <a href="#carriere">Carriere</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#partner">Partner</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Contatti</h5>
            <address>
              <p>
                <i className="fas fa-map-marker-alt me-2" aria-hidden="true"></i>
                Via Roma 123, 20121 Milano (MI)
              </p>
              <p>
                <i className="fas fa-phone me-2" aria-hidden="true"></i>
                <a href="tel:+390212345678">+39 02 1234 5678</a>
              </p>
              <p>
                <i className="fas fa-envelope me-2" aria-hidden="true"></i>
                <a href="mailto:info@vendingcare.it">info@vendingcare.it</a>
              </p>
            </address>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2024 VendingCare. Tutti i diritti riservati.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#privacy" className="me-3">
              Privacy Policy
            </a>
            <a href="#terms" className="me-3">
              Termini di Servizio
            </a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
