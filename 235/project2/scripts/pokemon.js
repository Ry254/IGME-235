"use strict";
let defaultImage = document.createElement("img");
defaultImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
/*
    Setup list of forms
*/
let error = (e) => console.log("error getting forms");
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

const pokedexKey = "rns2723pokedex";
const filtersKey = "rns2723filters";
let readStorage = () => {
    let storedData = localStorage.getItem(pokedexKey);
    if (storedData) {
        storedData = JSON.parse(storedData);

        for (let i = 0; i < forms.length; i++) {
            if (i >= storedData.length) { break; }
            forms[i].caught = storedData[i].caught;
            forms[i].shinyCaught = storedData[i].shinyCaught;
            forms[i].favorite = storedData[i].favorite;
        }
    }

    storedData = localStorage.getItem(filtersKey);
    if (storedData) {
        storedData = JSON.parse(storedData);

        document.getElementById("caughtOnly").checked = storedData.caughtOnly;
        document.getElementById("showNonShiny").checked = storedData.showNonShiny;
        document.getElementById("type1").value = storedData.type1;
        document.getElementById("type2").value = storedData.type2;
        document.getElementById("eggGroup").value = storedData.eggGroup;
        document.getElementById("color").value = storedData.color;
        document.getElementById("shape").value = storedData.shape;
    }
}

let writeStorage = () => {
    let storedData = forms.map(form => { return { caught: form.caught, shinyCaught: form.shinyCaught, favorite: form.favorite }; });
    storedData = JSON.stringify(storedData);
    localStorage.setItem(pokedexKey, storedData);

    storedData = {};
    storedData.caughtOnly = document.getElementById("caughtOnly").checked;
    storedData.showNonShiny = document.getElementById("showNonShiny").checked;
    storedData.type1 = document.getElementById("type1").value;
    storedData.type2 = document.getElementById("type2").value;
    storedData.eggGroup = document.getElementById("eggGroup").value;
    storedData.color = document.getElementById("color").value;
    storedData.shape = document.getElementById("shape").value;
    storedData = JSON.stringify(storedData);
    localStorage.setItem(filtersKey, storedData);
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
        document.getElementById("caughtImage").src = defaultImage.src;
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
    writeStorage();
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
    hoverEnabled = true;
    pokedexImageUnhovered();

    let filteredForms = forms;

    if (document.getElementById("caughtOnly").checked) {
        filteredForms = filteredForms.filter(form => form.caught);
    }

    let type1 = getByFilter("type", document.getElementById("type1").value, "pokemon", "pokemon");
    if (type1) {
        filteredForms = filteredForms.filter(form => type1.indexOf(form.name) != -1);
    }

    let type2 = getByFilter("type", document.getElementById("type2").value, "pokemon", "pokemon");
    if (type2) {
        filteredForms = filteredForms.filter(form => type2.indexOf(form.name) != -1);
    }

    let eggGroup = getByFilter("egg-group", document.getElementById("eggGroup").value);
    if (eggGroup) {
        filteredForms = filteredForms.filter(form => eggGroup.indexOf(form.name) != -1);
    }

    let color = getByFilter("pokemon-color", document.getElementById("color").value);
    if (color) {
        filteredForms = filteredForms.filter(form => color.indexOf(form.name) != -1);
    }

    let shape = getByFilter("pokemon-shape", document.getElementById("shape").value);
    if (shape) {
        filteredForms = filteredForms.filter(form => shape.indexOf(form.name) != -1);
    }

    document.getElementById("pokedexList").innerHTML = "";
    for (let i = 0; i < filteredForms.length; i++) {
        let newDiv = document.createElement("div");
        let newImg = document.createElement("img");
        newDiv.dataset.name = filteredForms[i].name;
        if (!filteredForms[i].caught) {
            newImg.classList.add("notCaught");
        }
        setImage(filteredForms, i, newImg,
            document.getElementById("showNonShiny").checked ? filteredForms[i].shinyCaught : false);
        newDiv.onclick = pokedexImageClick;
        newDiv.onmouseenter = pokedexImageHovered;
        newDiv.onmouseleave = pokedexImageUnhovered;
        newDiv.appendChild(newImg);
        document.getElementById("pokedexList").appendChild(newDiv);
    }

    writeStorage();
}

