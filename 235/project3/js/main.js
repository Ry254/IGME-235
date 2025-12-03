'use strict';
let timeLeft = 6000;
let locksLeft = 4;
let items;
let scenes;
let inventoryItems = new inventory();

/***********************
      Create items
 ***********************/
let createItems = () => {
    items = {
        redKey: new inventoryItem(
            "redKey_item",
            [],
            []
        ),
        yellowKey: new inventoryItem(
            "yellowKey_item",
            [],
            []
        ),
        greenKey: new inventoryItem(
            "greenKey_item",
            [],
            []
        ),
        blueKey: new inventoryItem(
            "blueKey_item",
            [],
            []
        ),
        orangeKey: new inventoryItem(
            "orangeKey_item",
            [],
            []
        ),
        limeKey: new inventoryItem(
            "limeKey_item",
            [],
            []
        ),
        limeKey: new inventoryItem(
            "cyanKey_item",
            [],
            []
        ),
        magentaKey: new inventoryItem(
            "magentaKey_item",
            [],
            []
        ),
        christmasKey: new inventoryItem(
            "christmasKey_item",
            [],
            []
        ),
        beachKey: new inventoryItem(
            "beachKey_item",
            [],
            []
        ),
        letter: new inventoryItem(
            "letter_item",
            [
                "The letter reads: The final game will have a hidden code in this letter: For now the code is 1234"
            ],
            []
        ),
        painting: new inventoryItem(
            "painting_item",
            [],
            []
        ),
        coin: new inventoryItem(
            "coin_item",
            [],
            []
        ),
        flowerPot: new inventoryItem(
            "flowerPot_item",
            [],
            []
        ),
        icePick: new inventoryItem(
            "icePick_item",
            [],
            []
        ),
        smallIceCube: new inventoryItem(
            "smallIceCube_item",
            [],
            []
        ),
        stocking: new inventoryItem(
            "stocking_item",
            [],
            []
        ),
        starTopper: new inventoryItem(
            "starTopper_item",
            [],
            []
        ),
        hat: new inventoryItem(
            "hat_item",
            [],
            []
        ),
        glove: new inventoryItem(
            "glove_item",
            [],
            []
        ),
    }
};

/***********************
      Create scenes
 ***********************/
let createScenes = () => {
    scenes = {
        void: new scene("voidScene", { exitDoor: new scene("exitDoorScene") }),
        red: new scene("redScene", { keypad: new scene("keypadScene") }),
        yellow: new scene("yellowScene"),
        green: new scene("greenScene", {
            beachDoor: new scene("beachDoorScene"),
            cloverBed: new scene("cloverBedScene")
        }),
        blue: new scene("blueScene", {
            coatRack: new scene("coatRackScene"),
            peephole: new scene("peepholeScene")
        }),
        beach: new scene("beachScene", { exitDoor: new scene("beachExitDoorScene") })
    }
    setupVoidScene();
    setupRedScene();
    setupYellowScene();
    setupGreenScene();
    setupBlueScene();
    setupBeachScene();
};
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
};
let setTextbox = (newDescription = "") => {
    document.querySelector("#textbox>p").innerHTML = newDescription;
    document.querySelector("#textbox>ul").replaceChildren([]);
};

/***********************
    Void scene items
 ***********************/
let setupVoidScene = () => {
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
    setupExitDoorScene();
};
let setupExitDoorScene = () => {
    scenes.void.subscenes.exitDoor.addSceneItem(backButton(scenes.void));
    // random locks
};

/***********************
     Red scene items
 ***********************/
