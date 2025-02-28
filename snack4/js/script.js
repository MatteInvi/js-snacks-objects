//Dichiarazione degli array
const persona = [
    {nome: "Matteo", cognome: "Invidia", età: 26 },
    {nome: "Pippo", cognome: "Franchi", età: 32 },
    {nome: "Pluto", cognome: "Verdi", età: 16 },
    {nome: "Paperino", cognome: "Guido", età: 17},
    {nome: "Ermenegildo", cognome: "Braciolone", età: 54},
];

const personDriver = []; 

//Esecuzione codice
for (let i = 0; i < persona.length; i++) {
    currentPerson = persona[i];
    if (currentPerson.età <= 18) {
        message = (`${currentPerson.nome} ${currentPerson.cognome}  non può guidare in quanto minorenne`)
    } else {
        message = (`${currentPerson.nome}  ${currentPerson.cognome} può guidare in quanto maggiorenne`)
    }
    personDriver.push(message);
    
}

//Stampa risultato
console.log(personDriver.toString());
