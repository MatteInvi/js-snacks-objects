//Dichiarazione variabili
const firstArray = ["matteo", "Anna", "MArio", "MARCO"];
const secondArray = [];

//Esecuzione codice
for (let i = 0; i < firstArray.length; i++) {
    currentIndex = firstArray[i];
    const currentIndexLower = currentIndex.toLowerCase();
    const firstLetterUpper = currentIndexLower.charAt(0).toUpperCase() + currentIndexLower.slice(1);
    secondArray.push(firstLetterUpper);

}

//Stampa risultato
console.log(secondArray);