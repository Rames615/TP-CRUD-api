// stocké la modal et la mettre en hidden des le chargement de la page
// Stocker la modal dans un objet
const modal = {
    container: document.getElementById('cookieModal'),
    closeButton: document.getElementById('closeModal'),
    acceptButton: document.getElementById('acceptCookies')
};

// Vérifier si le cookie existe déjà
const cookieName = 'cookieConsent';
const cookieValue = getCookie(cookieName);
if (cookieValue === 'accepté') {
    modal.container.style.display = 'none'; // Masquer la modal si le cookie est déjà accepté
}
// Fonction pour obtenir la valeur d'un cookie par son nom
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Fonction pour créer un cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convertir les jours en millisecondes
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`; // Créer le cookie avec le nom, la valeur et la date d'expiration
}

// Fonction pour accepter les cookies
function acceptCookies() {
    setCookie(cookieName, 'accepté', 30); // Créer le cookie avec une durée de 30 jours
    modal.container.style.display = 'none'; // Masquer la modal après l'acceptation
}

// Événements pour les boutons de la modal
modal.closeButton.addEventListener('click', () => {
    modal.container.style.display = 'none'; // Masquer la modal lorsque le bouton de fermeture est cliqué
});
modal.acceptButton.addEventListener('click', acceptCookies); // Appeler la fonction acceptCookies lorsque le bouton d'acceptation est cliqué