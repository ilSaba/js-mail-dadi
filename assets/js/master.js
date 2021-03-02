var mail = (prompt("Dammi la tua cazzo di mail porcodddudo"));

console.log(mail);

var listaMail = ["ernesto.pippetto@gmail.com", "carizzo.carina@yandex.com", "santorzo.giorgio@yandex.com", "magio.lamela@gmail.com", "thecat.isonthetable@gmail.com", "non.chofantasia@gmail.com"];

var soldatino = false;

for (var i = 0; i < mail.length; i++) {
    if (listaMail[i] == mail) {
        soldatino = true;
    }
}

if (soldatino) {
    console.log("C'è");
} else {
    console.log("NON C'È");
}

