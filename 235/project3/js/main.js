'use strict';
let timeLeft = 6000;
let locksLeft = 4;

let scenes = {
    void: new scene("voidScene", { exitDoor: new scene("exitDoorScene") }),
    red: new scene("redScene", { keypad: new scene("keypadScene") }),
    yellow: new scene("yellowScene"),
    green: new scene("greenScene", {
        beachDoor : new scene("beachDoorScene"),
        cloverBed : new scene("cloverBedScene")
    }),
    blue: new scene("blueScene", {
        coatRack : new scene("coatRackScene"),
        peephole : new scene("peepholeScene")
    }),
    beach: new scene("beachScene", { exitDoor: new scene("beachExitDoorScene") })
}

let backButton = (previousScene) => {
    return new sceneItem(
        "backButton",
        0, 0,
        [
            ""
        ],
        [
            new itemAction(
                "",
                () => previousScene.display(),
                true
            )
        ]
    );
}

/***********************
    Void scene items
 ***********************/
scenes.void.addSceneItem(
    new sceneItem(
        "redDoor",
        0, 0,
        [
            "It's kinda cozy in here",
            "The heat feels nice"
        ],
        [
            new itemAction(
                "",
                () => scenes.red.display(),
                true
            )
        ]
    )
);
scenes.void.addSceneItem(
    new sceneItem(
        "yellowDoor",
        0, 0,
        [
            "There isn't much here",
            "Spacious"
        ],
        [
            new itemAction(
                "",
                () => scenes.yellow.display(),
                true
            )
        ]
    )
);
scenes.void.addSceneItem(
    new sceneItem(
        "greenDoor",
        0, 0,
        [
            "Lots of plants",
            "Christmas came early I see"
        ],
        [
            new itemAction(
                "",
                () => scenes.green.display(),
                true
            )
        ]
    )
);
scenes.void.addSceneItem(
    new sceneItem(
        "blueDoor",
        0, 0,
        [
            "It's cold in here",
            "Brr"
        ],
        [
            new itemAction(
                "",
                () => scenes.blue.display(),
                true
            )
        ]
    )
);
scenes.void.addSceneItem(
    new sceneItem(
        "exitDoor",
        0, 0,
        [
            "A door with a giant exit sign"
        ],
        [
            new itemAction(
                "",
                () => scenes.void.subscenes.exitDoor.display(),
                true
            )
        ]
    )
);
// exit door scene
scenes.void.subscenes.exitDoor.addSceneItem(backButton(scenes.void));
let setExitLocks = () => {

}
setExitLocks();

/***********************
     Red scene items
 ***********************/
scenes.red.addSceneItem(backButton(scenes.void));
scenes.red.addSceneItem(
    new sceneItem(
        "mountedFish",
        0, 0,
        [],
        []
    )
);
scenes.red.addSceneItem(
    new sceneItem(
        "stocking",
        0, 0,
        [],
        []
    )
);
scenes.red.addSceneItem(
    new sceneItem(
        "firePlace",
        0, 0,
        [],
        []
    )
);
scenes.red.addSceneItem(
    new sceneItem(
        "painting",
        0, 0,
        [],
        []
    )
);
scenes.red.addSceneItem(
    new sceneItem(
        "letter",
        0, 0,
        [],
        []
    )
);
// keypad scene
scenes.red.subscenes.keypad.addSceneItem(backButton(scenes.red));
scenes.red.subscenes.keypad.addSceneItem(
    new sceneItem(
        "keypad1",
        0, 0,
        [],
        []
    )
);
scenes.red.subscenes.keypad.addSceneItem(
    new sceneItem(
        "keypad2",
        0, 0,
        [],
        []
    )
);
scenes.red.subscenes.keypad.addSceneItem(
    new sceneItem(
        "keypad3",
        0, 0,
        [],
        []
    )
);
scenes.red.subscenes.keypad.addSceneItem(
    new sceneItem(
        "keypad4",
        0, 0,
        [],
        []
    )
);
scenes.red.subscenes.keypad.addSceneItem(
    new sceneItem(
        "keypad5",
        0, 0,
        [],
        []
    )
);
scenes.red.subscenes.keypad.addSceneItem(
    new sceneItem(
        "keypad6",
        0, 0,
        [],
        []
    )
);
scenes.red.subscenes.keypad.addSceneItem(
    new sceneItem(
        "keypad7",
        0, 0,
        [],
        []
    )
);
scenes.red.subscenes.keypad.addSceneItem(
    new sceneItem(
        "keypad8",
        0, 0,
        [],
        []
    )
);
scenes.red.subscenes.keypad.addSceneItem(
    new sceneItem(
        "keypad9",
        0, 0,
        [],
        []
    )
);
scenes.red.subscenes.keypad.addSceneItem(
    new sceneItem(
        "keypad0",
        0, 0,
        [],
        []
    )
);
scenes.red.subscenes.keypad.addSceneItem(
    new sceneItem(
        "keypadEnter",
        0, 0,
        [],
        []
    )
);

