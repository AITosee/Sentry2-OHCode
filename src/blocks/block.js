import { ZhHansMsg } from "../language/zh-hans";

export const white_balance_objs = function () {
    return [
        [
            ZhHansMsg.SENTRY2_AUTO,
            "sentry_camera_white_balance_e.kAutoWhiteBalance",
        ],
        [
            ZhHansMsg.SENTRY2_LOCK_AWB,
            "sentry_camera_white_balance_e.sentry_camera_white_balance_e.kWhiteLight",
        ],
        [
            ZhHansMsg.SENTRY2_WHITE_LIGHT,
            "sentry_camera_white_balance_e.kYellowLight",
        ],
        [
            ZhHansMsg.SENTRY2_YELLOW_LIGHT,
            "sentry_camera_white_balance_e.kWhiteBalanceCalibrating",
        ],
    ];
};

export const vision_res_objs = function () {
    return [
        [ZhHansMsg.SENTRY2_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
        [ZhHansMsg.SENTRY2_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
        [ZhHansMsg.SENTRY2_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
        [
            ZhHansMsg.SENTRY2_STATE_VALUE_HEIGHT,
            "sentry_obj_info_e.kHeightValue",
        ],
        [ZhHansMsg.SENTRY2_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
    ];
};

export const vision_custom_objs = function () {
    return [
        [ZhHansMsg.SENTRY2_VISION_DATA + "1", "sentry_obj_info_e.kXValue"],
        [ZhHansMsg.SENTRY2_VISION_DATA + "2", "sentry_obj_info_e.kYValue"],
        [ZhHansMsg.SENTRY2_VISION_DATA + "3", "sentry_obj_info_e.kWidthValue"],
        [ZhHansMsg.SENTRY2_VISION_DATA + "4", "sentry_obj_info_e.kHeightValue"],
        [ZhHansMsg.SENTRY2_VISION_DATA + "5", "sentry_obj_info_e.kLabel"],
    ];
};

export const vision_qr_objs = function () {
    return [
        [ZhHansMsg.SENTRY2_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
        [ZhHansMsg.SENTRY2_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
        [ZhHansMsg.SENTRY2_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
        [
            ZhHansMsg.SENTRY2_STATE_VALUE_HEIGHT,
            "sentry_obj_info_e.kHeightValue",
        ],
    ];
};

export const vision_color_objs = function () {
    return [
        [ZhHansMsg.SENTRY2_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
        [ZhHansMsg.SENTRY2_STATE_VALUE_R, "sentry_obj_info_e.kRValue"],
        [ZhHansMsg.SENTRY2_STATE_VALUE_G, "sentry_obj_info_e.kGValue"],
        [ZhHansMsg.SENTRY2_STATE_VALUE_B, "sentry_obj_info_e.kBValue"],
    ];
};
export const vision_line_objs = function () {
    return [
        [ZhHansMsg.SENTRY2_STATE_LINE_EX, "sentry_obj_info_e.kXValue"],
        [ZhHansMsg.SENTRY2_STATE_LINE_EY, "sentry_obj_info_e.kYValue"],
        [ZhHansMsg.SENTRY2_STATE_LINE_SX, "sentry_obj_info_e.kWidthValue"],
        [ZhHansMsg.SENTRY2_STATE_LINE_SY, "sentry_obj_info_e.kHeightValue"],
        [ZhHansMsg.SENTRY2_STATE_LINE_A, "sentry_obj_info_e.kLabel"],
    ];
};

export const sentry2_vision_blod_objs = function () {
    return [
        [ZhHansMsg.SENTRY2_COLOR_BLACK, "sentry_color_label_e.kColorBlack"],
        [ZhHansMsg.SENTRY2_COLOR_WHITE, "sentry_color_label_e.kColorWhite"],
        [ZhHansMsg.SENTRY2_COLOR_RED, "sentry_color_label_e.kColorRed"],
        [ZhHansMsg.SENTRY2_COLOR_GREEN, "sentry_color_label_e.kColorGreen"],
        [ZhHansMsg.SENTRY2_COLOR_BLUE, "sentry_color_label_e.kColorBlue"],
        [ZhHansMsg.SENTRY2_COLOR_YELLOW, "sentry_color_label_e.kColorYellow"],
    ];
};
export const sentry2_vision_objs = function () {
    return [
        [ZhHansMsg.SENTRY2_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
        [ZhHansMsg.SENTRY2_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
        [
            ZhHansMsg.SENTRY2_VISION_VISIONAPRILTAG,
            "sentry2_vision_e.kVisionAprilTag",
        ],
        [ZhHansMsg.SENTRY2_VISION_VISIONLINE, "sentry2_vision_e.kVisionLine"],
        [
            ZhHansMsg.SENTRY2_VISION_VISIONLEARNING,
            "sentry2_vision_e.kVisionLearning",
        ],
        [ZhHansMsg.SENTRY2_VISION_VISIONCARD, "sentry2_vision_e.kVisionCard"],
        [ZhHansMsg.SENTRY2_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
        [
            ZhHansMsg.SENTRY2_VISION_VISION20CLASSES,
            "sentry2_vision_e.kVision20Classes",
        ],
        [
            ZhHansMsg.SENTRY2_VISION_VISIONQRCODE,
            "sentry2_vision_e.kVisionQrCode",
        ],
        [
            ZhHansMsg.SENTRY2_VISION_VISIONCUSTOM,
            "sentry2_vision_e.kVisionCustom",
        ],
        [
            ZhHansMsg.SENTRY2_VISION_VISIONMOTIONDETECT,
            "sentry2_vision_e.kVisionMotionDetect",
        ],
    ];
};

export const sentry2_vision_custom = function () {
    return [
        [ZhHansMsg.SENTRY2_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
        [ZhHansMsg.SENTRY2_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
        [
            ZhHansMsg.SENTRY2_VISION_VISIONLEARNING,
            "sentry2_vision_e.kVisionLearning",
        ],
        [ZhHansMsg.SENTRY2_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
        [
            ZhHansMsg.SENTRY2_VISION_VISIONCUSTOM,
            "sentry2_vision_e.kVisionCustom",
        ],
    ];
};
export const sentry2_vision_param_objs = function () {
    return [
        [ZhHansMsg.SENTRY2_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
        [ZhHansMsg.SENTRY2_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
    ];
};

export const sentry2_vision_20class_objs = function () {
    return [
        [
            ZhHansMsg.SENTRY2_CLASS20_AIRPLANE,
            "sentry_class20_label_e.kAirplane",
        ],
        [ZhHansMsg.SENTRY2_CLASS20_BICYCLE, "sentry_class20_label_e.kBicycle"],
        [ZhHansMsg.SENTRY2_CLASS20_BIRD, "sentry_class20_label_e.kBird"],
        [ZhHansMsg.SENTRY2_CLASS20_BOAT, "sentry_class20_label_e.kBoat"],
        [ZhHansMsg.SENTRY2_CLASS20_BOTTLE, "sentry_class20_label_e.kBottle"],
        [ZhHansMsg.SENTRY2_CLASS20_BUS, "sentry_class20_label_e.kBus"],
        [ZhHansMsg.SENTRY2_CLASS20_CAR, "sentry_class20_label_e.kCar"],
        [ZhHansMsg.SENTRY2_CLASS20_CAT, "sentry_class20_label_e.kCat"],
        [ZhHansMsg.SENTRY2_CLASS20_CHAIR, "sentry_class20_label_e.kChair"],
        [ZhHansMsg.SENTRY2_CLASS20_COW, "sentry_class20_label_e.kCow"],
        [
            ZhHansMsg.SENTRY2_CLASS20_TABLE,
            "sentry_class20_label_e.kDiningTable",
        ],
        [ZhHansMsg.SENTRY2_CLASS20_DOG, "sentry_class20_label_e.kDog"],
        [ZhHansMsg.SENTRY2_CLASS20_HORSE, "sentry_class20_label_e.kHorse"],
        [
            ZhHansMsg.SENTRY2_CLASS20_MOTORBIKE,
            "sentry_class20_label_e.kMotorBike",
        ],
        [ZhHansMsg.SENTRY2_CLASS20_PERSON, "sentry_class20_label_e.kPerson"],
        [
            ZhHansMsg.SENTRY2_CLASS20_PLANT,
            "sentry_class20_label_e.kPottedPlant",
        ],
        [ZhHansMsg.SENTRY2_CLASS20_SHEEP, "sentry_class20_label_e.kSheep"],
        [ZhHansMsg.SENTRY2_CLASS20_SOFA, "sentry_class20_label_e.kSofa"],
        [ZhHansMsg.SENTRY2_CLASS20_TRAIN, "sentry_class20_label_e.kTrain"],
        [
            ZhHansMsg.SENTRY2_CLASS20_MONITOR,
            "sentry_class20_label_e.kTvMonitor",
        ],
    ];
};

export const sentry2_vision_card_objs = function () {
    return [
        [ZhHansMsg.SENTRY2_CARD_FORWARD, "sentry2_card_label_e.kCardForward"],
        [ZhHansMsg.SENTRY2_CARD_LEFT, "sentry2_card_label_e.kCardLeft"],
        [ZhHansMsg.SENTRY2_CARD_RIGHT, "sentry2_card_label_e.kCardRight"],
        [
            ZhHansMsg.SENTRY2_CARD_TURN_AROUND,
            "sentry2_card_label_e.kCardTurnAround",
        ],
        [ZhHansMsg.SENTRY2_CARD_PARK, "sentry2_card_label_e.kCardPark"],
        [
            ZhHansMsg.SENTRY2_CARD_GREEN_LIGHT,
            "sentry2_card_label_e.kCardGreenLight",
        ],
        [
            ZhHansMsg.SENTRY2_CARD_RED_LIGHT,
            "sentry2_card_label_e.kCardRedLight",
        ],
        [ZhHansMsg.SENTRY2_CARD_SPEED_40, "sentry2_card_label_e.kCardSpeed40"],
        [ZhHansMsg.SENTRY2_CARD_SPEED_60, "sentry2_card_label_e.kCardSpeed60"],
        [ZhHansMsg.SENTRY2_CARD_SPEED_80, "sentry2_card_label_e.kCardSpeed80"],
        [ZhHansMsg.SENTRY2_CARD_CHECK, "sentry2_card_label_e.kCardCheck"],
        [ZhHansMsg.SENTRY2_CARD_CROSS, "sentry2_card_label_e.kCardCross"],
        [ZhHansMsg.SENTRY2_CARD_CIRCLE, "sentry2_card_label_e.kCardCircle"],
        [ZhHansMsg.SENTRY2_CARD_SQUARE, "sentry2_card_label_e.kCardSquare"],
        [ZhHansMsg.SENTRY2_CARD_TRIANGLE, "sentry2_card_label_e.kCardTriangle"],
        [ZhHansMsg.SENTRY2_CARD_PLUS, "sentry2_card_label_e.kCardPlus"],
        [ZhHansMsg.SENTRY2_CARD_MINUS, "sentry2_card_label_e.kCardMinus"],
        [ZhHansMsg.SENTRY2_CARD_DIVIDE, "sentry2_card_label_e.kCardDivide"],
        [ZhHansMsg.SENTRY2_CARD_EQUAL, "sentry2_card_label_e.kCardEqual"],
        [ZhHansMsg.SENTRY2_CARD_1, "sentry2_card_label_e.kCardOne"],
        [ZhHansMsg.SENTRY2_CARD_2, "sentry2_card_label_e.kCardTwo"],
        [ZhHansMsg.SENTRY2_CARD_3, "sentry2_card_label_e.kCardThree"],
        [ZhHansMsg.SENTRY2_CARD_4, "sentry2_card_label_e.kCardFour"],
        [ZhHansMsg.SENTRY2_CARD_5, "sentry2_card_label_e.kCardFive"],
        [ZhHansMsg.SENTRY2_CARD_6, "sentry2_card_label_e.kCardSix"],
        [ZhHansMsg.SENTRY2_CARD_7, "sentry2_card_label_e.kCardSeven"],
        [ZhHansMsg.SENTRY2_CARD_8, "sentry2_card_label_e.kCardEight"],
        [ZhHansMsg.SENTRY2_CARD_9, "sentry2_card_label_e.kCardNine"],
        [ZhHansMsg.SENTRY2_CARD_0, "sentry2_card_label_e.kCardZero"],
    ];
};

export const vision_obj_card_dict = function () {
    return {
        "sentry2_vision_e.kVisionBlob": sentry2_vision_blod_objs(),
        "sentry2_vision_e.kVisionCard": sentry2_vision_card_objs(),
        "sentry2_vision_e.kVision20Classes": sentry2_vision_20class_objs(),
    };
};

// Sentry2
export const Sentry2Begin = {
    init: function () {
        var mode_objs = [["I2C", "i2c0"],["UART", "uart2"]];

        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENTRY2_BEGIN +
                    ZhHansMsg.SENTRY2_NAME +
                    ZhHansMsg.SENTRY2_PORT,
            )
            .appendField(new Blockly.FieldDropdown(mode_objs), "mode_obj")
            .appendField(ZhHansMsg.SENTRY2_ADDR)
            .appendField(
                new Blockly.FieldDropdown([["0x60", "0x60"]]),
                "addr_obj",
            );
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
        this.setTooltip(ZhHansMsg.SENTRY2_HELP_INIT_TOOLTIP);
    },
};

// 恢复默认设置
export const Sentry2SetDefault = {
    init: function () {
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENTRY2_NAME)
            .appendField(ZhHansMsg.SENTRY2_SET_DEFAULT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
        this.setTooltip(ZhHansMsg.SENTRY2_HELP_SET_DEFAULT);
    },
};

// 启用算法
export const Sentry2VisionSetStatus = {
    init: function () {
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENTRY2_SET + ZhHansMsg.SENTRY2_NAME)
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENTRY2_ENABLE, "Begin"],
                    [ZhHansMsg.SENTRY2_DISABLE, "End"],
                ]),
                "VisionStatus",
            )
            .appendField(
                ZhHansMsg.SENTRY2_VISION_CN + ZhHansMsg.SENTRY2_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown(sentry2_vision_objs()),
                "vision_obj",
            );

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sentry2CameraSetAwb = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENTRY2_SET +
                    ZhHansMsg.SENTRY2_NAME +
                    ZhHansMsg.SENTRY2_CAMERA_SET_AWB,
            )
            .appendField(
                new Blockly.FieldDropdown(white_balance_objs()),
                "awb_obj",
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sentry2VisionSetParamNum = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENTRY2_SET +
                    ZhHansMsg.SENTRY2_NAME +
                    ZhHansMsg.SENTRY2_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown(sentry2_vision_custom()),
                "vision_obj",
            );
        this.appendValueInput("max_num").setCheck("Number").appendField("  ");
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_SET_PARAMNUM);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sentry2VisionColorSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENTRY2_SET +
                    ZhHansMsg.SENTRY2_NAME +
                    ZhHansMsg.SENTRY2_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        ZhHansMsg.SENTRY2_VISION_VISIONCOLOR,
                        "sentry2_vision_e.kVisionColor",
                    ],
                ]),
                "vision_obj",
            );
        this.appendDummyInput().appendField(
            "  " + ZhHansMsg.SENTRY2_CENTER + ZhHansMsg.SENTRY2_STATE_VALUE_X,
        );
        this.appendValueInput("x").setCheck("Number");
        this.appendDummyInput().appendField(
            ZhHansMsg.SENTRY2_CENTER + ZhHansMsg.SENTRY2_STATE_VALUE_Y,
        );
        this.appendValueInput("y").setCheck("Number");
        this.appendDummyInput().appendField(
            ZhHansMsg.SENTRY2_STATE_VALUE_WIDTH,
        );
        this.appendValueInput("w").setCheck("Number");
        this.appendDummyInput().appendField(
            ZhHansMsg.SENTRY2_STATE_VALUE_HEIGHT,
        );
        this.appendValueInput("h").setCheck("Number");
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENTRY2_SET_PARAM_GROUP);
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sentry2VisionBlobSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENTRY2_SET +
                    ZhHansMsg.SENTRY2_NAME +
                    ZhHansMsg.SENTRY2_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        ZhHansMsg.SENTRY2_VISION_VISIONBLOB,
                        "sentry2_vision_e.kVisionBlob",
                    ],
                ]),
                "vision_obj",
            );
        this.appendDummyInput().appendField("  " + ZhHansMsg.SENTRY2_WEIGHT);
        this.appendValueInput("w").setCheck("Number");
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_HEIGHT);
        this.appendValueInput("h").setCheck("Number");
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENTRY2_COLOR)
            .appendField(
                new Blockly.FieldDropdown(sentry2_vision_blod_objs()),
                "lable",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENTRY2_SET_PARAM_GROUP);
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sentry2SetVisionParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENTRY2_SET +
                    ZhHansMsg.SENTRY2_NAME +
                    ZhHansMsg.SENTRY2_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown(sentry2_vision_custom()),
                "vision_obj",
            );
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_SET_PARAM + "1");
        this.appendValueInput("x").setCheck("Number");
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_SET_PARAM + "2");
        this.appendValueInput("y").setCheck("Number");
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_SET_PARAM + "3");
        this.appendValueInput("w").setCheck("Number");
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_SET_PARAM + "4");
        this.appendValueInput("h").setCheck("Number");
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_SET_PARAM + "5");
        this.appendValueInput("lable").setCheck("Number");
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_SET_PARAM_GROUP);
        this.appendValueInput("index").setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sentry2VisionDetectedCount = {
    init: function () {
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENTRY2_NAME + ZhHansMsg.SENTRY2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown(sentry2_vision_objs()),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENTRY2_DETECTED_NUMBER);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("#EAA20A");
    },
};

