'use strict';

//Inizializzo array vuoto
const myNumbers = [];
window.alert('Nel seguente programma, se inserisci 2 volte lo stesso numero, il programma terminerà')

//Creo un ciclo for infinito
for (let i = false; i = true; i++){
    
    const userInput = parseInt(prompt('Inserisci un numero'));
    
    //Se input utente in array, blocco il ciclo altrimenti aggiungo input all'array.
    if (myNumbers.includes(userInput)) {

        console.log('Non puoi scrivere lo stesso numero 2 volte!!')
        break

    } else {
        myNumbers.push(userInput);
    }
    
}

//Non valido l'input..già fatto negli snack precedenti :)