let getByFilter = (filterName, value, listTerm = "pokemon_species", secondaryTerm) => {
    if (value == "any") {
        return null;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://pokeapi.co/api/v2/${filterName}/${value}`, false);
    xhr.send();
    let pkmnJSON = xhr.responseText;
    pkmnJSON = JSON.parse(pkmnJSON)[listTerm];
    let pkmn;
    if (secondaryTerm) {
        pkmn = pkmnJSON.map(item => item[secondaryTerm].name);
    }
    else {
        pkmn = pkmnJSON.map(item => item.name);
    }
    return pkmn;
}

let resetFilters = () => {
    document.getElementById("caughtOnly").checked = true;
    document.getElementById("showNonShiny").checked = true;
    document.getElementById("type1").value = "any";
    document.getElementById("type2").value = "any";
    document.getElementById("eggGroup").value = "any";
    document.getElementById("color").value = "any";
    document.getElementById("shape").value = "any";
    pokedexLoad();
}

// pokedex list hovers and click
let hoverEnabled = true;
let pokedexImageClick = (e) => {
    if (hoverEnabled) {
        hoverEnabled = false;
        return;
    }

    let formClickedName = e.currentTarget.dataset.name;
    let currentFormDisplayed = document.getElementById("pokedexData").dataset.name;

    if (formClickedName == currentFormDisplayed) {
        hoverEnabled = true;
    }
    else {
        setPokedexData(formClickedName);
    }
}

let pokedexImageHovered = (e) => {
    if (!hoverEnabled) {
        return;
    }
    setPokedexData(e.currentTarget.dataset.name);
}

let setPokedexData = (formName) => {
    let imgOfForm = document.querySelector(`[data-name=${formName}]>img`);
    document.getElementById("pokedexData").dataset.name = formName;
    document.querySelector("#pokedexData img").src = imgOfForm.src;
    document.querySelector("#pokedexData img").classList = imgOfForm.classList;
    if (imgOfForm.className.indexOf("notCaught") == -1) {
        document.querySelector("#pokedexData>p").innerHTML = formName.replaceAll("-", " ").toUpperCase();
    }
    else {
        document.querySelector("#pokedexData>p").innerHTML = "???";
    }

    if (forms[indexOfName(forms, formName)].favorite) {
        document.querySelector("#pokedexData>img").src = "images/favorite_filled.svg";
        document.querySelector("#pokedexData>img").dataset.favorite = "true";
    }
    else {
        document.querySelector("#pokedexData>img").src = "images/favorite_empty.svg";
        document.querySelector("#pokedexData>img").dataset.favorite = "false";
    }
}

let pokedexImageUnhovered = (e) => {
    if (!hoverEnabled) {
        return;
    }
    document.getElementById("pokedexData").dataset.name = "";
    document.querySelector("#pokedexData img").src = defaultImage.src;
    document.querySelector("#pokedexData img").classList = defaultImage.classList;
    document.querySelector("#pokedexData>p").innerHTML = "???";
    document.querySelector("#pokedexData>img").src = "images/favorite_empty.svg";
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
    document.getElementById("favoriteList").innerHTML = "";
    for (let i = 0; i < forms.length; i++) {
        if (!forms[i].favorite) {
            continue;
        }

        let newDiv = document.createElement("div");
        let newImg = document.createElement("img");
        newDiv.dataset.name = forms[i].name;
        if (!forms[i].caught) {
            newImg.classList.add("notCaught");
        }
        setImage(forms, i, newImg, forms[i].shinyCaught);
        newDiv.appendChild(newImg);
        document.getElementById("favoriteList").appendChild(newDiv);
    }
}

let onFavoriteStarClicked = (e) => {
    let formName = document.getElementById("pokedexData").dataset.name;
    let formIndex = indexOfName(forms, formName);
    if (formIndex == -1 || !forms[formIndex].caught) {
        return;
    }

    let starElement = document.querySelector("#pokedexData>img");

    if (starElement.dataset.favorite == "true") {
        starElement.src = "images/favorite_empty.svg";
        starElement.dataset.favorite = "false";
        forms[formIndex].favorite = false;
    }
    else {
        starElement.src = "images/favorite_filled.svg";
        starElement.dataset.favorite = "true";
        forms[formIndex].favorite = true;
    }
    writeStorage();
}

let indexOfName = (formList, name) => {
    for (let i = 0; i < formList.length; i++) {
        if (formList[i].name == name) {
            return i;
        }
    }
    return -1;
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
    document.getElementById("catchInput").addEventListener("keydown", (e) => { if (e.key == "Enter") catchTyped(); });

    // pokedex setup
    pokedexDisplay = document.getElementById("pokedex").style.display;
    document.getElementById("pokedexLoadButton").onclick = pokedexLoad;
    document.getElementById("pokedexResetButton").onclick = resetFilters;

    // favorites setup
    document.querySelector("#pokedexData>img").onclick = onFavoriteStarClicked;
    favoritesDisplay = document.getElementById("favorite").style.display;

    // header buttons
    document.getElementById("catchSceneButton").onclick = catchScene;
    document.getElementById("pokedexSceneButton").onclick = pokedexScene;
    document.getElementById("favoritesSceneButton").onclick = favoritesScene;
    catchScene();
}

let DEBUG_setAllForms = (caught = true, shinyCaught = false, favorite = false) => {
    for (let form of forms) {
        form.caught = caught;
        form.shinyCaught = shinyCaught;
        form.favorite = favorite;
    }
    pokedexLoad();
    favoritesLoad();
    writeStorage();
}

let DEBUG_resetStorage = () => {
    localStorage.removeItem(pokedexKey);
    localStorage.removeItem(filtersKey);
}