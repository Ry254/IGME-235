"use strict";
/*
    Setup list of forms
*/
let error = (e) => console.log("error!");
let getForms = (url) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = e => {
        let formsJSON = e.target.responseText;
        formsJSON = JSON.parse(formsJSON).results;
        forms = formsJSON;
        for (let i = 0; i < forms.length; i++) {
            removeFormsWithNoImage(i);
        }
    };
    xhr.onerror = error;
    xhr.open("GET", url);
    xhr.send();
}
let removeFormsWithNoImage = (formIndex) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = e => {
        let spriteJSON = e.target.responseText;
        spriteJSON = JSON.parse(spriteJSON).sprites;
        if (!spriteJSON.front_default) {
            forms[formIndex] = null;
        }
        if (formIndex + 1 == forms.length) {
            onFormsReceved();
        }
    };
    xhr.onerror = error;
    xhr.open("GET", forms[formIndex].url);
    xhr.send();
}

let forms = {};
getForms("https://pokeapi.co/api/v2/pokemon-form/?limit=10000");

/*
    Read local storage
*/
let onFormsReceved = () => {
    forms = forms.filter(form => form);
    for (let form of forms) {
        form.caught = false;
        form.shinyCaught = false;
        Object.seal(form);
    }
}

/*
    Catch Screen
*/
let caughtText;
let caughtImage;

let catchInput;
let catchTyped = (e) => {
    let input = catchInput.value;
    input = input.trim().toLowerCase();
    input = input.replace(/[.'%]/, "").split(/[- ]/);
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "gigantamax":
                input[i] = "gmax";
                break;
            case "alolan":
                input[i] = "alola";
                break;
            case "galarian":
                input[i] = "galar";
                break;
            case "hisuian":
                input[i] = "hisui";
                break;
            case "paldean":
                input[i] = "paldea";
                break;
            case "!":
                input[i] = "exclamation";
                break;
            case "?":
                input[i] = "question";
                break;
        }
    }

    let formIndex = undefined;
    for (let i = 0; i < forms.length; i++) {
        let formTerms = forms[i].name.split("-");
        let containsInputs = input.map(word => formTerms.indexOf(word) != -1);
        if (containsInputs.indexOf(false) == -1 && input.indexOf(formTerms[0]) != -1) {
            formIndex = i;
            break;
        }
    }
    if (formIndex) {
        catchMon(formIndex);
    }
    else {
        document.querySelector("#caughtText").innerHTML = "Not a valid pokemon/form.";
    }
}

let catchRandom = (e) => {
    let randomMon = Math.floor(Math.random() * forms.length);
    catchMon(randomMon);
}

let catchMon = (formIndex) => {
    let isshiny = Math.random() < .05;
    setImage(formIndex, document.querySelector("#caughtImage"), isshiny);
    let formName = forms[formIndex].name.replaceAll("-", " ");
    forms[formIndex].caught = true;
    forms[formIndex].shinyCaught = forms[formIndex].shinyCaught ? true : isshiny;
    console.log(forms[formIndex]);
    document.querySelector("#caughtText").innerHTML = "You caught a " + (isshiny ? "SHINY " : "") + formName.toUpperCase() + "!";
}

let setImage = (formIndex, imageElement, isshiny = false) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = e => {
        let spriteJSON = e.target.responseText;
        spriteJSON = JSON.parse(spriteJSON).sprites;

        let spriteName = "front";
        if (isshiny && spriteJSON.front_shiny) {
            spriteName += "_shiny";
        }
        else {
            spriteName += "_default";
        }

        imageElement.src = spriteJSON[spriteName];
    };
    xhr.onerror = error;
    xhr.open("GET", forms[formIndex].url);
    xhr.send();
}

window.addEventListener("load", (e) => {
    catchInput = document.querySelector("#catchInput");
    document.querySelector("#catchButton").onclick = catchTyped;
    document.querySelector("#catchRandomButton").onclick = catchRandom;

    caughtText = document.querySelector("#caughtText");
    caughtImage = document.querySelector("#caughtImage");
});

/*
    Pokedex Screen
*/
let pokedexLoad = (e) => {
    document.querySelector("#pokedexList").innerHTML = "";
    for (let i = 0; i < forms.length; i++) {
        let newImg = document.createElement("img");
        newImg.dataset.index = i;
        newImg.id = forms[i].name;
        if (!forms[i].caught) {
            newImg.classList.add("notCaught");
        }
        setImage(i, newImg, forms[i].shinyCaught);
        document.querySelector("#pokedexList").appendChild(newImg);
    }
}

window.addEventListener("load", (e) => {
    document.querySelector("#pokedexLoadButton").onclick = pokedexLoad;
});

/*Favorites Screen*/

/*Settings*/