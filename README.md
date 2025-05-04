# Project Work - L'industria sostenibile: Ferrari verso il futuro verde

Progetto di sito web per il download dei report di sostenibilità di Ferrari S.p.A.

## Autore
**Cognome e Nome:** De Luca Vincenzo  
**Numero di Matricola:** ----------  
**Corso di Studio:** Informatica per le Aziende Digitali

## Descrizione

Questo repository contiene il codice sorgente di un sito web dedicato alla sostenibilità di Ferrari S.p.A., con particolare focus sulla possibilità di scaricare i report di sostenibilità dell'azienda. Il progetto è stato realizzato nell'ambito del corso "Tecnologia web per la sostenibilità d'impresa".

Il sito è stato sviluppato in due versioni:

1. **Versione standalone**: Non richiede un server web per funzionare (cartella `Standalone/`)
2. **Versione Modulare**: Utilizza componenti HTML riutilizzabili, richiede un server web (cartella `Modulare/`)

## Struttura del progetto
La struttura è organizzata in modo chiaro e intuitivo. I file condivisi tra le due versioni del sito sono raccolti nella cartella `assets`, mentre le due versioni (modulare e stand alone) sono separate in cartelle distinte.
* `README.md` Documentazione del progetto.
* `assets/` Contiene tutte le risorse condivise:
   * `css/` → Foglio di stile principale (`style.css`)
   * `img/` → Immagini del sito (in formato WebP) e la favicon (`favicon.png`)
   * `pdf/` → Contiene i report di sostenibilità scaricabili:
      * `sustainability_report_2024_AnnualReport_HI.pdf`
      * `sustainability_report_2023_AnnualReport.pdf`
      * `sustainability_report_2023_HI.pdf`
      * `sustainability_report_2022.pdf`
      * `sustainability_report_2021.pdf`
      * `sustainability_report_2020.pdf`
      * `sustainability_report_2019.pdf`
      * `sustainability_report_2018.pdf`
      * `sustainability_report_2017.pdf`
* `Modulare/` Versione del sito modulare, con inclusione di file HTML comuni (richiede server):
   * `js_modulare/script.js` → Script JS per il pulsante di "scroll up" e per richiamare i moduli
   * `index.html` → Pagina principale del sito
   * `storia.html` → Pagina con la storia del gruppo
   * `gruppoFerrari.html` → Pagina con la struttura societaria
   * `sostenibilita.html` → Pagina con il download dei report
   * `management.html` → Pagina con management del gruppo
   * `faq.html` → Pagina delle FAQ
   * `menu.html` → Header modulare riutilizzabile
   * `footer.html` → Footer modulare riutilizzabile
   * `robots.txt` → File per simulare una struttura SEO completa
* `Standalone/` Versione standalone del sito (non richiede server, tutte le pagine sono complete):
   * `js_Standalone/script.js` → Script JS per il pulsante di "scroll up"
   * `index.html` → Pagina principale del sito
   * `storia.html` → Pagina con la storia del gruppo
   * `gruppoFerrari.html` → Pagina con la struttura societaria
   * `sostenibilita.html` → Pagina con il download dei report
   * `management.html` → Pagina con management del gruppo
   * `faq.html` → Pagina delle FAQ
   * `robots.txt` → File per simulare una struttura SEO completa

## Contenuti

Il sito web include le seguenti sezioni:

- **Home**: Pagina principale con slider e card informative che guidano alla navigazione del sito
- **Storia**: Informazioni sulla storia di Ferrari
- **Società**: Dettagli sulla struttura societaria dell'azienda
- **Sostenibilità**: Pagina principale del progetto che contiene:
  - Descrizione dell'impegno di Ferrari per la sostenibilità
  - Area di download dei report di sostenibilità dal 2017 al 2024
  - Informazioni dettagliate sulle iniziative sostenibili dell'azienda
- **Management**: Informazioni sul team dirigenziale
- **FAQ**: Domande frequenti sul tema della sostenibilità in Ferrari

## Architettura e implementazione

### Versione standalone
La versione standalone è completamente autonoma. Ogni pagina HTML contiene tutto il codice necessario, inclusi header e footer. Questa implementazione è ideale per:
- Hosting senza supporto server-side
- Apertura diretta dal filesystem locale
- Massima compatibilità con tutti gli ambienti

### Versione Modulare
La versione modulare utilizza un approccio componentizzato con:
- File separati per header (`menu.html`) e footer (`footer.html`)
- Caricamento dinamico dei componenti tramite JavaScript
- Container HTML che vengono popolati dinamicamente
- Sistema di callback per gestire la navigazione attiva

Il codice seguente mostra il pattern implementato:
```javascript
// Funzione per caricare i componenti HTML
async function loadComponent(containerId, componentPath, callback) {
    try {
        const response = await fetch(componentPath);
        if (response.ok) {
            const html = await response.text();
            document.getElementById(containerId).innerHTML = html;
            if (callback && typeof callback === 'function') {
                callback();
            }
        } else {
            console.error(`Errore nel caricamento del componente ${componentPath}`);
        }
    } catch (error) {
        console.error('Errore:', error);
    }
}
```

## Caratteristiche

- **Design Responsive**: Ottimizzato per dispositivi desktop, tablet e mobile
- **Interfaccia Moderna**: Design pulito e accattivante con elementi visivi di alta qualità
- **Area Download Dedicata**: Sezione specifica per il download dei report di sostenibilità
- **Navigazione Intuitiva**: Menu di navigazione chiaro e card informative sulla homepage
- **Accessibilità**: Attenzione agli standard di accessibilità web per una fruizione universale
- **Performance**: Ottimizzazione delle immagini e del codice per tempi di caricamento ridotti
- **Pulsante "Torna in cima"**: Facilita la navigazione in pagine con scroll verticale

## Requisiti Tecnici

### Versione standalone
- Qualsiasi browser web moderno
- Non richiede un server web (può essere aperto direttamente dal filesystem)

### Versione Modulare
- Server web con supporto per inclusione file HTML (PHP, Apache con SSI abilitato, ecc.)
- In alternativa, la versione utilizza JavaScript per caricare dinamicamente i componenti
- Browser con JavaScript abilitato

## Come Utilizzare

### Per la versione standalone:
1. Scarica l'intero repository
2. Apri il file `Standalone/index.html` in qualsiasi browser web

### Per la versione Modulare:
1. Carica l'intero repository su un server web
2. Accedi alla cartella `Modulare` tramite browser web
3. Assicurati che il server supporti JavaScript per il caricamento dinamico dei componenti

## Tecnologie Utilizzate

- HTML5
- CSS3
- JavaScript vanilla
- Design responsivo tramite Media Queries
- Formati immagine ottimizzati

## Note di Sviluppo

La pagina principale del progetto è `sostenibilita.html`, che contiene l'area per il download dei report di sostenibilità. Questa pagina è stata progettata con particolare attenzione per garantire un'esperienza utente intuitiva e accessibile.

La doppia implementazione (standalone e modulare) offre flessibilità in diversi contesti di utilizzo, garantendo al contempo la stessa esperienza utente.

---

*Questo progetto è stato realizzato da Vincenzo De Luca a scopo didattico nell'ambito del corso "Tecnologia web per la sostenibilità d'impresa" - Informatica per le Aziende Digitali Anno Accademico 2024/2025.*
