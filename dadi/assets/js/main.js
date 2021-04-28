//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

var dadoUtente = Math.ceil(Math.random() * 6);
var dadoPc = Math.ceil(Math.random() * 6);
console.log(dadoUtente);
console.log(dadoPc);

if(dadoUtente > dadoPc) {
    console.log("Vinto Utente");
} else if(dadoPc > dadoUtente) {
    console.log("Vinto Pc");
} else {
    console.log("Pareggio, riprova!");
}