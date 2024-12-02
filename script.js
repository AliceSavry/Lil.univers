// Gestion du menu mobile
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
});

// Afficher ou masquer le bouton "Retour en haut"
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Retour en haut de la page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
