// Dichiarazione array
const animali = [
    { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
    { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
    { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },
];

const listaMammiferi = [];

//Esecuzione codice
for (let i = 0; i < animali.length; i++) {
    const currentAnimal = animali[i];
    if (currentAnimal.classe === "mammiferi") {
        listaMammiferi.push(currentAnimal);
    }
}

//Stampa risultato
console.log(listaMammiferi);

