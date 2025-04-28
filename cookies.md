/**
 * Un cookie est un petit morceau de données stocké sur l'ordinateur de l'utilisateur par le navigateur web lors de la navigation sur un site web.
 * Il est utilisé pour mémoriser des informations sur l'utilisateur, telles que les identifiants de connexion, les préférences ou les données de session,
 * afin d'améliorer l'expérience utilisateur et d'activer certaines fonctionnalités.

 * Utilisation :
 * - **Gestion de session** : Les cookies sont utilisés pour maintenir les sessions utilisateur, comme garder un utilisateur connecté lors de la navigation sur un site web.
 * - **Personnalisation** : Ils stockent les préférences de l'utilisateur, telles que la langue ou les paramètres de thème, pour personnaliser l'expérience du site.
 * - **Suivi et analyses** : Les cookies aident à suivre le comportement des utilisateurs sur un site web pour des analyses et des publicités ciblées.

 * Propriétés clés :
 * - **Nom** : Le nom du cookie.
 * - **Valeur** : Les données stockées dans le cookie.
 * - **Domaine** : Le domaine pour lequel le cookie est valide.
 * - **Chemin** : Le chemin dans le domaine où le cookie est accessible.
 * - **Expiration** : La date et l'heure d'expiration du cookie. Si non définie, le cookie est un cookie de session et est supprimé lorsque le navigateur est fermé.
 * - **Sécurisé** : Indique si le cookie doit uniquement être transmis via des connexions HTTPS sécurisées.
 * - **HttpOnly** : Restreint l'accès au cookie depuis JavaScript, renforçant ainsi la sécurité.

 * Remarque :
 * - Les cookies sont soumis à des réglementations sur la vie privée, telles que le RGPD et le CCPA, qui nécessitent le consentement de l'utilisateur pour certains types de cookies.
 * - Une utilisation excessive des cookies peut affecter la vie privée et les performances, ils doivent donc être utilisés avec parcimonie.
 */

```javascript
// Exemple de création d'un cookie en JavaScript

// Fonction pour créer un cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Exemple d'utilisation
setCookie("utilisateur", "JeanDupont", 7); // Crée un cookie nommé "utilisateur" avec la valeur "JeanDupont" qui expire dans 7 jours
```

```javascript
// Exemple de lecture d'un cookie en JavaScript


// Fonction pour lire un cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Exemple d'utilisation
const utilisateur = getCookie("utilisateur"); // Lit le cookie "utilisateur"
console.log(utilisateur); // Affiche la valeur du cookie dans la console
```

```javascript
// Exemple de suppression d'un cookie en JavaScript
// Fonction pour supprimer un cookie 