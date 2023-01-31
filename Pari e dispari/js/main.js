// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L'UTENTE SCEGLIE PARI O DISPARI
let userPoD = prompt("Scegli: pari o dispari?");

while (userPoD !== "pari" && userPoD !== "dispari") {
    userPoD = prompt("Non prendere iniziative! Devi scegliere solo tra pari e dispari!");
}
console.log("L'utente ha scelto: " + userPoD);

// INSERISCE UN NUMERO DA 1 A 5
let userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    userNumber = parseInt(prompt("Non prendere iniziative! Devi scegliere un numero che sia compreso tra 1 e 5"));
}
console.log("L'utente ha scelto: " + userNumber);

// GENERIAMO UN NUMERO RANDOM PER IL PC (USANDO UNA FUNZIONE)
function generatePCnumber(min, max) {
    return Math.floor(Math.random() * 5) + 1;
}
const pcNumber = generatePCnumber();
console.log("Il numero generato casualmente per il PC è: " + pcNumber);

// SOMMIAMO I NUMERI
const sum = userNumber + pcNumber;

// STABILIAMO SE LA SOMMA DEI DUE NUMERI È PARI O DISPARI (USANDO UNA FUNZIONE)
function isEven(number) {
    return number % 2 === 0;
}

// DICHIARIAMO CHI HA VINTO
if ((userPoD === "pari" && isEven(sum)) || (userPoD === "dispari" && !isEven(sum))) {
    console.log("La somma è " + sum + ". Hai vinto!");
    alert("La somma è " + sum + ". Hai vinto!");
} else {
    console.log("La somma è " + sum + ". Hai perso!");
    alert("La somma è " + sum + ". Hai perso!");
}