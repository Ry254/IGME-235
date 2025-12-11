'use strict';
let timeLeft = 6000;
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
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "redKey";
                        setTextbox("Use red key on what?");
                    }
                )
            ]
        ),
        yellowKey: new inventoryItem(
            "yellowKey_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "yellowKey";
                        setTextbox("Use yellow key on what?");
                    }
                )
            ]
        ),
        greenKey: new inventoryItem(
            "greenKey_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "greenKey";
                        setTextbox("Use green key on what?");
                    }
                )
            ]
        ),
        blueKey: new inventoryItem(
            "blueKey_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "blueKey";
                        setTextbox("Use blue key on what?");
                    }
                )
            ]
        ),
        orangeKey: new inventoryItem(
            "orangeKey_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "orangeKey";
                        setTextbox("Use orange key on what?");
                    }
                )
            ]
        ),
        limeKey: new inventoryItem(
            "limeKey_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "limeKey";
                        setTextbox("Use lime key on what?");
                    }
                )
            ]
        ),
        cyanKey: new inventoryItem(
            "cyanKey_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "cyanKey";
                        setTextbox("Use cyan key on what?");
                    }
                )
            ]
        ),
        magentaKey: new inventoryItem(
            "magentaKey_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "magentaKey";
                        setTextbox("Use magenta key on what?");
                    }
                )
            ]
        ),
        christmasKey: new inventoryItem(
            "christmasKey_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "christmasKey";
                        setTextbox("Use christmas key on what?");
                    }
                )
            ]
        ),
        beachKey: new inventoryItem(
            "beachKey_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "beachKey";
                        setTextbox("Use beach key on what?");
                    }
                )
            ]
        ),
        letter: new inventoryItem(
            "letter_item",
            [
                "The letter reads: The final game will have a hidden code in this letter: For now the code is 1234"
            ],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "letter";
                        setTextbox("Use letter on what?");
                    }
                )
            ]
        ),
        painting: new inventoryItem(
            "painting_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "painting";
                        setTextbox("Use painting on what?");
                    }
                )
            ]
        ),
        coin: new inventoryItem(
            "coin_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "coin";
                        setTextbox("Use coin on what?");
                    }
                )
            ]
        ),
        piggyBank: new inventoryItem(
            "piggyBank_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "piggyBank";
                        setTextbox("Use piggy bank on what?");
                    }
                )
            ]
        ),
        flowerPot: new inventoryItem(
            "flowerPot_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "flowerPot";
                        setTextbox("Use flower pot on what?");
                    }
                )
            ]
        ),
        icePick: new inventoryItem(
            "icePick_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "icePick";
                        setTextbox("Use ice pick on what?");
                    }
                )
            ]
        ),
        smallIceCube: new inventoryItem(
            "smallIceCube_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "smallIceCube";
                        setTextbox("Use small ice cube on what?");
                    }
                )
            ]
        ),
        stocking: new inventoryItem(
            "stocking_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "stocking";
                        setTextbox("Use stocking on what?");
                    }
                )
            ]
        ),
        starTopper: new inventoryItem(
            "starTopper_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "starTopper";
                        setTextbox("Use star topper on what?");
                    }
                )
            ]
        ),
        hat: new inventoryItem(
            "hat_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "hat";
                        setTextbox("Use hat on what?");
                    }
                )
            ]
        ),
        glove: new inventoryItem(
            "glove_item",
            [],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "glove";
                        setTextbox("Use glove on what?");
                    }
                )
            ]
        ),
        note: new inventoryItem(
            "note_item",
            [
                `A note that reads: "Merry Christmas! 12/25"`
            ],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "note";
                        setTextbox("Use note on what?");
                    }
                )
            ]
        )
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
    
    let potentialLocks = ["red", "yellow", "green", "blue", "orange", "lime", "cyan", "magenta"];
    for(let i = 0; i < 4; i++){
        let randomIndex = Math.floor(Math.random() * potentialLocks.length);
        createLock(scenes.void.subscenes.exitDoor, potentialLocks[randomIndex]);
        potentialLocks = potentialLocks.filter(item => item != potentialLocks[randomIndex]);
    }

    scenes.void.subscenes.exitDoor.addSceneItem(
        new sceneItem(
            "doorKnob",
            0, 0,
            [],
            []
        )
    );
    scenes.void.subscenes.exitDoor.addSceneItem(
        new sceneItem(
            "doorKnobWithLock",
            0, 0,
            [],
            [],
            true,
            false
        )
    );
};
let createLock = (scene, name, posX = 0, posY = 0) => {
    let lock = new sceneItem(
        name + "Lock",
        posX, posY,
        [],
        []
    );
    lock.inventoryItemAction.action = () => {
        if (document.querySelector("#inventory").dataset.activeItem == name + "Key") {
            scene.removeSceneItem(name + "Lock", true);
            setTextbox("The " + name + " lock fades away...");
        }
        else {
            setTextbox("Nothing Happened");
        }
        document.querySelector("#inventory").dataset.activeItem = "";
    };
    scene.addSceneItem(lock);
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

    let fireplace = new sceneItem(
        "firePlace",
        0, 0,
        [],
        []
    );
    fireplace.inventoryItemAction.action = () => {
        if (document.querySelector("#inventory").dataset.activeItem == "smallIceCube") {
            inventoryItems.removeInventoryItem("smallIceCube_item", true);
            inventoryItems.addInventoryItem(items.magentaKey, true);
            setTextbox("You hold the ice cube near the fire, it sublimates nearly instantly. You are left with the magenta key that was inside.");
        }
        else {
            setTextbox("Nothing Happened");
        }
        document.querySelector("#inventory").dataset.activeItem = "";
    };
    scenes.red.addSceneItem(fireplace);

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
                        else if (keyPadCodeEntered == "2646") {
                            if (inventoryItems.getInventoryItem("coin_item") || inventoryItems.getInventoryItem("orangeKey_item")) {
                                setTextbox("Correct, but nothing happened");
                            }
                            else {
                                setTextbox("Correct! A coin materialized in your hand");
                                inventoryItems.addInventoryItem(items.coin, true);
                            }
                        }
                        else if (keyPadCodeEntered == "1225") {
                            if (inventoryItems.getInventoryItem("christmasKey_item")) {
                                setTextbox("Nothing happened");
                            }
                            else {
                                setTextbox("A cristmas key materialized in your hand");
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

    let piggyBank = new sceneItem(
        "piggyBank",
        0, 0,
        [],
        [
            new itemAction(
                "Pick Up",
                () => {
                    inventoryItems.addInventoryItem(items.piggyBank, true);
                    scenes.yellow.removeSceneItem("piggyBank", true);
                    setTextbox();
                }
            )
        ]
    );
    let piggyBankAction = () => {
        if (document.querySelector("#inventory").dataset.activeItem == "coin") {
            inventoryItems.removeInventoryItem("coin_item", true);
            inventoryItems.addInventoryItem(items.orangeKey, true);
            setTextbox("You put the coin into the top of the piggy bank and an orange key materializes in your hand!");
        }
        else {
            setTextbox("Nothing Happened");
        }
        document.querySelector("#inventory").dataset.activeItem = "";
    };
    piggyBank.inventoryItemAction.action = piggyBankAction;
    items.piggyBank.inventoryItemAction.action = piggyBankAction;
    scenes.yellow.addSceneItem(piggyBank);

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

    let window = new sceneItem(
        "window",
        0, 0,
        [],
        []
    );
    window.inventoryItemAction.action = () => {
        if (document.querySelector("#inventory").dataset.activeItem == "flowerPot") {
            inventoryItems.removeInventoryItem("flowerPot_item", true);
            inventoryItems.addInventoryItem(items.limeKey, true);
            scenes.yellow.getSceneItem("flowerPot_bloomed").visible = true;
            scenes.yellow.display();
            setTextbox("As you place the pot down below the window, the bud blooms with a lime key inside!");
        }
        else {
            setTextbox("Nothing Happened");
        }
        document.querySelector("#inventory").dataset.activeItem = "";
    };
    scenes.yellow.addSceneItem(window);

    scenes.yellow.addSceneItem(
        new sceneItem(
            "flowerPot_bloomed",
            0, 0,
            [],
            [],
            true,
            false
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
    scenes.green.addSceneItem(
        new sceneItem(
            "beachDoor_unlocked",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => scenes.beach.display(),
                    true
                )
            ],
            true,
            false
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
    scenes.green.subscenes.beachDoor.addSceneItem(backButton(scenes.beach));
    createLock(scenes.green.subscenes.beachDoor, "yellow");
    createLock(scenes.green.subscenes.beachDoor, "blue");

    scenes.green.subscenes.beachDoor.addSceneItem(
        new sceneItem(
            "doorKnob",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => {
                        let lock = document.querySelector(`#scene>*[data-name$="Lock"]`);
                        if (!lock) {
                            scenes.beach.display();
                            scenes.green.removeSceneItem("beachDoor");
                            scenes.green.getSceneItem("beachDoor_unlocked").visible = true;
                            setTextbox("You can smell the salty ocean");
                        }
                        else {
                            setTextbox("It's locked");
                        }
                    },
                    true
                )
            ]
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

    let largeIceCube = new sceneItem(
        "largeIceCube",
        0, 0,
        [],
        []
    );
    largeIceCube.inventoryItemAction.action = () => {
        if (document.querySelector("#inventory").dataset.activeItem == "icePick") {
            inventoryItems.addInventoryItem(items.cyanKey, true);
            scenes.blue.removeSceneItem("largeIceCube", true);
            setTextbox("You pick away at the ice cube and it eventualy shatters. There was a cyan key inside!");
        }
        else {
            setTextbox("Nothing Happened");
        }
        document.querySelector("#inventory").dataset.activeItem = "";
    };
    scenes.blue.addSceneItem(largeIceCube);

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
    scenes.beach.addSceneItem(
        new sceneItem(
            "beachExitDoor",
            0, 0,
            [],
            [
                new itemAction(
                    "",
                    () => scenes.beach.subscenes.exitDoor.display(),
                    true
                )
            ],
        )
    );
    scenes.beach.addSceneItem(
        new sceneItem(
            "beachKey",
            0, 0,
            [],
            [],
            true,
            false
        )
    );
    setupBeachExitDoorScene();
};
let setupBeachExitDoorScene = () => {
    scenes.beach.subscenes.exitDoor.addSceneItem(backButton(scenes.beach));
    createLock(scenes.beach.subscenes.exitDoor, "red");
    createLock(scenes.beach.subscenes.exitDoor, "yellow");
    createLock(scenes.beach.subscenes.exitDoor, "green");
    createLock(scenes.beach.subscenes.exitDoor, "blue");
    createLock(scenes.beach.subscenes.exitDoor, "orange");
    createLock(scenes.beach.subscenes.exitDoor, "lime");
    createLock(scenes.beach.subscenes.exitDoor, "cyan");
    createLock(scenes.beach.subscenes.exitDoor, "magenta");
    createLock(scenes.beach.subscenes.exitDoor, "christmas");
    createLock(scenes.beach.subscenes.exitDoor, "beach");

    scenes.beach.subscenes.exitDoor.addSceneItem(
        new sceneItem(
            "doorKnob",
            0, 0,
            [],
            []
        )
    );
};

createItems();
createScenes();
window.onload = (e) => {
    scenes.void.display();
    inventoryItems.display();
};

let debug_giveAllItems = () => {
    for (let key in items) {
        inventoryItems.addInventoryItem(items[key], true);
    }
};