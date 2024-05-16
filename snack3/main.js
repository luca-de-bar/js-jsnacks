'use strict';

//inizializzo l'array che contiene gli input dell'utente
const myNumbers = [];

for (let i = 0; i < 10; i++) { 
    let userInput = prompt('Inserisci un numero');
    myNumbers.push(Number(userInput));
}

// Inizializza una variabile per tenere traccia della somma
let somma = 0;

// Usa un ciclo for per aggiungere ogni numero alla somma
for (let i = 0; i < myNumbers.length; i++) {
    somma += myNumbers[i];
}

window.alert(`La tua somma è ${somma}`);
