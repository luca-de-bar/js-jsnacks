'use strict';

//Inizializzo array vuoto
const tabOfTwo = [];

//Stampo la tabellina del 2 fino a 1000, salvo nell'array.
for (let i = 1; i <= 500; i++){
    console.log(`${i * 2}`);
    tabOfTwo.push(i * 2);
}

const userInput = parseInt(prompt('Inserisci il numero massimo consentito per la tabellina'));

//Se userInput trovato, restituisco l'array fino al numero inserito.
if (tabOfTwo.includes(userInput)) {
    
    //Trovo l'indice del valore inserito dall'utente
    let index = tabOfTwo.indexOf(userInput);
    
    //Taglio l'array, lasciandolo intatto dall'indice 0 a index(trovato sopra) + 1
    let slicedArray = tabOfTwo.slice(0, (index + 1));

    //Stampo ogni elemento dell'array nuovo, in formato stringa.
    slicedArray.forEach(function (element) {
        console.log(element.toString());
    })

} else {
    console.log('Numero non trovato!')
}