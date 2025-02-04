"use strict";

function rollDice(){ // Definerer en funktion ved navn 'rollDice', som kaster terninger, når den kaldes.

    const numOfDice = document.getElementById("numOfDice").value; // Henter værdien (antallet af terninger) fra inputfeltet med id'et 'numOfDice'.
    const diceResult = document.getElementById("diceResult"); // Henter HTML-elementet med id'et 'diceResult', hvor vi viser terningernes resultater.
    const diceImages = document.getElementById("diceImages"); // Henter HTML-elementet med id'et 'diceImages', hvor vi viser billeder af terningerne.
    const values = []; // Initialiserer et tomt array til at gemme resultaterne af terningkastene.
    const images = []; // Initialiserer et tomt array til at gemme HTML-kode for terningbillederne.

    //nu laver vi et 'for' loop / For-løkke til at kaste terningerne det ønskede antal gange.
    for(let i = 0; i < numOfDice; i++){ //"lad i være lig med 0 så længe at i er mindre nummeret på terningen og læg så i sammen med 1". // Starter en løkke, der kører så mange gange som antallet af terninger.
        const value = Math.floor(Math.random() * 6) + 1//det giver os et random nummer mellem 0-5 + 1, dermed 6 - simulerer et terningekast
        values.push(value); // Tilføjer det tilfældige tal til 'values'-arrayet.
        images.push(`<img src="img/${value}.png" alt="Dice ${value}">`); // Opretter en img-tag med det tilsvarende billede og tilføjer det til 'images'-arrayet.
    }

    diceResult.textContent = `dice: ${values.join(', ')}`; // Viser terningkastresultaterne som tekst, adskilt af kommaer.
    diceImages.innerHTML = images.join(''); // Viser terningbillederne ved at sætte img-tags ind i HTML-elementet.
}   
