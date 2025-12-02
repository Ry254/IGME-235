'use strict';
// scene
class scene{
    constructor(name){
        this.name = name;
        this.sceneItems = [];
    }
    addSceneItem(name, posX, posY, descriptions, actions){
        this.sceneItems.push(new sceneItem(
            name, posX, posY, descriptions, actions
        ));
    }
    removeSceneItem(name){
        this.sceneItems = sceneItem.filter(item => item.name != name);
    }
    display(){
        // display scene items and background
    }
}

// item
class item{
    constructor(name, descriptions, actions){
        this.name = name;
        this.descriptions = descriptions;
        this.actions = actions;
    }
    display(){
        // add to items list
        // add onclick
        // add onmouse
    }
    onMouseEnter(){
        // change sprite
    }
    onMouseExit(){
        // change sprite
    }
    onClick(){
        // show random description
        // display actions
        for(let action of actions){
            action.display();
        }
    }
}

// scene item
class sceneItem extends interactable{
    constructor(name, posX, posY, descriptions, actions){
        super(name, descriptions, actions)
        this.posX = posX;
        this.posY = posY;
        this.interactable = true;
    }
    constructor(name, posX, posY){
        super(name, undefined, undefined)
        this.posX = posX;
        this.posY = posY;
        this.interactable = false;
    }
    display(){
        // add to scene at position
        // if interactable
            // add onclick
            // add onmouse
    }
}

// actions
class itemAction{
    constructor(name, action, immediate = false){
        this.name = name;
        this.action = action;
        this.immediate = immediate;
    }
    display(){
        if(this.immediate){
            this.action();
            return;
        }
        // make button with action name and action as the onclick event
    }
}