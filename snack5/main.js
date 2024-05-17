'use strict';

//Inizializzo l'array vuoto
const myOddNumbers = [];

for (let i = 1; i <= 6; i++){

    let changeSequence;
    //Cambio la frase a seconda del numero da inserire
    switch (i) {
        case 1:
            changeSequence = 'primo';
            break;
        case 2:
            changeSequence = 'secondo';
            break;
        case 3:
            changeSequence = 'terzo';
            break;
        case 4:
            changeSequence = 'quarto';
            break;
        case 5:
            changeSequence = 'quinto';
            break;
        case 6:
            changeSequence = 'sesto';
            break;
    }

    const userInput = parseFloat(prompt(`Inserisci il ${changeSequence} numero`));
    
    //Se dispari, aggiungo all'array
    if (userInput % 2 != 0) {
        myOddNumbers.push(Number(userInput))
    }
}

//Stampo il risultato
console.log(`Su 6 numeri, ${myOddNumbers.length} erano dispari. I numeri dispari sono : ${myOddNumbers.join()}`);