"use strict";

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    //nu laver vi et for loop:
    for(let i = 0; i < numOfDice; i++){ //"lad i være lig med 0 så længe at i er mindre nummeret på terningen og læg så i sammen med 1"
        const value = Math.floor(Math.random() * 6) + 1//det giver os et random nummer mellem 0-5 + 1, dermed 6
        values.push(value);
        images.push(`<img src="img/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}   
