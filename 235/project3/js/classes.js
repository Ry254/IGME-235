'use strict';
// scene
class scene {
    constructor(name, subscenes = {}) {
        this.name = name;
        this.subscenes = subscenes;
        this.sceneItems = [];
    }
    getSceneItem = (name) => {
        return this.sceneItems.find(item => item.name == name);
    }
    addSceneItem = (sceneItem, displayScene = false) => {
        sceneItem.parentScene = this;
        this.sceneItems.push(sceneItem);
        if (displayScene) {
            this.display();
        }
    }
    removeSceneItem = (name, displayScene = false) => {
        this.sceneItems = this.sceneItems.filter(item => item.name != name);
        if (displayScene) {
            this.display();
        }
    }
    display = () => {
        // reset scene box
        document.querySelector("#scene").replaceChildren([]);
        // display background
        // display scene items
        for (let item of this.sceneItems) {
            item.display();
        }
    }
}

// item
class item {
    constructor(name, descriptions, actions) {
        this.name = name;
        this.descriptions = descriptions;
        this.actions = actions;

        this.inventoryItemAction = new itemAction(
            "use item interaction",
            () => {
                document.querySelector("#textbox>p").innerHTML = "Nothing Happened";
                document.querySelector("#textbox>ul").replaceChildren([]);
                document.querySelector("#inventory").dataset.activeItem = "";
            },
            true
        );
    }
    display = () => { }
    onMouseEnter = (e) => {
        e.target.style.borderColor = "antiquewhite";
    }
    onMouseExit = (e) => {
        e.target.style.borderColor = "transparent";
    }
    onClick = (e) => {
        // reset textbox
        document.querySelector("#textbox>p").innerHTML = "";
        document.querySelector("#textbox>ul").replaceChildren([]);
        // show random description
        if (this.descriptions.length > 0) {
            let randomIndex = Math.floor(Math.random() * this.descriptions.length);
            document.querySelector("#textbox>p").innerHTML = this.descriptions[randomIndex];
        }
        else {
            document.querySelector("#textbox>p").innerHTML = "no description set for: " + this.name;
        }
        // display actions
        if (document.querySelector("#inventory").dataset.activeItem == "") {
            for (let action of this.actions) {
                action.display();
            }
        }
        else {
            this.inventoryItemAction.display();
        }
    }
}

// scene item
class sceneItem extends item {
    constructor(name, posX, posY, descriptions, actions, interactable = true, visible = true) {
        super(name, descriptions, actions)
        this.parentScene = undefined;
        this.posX = posX;
        this.posY = posY;
        this.interactable = interactable;
        this.visible = visible;
    }
    display = () => {
        if (!this.visible) {
            return;
        }

        // https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/
        let object;
        object = document.createElement("img");
        object.src = "media/" + this.parentScene.name + "/" + this.name + ".png";

        // add to scene
        object.dataset.name = this.name;
        document.querySelector("#scene").appendChild(object);

        // set position
        object.style.top = this.posX + "%";
        object.style.left = this.posY + "%";

        // if interactable
        if (this.interactable) {
            // add onclick
            object.onclick = this.onClick;
            // add onmouse
            object.onmouseenter = this.onMouseEnter;
            object.onmouseleave = this.onMouseExit;
        }
    }
}

// inventory item
class inventoryItem extends item {
    constructor(name, descriptions, actions) {
        super(name, descriptions, actions)
    }
    display = () => {
        // add to items list
        let img = document.createElement("img");
        img.src = "media/items/" + this.name + ".png";
        img.dataset.name = this.name;
        let li = document.createElement("li");
        li.appendChild(img);
        document.querySelector("#inventory").appendChild(li);
        // add onclick
        img.onclick = this.onClick;
        // add onmouse
        li.onmouseenter = this.onMouseEnter;
        li.onmouseleave = this.onMouseExit;
    }
}

// inventory
class inventory {
    constructor() {
        this.inventoryItems = [];
    }
    getInventoryItem = (name) => {
        return this.inventoryItems.find(item => item.name == name);
    }
    addInventoryItem = (inventoryItem, displayInventory = false) => {
        this.inventoryItems.push(inventoryItem);
        if (displayInventory) {
            this.display();
        }
    }
    removeInventoryItem = (name, displayInventory = false) => {
        this.inventoryItems = this.inventoryItems.filter(item => item.name != name);
        if (displayInventory) {
            this.display();
        }
    }
    display = () => {
        // reset scene box
        document.querySelector("#inventory").replaceChildren([]);
        // display background
        // display scene items
        for (let item of this.inventoryItems) {
            item.display();
        }
    }
}

// actions
class itemAction {
    constructor(name, action, immediate = false) {
        this.name = name;
        this.action = action;
        this.immediate = immediate;
    }
    display = () => {
        if (this.immediate) {
            this.action();
            return;
        }
        // make button with action name and action as the onclick event
        let button = document.createElement("button");
        button.innerHTML = this.name;
        button.onclick = this.action;
        document.querySelector("#textbox>ul").appendChild(document.createElement("li").innerHTML = button);
    }
}