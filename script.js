/* Style général */
body {
    font-family: Verdana, sans-serif;
    margin: 5px;
    background-color: #FFF7E6;
    color: #4A4A4A;
    line-height: 1.6;
}

/* Empêcher les interactions avec les images */
img {
    pointer-events: none; /* Désactive les interactions */
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-drag: none;
}

/* Header */
header {
    background-color: #FF6F61;
    color: white;
    padding: 20px 30px;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Section Galerie */
.carousel-thumbnail {
    position: relative;
    width: 120px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
}

.carousel-thumbnail::after {
    content: "Lilou SAVRY";
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    background-color: rgba(0, 0, 0, 0.5);
    padding: 2px 5px;
    border-radius: 3px;
}

/* Lightbox */
.lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
}

.lightbox img {
    position: relative;
    max-width: 90%;
    max-height: 90%;
}
