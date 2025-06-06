# VendingCare - Homepage

Homepage moderna e responsive per VendingCare, startup italiana specializzata in software SaaS mobile per la gestione delle segnalazioni dei distributori automatici.

## 🚀 Caratteristiche

- **Design Responsive**: Ottimizzato per tutti i dispositivi
- **Accessibilità**: Conforme alle linee guida WCAG
- **Performance**: Ottimizzato per velocità e SEO
- **Framework**: Next.js 15 con App Router
- **Styling**: Bootstrap 5 + CSS personalizzato
- **Icone**: Font Awesome 6

## 📋 Sezioni Implementate

### Header
- Logo e navigazione principale
- Menu responsive con hamburger su mobile
- Call-to-action "Prova Ora!"

### Hero Section
- Titolo coinvolgente con slogan
- Immagine dell'app mobile
- Due call-to-action principali
- Background gradient con overlay

### Promo del Mese
- 3 card pricing (Base, Avanzato, Business)
- Piano "Avanzato" evidenziato come più popolare
- Liste delle caratteristiche per ogni piano
- Design responsive con griglia Bootstrap

### Testimonianze
- 3 testimonianze di clienti fittizi
- Design a card con rating a stelle
- Layout responsive

### Footer
- Informazioni azienda e social links
- Menu di navigazione organizzato
- Contatti con indirizzo fittizio
- Link privacy policy e copyright

## 🛠️ Installazione e Avvio

### Prerequisiti
- Node.js 18+ 
- npm o yarn

### Comandi di installazione

\`\`\`bash
# Clona il repository
git clone [url-repository]
cd vending-ticketing-homepage

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Oppure con yarn
yarn install
yarn dev
\`\`\`

### Build per produzione

\`\`\`bash
# Crea build ottimizzata
npm run build

# Avvia in modalità produzione
npm start
\`\`\`

## 🎨 Tecnologie Utilizzate

- **Next.js 15**: Framework React con App Router
- **Bootstrap 5**: Framework CSS per layout responsive
- **Font Awesome 6**: Libreria di icone
- **CSS Custom Properties**: Per temi e colori personalizzati
- **JavaScript ES6+**: Senza TypeScript come richiesto

## 📱 Responsive Design

Il sito è ottimizzato per:
- **Desktop**: Layout completo con tutte le funzionalità
- **Tablet**: Adattamento delle griglie e spaziature
- **Mobile**: Menu hamburger, stack verticale, touch-friendly

## ♿ Accessibilità

Implementate le seguenti pratiche:
- Markup semantico HTML5
- Attributi ARIA appropriati
- Contrasto colori conforme WCAG
- Focus management per navigazione da tastiera
- Alt text per immagini
- Screen reader friendly

## 🎯 Obiettivi di Design

Il design comunica:
- **Affidabilità**: Colori professionali, layout pulito
- **Velocità**: Animazioni fluide, call-to-action evidenti  
- **Semplicità**: Interfaccia intuitiva, contenuti chiari

## 📊 Struttura File

\`\`\`
app/
├── components/          # Componenti riutilizzabili
│   ├── Header.js       # Navigazione principale
│   ├── Hero.js         # Sezione hero
│   ├── PromoSection.js # Card pricing
│   ├── Testimonials.js # Testimonianze clienti
│   └── Footer.js       # Footer completo
├── globals.css         # Stili globali e custom
├── layout.js          # Layout principale
└── page.js            # Homepage

README.md              # Documentazione
\`\`\`

## 🔧 Personalizzazione

### Colori
I colori principali sono definiti in \`:root\` nel file \`globals.css\`:
- Primary: #2563eb (blu)
- Secondary: #1e40af (blu scuro)  
- Accent: #f59e0b (arancione)
- Success: #10b981 (verde)

### Contenuti
Tutti i contenuti sono facilmente modificabili nei rispettivi componenti. I testi sono in italiano e ottimizzati per il settore vending.

## 📈 Performance

- Lazy loading delle immagini
- CSS ottimizzato e minificato
- Componenti modulari per code splitting
- Metadata SEO ottimizzati

## 🤝 Contributi

Per contribuire al progetto:
1. Fork del repository
2. Crea un branch per la feature
3. Commit delle modifiche
4. Push e creazione Pull Request

## 📄 Licenza

Progetto sviluppato per prova pratica di allenamento.

---

**VendingCare** - Gestione segnalazioni distributori automatici
\`\`\`
