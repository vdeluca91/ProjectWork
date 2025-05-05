function setActiveNavLink() {
    // Ottieni il percorso della pagina corrente
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop();
    
    // Rimuovi la classe active da tutti i link
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.classList.remove('active');
    });
    
    // Imposta la classe active sul link corretto
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        if (link.getAttribute('href') === fileName) {
            link.classList.add('active');
        }
        
        // Gestione caso speciale per la homepage
        if (fileName === '' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
}
// Script per il pulsante "Torna in cima"
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();

    const header = document.querySelector('header');
    const logo = document.querySelector('.logo img');
    // Riferimento al pulsante
    const scrollBtn = document.getElementById('scrollUpBtn');
    // Gestione del pulsante scroll-to-top
    const scrollUpBtn = document.getElementById('scrollUpBtn');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            // Quando l'utente scende nella pagina
            header.classList.add('header-scrolled');
            logo.classList.add('logo-scrolled');
            scrollUpBtn.style.display = 'block';
        } else {
            // Quando l'utente torna in alto
            header.classList.remove('header-scrolled');
            logo.classList.remove('logo-scrolled');
            scrollUpBtn.style.display = 'none';
        }
    });

    scrollUpBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

  // Gestione menu mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  if (menuToggle) {
      menuToggle.addEventListener('click', function() {
          navMenu.classList.toggle('active');
          menuToggle.classList.toggle('active');
      });
  }
  
  // Animazione per elementi con scorrimento 
  if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('show');
              }
          });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.feature-card, .pillar-card, .detail-card').forEach(element => {
          observer.observe(element);
      });
  }
}); 