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
let formsCheckedForValidity = 0;
let removeFormsWithNoImage = (formIndex) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = e => {
        let spriteJSON = e.target.responseText;
        spriteJSON = JSON.parse(spriteJSON).sprites;
        if (!spriteJSON.front_default) {
            forms[formIndex] = null;
        }
        else {
            forms[formIndex].defaultSprite = spriteJSON.front_default;
            forms[formIndex].shinySprite = spriteJSON.front_shiny;
            forms[formIndex].femaleSprite = spriteJSON.front_female;
            forms[formIndex].femaleShinySprite = spriteJSON.front_shiny_female;
        }

        formsCheckedForValidity++;
        if (formsCheckedForValidity >= forms.length) {
            onFormsReceved();
        }
    };
    xhr.onerror = error;
    xhr.open("GET", forms[formIndex].url, false);
    xhr.send();
}

let forms = {};
let formsLoaded = false;
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
    formsLoaded = true;
    if (document.body) {
        document.body.style.display = "block";
    }
    pokedexLoad();
}

/*
    Catch Screen
*/
let catchTyped = (e) => {
    let input = document.querySelector("#catchInput").value;
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

    let formIndex;
    for (let i = 0; i < forms.length; i++) {
        let formTerms = forms[i].name.split("-");
        let containsInputs = input.map(word => formTerms.indexOf(word) != -1);
        if (containsInputs.indexOf(false) == -1 && input.indexOf(formTerms[0]) != -1) {
            formIndex = i;
            break;
        }
    }
    if (formIndex != undefined) {
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
    setImage(forms, formIndex, document.querySelector("#caughtImage"), isshiny);
    let formName = forms[formIndex].name.replaceAll("-", " ");
    forms[formIndex].caught = true;
    forms[formIndex].shinyCaught = forms[formIndex].shinyCaught ? true : isshiny;
    document.querySelector("#caughtText").innerHTML = "You caught a " + (isshiny ? "SHINY " : "") + formName.toUpperCase() + "!";
}

let setImage = (formList, formIndex, imageElement, isshiny = false) => {
    if (isshiny && formList[formIndex].shinySprite) {
        imageElement.src = formList[formIndex].shinySprite;
    }
    else {
        imageElement.src = formList[formIndex].defaultSprite;
    }
}

/*
    Pokedex Screen
*/
let pokedexLoad = (e) => {
    let filteredForms = forms;

    let type1 = getByType(document.querySelector("#type1").value);
    if (type1) {
        filteredForms = filteredForms.filter(form => type1.indexOf(form.name) != -1);
    }

    let type2 = getByType(document.querySelector("#type2").value);
    if (type2) {
        filteredForms = filteredForms.filter(form => type2.indexOf(form.name) != -1);
    }

    document.querySelector("#pokedexList").innerHTML = "";
    for (let i = 0; i < filteredForms.length; i++) {
        let newImg = document.createElement("img");
        newImg.id = filteredForms[i].name;
        if (!filteredForms[i].caught) {
            newImg.classList.add("notCaught");
        }
        setImage(filteredForms, i, newImg, filteredForms[i].shinyCaught);
        document.querySelector("#pokedexList").appendChild(newImg);
    }
}

let getByType = (type) => {
    if (type == "any") {
        return null;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pokeapi.co/api/v2/type/" + type, false);
    xhr.send();
    let pkmnJSON = xhr.responseText;
    pkmnJSON = JSON.parse(pkmnJSON).pokemon;
    let pkmn = pkmnJSON.map(item => item.pokemon.name);
    return pkmn;
}

/*
    Favorites Screen
*/

/*
    Settings
*/

/*
    OnLoad
*/
window.onload = e => {
    if (!formsLoaded) {
        document.body.style.display = "none";
    }

    document.querySelector("#catchButton").onclick = catchTyped;
    document.querySelector("#catchRandomButton").onclick = catchRandom;

    document.querySelector("#pokedexLoadButton").onclick = pokedexLoad;
    document.querySelector("a[href='#pokedex']").onclick = pokedexLoad;

    document.querySelector("#catch").scrollIntoView();
}