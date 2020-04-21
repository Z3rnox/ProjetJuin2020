function initialiserFormulaire (){
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://craftbrakddns.myddns.me:536/modification?idChoisi=780", true);
    xhr.onload = remplirFormulaire;
    xhr.send();
}

function remplirFormulaire(){
    let reponse = JSON.parse(this.responseText);
    console.log(reponse);
    console.log(reponse[0].idUser);


    document.getElementById("formulaire").innerHTML += "<div id='divName'><label for='name'>Nom</label> <input id='name' name='name' type='text' " +
        "value='" + reponse[0].nom + "'></div>";

    document.getElementById("formulaire").innerHTML += "<div id='divSurname'><label for='surname'>Prenom</label> <input id='surname' name='surname' type='text' " +
        "value='" + reponse[0].prenom + "'></div>";

    document.getElementById("formulaire").innerHTML += "<div id='divMdp'><label for='mdpUser'>Mot de Passe</label> <input id='mdpUser' name='mdpUser' type='text' " +
        "value='" + reponse[0].mdpUser + "'></div>";

    document.getElementById("formulaire").innerHTML += "<div id='divMail'><label for='mail'>Adresse mail</label> <input id='mail' name='mail' type='text' " +
        "value='" + reponse[0].mail+ "'></div>";

    document.getElementById("formulaire").innerHTML += "<div id='divPseudo'><label for='pseudo'>Pseudo</label> <input id='pseudo' name='pseudo' type='text' " +
        "value='" + reponse[0].pseudo + "'></div>";
    console.log("bonjour");
}

function enregistrerModifs(){
    let nvNom = document.getElementById("name").value;
    let nvPrenom = document.getElementById("surname").value;
    let nvMdp = document.getElementById("mdpUser").value;
    let nvMail = document.getElementById("mail").value;
    let nvPseudo = document.getElementById("pseudo").value;
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://craftbrakddns.myddns.me:536/mettreAJour?idUtilisateur=780&nvNom="+ nvNom + "&nvPrenom=" + nvPrenom + "&nvMdp=" + nvMdp + "&nvMail=" + nvMail + "&nvPseudo=" + nvPseudo);
    xhr.send();
}