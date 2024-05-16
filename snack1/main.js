'use strict';

//Utilizzo il prompt con parseFloat per evitare di tagliare potenziali numeri con virgola.
let stringFirstNumber= prompt('Insersci il primo numero');
let stringSecondNumber = prompt('Inserisci il secondo numero');

let floatFirstNumber = parseFloat(stringFirstNumber);
let floatSecondNumber = parseFloat(stringSecondNumber);

//Validazione input.
if (isNaN(floatFirstNumber) || isNaN(floatSecondNumber)) {
    window.alert('Inserisci un numero valido');
} else if (stringFirstNumber != floatFirstNumber || stringSecondNumber != floatSecondNumber) {
    window.alert('Inserisci un numero valido');
} else if (stringFirstNumber.trim() === "" || stringFirstNumber === null) {
    window.alert('Inserisci un valore')
} else if (stringSecondNumber.trim() === "" || stringSecondNumber === null)


//Individua il numero maggiore    
if (floatFirstNumber > floatSecondNumber) {
    console.log(floatFirstNumber)
} else {
    console.log(floatSecondNumber)
}