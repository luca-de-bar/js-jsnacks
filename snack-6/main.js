'use strict';


//Genero un numero casuale tra 0 e 10. Chiedo Input all'utente
const randomNumber = Math.floor(Math.random() * 11);

//Lascio l'input a stringa in modo da poterlo poi confrontare con l'input numerico per la validazione.
const userInput = prompt("Benvenuto! In questo gioco pescheremo un numero tra 0 e 10, tu dovrai indovinare il numero pescato, sei pronto? Digita un numero :");
const userInputInteger = parseInt(userInput);


//Se not a number
if (isNaN(userInput)) {
    console.log('Perfavore inserisci un numero valido.')
}
//Se input null o vuoto
else if (userInput === null || userInput.trim() === "") {
    console.log('Non puoi inserire un valore vuoto.')
}
//Se minore di 0 o maggiore di 10    
else if (userInputInteger < 0 || userInputInteger > 10) {
    console.log('Inserisci un numero tra 0 e 10 perfavore.')
}
//Per validare la il caso in cui si scrivano tanti 0
else if (userInput != userInputInteger.toString()) {
    console.log('Inserisci un numero valido')
}    

else if (randomNumber === userInputInteger) {
    console.log(`Hai vinto!! Il numero vincente era proprio il ${randomNumber}!!`)
}
    
else if (randomNumber != userInputInteger) {
    console.log(`Mi dispiace.. Il numero pescato era ${randomNumber} mentre il tuo numero era ${userInput}`)
}
