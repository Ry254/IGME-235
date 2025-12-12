'use strict';
let timeLeft = 600;
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
            [
                "It's a red key."
            ],
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
            [
                "It's a yellow key."
            ],
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
            [
                "It's a green key. The top is shaped like a four-leafed clover."
            ],
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
            [
                "It's a blue key."
            ],
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
            [
                "It's an orange key."
            ],
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
            [
                "It's a lime key."
            ],
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
            [
                "It's a cyan key."
            ],
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
            [
                "It's a magenta key."
            ],
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
            [
                "It's a key with a present design on top."
            ],
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
            [
                "It's a key with a shell design on top."
            ],
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
            [
                "It's a painting of a keypad. The trim is red."
            ],
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
            [
                `It's a yellow coin with "COIN" written on it.`
            ],
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
            [
                `It's a yellow piggy bank with "2646" writen on the side in red. There's a coin slot on top`
            ],
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
            [
                "It's a green pot with a yellow flower bud in it. The flower could use some sun."
            ],
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
            [
                "It's an ice pick. The top is shaped like a four-leafed clover."
            ],
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
            [
                "It's a small ice cube. It looks like something magenta is inside. If only there was a way to melt the ice around it."
            ],
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
            [
                "It's a red stocking, though this one is empty."
            ],
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
            [
                "It's a star topper. These are often put on top of christmas trees"
            ],
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
            [
                "It's a blue winter hat."
            ],
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
            [
                "It's a singular blue mitten."
            ],
            [
                new itemAction(
                    "Use Item",
                    () => {
                        document.querySelector("#inventory").dataset.activeItem = "glove";
                        setTextbox("Use mitten on what?");
                    }
                )
            ]
        ),
        note: new inventoryItem(
            "note_item",
            [
                `It's a note that reads: "Merry Christmas! 12/25"`
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
        7, 10, 100,
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
            25, 25, 0,
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
            75, 75, 0,
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
            75, 25, 0,
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
            25, 75, 0,
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
            50, 50, 0,
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
let attemptsToOpen = 0;
let setupExitDoorScene = () => {
    scenes.void.subscenes.exitDoor.addSceneItem(backButton(scenes.void));

    let potentialLocks = ["red", "yellow", "green", "blue", "orange", "lime", "cyan", "magenta"];
    for (let i = 0; i < 4; i++) {
        let randomIndex = Math.floor(Math.random() * potentialLocks.length);
        createLock(scenes.void.subscenes.exitDoor, potentialLocks[randomIndex],
            20 + i * 13,
            45,
            0
        );
        potentialLocks = potentialLocks.filter(item => item != potentialLocks[randomIndex]);
    }

    scenes.void.subscenes.exitDoor.addSceneItem(
        new sceneItem(
            "doorKnob",
            76, 60, 0,
            [],
            [
                new itemAction(
                    "Open",
                    () => {
                        if (document.querySelector('#scene>*[data-name$="Lock"]')) {
                            attemptsToOpen++;
                            if (attemptsToOpen == 3) {
                                scenes.beach.getSceneItem("beachKey").visible = true;
                                scenes.void.subscenes.exitDoor.getSceneItem("doorKnob_lock").visible = true;
                                scenes.void.subscenes.exitDoor.removeSceneItem("doorKnob", true);
                                setTextbox("There's know a lock on the knob. You also here the sound of something dropping from far away.");
                            }
                            else {
                                setTextbox("It's locked");
                            }
                        }
                        else {
                            gameWon();
                        }
                    }
                )
            ]
        )
    );

    let doorKnobLock = new sceneItem(
        "doorKnob_lock",
        76, 60, 0,
        [],
        [
            new itemAction(
                "Open",
                () => {
                    if (document.querySelector('#scene>*[data-name$="Lock"]')) {
                        attemptsToOpen++;
                        if (attemptsToOpen == 3) {
                            scenes.beach.getSceneItem("beachKey").visible = true;
                            setTextbox("You here the sound of something dropping from far away.");
                        }
                        else {
                            setTextbox("It's locked");
                        }
                    }
                    else {
                        gameWon();
                    }
                }
            )
        ],
        true,
        false
    );
    doorKnobLock.inventoryItemAction.action = () => {
        if (document.querySelector("#inventory").dataset.activeItem == "christmasKey") {
            scenes.void.subscenes.exitDoor.getSceneItem("doorKnob_christmas").visible = true;
            scenes.void.subscenes.exitDoor.removeSceneItem("doorKnob_lock", true);
            setTextbox("The lock on the doorknob fades away...");
        }
        else if (document.querySelector("#inventory").dataset.activeItem == "beachKey") {
            scenes.void.subscenes.exitDoor.getSceneItem("doorKnob_beach").visible = true;
            scenes.void.subscenes.exitDoor.removeSceneItem("doorKnob_lock", true);
            setTextbox("The lock on the doorknob fades away...");
        }
        else {
            setTextbox("Nothing Happened");
        }
        document.querySelector("#inventory").dataset.activeItem = "";
    };
    scenes.void.subscenes.exitDoor.addSceneItem(doorKnobLock);

    scenes.void.subscenes.exitDoor.addSceneItem(
        new sceneItem(
            "doorKnob_christmas",
            76, 60, 0,
            [],
            [
                new itemAction(
                    "Open",
                    () => {
                        gameWon("Christmas", 1);
                    }
                )
            ],
            true,
            false
        )
    );
    scenes.void.subscenes.exitDoor.addSceneItem(
        new sceneItem(
            "doorKnob_beach",
            76, 60, 0,
            [],
            [
                new itemAction(
                    "Open",
                    () => {
                        gameWon("Beach", 1);
                    }
                )
            ],
            true,
            false
        )
    );
};
let createLock = (scene, name, posX = 0, posY = 0, posZ = 0) => {
    let lock = new sceneItem(
        name + "Lock",
        posX, posY, posZ,
        [
            "It's a " + name + " lock."
        ],
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
            50, 15, 0,
            [],
            []
        )
    );
    scenes.red.addSceneItem(
        new sceneItem(
            "stocking",
            35, 50, 1,
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
        50, 60, 0,
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
            87, 45, 0,
            [],
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.painting, true);
                        scenes.red.getSceneItem("keypad").interactable = true;
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
            87, 45, 1,
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
            false
        )
    );
    scenes.red.addSceneItem(
        new sceneItem(
            "letter",
            14, 88, 0,
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
            36, 19, 0,
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
            49, 17, 0,
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
            62, 16, 0,
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
            37, 41, 0,
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
            50, 38, 0,
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
            63, 38, 0,
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
            37, 64, 0,
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
            50.5, 62, 0,
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
            64, 62, 0,
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
            37, 84.5, 0,
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
            57.5, 84, 0,
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
                                setTextbox("A christmas key materialized in your hand");
                                scenes.void.subscenes.exitDoor.removeSceneItem("doorKnob");
                                scenes.void.subscenes.exitDoor.getSceneItem("doorKnob_lock").visible = true;
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
            57, 53, 0,
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
        67, 51, 0,
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
            77, 48, 0,
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

    let windowItem = new sceneItem(
        "window",
        24.5, 35, 0,
        [],
        []
    );
    windowItem.inventoryItemAction.action = () => {
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
    scenes.yellow.addSceneItem(windowItem);

    scenes.yellow.addSceneItem(
        new sceneItem(
            "flowerPot_bloomed",
            24, 47, 1,
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
            20, 85, 0,
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
            "christmasTree",
            80, 48, 0,
            [],
            []
        )
    );

    let christmasTree = new sceneItem(
        "christmasTree",
        80, 48, 0,
        [],
        []
    );
    christmasTree.inventoryItemAction.action = () => {
        if (document.querySelector("#inventory").dataset.activeItem == "stocking") {
            inventoryItems.removeInventoryItem("stocking_item", true);
            scenes.green.getSceneItem("stocking_full").visible = true;
            scenes.green.display();
            setTextbox("");
        }
        else if (document.querySelector("#inventory").dataset.activeItem == "starTopper") {
            inventoryItems.removeInventoryItem("starTopper_item", true);
            scenes.green.getSceneItem("starTopper").visible = true;
            scenes.green.display();
            setTextbox("");
        }
        else {
            setTextbox("Nothing Happened");
        }
        document.querySelector("#inventory").dataset.activeItem = "";
    };
    scenes.green.addSceneItem(christmasTree);

    scenes.green.addSceneItem(
        new sceneItem(
            "starTopper",
            81.5, 8, 1,
            [],
            [],
            false,
            false
        )
    );
    scenes.green.addSceneItem(
        new sceneItem(
            "stocking_full",
            68, 40, 1,
            [],
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.note, true);
                        scenes.green.getSceneItem("stocking").visible = true;
                        scenes.green.removeSceneItem("stocking_full", true);
                        setTextbox();
                    }
                )
            ],
            true,
            false
        )
    );
    scenes.green.addSceneItem(
        new sceneItem(
            "stocking",
            68, 40, 1,
            [],
            [],
            false,
            false
        )
    );
    scenes.green.addSceneItem(
        new sceneItem(
            "flowerPot",
            73, 80, 1,
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
            50, 49, 0,
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
            50, 49, 0,
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
    let min = 5;
    let range = 90;
    for (let i = 0; i < 100; i++) {
        scenes.green.subscenes.cloverBed.addSceneItem(
            new sceneItem(
                "clover3",
                Math.random() * range + min, Math.random() * range + min, 0,
                [
                    "It's a clover"
                ],
                []
            )
        );
    }
    scenes.green.subscenes.cloverBed.addSceneItem(
        new sceneItem(
            "clover4_gk",
            Math.random() * range + min, Math.random() * range + min, 1,
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
            Math.random() * range + min, Math.random() * range + min, 1,
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
    createLock(scenes.green.subscenes.beachDoor, "yellow", 30, 40);
    createLock(scenes.green.subscenes.beachDoor, "blue", 50, 40);

    scenes.green.subscenes.beachDoor.addSceneItem(
        new sceneItem(
            "doorKnob",
            80, 60, 0,
            [],
            [
                new itemAction(
                    "Open",
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
                    }
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

    let smallIceCube = new sceneItem(
        "smallIceCube",
        52, 80, 1,
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
    );
    let smallIceCubeAction = () => {
        if (document.querySelector("#inventory").dataset.activeItem == "icePick") {
            setTextbox("You attempt to pick at the small ice cube, but the pick slides right off and leaves no mark.");
        }
        else {
            setTextbox("Nothing Happened");
        }
        document.querySelector("#inventory").dataset.activeItem = "";
    }
    smallIceCube.inventoryItemAction.action = smallIceCubeAction;
    items.smallIceCube.inventoryItemAction.action = smallIceCubeAction;
    scenes.blue.addSceneItem(smallIceCube);


    let largeIceCube = new sceneItem(
        "largeIceCube",
        77, 69, 0,
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
            17, 60, 0,
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
            51, 75, 0,
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
            "pocket_empty",
            17, 45, 0,
            [],
            []
        )
    );
    scenes.blue.subscenes.coatRack.addSceneItem(
        new sceneItem(
            "pocket_bk",
            90, 80, 0,
            [],
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.blueKey, true);
                        scenes.blue.subscenes.coatRack.getSceneItem("pocket_bk_empty").visible = true;
                        scenes.blue.subscenes.coatRack.removeSceneItem("pocket_bk", true);
                        setTextbox();
                    }
                )
            ]
        )
    );
    scenes.blue.subscenes.coatRack.addSceneItem(
        new sceneItem(
            "pocket_bk_empty",
            90, 80, 0,
            [],
            [],
            true,
            false
        )
    );
    scenes.blue.subscenes.coatRack.addSceneItem(
        new sceneItem(
            "pocket_g",
            16, 80, 0,
            [],
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.glove, true);
                        scenes.blue.subscenes.coatRack.getSceneItem("pocket_g_empty").visible = true;
                        scenes.blue.subscenes.coatRack.removeSceneItem("pocket_g", true);
                        setTextbox();
                    }
                )
            ]
        )
    );
    scenes.blue.subscenes.coatRack.addSceneItem(
        new sceneItem(
            "pocket_g_empty",
            16, 80, 0,
            [],
            [],
            true,
            false
        )
    );
    scenes.blue.subscenes.coatRack.addSceneItem(
        new sceneItem(
            "pocket_h",
            89, 46, 0,
            [],
            [
                new itemAction(
                    "Pick Up",
                    () => {
                        inventoryItems.addInventoryItem(items.hat, true);
                        scenes.blue.subscenes.coatRack.getSceneItem("pocket_h_empty").visible = true;
                        scenes.blue.subscenes.coatRack.removeSceneItem("pocket_h", true);
                        setTextbox();
                    }
                )
            ]
        )
    );
    scenes.blue.subscenes.coatRack.addSceneItem(
        new sceneItem(
            "pocket_h_empty",
            89, 46, 0,
            [],
            [],
            true,
            false
        )
    );
};
let setupPeepholeScene = () => {
    scenes.blue.subscenes.peephole.addSceneItem(backButton(scenes.blue));
    scenes.blue.subscenes.peephole.addSceneItem(
        new sceneItem(
            "eyes",
            50, 50, 0,
            [],
            [],
            false
        )
    );
    scenes.blue.subscenes.peephole.addSceneItem(
        new sceneItem(
            "peephole_foreground",
            50, 50, 1,
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
            0, 0, 0,
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
            0, 0, 0,
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
            0, 0, 0,
            [],
            []
        )
    );
};

