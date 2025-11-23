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
            getImages(i);
        }
    };
    xhr.onerror = error;
    xhr.open("GET", url);
    xhr.send();
}
let formsCheckedForImages = 0;
let getImages = (formIndex) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = e => {
        let spriteJSON = e.target.responseText;
        spriteJSON = JSON.parse(spriteJSON).sprites;

        forms[formIndex].defaultSprite = spriteJSON.front_default;
        forms[formIndex].shinySprite = spriteJSON.front_shiny;
        forms[formIndex].femaleSprite = spriteJSON.front_female;
        forms[formIndex].femaleShinySprite = spriteJSON.front_shiny_female;

        formsCheckedForImages++;
        if (formsCheckedForImages >= forms.length) {
            setupFormsList();
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

// sets up the list of forms for use in the sight
let setupFormsList = () => {
    // filter out forms with no default sprite
    forms = forms.filter(form => form.defaultSprite);
    
    // add fields to each form object and seal
    for (let form of forms) {
        form.caught = false;
        form.shinyCaught = false;
        form.favorite = false;
        Object.seal(form);
    }

    readStorage();
}

// 
let readStorage = () => {
}

/*
    Catch Screen
*/
// show catch scene
let catchScene = () => {
    document.getElementById("catch").style.display = catchDisplay;
    document.getElementById("pokedex").style.display = "none";
    document.getElementById("favorite").style.display = "none";
}

let catchTyped = (e) => {
    let input = document.getElementById("catchInput").value;
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
        document.getElementById("caughtText").innerHTML = "Not a valid pokemon/form.";
        document.getElementById("caughtImage").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
    }
}

let catchRandom = (e) => {
    let randomMon = Math.floor(Math.random() * forms.length);
    catchMon(randomMon);
}

let catchMon = (formIndex) => {
    let isshiny = Math.random() < .05;
    setImage(forms, formIndex, document.getElementById("caughtImage"), isshiny);
    let formName = forms[formIndex].name.replaceAll("-", " ");
    forms[formIndex].caught = true;
    forms[formIndex].shinyCaught = forms[formIndex].shinyCaught ? true : isshiny;
    document.getElementById("caughtText").innerHTML = "You caught " + (isshiny ? "SHINY " : "") + formName.toUpperCase() + "!";
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
// show pokedex scene
let pokedexScene = (e) => {
    document.getElementById("catch").style.display = "none";
    document.getElementById("pokedex").style.display = pokedexDisplay;
    document.getElementById("favorite").style.display = "none";
    pokedexLoad();
}

// load pokedex list
let pokedexLoad = (e) => {
    let filteredForms = forms;

    let type1 = getByType(document.getElementById("type1").value);
    if (type1) {
        filteredForms = filteredForms.filter(form => type1.indexOf(form.name) != -1);
    }

    let type2 = getByType(document.getElementById("type2").value);
    if (type2) {
        filteredForms = filteredForms.filter(form => type2.indexOf(form.name) != -1);
    }

    document.getElementById("pokedexList").innerHTML = "";
    for (let i = 0; i < filteredForms.length; i++) {
        let newImg = document.createElement("img");
        newImg.id = filteredForms[i].name;
        if (!filteredForms[i].caught) {
            newImg.classList.add("notCaught");
        }
        setImage(filteredForms, i, newImg, filteredForms[i].shinyCaught);
        document.getElementById("pokedexList").appendChild(newImg);
    }
}

// returns list of all pokemon of a type
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
// show favorites scene
let favoritesScene = () => {
    document.getElementById("catch").style.display = "none";
    document.getElementById("pokedex").style.display = "none";
    document.getElementById("favorite").style.display = favoritesDisplay;
    favoritesLoad();
}

// load favorotes list
let favoritesLoad = () => {

}

/*
    OnLoad
*/
let catchDisplay, pokedexDisplay, favoritesDisplay;
window.onload = e => {
    // catch setup
    catchDisplay = document.getElementById("catch").style.display;
    document.getElementById("catchButton").onclick = catchTyped;
    document.getElementById("catchRandomButton").onclick = catchRandom;
    // https://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box
    document.getElementById("catchInput").addEventListener("keydown", (e) => {if (e.key == "Enter") catchTyped();});

    // pokedex setup
    pokedexDisplay = document.getElementById("pokedex").style.display;
    document.getElementById("pokedexLoadButton").onclick = pokedexLoad;

    // favorites setup
    favoritesDisplay = document.getElementById("favorite").style.display;

    // header buttons
    document.getElementById("catchSceneButton").onclick = catchScene;
    document.getElementById("pokedexSceneButton").onclick = pokedexScene;
    document.getElementById("favoritesSceneButton").onclick = favoritesScene;
    catchScene();
}

let DEBUG_setAllForms = (caught = true, shinyCaught = false, favorite = false) => {
    for(let form of forms){
        form.caught = caught;
        form.shinyCaught = shinyCaught;
        form.favorite = favorite;
    }
    pokedexLoad();
    favoritesLoad();
}