export const Sentry2VisionObjColor = {
    init: function () {
        var _vision_objs = [
            [
                ZhHansMsg.SENTRY2_VISION_VISIONCOLOR,
                "sentry2_vision_e.kVisionColor",
            ],
        ];
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENTRY2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENTRY2_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_color_objs()),
                "vision_res_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENTRY2_VISION_RESULT);
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_VISION_RESULT_2);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENTRY2_HELP_GET_VISION_VALUE);
    },
};

export const Sentry2GetValue = {
    init: function () {
        var _vision_objs = [
            [
                ZhHansMsg.SENTRY2_VISION_VISIONBLOB,
                "sentry2_vision_e.kVisionBlob",
            ],
            [
                ZhHansMsg.SENTRY2_VISION_VISIONAPRILTAG,
                "sentry2_vision_e.kVisionAprilTag",
            ],
            [
                ZhHansMsg.SENTRY2_VISION_VISIONLEARNING,
                "sentry2_vision_e.kVisionLearning",
            ],
            [
                ZhHansMsg.SENTRY2_VISION_VISIONCARD,
                "sentry2_vision_e.kVisionCard",
            ],
            [
                ZhHansMsg.SENTRY2_VISION_VISIONFACE,
                "sentry2_vision_e.kVisionFace",
            ],
            [
                ZhHansMsg.SENTRY2_VISION_VISION20CLASSES,
                "sentry2_vision_e.kVision20Classes",
            ],
            [
                ZhHansMsg.SENTRY2_VISION_VISIONMOTIONDETECT,
                "sentry2_vision_e.kVisionMotionDetect",
            ],
        ];
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENTRY2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENTRY2_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_res_objs()),
                "vision_res_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENTRY2_VISION_RESULT);
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_VISION_RESULT_2);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENTRY2_HELP_GET_VISION_VALUE);
    },
};

