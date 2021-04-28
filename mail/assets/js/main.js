//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
var iscritti = ["eveling@gmail.com" , "ricardo@gmail.com" , "alice@gmail.com"]
var emailInserita = prompt("Inserire email")

/* if((emailInserita == iscritti[0]) || (emailInserita == iscritti[1]) || (emailInserita == iscritti[2])) {
    console.log("Email verificata");
} else {
    console.log("Email non verificata");
} */

var invitato = false

for(var i = 0; i < iscritti.length; i++) {
    var email = iscritti[i]
    if(emailInserita == email) {
        invitato = true   
    }
}

var message;
if (invitato) {
    message = "Email verificata"
    console.log(message);
} else {
    message = "Email non valida"
    console.log(message);

}