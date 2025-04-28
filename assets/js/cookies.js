   document.cookie = "nom=Stéphane";
   let cookie = document.cookie;
    console.log(cookie);

    const paragraphe = document.querySelector('p');
    console.log(paragraphe);

    if (cookie) {
        paragraphe.innerHTML = `il y a un cookie, ce cookie comporte ces valeurs ${cookie}`;
    } else {
        paragraphe.innerHTML = `il n\'y a pas de cookie pour le gouté`;
    }

//     function setCookie(name, value, days) {
//         let expires = "";
//         if (days) {
//             const date = new Date();
//             date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//             expires = "; expires=" + date.toUTCString();
//         }
//         document.cookie = name + "=" + (value || "") + expires + "; path=/";
//     }
    
// // Exemple d'utilisation
// setCookie("utilisateur", "JeanDupont", 7); // Crée un cookie nommé "utilisateur" avec la valeur "JeanDupont" qui expire dans 7 jours

    
    