// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA
let userWord = prompt("Inserisci una parola! Ti dirò se è palindroma oppure no!");

// CREARE UNA FUNZIONE PER CAPIRE SE LA PAROLA INSERITA È PALINDROMA

if (isPalindrome(userWord)) {
    console.log("La parola è palindroma!");
    alert("La parola è palindroma!");
} else {
    console.log("La parola non è palindroma!");
    alert("La parola non è palindroma!");
}

/************************************************
 *                                              *
 *                  FUNCTIONS                   *
 *                                              *
 ***********************************************/

/**
 * function that verifies if a word is palindrome
 * 
 * @param {string} word Param that contains the word to verify
 * @returns {boolean} returns true if the word is palindrome or false if it isn't
 */

function isPalindrome(word) {

    let reverseWord = "";

    for (let i = 0; i < word.length; i++) {
        const currentLetter = word[i];

        reverseWord = currentLetter + reverseWord;
    }

    if (word == reverseWord) {
        return true;
    } else {
        return false;
    }
}