let setupRedScene = () => {
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
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.stocking, true);
                        scenes.red.removeSceneItem("stocking", true);
                        setTextbox();
                    }
                )
            ]
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
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.painting, true);
                        scenes.red.getSceneItem("keypad").visible = true;
                        scenes.red.removeSceneItem("painting", true);
                        setTextbox("There was a keypad behind the painting!");
                    }
                )
            ]
        )
    );
    scenes.red.addSceneItem(
        new sceneItem(
            "keypad",
            0, 0,
            [
                "It's a simple digital keypad"
            ],
            [
                new itemAction(
                    "",
                    () => scenes.red.subscenes.keypad.display(),
                    true
                )
            ],
            true,
            false
        )
    );
    scenes.red.addSceneItem(
        new sceneItem(
            "letter",
            0, 0,
            [
                "The letter reads: The final game will have a hidden code in this letter: For now the code is 1234"
            ],
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.letter, true);
                        scenes.red.removeSceneItem("letter", true);
                        setTextbox();
                    }
                )
            ]
        )
    );
    setupKeypadScene();
};
let keyPadCodeEntered = "";
let setupKeypadScene = () => {
    scenes.red.subscenes.keypad.addSceneItem(backButton(scenes.red));
    scenes.red.subscenes.keypad.addSceneItem(
        new sceneItem(
            "keypad1",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => {
                        keyPadCodeEntered += "1";
                        setTextbox(keyPadCodeEntered);
                    },
                    true
                )
            ]
        )
    );
    scenes.red.subscenes.keypad.addSceneItem(
        new sceneItem(
            "keypad2",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => {
                        keyPadCodeEntered += "2";
                        setTextbox(keyPadCodeEntered);
                    },
                    true
                )
            ]
        )
    );
    scenes.red.subscenes.keypad.addSceneItem(
        new sceneItem(
            "keypad3",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => {
                        keyPadCodeEntered += "3";
                        setTextbox(keyPadCodeEntered);
                    },
                    true
                )
            ]
        )
    );
    scenes.red.subscenes.keypad.addSceneItem(
        new sceneItem(
            "keypad4",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => {
                        keyPadCodeEntered += "4";
                        setTextbox(keyPadCodeEntered);
                    },
                    true
                )
            ]
        )
    );
    scenes.red.subscenes.keypad.addSceneItem(
        new sceneItem(
            "keypad5",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => {
                        keyPadCodeEntered += "5";
                        setTextbox(keyPadCodeEntered);
                    },
                    true
                )
            ]
        )
    );
    scenes.red.subscenes.keypad.addSceneItem(
        new sceneItem(
            "keypad6",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => {
                        keyPadCodeEntered += "6";
                        setTextbox(keyPadCodeEntered);
                    },
                    true
                )
            ]
        )
    );
    scenes.red.subscenes.keypad.addSceneItem(
        new sceneItem(
            "keypad7",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => {
                        keyPadCodeEntered += "7";
                        setTextbox(keyPadCodeEntered);
                    },
                    true
                )
            ]
        )
    );
    scenes.red.subscenes.keypad.addSceneItem(
        new sceneItem(
            "keypad8",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => {
                        keyPadCodeEntered += "8";
                        setTextbox(keyPadCodeEntered);
                    },
                    true
                )
            ]
        )
    );
    scenes.red.subscenes.keypad.addSceneItem(
        new sceneItem(
            "keypad9",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => {
                        keyPadCodeEntered += "9";
                        setTextbox(keyPadCodeEntered);
                    },
                    true
                )
            ]
        )
    );
    scenes.red.subscenes.keypad.addSceneItem(
        new sceneItem(
            "keypad0",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => {
                        keyPadCodeEntered += "0";
                        setTextbox(keyPadCodeEntered);
                    },
                    true
                )
            ]
        )
    );
    scenes.red.subscenes.keypad.addSceneItem(
        new sceneItem(
            "keypadEnter",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => {
                        if (keyPadCodeEntered == "1234") {
                            if (inventoryItems.getInventoryItem("redKey_item")) {
                                setTextbox("Correct, but nothing happened");
                            }
                            else {
                                setTextbox("Correct! A red key materialized in your hand");
                                inventoryItems.addInventoryItem(items.redKey, true);
                            }
                        }
                        else if (keyPadCodeEntered == "1225") {
                            if (inventoryItems.getInventoryItem("christmasKey_item")) {
                                setTextbox("Nothing happened");
                            }
                            else {
                                setTextbox("A festive key materialized in your hand");
                                inventoryItems.addInventoryItem(items.christmasKey, true);
                            }
                        }
                        else {
                            setTextbox("Incorrect, try again.");
                        }
                        keyPadCodeEntered = "";
                    },
                    true
                )
            ]
        )
    );
};

/***********************
   Yellow scene items
 ***********************/
let setupYellowScene = () => {
    scenes.yellow.addSceneItem(backButton(scenes.void));
    scenes.yellow.addSceneItem(
        new sceneItem(
            "yellowKey",
            0, 0,
            [],
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.yellowKey, true);
                        scenes.yellow.removeSceneItem("yellowKey", true);
                        setTextbox();
                    }
                )
            ]
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
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.starTopper, true);
                        scenes.yellow.removeSceneItem("starTopper", true);
                        setTextbox();
                    }
                )
            ]
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
};

/***********************
    Green scene items
 ***********************/