export const Sentry2VisionObjLine = {
    init: function () {
        var _vision_objs = [
            [
                ZhHansMsg.SENTRY2_VISION_VISIONLINE,
                "sentry2_vision_e.kVisionLine",
            ],
        ];

        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENTRY2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENTRY2_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_line_objs()),
                "vision_res_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENTRY2_VISION_RESULT);
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_VISION_RESULT_2);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENTRY2_HELP_GET_VISION_VALUE);
    },
};

export const Sentry2VisionObjQr = {
    init: function () {
        var _vision_objs = [
            [
                ZhHansMsg.SENTRY2_VISION_VISIONQRCODE,
                "sentry2_vision_e.kVisionQrCode",
            ],
        ];

        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENTRY2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENTRY2_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_qr_objs()),
                "vision_res_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENTRY2_VISION_RESULT);
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_VISION_RESULT_2);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENTRY2_HELP_GET_VISION_VALUE);
    },
};

export const Sentry2GetQrValue = {
    init: function () {
        var _vision_objs = [
            [
                ZhHansMsg.SENTRY2_VISION_VISIONQRCODE,
                "sentry2_vision_e.kVisionQrCode",
            ],
        ];
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENTRY2_NAME)
            .appendField(ZhHansMsg.SENTRY2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENTRY2_GET_QRCODEVALUE);
        this.setInputsInline(true);
        this.setOutput(true, String);
        this.setColour("#EAA20A");
    },
};

