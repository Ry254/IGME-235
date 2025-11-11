"use strict";

let caughtText;
let caughtImage;

let catchInput;
let catchTyped = (e) => {
    let input = catchInput.value;
    input = input.trim().toLowerCase();
    input = input.split(" ");
    console.log(input);
}

let catchRandom = (e) => {

}

// gigantamax -> gmax
// alolan -> alola
// galarian -> galar
// hisuian -> hisui
// paldean -> paldea

// use contains
// if no front_default image, don't use form

window.onload = (e) => {
    catchInput = document.querySelector("#catchInput");
    document.querySelector("#catchButton").onclick = catchTyped;
    document.querySelector("#catchRandomButton").onclick = catchRandom;

    caughtText = document.querySelector("#caughtText");
    caughtImage = document.querySelector("#caughtImage");
}