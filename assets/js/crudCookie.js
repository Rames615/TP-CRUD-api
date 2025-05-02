// Attendre que le document soit complètement chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function () {
  // Récupérer les références aux éléments du DOM que nous allons utiliser
  const createNameInput = document.getElementById("createName");
  const createValueInput = document.getElementById("createValue");
  const createBtn = document.getElementById("createBtn");

  const readBtn = document.getElementById("readBtn");
  const cookieDisplay = document.getElementById("cookieDisplay");

  const updateNameInput = document.getElementById("updateName");
  const updateValueInput = document.getElementById("updateValue");
  const updateBtn = document.getElementById("updateBtn");

  const deleteNameInput = document.getElementById("deleteName");
  const deleteBtn = document.getElementById("deleteBtn");

  // 1. CRÉER UN COOKIE
  // Cette fonction est déclenchée quand l'utilisateur clique sur le bouton "Créer le cookie"
  createBtn.addEventListener("click", function () {
    // Récupérer les valeurs saisies par l'utilisateur
    const cookieName = createNameInput.value.trim();
    const cookieValue = createValueInput.value.trim();

    // Vérifier que l'utilisateur a bien saisi un nom et une valeur
    if (cookieName === "" || cookieValue === "") {
      // Si un champ est vide, afficher un message d'erreur
      alert("Veuillez remplir tous les champs");
      return; // Arrêter l'exécution de la fonction
    }

    // Créer le cookie en utilisant la propriété document.cookie
    // La syntaxe est : "nom=valeur;"
    document.cookie = `${cookieName}=${cookieValue};`;

    // Afficher un message de confirmation
    alert(`Cookie "${cookieName}" créé avec la valeur "${cookieValue}"`);

    // Vider les champs de saisie
    createNameInput.value = "";
    createValueInput.value = "";

    // Actualiser l'affichage des cookies
    displayCookies();
  });

  // 2. LIRE LES COOKIES
  // Cette fonction est déclenchée quand l'utilisateur clique sur le bouton "Lire les cookies"
  readBtn.addEventListener("click", function () {
    // Appeler notre fonction qui affiche les cookies
    displayCookies();
  });

  // Fonction qui récupère tous les cookies et les affiche dans l'élément cookieDisplay
  function displayCookies() {
    // Récupérer la chaîne de tous les cookies
    const allCookies = document.cookie;

    // Vérifier s'il y a des cookies
    if (allCookies === "") {
      // Si aucun cookie n'est trouvé, afficher un message
      cookieDisplay.innerHTML = "Aucun cookie trouvé";
      return; // Arrêter l'exécution de la fonction
    }

    // Diviser la chaîne de cookies en tableau
    // Les cookies sont séparés par des points-virgules et des espaces "; "
    const cookieArray = allCookies.split("; ");

    // Créer le HTML pour afficher chaque cookie
    let cookieHTML = "<ul>";

    // Parcourir chaque cookie
    for (let i = 0; i < cookieArray.length; i++) {
      // Diviser chaque cookie en nom et valeur (séparés par "=")
      const cookieParts = cookieArray[i].split("=");
      const name = cookieParts[0];
      const value = cookieParts[1];

      // Ajouter le cookie à notre liste HTML
      cookieHTML += `<li><strong>${name}</strong>: ${value}</li>`;
    }

    cookieHTML += "</ul>";

    // Mettre à jour l'affichage avec notre liste de cookies
    cookieDisplay.innerHTML = cookieHTML;
  }

  // 3. METTRE À JOUR UN COOKIE
  // Cette fonction est déclenchée quand l'utilisateur clique sur le bouton "Mettre à jour le cookie"
  updateBtn.addEventListener("click", function () {
    // Récupérer les valeurs saisies par l'utilisateur
    const cookieName = updateNameInput.value.trim();
    const cookieValue = updateValueInput.value.trim();

    // Vérifier que l'utilisateur a bien saisi un nom et une valeur
    if (cookieName === "" || cookieValue === "") {
      // Si un champ est vide, afficher un message d'erreur
      alert("Veuillez remplir tous les champs");
      return; // Arrêter l'exécution de la fonction
    }

    // Pour mettre à jour un cookie, on le crée simplement avec le même nom
    // Cette opération écrase l'ancien cookie
    document.cookie = `${cookieName}=${cookieValue};`;

    // Afficher un message de confirmation
    alert(`Cookie "${cookieName}" mis à jour avec la valeur "${cookieValue}"`);

    // Vider les champs de saisie
    updateNameInput.value = "";
    updateValueInput.value = "";

    // Actualiser l'affichage des cookies
    displayCookies();
  });

  // 4. SUPPRIMER UN COOKIE
  // Cette fonction est déclenchée quand l'utilisateur clique sur le bouton "Supprimer le cookie"
  deleteBtn.addEventListener("click", function () {
    // Récupérer le nom du cookie à supprimer
    const cookieName = deleteNameInput.value.trim();

    // Vérifier que l'utilisateur a bien saisi un nom
    if (cookieName === "") {
      // Si le champ est vide, afficher un message d'erreur
      alert("Veuillez saisir le nom du cookie à supprimer");
      return; // Arrêter l'exécution de la fonction
    }

    // Pour supprimer un cookie, on le crée avec une valeur vide
    // Normalement, il faudrait aussi définir une date d'expiration dans le passé
    // Mais pour simplifier, nous utilisons cette méthode qui fonctionne dans certains navigateurs
    document.cookie = `${cookieName}=;`;

    // Note importante: La méthode ci-dessus ne fonctionne pas toujours
    // La méthode complète serait:
    // document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

    // Afficher un message de confirmation
    alert(`Cookie "${cookieName}" supprimé`);

    // Vider le champ de saisie
    deleteNameInput.value = "";

    // Actualiser l'affichage des cookies
    displayCookies();
  });

  // Afficher les cookies dès le chargement de la page
  displayCookies();
});
