import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"

export const metadata = {
  title: "VendingCare - Gestione Segnalazioni per Distributori",
  description:
    "Software SaaS mobile per la gestione efficace delle segnalazioni dei distributori automatici. Affidabilità, velocità e semplicità.",
  keywords: "ticketing, distributori automatici, segnalazioni, SaaS, mobile",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}
