// Sostituisci la funzione loadComponent con questa versione statica
function loadComponent(containerId, componentPath, callback) {
    if (componentPath === 'menu.html') {
        // Inserisci qui il contenuto completo di menu.html
        document.getElementById(containerId).innerHTML = `
            <header>
                <div class="logo">
                    <img src="../assets/img/ferrari-logo.png" alt="Ferrari Logo">
                    <span class="hidden">Ferrari S.p.A.</span>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html" id="nav-home">Home</a></li>
                        <li><a href="storia.html" id="nav-storia">Storia</a></li>
                        <li><a href="gruppoFerrari.html" id="nav-gruppo">Società</a></li>
                        <li><a href="sostenibilita.html" id="nav-sostenibilita">Sostenibilità</a></li>
                        <li><a href="management.html" id="nav-management">Management</a></li>
                        <li><a href="faq.html" id="nav-faq">FAQ</a></li>
                    </ul>
                </nav>
                <div class="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
        `;
    } else if (componentPath === 'footer.html') {
        // Inserisci qui il contenuto completo di footer.html
        document.getElementById(containerId).innerHTML = `
            <footer>
                <p>&copy; 2025 Ferrari S.p.A. Tutti i diritti riservati.</p>
            </footer>
            <button id="scrollUpBtn" title="Torna in cima">↑</button>
        `;
    }
    
    if (callback && typeof callback === 'function') {
        callback();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Aspetta 100ms prima di inizializzare la gestione header
    setTimeout(function() {
        // Acquisizione riferimenti elementi header
        const header = document.querySelector('header');
        const logo = document.querySelector('.logo img');
        
        // Gestione dello scroll per l'header
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 100) {
                // Quando l'utente scende nella pagina
                header.classList.add('header-scrolled');
                logo.classList.add('logo-scrolled');
            } else {
                // Quando l'utente torna in alto
                header.classList.remove('header-scrolled');
                logo.classList.remove('logo-scrolled');
            }
        });
    }, 100);
    
    // Aspetta 300ms prima di inizializzare la gestione del pulsante di scroll
    setTimeout(function() {
        // Riferimento al pulsante di scroll
        const scrollUpBtn = document.getElementById('scrollUpBtn');
        
        if (scrollUpBtn) {
            // Gestione visibilità del pulsante in base allo scroll
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 100) {
                    scrollUpBtn.style.display = 'block';
                } else {
                    scrollUpBtn.style.display = 'none';
                }
            });
            
            // Gestione click sul pulsante "torna su"
            scrollUpBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }, 300);
    
    // Aspetta 500ms prima di inizializzare la gestione del menu mobile
    setTimeout(function() {
        // Gestione menu mobile
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('nav ul');
        
        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
        }
    }, 500);
});