let setupGreenScene = () => {
    scenes.green.addSceneItem(backButton(scenes.void));
    scenes.green.addSceneItem(
        new sceneItem(
            "cloverBed",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => scenes.green.subscenes.cloverBed.display(),
                    true
                )
            ]
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
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.flowerPot, true);
                        scenes.green.removeSceneItem("flowerPot", true);
                        setTextbox();
                    }
                )
            ]
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
    setupCloverBedScene();
    setupBeachDoorScene();
};
let setupCloverBedScene = () => {
    scenes.green.subscenes.cloverBed.addSceneItem(backButton(scenes.green));
    scenes.green.subscenes.cloverBed.addSceneItem(
        new sceneItem(
            "clover3",
            0, 0,
            [
                "It's a clover"
            ],
            []
        )
    );
    scenes.green.subscenes.cloverBed.addSceneItem(
        new sceneItem(
            "clover3",
            0, 0,
            [
                "It's a clover"
            ],
            []
        )
    );
    scenes.green.subscenes.cloverBed.addSceneItem(
        new sceneItem(
            "clover3",
            0, 0,
            [
                "It's a clover"
            ],
            []
        )
    );
    scenes.green.subscenes.cloverBed.addSceneItem(
        new sceneItem(
            "clover3",
            0, 0,
            [
                "It's a clover"
            ],
            []
        )
    );
    scenes.green.subscenes.cloverBed.addSceneItem(
        new sceneItem(
            "clover3",
            0, 0,
            [
                "It's a clover"
            ],
            []
        )
    );
    scenes.green.subscenes.cloverBed.addSceneItem(
        new sceneItem(
            "clover3",
            0, 0,
            [
                "It's a clover"
            ],
            []
        )
    );
    scenes.green.subscenes.cloverBed.addSceneItem(
        new sceneItem(
            "clover3",
            0, 0,
            [
                "It's a clover"
            ],
            []
        )
    );
    scenes.green.subscenes.cloverBed.addSceneItem(
        new sceneItem(
            "clover3",
            0, 0,
            [
                "It's a clover"
            ],
            []
        )
    );
    scenes.green.subscenes.cloverBed.addSceneItem(
        new sceneItem(
            "clover3",
            0, 0,
            [
                "It's a clover"
            ],
            []
        )
    );
    scenes.green.subscenes.cloverBed.addSceneItem(
        new sceneItem(
            "clover3",
            0, 0,
            [
                "It's a clover"
            ],
            []
        )
    );
    scenes.green.subscenes.cloverBed.addSceneItem(
        new sceneItem(
            "clover4_gk",
            0, 0,
            [
                "It's a four-leafed clover!"
            ],
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.greenKey, true);
                        scenes.green.subscenes.cloverBed.removeSceneItem("clover4_gk", true);
                        setTextbox("The clover was actually a green key!");
                    }
                )
            ]
        )
    );
    scenes.green.subscenes.cloverBed.addSceneItem(
        new sceneItem(
            "clover4_ip",
            0, 0,
            [
                "It's a four-leafed clover!"
            ],
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.icePick, true);
                        scenes.green.subscenes.cloverBed.removeSceneItem("clover4_ip", true);
                        setTextbox("The clover was actually an ice pick!");
                    }
                )
            ]
        )
    );
};
let setupBeachDoorScene = () => {
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
};

/***********************
    Blue scene items
 ***********************/
let setupBlueScene = () => {
    scenes.blue.addSceneItem(backButton(scenes.void));
    scenes.blue.addSceneItem(
        new sceneItem(
            "smallIceCube",
            0, 0,
            [],
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.smallIceCube, true);
                        scenes.blue.removeSceneItem("smallIceCube", true);
                        setTextbox();
                    }
                )
            ]
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
            [
                new itemAction(
                    "",
                    () => scenes.blue.subscenes.coatRack.display(),
                    true
                )
            ]
        )
    );
    scenes.blue.addSceneItem(
        new sceneItem(
            "peephole",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => scenes.blue.subscenes.peephole.display(),
                    true
                )
            ]
        )
    );
    setupCoatRackScene();
    setupPeepholeScene();
};
let setupCoatRackScene = () => {
    scenes.blue.subscenes.coatRack.addSceneItem(backButton(scenes.blue));
    scenes.blue.subscenes.coatRack.addSceneItem(
        new sceneItem(
            "blueKey",
            0, 0,
            [],
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.blueKey, true);
                        scenes.blue.subscenes.coatRack.removeSceneItem("blueKey", true);
                        setTextbox();
                    }
                )
            ]
        )
    );
    scenes.blue.subscenes.coatRack.addSceneItem(
        new sceneItem(
            "glove",
            0, 0,
            [],
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.glove, true);
                        scenes.blue.subscenes.coatRack.removeSceneItem("glove", true);
                        setTextbox();
                    }
                )
            ]
        )
    );
    scenes.blue.subscenes.coatRack.addSceneItem(
        new sceneItem(
            "hat",
            0, 0,
            [],
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.hat, true);
                        scenes.blue.subscenes.coatRack.removeSceneItem("hat", true);
                        setTextbox();
                    }
                )
            ]
        )
    );
};
let setupPeepholeScene = () => {
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
};

/***********************
    Beach scene items
 ***********************/
let setupBeachScene = () => {
    scenes.beach.addSceneItem(backButton(scenes.green));
    setupBeachExitDoorScene();
};
let setupBeachExitDoorScene = () => {

};

createItems();
createScenes();
window.onload = (e) => {
    scenes.void.display();
    inventoryItems.display();
};