/***********************
    Timer and endings
 ***********************/
let timer = setInterval(() => {
    if (timeLeft <= 0) {
        gameOver();
        return;
    }
    timeLeft--;
    updateTimer(timeLeft);
}, 1000);

let updateTimer = (time) => {
    if (time < 0) time = 0;
    let seconds = time % 60
    let minutes = (time - seconds) / 60;
    let timer = document.querySelector("#timer");
    timer.innerHTML = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
    if (time >= 600) {
        timer.style.color = "gold";
    }
    else if (time > 450) {
        timer.style.color = "cyan";
    }
    else if (time > 300) {
        timer.style.color = "lime";
    }
    else if (time > 150) {
        timer.style.color = "yellow";
    }
    else if (time > 60) {
        timer.style.color = "orange";
    }
    else if (time > 15) {
        timer.style.color = "red";
    }
    else {
        timer.style.color = "crimson";
    }
}

let gameOver = () => {
    clearInterval(timer);
    results("You Failed...", "F", "Fail");
}

let gameWon = (ending = "Normal", rankIncrease = 0) => {
    clearInterval(timer);

    let rankInt = 0;
    if (timeLeft >= 600) {
        rankInt = 6; // S+
    }
    else if (timeLeft > 450) {
        rankInt = 5; // S
    }
    else if (timeLeft > 300) {
        rankInt = 4; // A
    }
    else if (timeLeft > 150) {
        rankInt = 3; // B
    }
    else if (timeLeft > 60) {
        rankInt = 2; // C
    }
    else if (timeLeft > 15) {
        rankInt = 1; // D
    }
    else {
        rankInt = 0; // F
    }
    rankInt += rankIncrease;

    let rank;
    if (rankInt > 6) {
        rank = "X";
    }
    else if (rankInt > 5) {
        rank = "S+";
    }
    else if (rankInt > 4) {
        rank = "S";
    }
    else if (rankInt > 3) {
        rank = "A";
    }
    else if (rankInt > 2) {
        rank = "B";
    }
    else if (rankInt > 1) {
        rank = "C";
    }
    else if (rankInt > 0) {
        rank = "D";
    }
    else {
        rank = "F";
    }

    results("You Escaped!", rank, ending);
}

