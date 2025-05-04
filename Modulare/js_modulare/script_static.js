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

// Script per il pulsante "Torna in cima"
document.addEventListener('DOMContentLoaded', function() {
    // Il riferimento al pulsante verrà acquisito dopo il caricamento del footer
    setTimeout(function() {
        const scrollBtn = document.getElementById('scrollUpBtn');
        if (scrollBtn) {
            // Mostra/nascondi il pulsante in base allo scroll
            window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                    scrollBtn.style.display = 'block';
                } else {
                    scrollBtn.style.display = 'none';
                }
            });
            
            // Torna in cima quando il pulsante viene cliccato
            scrollBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }, 500); // Piccolo ritardo per assicurarsi che il footer sia caricato
    
    // Mobile menu toggle (dopo il caricamento del menu)
    setTimeout(function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('nav ul');
        
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
        }
    }, 500);
});