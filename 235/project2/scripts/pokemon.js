"use strict";
let defaultImage = document.createElement("img");
defaultImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
/*
    Setup list of forms
*/
//let error = (e) => console.log("error getting forms");

// get the list of forms
let getForms = (url) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = e => {
        let formsJSON = e.target.responseText;
        formsJSON = JSON.parse(formsJSON).results;
        forms = formsJSON;

        // get images for each form
        for (let i = 0; i < forms.length; i++) {
            getImages(i);
        }
    };
    //xhr.onerror = error;
    xhr.open("GET", url);
    xhr.send();
}

let formsCheckedForImages = 0;

// get the images of the forms
let getImages = (formIndex) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = e => {
        let spriteJSON = e.target.responseText;
        spriteJSON = JSON.parse(spriteJSON).sprites;

        // set sprites
        forms[formIndex].defaultSprite = spriteJSON.front_default;
        forms[formIndex].shinySprite = spriteJSON.front_shiny;
        forms[formIndex].femaleSprite = spriteJSON.front_female;
        forms[formIndex].femaleShinySprite = spriteJSON.front_shiny_female;

        // when all sprites loaded, setup the forms list
        formsCheckedForImages++;
        if (formsCheckedForImages >= forms.length) {
            setupFormsList();
        }
    };
    //xhr.onerror = error;
    xhr.open("GET", forms[formIndex].url);
    xhr.send();
}

let forms = {};

/*
    Read local storage
*/

// sets up the list of forms for use in the site
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

    // read storage then enable the site buttons
    readStorage();
    eventsSetup();
}

const pokedexKey = "rns2723pokedex";
const filtersKey = "rns2723filters";
// reads from the local storage
let readStorage = () => {
    // pokedex data
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

    // filter data
    storedData = localStorage.getItem(filtersKey);
    if (storedData) {
        storedData = JSON.parse(storedData);

        document.querySelector("#caughtOnly").checked = storedData.caughtOnly;
        document.querySelector("#showNonShiny").checked = storedData.showNonShiny;
        document.querySelector("#type1").value = storedData.type1;
        document.querySelector("#type2").value = storedData.type2;
        document.querySelector("#eggGroup").value = storedData.eggGroup;
        document.querySelector("#color").value = storedData.color;
        document.querySelector("#shape").value = storedData.shape;
    }
}

// writes to the local storage
let writeStorage = () => {
    // pokedex data
    let storedData = forms.map(form => { return { caught: form.caught, shinyCaught: form.shinyCaught, favorite: form.favorite }; });
    storedData = JSON.stringify(storedData);
    localStorage.setItem(pokedexKey, storedData);

    // filter data
    storedData = {};
    storedData.caughtOnly = document.querySelector("#caughtOnly").checked;
    storedData.showNonShiny = document.querySelector("#showNonShiny").checked;
    storedData.type1 = document.querySelector("#type1").value;
    storedData.type2 = document.querySelector("#type2").value;
    storedData.eggGroup = document.querySelector("#eggGroup").value;
    storedData.color = document.querySelector("#color").value;
    storedData.shape = document.querySelector("#shape").value;
    storedData = JSON.stringify(storedData);
    localStorage.setItem(filtersKey, storedData);
}

/*
    Catch Screen
*/
// show catch scene
let catchScene = () => {
    document.querySelector("#catch").style.display = catchDisplay;
    document.querySelector("#pokedex").style.display = "none";
    document.querySelector("#favorite").style.display = "none";
}

