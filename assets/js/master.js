// Chiedo la mail
var mail = prompt("Inserisca quì la sua mail");
// Stampo la mail
console.log(mail);
// Arrey mail
var listaMail = ["ernesto.pippetto@gmail.com", "carizzo.carina@yandex.com", "santorzo.giorgio@yandex.com", "magio.lamela@gmail.com", "thecat.isonthetable@gmail.com", "noncho.fantasia@gmail.com"];


// Check
var soldatino = false;

for (var i = 0; i < mail.length; i++) {
    if (listaMail[i] == mail) {
        soldatino = true;
    }
}

if (soldatino) {
    console.log("Accesso effettuato");
} else {
    console.log("La sua mail non esiste nei nostri sistemi");
}