export const Sentry2GetValueNomal = {
    init: function () {
        var _vision_objs = sentry2_vision_custom();

        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENTRY2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENTRY2_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        ZhHansMsg.SENTRY2_VISION_DATA + "1",
                        "sentry_obj_info_e.kXValue",
                    ],
                    [
                        ZhHansMsg.SENTRY2_VISION_DATA + "2",
                        "sentry_obj_info_e.kYValue",
                    ],
                    [
                        ZhHansMsg.SENTRY2_VISION_DATA + "3",
                        "sentry_obj_info_e.kWidthValue",
                    ],
                    [
                        ZhHansMsg.SENTRY2_VISION_DATA + "4",
                        "sentry_obj_info_e.kHeightValue",
                    ],
                    [
                        ZhHansMsg.SENTRY2_VISION_DATA + "5",
                        "sentry_obj_info_e.kLabel",
                    ],
                ]),
                "vision_res_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENTRY2_VISION_RESULT);
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_VISION_RESULT_2);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENTRY2_HELP_GET_VISION_VALUE);
    },
};

export const Sentry2DetectedColor = {
    init: function () {
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENTRY2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        ZhHansMsg.SENTRY2_VISION_VISIONCOLOR,
                        "sentry2_vision_e.kVisionColor",
                    ],
                ]),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENTRY2_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()["sentry2_vision_e.kVisionBlob"],
                ),
                "vision_card_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENTRY2_VISION_RESULT_1);
        this.appendDummyInput("VisionDetected");
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENTRY2_HELP_DETECTED_VISION_VALUE);
    },
};

