document.cookie = "nom:Rames";
let cookie = document.cookie;
console.log(cookie);

const paragraphes = document.querySelector("p");
console.log(paragraphes);

if (cookie) {
  paragraphes.innerHTML = `il y a un cookie, ce cookie comporte ces valeurs ${cookie}`;
} else {
  paragraphes.innerHTML = `il n\'y a pas de cookie pour le gouté`;
}

// Utilitaires cookies avec nom,value et la date de la création

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}


// Gestion du consentement
function gestionCookie(accepted) {
  document.getElementById("consentModal").classList.remove("show");
  if (accepted) {
    document.getElementById("nameModal").classList.add("show");
  } else {
    document.getElementById("warningModal").classList.add("show");
  }
}

// Sauvegarde du nom dans le cookie
function saveUsername() {
  const name = document.getElementById("usernameInput").value.trim();
  if (name) {
    setCookie("username", name, 7);
    document.getElementById("nameModal").classList.remove("show");
    showWelcome(name);
  }
}

function cancelNameModal() {
  document.getElementById("nameModal").classList.remove("show");
  document.getElementById("consentModal").classList.add("show");
}

function closeWarning() {
  document.getElementById("warningModal").classList.remove("show");
}

function showWelcome(name) {
  document.getElementById("welcome").textContent = `Bienvenue ${name} !`;
}

// À l’ouverture de la page
window.onload = () => {
  const user = getCookie("username");
  if (user) {
    showWelcome(user);
  } else {
    document.getElementById("consentModal").classList.add("show");
  }
};
