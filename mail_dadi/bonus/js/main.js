/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi */

var emailUtente = prompt("Inserisci email");
console.log(emailUtente);

if ((emailUtente == "evelingcastillon@gmail.com") || (emailUtente == "ricardojara@gmail.com") || (emailUtente == "andresgutierrez@gmail.com") || (emailUtente == "marioloja@gmail.com")) {
    console.log("EMAIL VERIFICATA");
    var dadoUtente = Math.floor(Math.random() * 6) + 1;
    console.log(dadoUtente);
    var dadoPc = Math.floor(Math.random() * 6) + 1
    console.log(dadoPc);
        if (dadoUtente > dadoPc) {
            console.log("Vinto");
        } else if (dadoUtente == dadoPc) {
            console.log("Pareggio");

        } else {
            console.log("HA VINTO IL PC");
        }
} else {
    console.log("EMAIL NO VALIDA!");
}

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

/* for (var i = 0; i < iscritti.length; i++) {
    console.log(iscritti[i]);
} */


//Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
/* Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */
