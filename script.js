// Fonction pour ouvrir la lightbox
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    lightbox.style.display = 'flex';
    lightboxImage.src = imageSrc;
}

// Fonction pour fermer la lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    lightbox.style.display = 'none';
    lightboxImage.src = '';
}

// Empêche le clic droit sur les images
document.addEventListener('contextmenu', function (event) {
    if (event.target.tagName === 'IMG') {
        event.preventDefault();
        alert("Le téléchargement des images est désactivé.");
    }
});