// catch pokemon based on what was typed
let catchTyped = (e) => {
    // get and setup input
    let input = document.querySelector("#catchInput").value;
    input = input.trim().toLowerCase();
    input = input.replace(/[.'%]/, "").split(/[- ]/);

    // change alt words for specific forms
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

    // search for form that contains inputed words
    let formIndex;
    for (let i = 0; i < forms.length; i++) {
        let formTerms = forms[i].name.split("-");
        let containsInputs = input.map(word => formTerms.indexOf(word) != -1);
        // first word of form (usualy the pokemon name) must be in the input
        if (containsInputs.indexOf(false) == -1 && input.indexOf(formTerms[0]) != -1) {
            formIndex = i;
            break;
        }
    }

    // if valid form, catch, else display default image and not valid text
    if (formIndex != undefined) {
        catchMon(formIndex);
    }
    else {
        document.querySelector("#caughtText").innerHTML = "Not a valid pokemon/form.";
        document.querySelector("#caughtImage").src = defaultImage.src;
    }
}

// catch a random pokemon
let catchRandom = (e) => {
    // random 0 to fen of forms
    let randomMon = Math.floor(Math.random() * forms.length);
    catchMon(randomMon);
}

// catch the pokemon at the given index of forms
let catchMon = (formIndex) => {
    // shiny chance
    let isshiny = Math.random() < .05;

    // set caught image
    setImage(forms, formIndex, document.querySelector("#caughtImage"), isshiny);

    // setup and add caught text
    let formName = forms[formIndex].name.replaceAll("-", " ");
    forms[formIndex].caught = true;
    forms[formIndex].shinyCaught = forms[formIndex].shinyCaught ? true : isshiny;
    document.querySelector("#caughtText").innerHTML = "You caught " + (isshiny ? "SHINY " : "") + formName.toUpperCase() + "!";

    // save to local storage
    writeStorage();
}

// set given img based on given parameters
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
// show pokedex scene and load list
let pokedexScene = (e) => {
    document.querySelector("#catch").style.display = "none";
    document.querySelector("#pokedex").style.display = pokedexDisplay;
    document.querySelector("#favorite").style.display = "none";
    pokedexLoad();
}

// load pokedex list
let pokedexLoad = (e) => {
    // reset pokedexData and hover
    hoverEnabled = true;
    pokedexImageUnhovered();

    let filteredForms = forms;

    // filter for caught
    if (document.querySelector("#caughtOnly").checked) {
        filteredForms = filteredForms.filter(form => form.caught);
    }

    // filter for type
    let type1 = getByFilter("type", document.querySelector("#type1").value, "pokemon", "pokemon");
    if (type1) {
        filteredForms = filteredForms.filter(form => type1.indexOf(form.name) != -1);
    }

    // filter for another type
    let type2 = getByFilter("type", document.querySelector("#type2").value, "pokemon", "pokemon");
    if (type2) {
        filteredForms = filteredForms.filter(form => type2.indexOf(form.name) != -1);
    }

    // filter for egg group
    let eggGroup = getByFilter("egg-group", document.querySelector("#eggGroup").value);
    if (eggGroup) {
        filteredForms = filteredForms.filter(form => eggGroup.indexOf(form.name) != -1);
    }

    // filter for color
    let color = getByFilter("pokemon-color", document.querySelector("#color").value);
    if (color) {
        filteredForms = filteredForms.filter(form => color.indexOf(form.name) != -1);
    }

    // filter for shape
    let shape = getByFilter("pokemon-shape", document.querySelector("#shape").value);
    if (shape) {
        filteredForms = filteredForms.filter(form => shape.indexOf(form.name) != -1);
    }

    // create 
    document.querySelector("#pokedexList").innerHTML = "";
    for (let i = 0; i < filteredForms.length; i++) {
        // create a li and img
        let newLi = document.createElement("li");
        let newImg = document.createElement("img");

        // setup li and img
        newLi.dataset.name = filteredForms[i].name;
        if (!filteredForms[i].caught) {
            newImg.classList.add("notCaught");
        }
        setImage(filteredForms, i, newImg,
            document.querySelector("#showNonShiny").checked ? filteredForms[i].shinyCaught : false);
        newLi.onclick = pokedexImageClick;
        newLi.onmouseenter = pokedexImageHovered;
        newLi.onmouseleave = pokedexImageUnhovered;

        // append img to the li and append li to the list
        newLi.appendChild(newImg);
        document.querySelector("#pokedexList").appendChild(newLi);
    }

    // save to local storage
    writeStorage();
}

// returns a list of pokemon with the given filter
let getByFilter = (filterName, value, listTerm = "pokemon_species", secondaryTerm) => {
    // return null if filter is not set
    if (value == "any") {
        return null;
    }

    // synchronous API request
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://pokeapi.co/api/v2/${filterName}/${value}`, false);
    xhr.send();
    let pkmnJSON = xhr.responseText;
    pkmnJSON = JSON.parse(pkmnJSON)[listTerm];

    // map to just a list of pokemon names
    let pkmn;
    if (secondaryTerm) {
        pkmn = pkmnJSON.map(item => item[secondaryTerm].name);
    }
    else {
        pkmn = pkmnJSON.map(item => item.name);
    }
    return pkmn;
}

// resets the filters and loads the pokedex
let resetFilters = () => {
    document.querySelector("#caughtOnly").checked = true;
    document.querySelector("#showNonShiny").checked = true;
    document.querySelector("#type1").value = "any";
    document.querySelector("#type2").value = "any";
    document.querySelector("#eggGroup").value = "any";
    document.querySelector("#color").value = "any";
    document.querySelector("#shape").value = "any";
    pokedexLoad();
}

let hoverEnabled = true;
// when pokemon image is clicked
let pokedexImageClick = (e) => {
    // disable hover if enabled
    if (hoverEnabled) {
        hoverEnabled = false;
        return;
    }

    // get name of image clicked
    let formClickedName = e.currentTarget.dataset.name;
    let currentFormDisplayed = document.querySelector("#pokedexData").dataset.name;

    // enable hovered if names are the same, else set pokedexData for the clicked name
    if (formClickedName == currentFormDisplayed) {
        hoverEnabled = true;
    }
    else {
        setPokedexData(formClickedName);
    }
}

// when the mouse enters the pokemon image
let pokedexImageHovered = (e) => {
    // when hovered disabled, return
    if (!hoverEnabled) {
        return;
    }
    setPokedexData(e.currentTarget.dataset.name);
}

// set innerHTML of pokedexData
let setPokedexData = (formName) => {
    // get img associated with the formName
    let imgOfForm = document.querySelector(`[data-name=${formName}]>img`);

    // setup pokedexData and the main pokemon img
    document.querySelector("#pokedexData").dataset.name = formName;
    document.querySelector("#pokedexData>div>img").src = imgOfForm.src;
    document.querySelector("#pokedexData>div>img").classList = imgOfForm.classList;

    // Add name (if not caught, ??? instead)
    if (imgOfForm.className.indexOf("notCaught") == -1) {
        document.querySelector("#pokedexData>p").innerHTML = formName.replaceAll("-", " ").toUpperCase();
    }
    else {
        document.querySelector("#pokedexData>p").innerHTML = "???";
    }

    // setup the favorite star
    if (forms[indexOfName(forms, formName)].favorite) {
        document.querySelector("#pokedexData>img").src = "images/favorite_filled.svg";
        document.querySelector("#pokedexData>img").dataset.favorite = "true";
    }
    else {
        document.querySelector("#pokedexData>img").src = "images/favorite_empty.svg";
        document.querySelector("#pokedexData>img").dataset.favorite = "false";
    }
}

// when the mouse leaves the pokemon image
let pokedexImageUnhovered = (e) => {
    // when hovered disabled, return
    if (!hoverEnabled) {
        return;
    }
    // reset innerHTML of pokedexData
    document.querySelector("#pokedexData").dataset.name = "";
    document.querySelector("#pokedexData img").src = defaultImage.src;
    document.querySelector("#pokedexData img").classList = defaultImage.classList;
    document.querySelector("#pokedexData>p").innerHTML = "???";
    document.querySelector("#pokedexData>img").src = "images/favorite_empty.svg";
}

/*
    Favorites Screen
*/
// show favorites scene and load list
let favoritesScene = () => {
    document.querySelector("#catch").style.display = "none";
    document.querySelector("#pokedex").style.display = "none";
    document.querySelector("#favorite").style.display = favoritesDisplay;
    favoritesLoad();
}

// load favorotes list
let favoritesLoad = () => {
    // reset HTML list and loop through forms
    document.querySelector("#favoriteList").innerHTML = "";
    for (let i = 0; i < forms.length; i++) {
        // ignore forms that are not favorites
        if (!forms[i].favorite) {
            continue;
        }

        // create a li and img
        let newLi = document.createElement("li");
        let newImg = document.createElement("img");

        // setup li and img
        newLi.dataset.name = forms[i].name;
        if (!forms[i].caught) {
            newImg.classList.add("notCaught");
        }
        setImage(forms, i, newImg, forms[i].shinyCaught);

        // append img to the li and append li to the list
        newLi.appendChild(newImg);
        document.querySelector("#favoriteList").appendChild(newLi);
    }
}

// when the favorites star is clicked
let onFavoriteStarClicked = (e) => {
    let formName = document.querySelector("#pokedexData").dataset.name;
    let formIndex = indexOfName(forms, formName);

    // if no form was selected or the form is not caught, return
    if (formIndex == -1 || !forms[formIndex].caught) {
        return;
    }

    let starElement = document.querySelector("#pokedexData>img");

    // swap values and star image
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

    // save change to storage
    writeStorage();
}

// get the index of a form in the given list based on the name given
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
    // set up scenes
    catchDisplay = document.querySelector("#catch").style.display;
    pokedexDisplay = document.querySelector("#pokedex").style.display;
    favoritesDisplay = document.querySelector("#favorite").style.display;
    catchScene();

    // set up forms list
    getForms("https://pokeapi.co/api/v2/pokemon-form/?limit=10000");
}

// setup events (called after forms is setup to not cause problems)
let eventsSetup = () => {
    // catch setup
    document.querySelector("#catchButton").onclick = catchTyped;
    document.querySelector("#catchRandomButton").onclick = catchRandom;
    document.querySelector("#catchInput").addEventListener("keydown", (e) => { if (e.key == "Enter") catchTyped(); });

    // pokedex setup
    document.querySelector("#pokedexLoadButton").onclick = pokedexLoad;
    document.querySelector("#pokedexResetButton").onclick = resetFilters;

    // favorites setup
    document.querySelector("#pokedexData>img").onclick = onFavoriteStarClicked;

    // add navigation
    document.querySelector("#catchSceneButton").onclick = catchScene;
    document.querySelector("#pokedexSceneButton").onclick = pokedexScene;
    document.querySelector("#favoritesSceneButton").onclick = favoritesScene;
}

// set all forms caught, shinyCaught, and favorite
let debug_setAllForms = (caught = true, shinyCaught = false, favorite = false) => {
    for (let form of forms) {
        form.caught = caught;
        form.shinyCaught = shinyCaught;
        form.favorite = favorite;
    }
    pokedexLoad();
    favoritesLoad();
    writeStorage();
}

// reset local storage keys
let debug_resetStorage = () => {
    localStorage.removeItem(pokedexKey);
    localStorage.removeItem(filtersKey);
}