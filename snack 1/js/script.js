// Dichiarazinoe Array di oggetti
const automobili = [
    { marca: "Alfa Romeo", modello: "Giulia", alimentazione: "Diesel" },
    { marca: "Audi", modello: "a3", alimentazione: "Benzina" },
    { marca: "Bmw", modello: "Serie 1", alimentazione: "Diesel" },
    { marca: "Mercedes", modello: "Classe c", alimentazione: "Benzina" },
    { marca: "Fiat", modello: "Panda", alimentazione: "Metano" },
    { marca: "Tesla", modello: "Model S", alimentazione: "Elettrico" },
];

//Dichiarazione array vuoti
autoBenzina = [];
autoDiesel = [];
autoRestanti = [];

//Esecuzione ciclo per caricare array vuoti
for (let i = 0; i < automobili.length; i++) {
    const currentCar = automobili[i];
    if (currentCar.alimentazione === "Diesel") {
        autoDiesel.push(currentCar);
    } else if (currentCar.alimentazione === "Benzina") {
        autoBenzina.push(currentCar);
    } else {
        autoRestanti.push(currentCar);
    }
}


//Stampa risultato    
console.log(autoBenzina, autoDiesel, autoRestanti);
