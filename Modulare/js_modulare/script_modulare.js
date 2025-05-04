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