// Récupération des éléments HTML
const input = document.getElementById("saisieTache");
const boutonAjouter = document.getElementById("ajouterTache");
const listeTaches = document.getElementById("listeTaches");

function createWork(workTitle) {
  const li = document.createElement("li");

  const addCard = document.createElement("div");
  addCard.className = "card";
  addCard.textContent = workTitle;
  li.appendChild(addCard);

  // pour modifier boutton
  const btnModifier = document.createElement("button");
  btnModifier.textContent = "Modifier";
  btnModifier.classList.add("modifier");
  btnModifier.addEventListener("click", () => {
    const nouveauTexte = prompt("Modifier la tâche :", addCard.textContent);
    if (nouveauTexte !== null && nouveauTexte.trim() !== "") {
      addCard.textContent = nouveauTexte;
    }
  });

  // Bouton Supprimer
  const btnSupprimer = document.createElement("button");
  btnSupprimer.textContent = "Supprimer";
  btnSupprimer.classList.add("supprimer");
  btnSupprimer.addEventListener("click", () => {
    listeTaches.removeChild(li);
  });

  li.appendChild(btnModifier);
  li.appendChild(btnSupprimer);

  // Ajouter la tâche dans la liste
  listeTaches.appendChild(li);
}

// Événement sur le bouton "Ajouter"
boutonAjouter.addEventListener("click", () => {
  const texteTache = input.value.trim();
  if (texteTache !== "") {
    createWork(texteTache);
    input.value = "";
  }
});