export const Sentry2DetectedBlob = {
    init: function () {
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENTRY2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        ZhHansMsg.SENTRY2_VISION_VISIONBLOB,
                        "sentry2_vision_e.kVisionBlob",
                    ],
                ]),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENTRY2_VISION_DETECTED)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()["sentry2_vision_e.kVisionBlob"],
                ),
                "vision_card_obj",
            )
            .appendField(ZhHansMsg.SENTRY2_VISION_BLOCK);
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENTRY2_VISION_RESULT_1);
        this.appendDummyInput("VisionDetected");
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENTRY2_HELP_DETECTED_VISION_VALUE);
    },
};

export const Sentry2DetectedCard = {
    init: function () {
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENTRY2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        ZhHansMsg.SENTRY2_VISION_VISIONCARD,
                        "sentry2_vision_e.kVisionCard",
                    ],
                ]),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENTRY2_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()["sentry2_vision_e.kVisionCard"],
                ),
                "vision_card_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENTRY2_VISION_RESULT_1);
        this.appendDummyInput("VisionDetected");
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENTRY2_HELP_DETECTED_VISION_VALUE);
    },
};

export const Sentry2Detected20Class = {
    init: function () {
        this.appendDummyInput().appendField(ZhHansMsg.SENTRY2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENTRY2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        ZhHansMsg.SENTRY2_VISION_VISION20CLASSES,
                        "sentry2_vision_e.kVision20Classes",
                    ],
                ]),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENTRY2_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()["sentry2_vision_e.kVision20Classes"],
                ),
                "vision_card_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENTRY2_VISION_RESULT_1);
        this.appendDummyInput("VisionDetected");
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENTRY2_HELP_DETECTED_VISION_VALUE);
    },
};
