"use client"

import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" role="navigation" aria-label="Menu principale">
      <div className="container">
        <a className="navbar-brand" href="#home" aria-label="VendingCare - Torna alla homepage">
          <i className="fas fa-cogs me-2" aria-hidden="true"></i>
          VendingCare
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Apri menu di navigazione"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#chi-siamo" onClick={() => setIsMenuOpen(false)}>
                Chi Siamo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servizio" onClick={() => setIsMenuOpen(false)}>
                Servizio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contatti" onClick={() => setIsMenuOpen(false)}>
                Contatti
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary ms-2" href="#prova-ora" onClick={() => setIsMenuOpen(false)} role="button">
                Prova Ora!
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
