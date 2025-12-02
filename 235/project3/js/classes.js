'use strict';
// scene
class scene {
    constructor(name, subscenes = {}) {
        this.name = name;
        this.subscenes = subscenes;
        this.sceneItems = [];
    }
    addSceneItem(sceneItem) {
        this.sceneItems.push(sceneItem);
    }
    removeSceneItem(name) {
        this.sceneItems = sceneItems.filter(item => item.name != name);
    }
    display() {
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
    }
    display = () => { }
    onMouseEnter = (e) => {
        // change sprite
    }
    onMouseExit = (e) => {
        // change sprite
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
        for (let action of this.actions) {
            action.display();
        }
    }
}

// scene item
class sceneItem extends item {
    constructor(name, posX, posY, descriptions, actions, interactable = true) {
        super(name, descriptions, actions)
        this.posX = posX;
        this.posY = posY;
        this.interactable = interactable;
    }
    display = () => {
        // add to scene at position
        let p = document.createElement("button");
        p.innerHTML = this.name;
        document.querySelector("#scene").appendChild(p);
        // if interactable
        if (this.interactable) {
            // add onclick
            p.onclick = this.onClick;
            // add onmouse
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
        // add onclick
        // add onmouse
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