let results = (headerText, rankText, endingText) => {
    document.querySelector("#inventory").innerHTML = "";
    let scene = document.querySelector("#scene");
    scene.innerHTML = "";
    scene.style.backgroundImage = "none";

    let header = document.createElement("h1");
    header.innerHTML = headerText;
    header.style.top = "10%";
    header.style.left = "50%";
    header.style.width = "100%";
    scene.appendChild(header);

    let ending = document.createElement("p");
    ending.innerHTML = "Ending: " + endingText;
    ending.style.top = "40%";
    ending.style.left = "50%";
    ending.style.width = "100%";
    scene.appendChild(ending);

    let rank = document.createElement("p");
    rank.innerHTML = "Rank: " + rankText;
    rank.style.top = "50%";
    rank.style.left = "50%";
    rank.style.width = "100%";
    scene.appendChild(rank);

    let playAgain = document.createElement("p");
    playAgain.innerHTML = "Refresh page to play again";
    playAgain.style.top = "80%";
    playAgain.style.left = "50%";
    playAgain.style.width = "100%";
    scene.appendChild(playAgain);
}

createItems();
createScenes();
window.onload = (e) => {
    scenes.green.display();
    inventoryItems.display();
    updateTimer(timeLeft);
};

window.onresize = (e) => {
    scenes.void.display();
    inventoryItems.display();
}

let debug_giveAllItems = () => {
    for (let key in items) {
        inventoryItems.addInventoryItem(items[key], true);
    }
};