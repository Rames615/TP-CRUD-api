//    document.cookie = "nom=Stéphane";
//    let cookie = document.cookie;
//     console.log(cookie);

//     const paragraphes = document.querySelector('p');
//     console.log(paragraphes);

//     if (cookie) {
//         paragraphes.innerHTML = `il y a un cookie, ce cookie comporte ces valeurs ${cookie}`;
//     } else {
//         paragraphes.innerHTML = `il n\'y a pas de cookie pour le gouté`;
//     }
    const modal = document.getElementById("cookieModal");
    const acceptBtn = document.getElementById('acceptBtn');
    const refuseBtn = document.getElementById('refuseBtn');
    const checkbox = document.getElementById('acceptCheckbox');
    const paragraphe = document.querySelector('p');

    // Accept button logic
    acceptBtn.addEventListener('click', () => {
        if (checkbox.checked) {
            document.cookie = "nom=Rames; path=/;";
            paragraphe.innerHTML = "Cookie accepté et enregistré : " + document.cookie;
            modal.style.display = "none";
        } else {
            paragraphe.innerHTML = "Veuillez cocher la case pour accepter les cookies.";
        }
    });

    // Refuse button logic
    refuseBtn.addEventListener('click', () => {
        document.cookie = "nom=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        paragraphe.innerHTML = "Cookie refusé et supprimé.";
        modal.style.display = "none";
    });


    
    