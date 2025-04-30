# Pseudo-code du TP Modales et Cookies

## Structure HTML

```
- Page principale avec titre "Bienvenue sur Cook&I"
- Paragraphes d'introduction
- Div pour le message de bienvenue personnalisé (masqué par défaut)
- Trois modales (chacune avec une classe 'modal-container'):
  1. Modale de consentement des cookies
  2. Modale d'avertissement après refus
  3. Modale de saisie du nom d'utilisateur
- Footer
```

## CSS

```
- Définir les styles pour les modales (position fixed, fond semi-transparent)
- Styles pour les boutons et champs de formulaire
- Classe .hidden pour masquer les éléments
- Style pour le message de bienvenue
```

## JavaScript - Logique générale

```
QUAND la page se charge:
  - Récupérer tous les éléments DOM nécessaires (modales, boutons, champs)
  - Définir les fonctions pour gérer les cookies
  - Vérifier si un cookie 'username' existe déjà
    SI oui:
      - Afficher un message de bienvenue personnalisé
      - Cacher la modale de consentement
    SINON:
      - La modale de consentement est visible par défaut

FONCTION setCookie(nom, valeur):
  - Créer un cookie avec document.cookie = nom=valeur;

FONCTION getCookie(nom):
  - Récupérer tous les cookies
  - Les diviser en tableau
  - Parcourir chaque cookie
  - Si un cookie correspond au nom recherché, retourner sa valeur
  - Sinon retourner chaîne vide

QUAND utilisateur clique sur "Accepter" dans la modale de consentement:
  - Cacher la modale de consentement
  - Afficher la modale de saisie du nom

QUAND utilisateur clique sur "Refuser" dans la modale de consentement:
  - Cacher la modale de consentement
  - Afficher la modale d'avertissement

QUAND utilisateur clique sur "Compris" dans la modale d'avertissement:
  - Cacher la modale d'avertissement

QUAND utilisateur clique sur "Annuler" dans la modale de saisie du nom:
  - Cacher la modale de saisie du nom
  - Réafficher la modale de consentement

QUAND utilisateur clique sur "OK" dans la modale de saisie du nom:
  - Récupérer la valeur du champ nom
  - Si la valeur n'est pas vide:
    - Créer un cookie avec le nom saisi
    - Mettre à jour le message de bienvenue
    - Afficher le message de bienvenue
    - Cacher la modale de saisie du nom
  - Sinon:
    - Afficher un message d'erreur
```

## Flux d'exécution du programme

```
1. Chargement de la page
   |
   ├── Si cookie "username" existe déjà
   |   └── Afficher message "Bienvenue [nom] !"
   |
   └── Si cookie n'existe pas
       └── Afficher modale de consentement
           |
           ├── Si "Accepter"
           |   └── Afficher modale de saisie du nom
           |       |
           |       ├── Si "OK" et nom renseigné
           |       |   └── Créer cookie et afficher message de bienvenue
           |       |
           |       └── Si "Annuler"
           |           └── Retour à la modale de consentement
           |
           └── Si "Refuser"
               └── Afficher modale d'avertissement
                   └── Si "Compris"
                       └── Fermer la modale
```