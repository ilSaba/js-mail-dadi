// Chiedo il nome al giocatore
var nome = prompt("Pronto a giocare? Iniziamo! Dimmi il tuo nome")

// Creo le sequenze numeriche random per me e per il pc
var giocatore = Math.round(Math.random() * (6 - 1) + 1);
document.getElementById("numeroGiocatore").innerHTML ="Il tuo numero è: " + giocatore;
var computer = Math.round(Math.random() * (6 - 1) + 1);
document.getElementById("numeroComputer").innerHTML ="Il numero del computer è: " + computer;

// Decreto i vincitori
if (giocatore == computer) {
    vincitore.innerHTML = "Pareggio! " + giocatore + " a " + computer;
} else {
    if (giocatore > computer) {
        vincitore.innerHTML = "Il vincitore è " + nome + "!" ;
} else {
        vincitore.innerHTML = "Il vinciotre è il Computer!";
    }
}