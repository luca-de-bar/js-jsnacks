'use strict';

//Inizializzo l'array con i nomi degli invitati e chiedo input all'utente
const partyNames = ['Luca', 'Adele', 'Giovanni', 'Francesco', 'Debora', 'Batman', 'Pippo Baudo'];
const userInput = prompt('Benvenuto nel grande party di Gatsby, dicci il tuo nome e verificheremo se sei sulla lista.');

if (partyNames.includes(userInput)) {
    window.alert('Bevenuto al party!')
} else {
    window.alert('Spiacente, non sei invitato!')
}