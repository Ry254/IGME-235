'use strict';

let voidScene = new scene("void");
voidScene.addSceneItem(new sceneItem(
    "test item",
    0, 0,
    ["test description", "other i guess"],
    [
        new itemAction("immediate action", () => console.log("immediate action"), true),
        new itemAction("button action", () => console.log("button action")),
    ])
);


window.onload = (e) => {
    voidScene.display();
}