/***********************
   Yellow scene items
 ***********************/
scenes.yellow.addSceneItem(backButton(scenes.void));
scenes.yellow.addSceneItem(
    new sceneItem(
        "yellowKey",
        0, 0,
        [],
        []
    )
);
scenes.yellow.addSceneItem(
    new sceneItem(
        "piggyBank",
        0, 0,
        [],
        []
    )
);
scenes.yellow.addSceneItem(
    new sceneItem(
        "starTopper",
        0, 0,
        [],
        []
    )
);
scenes.yellow.addSceneItem(
    new sceneItem(
        "window",
        0, 0,
        [],
        []
    )
);

/***********************
    Green scene items
 ***********************/
scenes.green.addSceneItem(backButton(scenes.void));
scenes.green.addSceneItem(
    new sceneItem(
        "cloverBed",
        0, 0,
        [],
        []
    )
);
scenes.green.addSceneItem(
    new sceneItem(
        "cristmasTree",
        0, 0,
        [],
        []
    )
);
scenes.green.addSceneItem(
    new sceneItem(
        "flowerPot",
        0, 0,
        [],
        []
    )
);
scenes.green.addSceneItem(
    new sceneItem(
        "beachDoor",
        0, 0,
        [
            "It's a blue and yellow door"
        ],
        [
            new itemAction(
                "",
                () => scenes.green.subscenes.beachDoor.display(),
                true
            )
        ]
    )
);
// clover bed scene
scenes.green.subscenes.cloverBed.addSceneItem(backButton(scenes.green));
// beach door scene
scenes.green.subscenes.beachDoor.addSceneItem(backButton(scenes.green));
scenes.green.subscenes.beachDoor.addSceneItem(
    new sceneItem(
        "yellowLock",
        0, 0,
        [],
        []
    )
);
scenes.green.subscenes.beachDoor.addSceneItem(
    new sceneItem(
        "blueLock",
        0, 0,
        [],
        []
    )
);

/***********************
    Blue scene items
 ***********************/
scenes.blue.addSceneItem(backButton(scenes.void));
scenes.blue.addSceneItem(
    new sceneItem(
        "smallIceCube",
        0, 0,
        [],
        []
    )
);
scenes.blue.addSceneItem(
    new sceneItem(
        "largeIceCube",
        0, 0,
        [],
        []
    )
);
scenes.blue.addSceneItem(
    new sceneItem(
        "coatRack",
        0, 0,
        [],
        []
    )
);
scenes.blue.addSceneItem(
    new sceneItem(
        "peephole",
        0, 0,
        [],
        []
    )
);
// coat rack scene
scenes.blue.subscenes.coatRack.addSceneItem(backButton(scenes.blue));
scenes.blue.subscenes.coatRack.addSceneItem(
    new sceneItem(
        "blueKey",
        0, 0,
        [],
        [],
        false
    )
);
scenes.blue.subscenes.coatRack.addSceneItem(
    new sceneItem(
        "glove",
        0, 0,
        [],
        [],
        false
    )
);
scenes.blue.subscenes.coatRack.addSceneItem(
    new sceneItem(
        "hat",
        0, 0,
        [],
        [],
        false
    )
);
// peephole scene
scenes.blue.subscenes.peephole.addSceneItem(backButton(scenes.blue));
scenes.blue.subscenes.peephole.addSceneItem(
    new sceneItem(
        "eyes",
        0, 0,
        [],
        [],
        false
    )
);

/***********************
    Beach scene items
 ***********************/
scenes.beach.addSceneItem(backButton(scenes.green));

window.onload = (e) => {
    scenes.void.display();
}