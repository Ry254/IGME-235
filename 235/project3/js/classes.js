'use strict';
// A scene that contains items and can be displayed
class scene {
    constructor(name, subscenes = {}) {
        this.name = name;
        this.subscenes = subscenes;
        this.sceneItems = [];
    }
    // get an item
    getSceneItem = (name) => {
        return this.sceneItems.find(item => item.name == name);
    }
    // add an item and redisplay scene
    addSceneItem = (sceneItem, displayScene = false) => {
        sceneItem.parentScene = this;
        this.sceneItems.push(sceneItem);
        if (displayScene) {
            this.display();
        }
    }
    // remove an item and redisplay scene
    removeSceneItem = (name, displayScene = false) => {
        this.sceneItems = this.sceneItems.filter(item => item.name != name);
        if (displayScene) {
            this.display();
        }
    }
    // display scene
    display = () => {
        // reset scene box
        document.querySelector("#scene").replaceChildren([]);
        // display background
        document.querySelector("#scene").style.backgroundImage = `url(media/${this.name}.png)`;
        // display scene items
        for (let item of this.sceneItems) {
            item.display();
        }
    }
}

// Parent item class
class item {
    constructor(name, descriptions, actions) {
        this.name = name;
        this.descriptions = descriptions;
        this.actions = actions;

        // special action when using an item
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
    // display the item (abstract)
    display = () => { }
    // when mouse hoved over
    onMouseEnter = (e) => {
        e.target.dataset.hovered = true;
    }
    // when mouse unhoved over
    onMouseExit = (e) => {
        e.target.dataset.hovered = false;
    }
    // when clicked
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

// Item that belongs to a scene
class sceneItem extends item {
    constructor(name, posX, posY, posZ, descriptions, actions, interactable = true, visible = true) {
        super(name, descriptions, actions)
        this.parentScene = undefined;
        this.posX = posX;
        this.posY = posY;
        this.posZ = posZ;
        this.interactable = interactable;
        this.visible = visible;
    }
    display = () => {
        if (!this.visible) {
            return;
        }

        // create img
        let img = document.createElement("img");
        img.src = "media/" + this.name + ".png";

        // add to scene
        img.dataset.name = this.name;
        document.querySelector("#scene").appendChild(img);

        // set position
        img.style.top = this.posY + "%";
        img.style.left = this.posX + "%";
        img.style.zIndex = this.posZ;

        // set width
        img.onload = () => {
            let clientWidth = document.querySelector("#scene").clientWidth;
            img.style.width = (img.naturalWidth * (clientWidth / 1280))/clientWidth * 100 + "%";
        };

        // if interactable
        if (this.interactable) {
            // add onclick
            img.onclick = this.onClick;
            // add onmouse
            img.onmouseenter = this.onMouseEnter;
            img.onmouseleave = this.onMouseExit;
        }
        else{
            img.style.pointerEvents = "none";
        }
    }
}

// Item displayed in the inventory
class inventoryItem extends item {
    constructor(name, descriptions, actions) {
        super(name, descriptions, actions)
    }
    display = () => {
        // add to items list and add attributes
        let img = document.createElement("img");
        img.src = "media/items/" + this.name + ".png";
        img.dataset.name = this.name;
        let li = document.createElement("li");
        li.appendChild(img);
        document.querySelector("#inventory").appendChild(li);
        // add onclick
        img.onclick = this.onClick;
        // add onmouse
        img.onmouseenter = this.onMouseEnter;
        img.onmouseleave = this.onMouseExit;
    }
}

// The inventory
class inventory {
    constructor() {
        this.inventoryItems = [];
    }
    // get an item
    getInventoryItem = (name) => {
        return this.inventoryItems.find(item => item.name == name);
    }
    // add an item and redisplay inventory
    addInventoryItem = (inventoryItem, displayInventory = false) => {
        this.inventoryItems.push(inventoryItem);
        if (displayInventory) {
            this.display();
        }
    }
    // remove an item and redisplay inventory
    removeInventoryItem = (name, displayInventory = false) => {
        this.inventoryItems = this.inventoryItems.filter(item => item.name != name);
        if (displayInventory) {
            this.display();
        }
    }
    // display inventory
    display = () => {
        // reset scene box
        document.querySelector("#inventory").replaceChildren([]);
        // display inventory items
        for (let item of this.inventoryItems) {
            item.display();
        }
    }
}

// Actions that an item can do
class itemAction {
    constructor(name, action, immediate = false) {
        this.name = name;
        this.action = action;
        this.immediate = immediate;
    }
    display = () => {
        // immediate actions are instant (like changing scene when clicking on a door)
        if (this.immediate) {
            this.action();
            return;
        }
        // make button with action name and action as the onclick event
        let button = document.createElement("button");
        button.innerHTML = this.name;
        button.onclick = this.action;
        let li = document.createElement("li");
        li.appendChild(button);
        document.querySelector("#textbox>ul").appendChild(li);
    }
}