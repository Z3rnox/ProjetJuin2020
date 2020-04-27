/*le temps du developement des autre partie du code */
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let idUser = 0
idUser = urlParams.get('id');

let Conv = {
    id: 3
}
document.addEventListener('DOMContentLoaded', initPage);

function initPage() {
    if (idUser == null) {
        document.write("veuiller vous connecter avant de participer au chat <a href='./connexion.html'>connection</a>")
    } else {
        document.querySelector("#LienModif").href = `./modificationProfile.html?id=${idUser}`;
    }
    //document.getElementById("formMessage").addEventListener("submit",TraiterFormMessage(this));
    updateChat();
    setInterval(updateChat, 1000);
}

function TraiterFormMessage(formMessage) {
    let message = formMessage.message.value;
    let envoiMsg = new XMLHttpRequest;
    envoiMsg.open("GET", "newMsg?msgContentVar=" + message + "&idUserVar=" + idUser + "&idConvVar=" + Conv.id + "", true);
    envoiMsg.onload = function() {
        //console.log("msg envoyer");
        updateChat();
        document.getElementById("formMessage").message.value = null;
    };
    envoiMsg.send();
    return false;

}

function updateChat() {
    let chatUpdate = new XMLHttpRequest
    chatUpdate.open("GET", "updateChat?idConvVar=" + Conv.id, true);
    console.log("oupdate send");
    chatUpdate.onload = function() {
        let chat = JSON.parse(chatUpdate.responseText);
        // chat.date = chat.date.toLocaleDateString(locales, {});
        //console.log(chat);
        let zoneChat = document.getElementById("divChat");
        let chatFinal = "";
        for (const element of chat) {
            //console.log(element.heure);
            element.heure = element.heure.slice(11, -4);
            //console.log(element.heure);
            chatFinal += `<div class="d-flex justify-content-start mb-4"><div class="chatPseudo"><p class="user_msg">${element.pseudo}</p></div><div class="msg_cotainer " id="${element.id}">${element.msgContent}</div><span class="msg_time">${element.heure}</span></div>`

        }
        zoneChat.innerHTML = chatFinal;
    }
    chatUpdate.send()

}
$('document').ready(function() {
    $('#msg').each(function() {

        $(this).width($(this).parent().width());
    });
});