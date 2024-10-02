// Sentry Enable Disable
const SENTRY2_ENABLE = "启用";
const SENTRY2_DISABLE = "关闭";

// Sentry White Balance Type
const SENTRY2_AWB_AUTO = "自动";
const SENTRY2_AWB_LOCK = "锁定";
const SENTRY2_AWB_WHITE_LIGHT = "白光";
const SENTRY2_AWB_YELLOW_LIGHT = "黄光";

// Sentry State Value Type
const SENTRY2_STATE_VALUE = "数据";
const SENTRY2_STATE_VALUE_X = "横坐标";
const SENTRY2_STATE_VALUE_Y = "纵坐标";
const SENTRY2_STATE_VALUE_WIDTH = "宽度";
const SENTRY2_STATE_VALUE_HEIGHT = "高度";
const SENTRY2_STATE_VALUE_LABEL = "标签";

const SENTRY2_STATE_LINE_EX = "终点横坐标";
const SENTRY2_STATE_LINE_EY = "终点纵坐标";
const SENTRY2_STATE_LINE_SX = "起点横坐标";
const SENTRY2_STATE_LINE_SY = "起点纵坐标";
const SENTRY2_STATE_LINE_A = "倾斜角度";

const SENTRY2_STATE_VALUE_R = "红色分量值";
const SENTRY2_STATE_VALUE_G = "绿色分量值";
const SENTRY2_STATE_VALUE_B = "蓝色分量值";

// Sentry Color Type
const SENTRY2_COLOR_BLACK = "黑色";
const SENTRY2_COLOR_WHITE = "白色";
const SENTRY2_COLOR_RED = "红色";
const SENTRY2_COLOR_GREEN = "绿色";
const SENTRY2_COLOR_BLUE = "蓝色";
const SENTRY2_COLOR_YELLOW = "黄色";
const SENTRY2_COLOR_UNKNOWN = "其他";

// Sentry Vision type
const SENTRY2_VISION_VISIONCOLOR = "颜色识别";
const SENTRY2_VISION_VISIONBLOB = "色块检测";
const SENTRY2_VISION_VISIONBALL = "球体识别";
const SENTRY2_VISION_VISIONAPRILTAG = "标签识别";
const SENTRY2_VISION_VISIONLINE = "线条检测";
const SENTRY2_VISION_VISIONLEARNING = "深度学习";
const SENTRY2_VISION_VISIONCARD = "卡片识别";
const SENTRY2_VISION_VISIONFACE = "人脸识别";
const SENTRY2_VISION_VISIONBODY = "人体检测";
const SENTRY2_VISION_VISION20CLASSES = "20类物体";
const SENTRY2_VISION_VISIONQRCODE = "二维码";
const SENTRY2_VISION_VISIONMOTIONDETECT = "运动物体";
const SENTRY2_VISION_VISIONCUSTOM = "自定义";

// Sentry 20 Class Type
const SENTRY2_CLASS20_AIRPLANE = "飞机";
const SENTRY2_CLASS20_BICYCLE = "自行车";
const SENTRY2_CLASS20_BIRD = "鸟";
const SENTRY2_CLASS20_BOAT = "船";
const SENTRY2_CLASS20_BOTTLE = "瓶子";
const SENTRY2_CLASS20_BUS = "公交车";
const SENTRY2_CLASS20_CAR = "小汽车";
const SENTRY2_CLASS20_CAT = "猫";
const SENTRY2_CLASS20_CHAIR = "椅子";
const SENTRY2_CLASS20_COW = "奶";
const SENTRY2_CLASS20_TABLE = "餐桌";
const SENTRY2_CLASS20_DOG = "狗";
const SENTRY2_CLASS20_HORSE = "马";
const SENTRY2_CLASS20_MOTORBIKE = "摩托车";
const SENTRY2_CLASS20_PERSON = "人";
const SENTRY2_CLASS20_PLANT = "盆栽植物";
const SENTRY2_CLASS20_SHEEP = "羊";
const SENTRY2_CLASS20_SOFA = "沙发";
const SENTRY2_CLASS20_TRAIN = "火车";
const SENTRY2_CLASS20_MONITOR = "电视";

// Sentry Card Type
const SENTRY2_CARD_TRAFFIC = "交通卡片";
const SENTRY2_CARD_FORWARD = "前进";
const SENTRY2_CARD_LEFT = "左转";
const SENTRY2_CARD_RIGHT = "右转";
const SENTRY2_CARD_TURN_AROUND = "掉头";
const SENTRY2_CARD_PARK = "停车";
const SENTRY2_CARD_GREEN_LIGHT = "绿灯";
const SENTRY2_CARD_RED_LIGHT = "红灯";
const SENTRY2_CARD_SPEED_40 = "限速40";
const SENTRY2_CARD_SPEED_60 = "限速60";
const SENTRY2_CARD_SPEED_80 = "限速80";
const SENTRY2_CARD_SYMBOL = "符号卡片";
const SENTRY2_CARD_CHECK = "✔";
const SENTRY2_CARD_CROSS = "☓";
const SENTRY2_CARD_CIRCLE = "◯";
const SENTRY2_CARD_SQUARE = "☐";
const SENTRY2_CARD_TRIANGLE = "△";
const SENTRY2_CARD_PLUS = "+";
const SENTRY2_CARD_MINUS = "-";
const SENTRY2_CARD_DIVIDE = "÷";
const SENTRY2_CARD_EQUAL = "=";
const SENTRY2_CARD_NUMBER = "数字卡片";
const SENTRY2_CARD_1 = "1";
const SENTRY2_CARD_2 = "2";
const SENTRY2_CARD_3 = "3";
const SENTRY2_CARD_4 = "4";
const SENTRY2_CARD_5 = "5";
const SENTRY2_CARD_6 = "6";
const SENTRY2_CARD_7 = "7";
const SENTRY2_CARD_8 = "8";
const SENTRY2_CARD_9 = "9";
const SENTRY2_CARD_0 = "0";

// Sentry2模块文本
const SENTRY2_BEGIN_MESSAGE0 = "初始化  Sentry2  端口 %1 地址 %2";
const SENTRY2_SET_DEFAULT_MESSAGE0 = "  Sentry2  恢复默认参数";
const SENTRY2_VISION_SET_STATUS_MESSAGE0 = "  Sentry2  %1算法  %2";
const SENTRY2_SET_PARAMNUM_MESSAGE0 = "设置  Sentry2  %1  %2组参数";
const SENTRY2_COLORPARAM_MESSAGE0 =
  "设置  Sentry2  %1  区域中心 横坐标 %2 纵坐标 %3 宽度 %4 高度 %5 参数组 %6";
const SENTRY2_BOLDPARAM_MESSAGE0 =
  "设置  Sentry2  %1  最小宽度 %2 高度 %3 检测标签 %4 参数组 %5";
const SENTRY2_VISIONPARAM_MESSAGE0 =
  "设置  Sentry2  %1  参数1 %2 参数2 %3 参数3 %4 参数4 %5 参数5 %6 参数组 %7";
const SENTRY2_CAMERA_SET_AWB_MESSAGE0 = "设置  Sentry2  白平衡模式 %1";
const SENTRY2_DETECTED_MESSAGE0 = "  Sentry2  %1    检测结果数量";
const SENTRY2_GET_VALUE_MESSAGE0 = "  Sentry2  %1  %2 结果%3的";
const SENTRY2_COLORRCGVALUE_MESSAGE0 = "  Sentry2  颜色识别  %1 结果 %2的";
const SENTRY2_QRRCGVALUE_MESSAGE0 = "  Sentry2  二维码  %1 结果 %2的";
const SENTRY2_GET_QRCODEVALUE_MESSAGE0 = "  Sentry2  二维码  结果字符串";
const SENTRY2_LINEVALUE_MESSAGE0 = "  Sentry2  线条检测  %1 结果 %2";
const SENTRY2_DETECTEDCOLOR_MESSAGE0 = "  Sentry2  颜色识别  识别到 %1 结果 %2";
const SENTRY2_DETECTEDBLOB_MESSAGE0 =
  "  Sentry2  色块检测  检测到 %1块 结果 %2";
const SENTRY2_DETECTEDCARD_MESSAGE0 = "  Sentry2  卡片识别  识别到 %1 结果 %2";
const SENTRY2_DETECTED20CLASS_MESSAGE0 =
  "  Sentry2  20分类识别  检测到 %1 结果 %2";

const Sentry_SetupMode_Color = "#EF5411";
const Sentry_RunMode_Color = "#EAA20A";

const sentry = [
  ["0x60", "0"],
  ["0x61", "1"],
  ["0x62", "2"],
  ["0x63", "3"],
];

// 初始化 Sentry2
Blockly.Blocks["Sentry2Begin"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "InitType",
          options: [["I2C0", "i2c0"]],
          type: "field_dropdown",
        },
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
      ],
      message0: SENTRY2_BEGIN_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

// 恢复默认设置
Blockly.Blocks["Sentry2SetDefault"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,

      message0: SENTRY2_SET_DEFAULT_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

// 启用
Blockly.Blocks["Sentry2VisionSetStatus"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionStatus",
          options: [
            [SENTRY2_ENABLE, "Begin"],
            [SENTRY2_DISABLE, "End"],
          ],
          type: "field_dropdown",
        },
        {
          name: "VisionType",
          options: [
            [SENTRY2_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
            [SENTRY2_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
            [SENTRY2_VISION_VISIONAPRILTAG, "sentry2_vision_e.kVisionAprilTag"],
            [SENTRY2_VISION_VISIONLINE, "sentry2_vision_e.kVisionLine"],
            [SENTRY2_VISION_VISIONLEARNING, "sentry2_vision_e.kVisionLearning"],
            [SENTRY2_VISION_VISIONCARD, "sentry2_vision_e.kVisionCard"],
            [SENTRY2_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
            [
              SENTRY2_VISION_VISION20CLASSES,
              "sentry2_vision_e.kVision20Classes",
            ],
            [SENTRY2_VISION_VISIONQRCODE, "sentry2_vision_e.kVisionQrCode"],
            [SENTRY2_VISION_VISIONCUSTOM, "sentry2_vision_e.kVisionCustom"],
            [
              SENTRY2_VISION_VISIONMOTIONDETECT,
              "sentry2_vision_e.kVisionMotionDetect",
            ],
          ],
          type: "field_dropdown",
        },
      ],
      message0: SENTRY2_VISION_SET_STATUS_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

Blockly.Blocks["Sentry2SetParamNum"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [SENTRY2_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
            [SENTRY2_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
            [SENTRY2_VISION_VISIONLEARNING, "sentry2_vision_e.kVisionLearning"],
            [SENTRY2_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
            [SENTRY2_VISION_VISIONCUSTOM, "sentry2_vision_e.kVisionCustom"],
          ],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "max_num",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: SENTRY2_SET_PARAMNUM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2SetColorParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [SENTRY2_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
          ],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "x",
        },
        {
          check: "Number",
          type: "input_value",
          name: "y",
        },
        {
          check: "Number",
          type: "input_value",
          name: "w",
        },
        {
          check: "Number",
          type: "input_value",
          name: "h",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      message0: SENTRY2_COLORPARAM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2SetVisionParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [SENTRY2_VISION_VISIONCUSTOM, "sentry2_vision_e.kVisionCustom"],
            [SENTRY2_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
            [SENTRY2_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
            [SENTRY2_VISION_VISIONLEARNING, "sentry2_vision_e.kVisionLearning"],
            [SENTRY2_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
          ],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "x",
        },
        {
          check: "Number",
          type: "input_value",
          name: "y",
        },
        {
          check: "Number",
          type: "input_value",
          name: "w",
        },
        {
          check: "Number",
          type: "input_value",
          name: "h",
        },
        {
          check: "Number",
          type: "input_value",
          name: "lable",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      message0: SENTRY2_VISIONPARAM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2SetBlodParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [[SENTRY2_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"]],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "w",
        },
        {
          check: "Number",
          type: "input_value",
          name: "h",
        },
        {
          type: "field_dropdown",
          name: "lable",
          options: [
            [SENTRY2_COLOR_RED, "sentry_color_label_e.kColorRed"],
            [SENTRY2_COLOR_BLACK, "sentry_color_label_e.kColorBlack"],
            [SENTRY2_COLOR_WHITE, "sentry_color_label_e.kColorWhite"],
            [SENTRY2_COLOR_GREEN, "sentry_color_label_e.kColorGreen"],
            [SENTRY2_COLOR_BLUE, "sentry_color_label_e.kColorBlue"],
            [SENTRY2_COLOR_YELLOW, "sentry_color_label_e.kColorYellow"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      message0: SENTRY2_BOLDPARAM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2CameraSetAwb"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "awb",
          options: [
            [
              SENTRY2_AWB_AUTO,
              "sentry_camera_white_balance_e.kAutoWhiteBalance",
            ],
            [
              SENTRY2_AWB_LOCK,
              "sentry_camera_white_balance_e.kLockWhiteBalance",
            ],
            [
              SENTRY2_AWB_WHITE_LIGHT,
              "sentry_camera_white_balance_e.kWhiteLight",
            ],
            [
              SENTRY2_AWB_YELLOW_LIGHT,
              "sentry_camera_white_balance_e.kYellowLight",
            ],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: SENTRY2_CAMERA_SET_AWB_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["Sentry2Detected"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [SENTRY2_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
            [SENTRY2_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
            [SENTRY2_VISION_VISIONAPRILTAG, "sentry2_vision_e.kVisionAprilTag"],
            [SENTRY2_VISION_VISIONLINE, "sentry2_vision_e.kVisionLine"],
            [SENTRY2_VISION_VISIONLEARNING, "sentry2_vision_e.kVisionLearning"],
            [SENTRY2_VISION_VISIONCARD, "sentry2_vision_e.kVisionCard"],
            [SENTRY2_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
            [
              SENTRY2_VISION_VISION20CLASSES,
              "sentry2_vision_e.kVision20Classes",
            ],
            [SENTRY2_VISION_VISIONQRCODE, "sentry2_vision_e.kVisionQrCode"],
            [SENTRY2_VISION_VISIONCUSTOM, "sentry2_vision_e.kVisionCustom"],
            [
              SENTRY2_VISION_VISIONMOTIONDETECT,
              "sentry2_vision_e.kVisionMotionDetect",
            ],
          ],
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENTRY2_DETECTED_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2GetValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [SENTRY2_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
            [SENTRY2_VISION_VISIONAPRILTAG, "sentry2_vision_e.kVisionAprilTag"],
            [SENTRY2_VISION_VISIONLEARNING, "sentry2_vision_e.kVisionLearning"],
            [SENTRY2_VISION_VISIONCARD, "sentry2_vision_e.kVisionCard"],
            [SENTRY2_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
            [
              SENTRY2_VISION_VISION20CLASSES,
              "sentry2_vision_e.kVision20Classes",
            ],
            [
              SENTRY2_VISION_VISIONMOTIONDETECT,
              "sentry2_vision_e.kVisionMotionDetect",
            ],
          ],
          type: "field_dropdown",
        },
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY2_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
            [SENTRY2_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
            [SENTRY2_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
            [SENTRY2_STATE_VALUE_HEIGHT, "sentry_obj_info_e.kHeightValue"],
            [SENTRY2_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENTRY2_GET_VALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2GetValueNomal"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [SENTRY2_VISION_VISIONCUSTOM, "sentry2_vision_e.kVisionCustom"],
            [SENTRY2_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
            [SENTRY2_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
            [SENTRY2_VISION_VISIONLEARNING, "sentry2_vision_e.kVisionLearning"],
            [SENTRY2_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
          ],
          type: "field_dropdown",
        },
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY2_STATE_VALUE + "1", "sentry_obj_info_e.kXValue"],
            [SENTRY2_STATE_VALUE + "2", "sentry_obj_info_e.kYValue"],
            [SENTRY2_STATE_VALUE + "3", "sentry_obj_info_e.kWidthValue"],
            [SENTRY2_STATE_VALUE + "4", "sentry_obj_info_e.kHeightValue"],
            [SENTRY2_STATE_VALUE + "5", "sentry_obj_info_e.kLabel"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENTRY2_GET_VALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2ColorRcgValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY2_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
            [SENTRY2_STATE_VALUE_R, "sentry_obj_info_e.kRValue"],
            [SENTRY2_STATE_VALUE_G, "sentry_obj_info_e.kGValue"],
            [SENTRY2_STATE_VALUE_B, "sentry_obj_info_e.kBValue"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENTRY2_COLORRCGVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2QrRcgValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY2_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
            [SENTRY2_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
            [SENTRY2_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
            [SENTRY2_STATE_VALUE_HEIGHT, "sentry_obj_info_e.kHeightValue"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENTRY2_QRRCGVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2GetQrCodeValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,

      output: null,
      inputsInline: true,
      message0: SENTRY2_GET_QRCODEVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2LineValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY2_STATE_LINE_EX, "sentry_obj_info_e.kXValue"],
            [SENTRY2_STATE_LINE_EY, "sentry_obj_info_e.kYValue"],
            [SENTRY2_STATE_LINE_SX, "sentry_obj_info_e.kWidthValue"],
            [SENTRY2_STATE_LINE_SY, "sentry_obj_info_e.kHeightValue"],
            [SENTRY2_STATE_LINE_A, "sentry_obj_info_e.kLabel"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: SENTRY2_LINEVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2DetectedColor"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "ColorLabel",
          options: [
            [SENTRY2_COLOR_BLACK, "sentry_color_label_e.kColorBlack"],
            [SENTRY2_COLOR_WHITE, "sentry_color_label_e.kColorWhite"],
            [SENTRY2_COLOR_RED, "sentry_color_label_e.kColorRed"],
            [SENTRY2_COLOR_GREEN, "sentry_color_label_e.kColorGreen"],
            [SENTRY2_COLOR_BLUE, "sentry_color_label_e.kColorBlue"],
            [SENTRY2_COLOR_YELLOW, "sentry_color_label_e.kColorYellow"],
            [SENTRY2_COLOR_UNKNOWN, "sentry_color_label_e.kColorUnkown"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: "Boolean",
      inputsInline: true,
      message0: SENTRY2_DETECTEDCOLOR_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2DetectedBlob"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "ColorLabel",
          options: [
            [SENTRY2_COLOR_RED, "sentry_color_label_e.kColorRed"],
            [SENTRY2_COLOR_BLACK, "sentry_color_label_e.kColorBlack"],
            [SENTRY2_COLOR_WHITE, "sentry_color_label_e.kColorWhite"],
            [SENTRY2_COLOR_GREEN, "sentry_color_label_e.kColorGreen"],
            [SENTRY2_COLOR_BLUE, "sentry_color_label_e.kColorBlue"],
            [SENTRY2_COLOR_YELLOW, "sentry_color_label_e.kColorYellow"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: "Boolean",
      inputsInline: true,
      message0: SENTRY2_DETECTEDBLOB_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2DetectedCard"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "card",
          options: [
            [SENTRY2_CARD_FORWARD, "sentry2_card_label_e.kCardForward"],
            [SENTRY2_CARD_LEFT, "sentry2_card_label_e.kCardLeft"],
            [SENTRY2_CARD_RIGHT, "sentry2_card_label_e.kCardRight"],
            [SENTRY2_CARD_TURN_AROUND, "sentry2_card_label_e.kCardTurnAround"],
            [SENTRY2_CARD_PARK, "sentry2_card_label_e.kCardPark"],
            [SENTRY2_CARD_GREEN_LIGHT, "sentry2_card_label_e.kCardGreenLight"],
            [SENTRY2_CARD_RED_LIGHT, "sentry2_card_label_e.kCardRedLight"],
            [SENTRY2_CARD_SPEED_40, "sentry2_card_label_e.kCardSpeed40"],
            [SENTRY2_CARD_SPEED_60, "sentry2_card_label_e.kCardSpeed60"],
            [SENTRY2_CARD_SPEED_80, "sentry2_card_label_e.kCardSpeed80"],
            [SENTRY2_CARD_CHECK, "sentry2_card_label_e.kCardCheck"],
            [SENTRY2_CARD_CROSS, "sentry2_card_label_e.kCardCross"],
            [SENTRY2_CARD_CIRCLE, "sentry2_card_label_e.kCardCircle"],
            [SENTRY2_CARD_SQUARE, "sentry2_card_label_e.kCardSquare"],
            [SENTRY2_CARD_TRIANGLE, "sentry2_card_label_e.kCardTriangle"],
            [SENTRY2_CARD_PLUS, "sentry2_card_label_e.kCardPlus"],
            [SENTRY2_CARD_MINUS, "sentry2_card_label_e.kCardMinus"],
            [SENTRY2_CARD_DIVIDE, "sentry2_card_label_e.kCardDivide"],
            [SENTRY2_CARD_EQUAL, "sentry2_card_label_e.kCardEqual"],
            [SENTRY2_CARD_1, "sentry2_card_label_e.kCardOne"],
            [SENTRY2_CARD_2, "sentry2_card_label_e.kCardTwo"],
            [SENTRY2_CARD_3, "sentry2_card_label_e.kCardThree"],
            [SENTRY2_CARD_4, "sentry2_card_label_e.kCardFour"],
            [SENTRY2_CARD_5, "sentry2_card_label_e.kCardFive"],
            [SENTRY2_CARD_6, "sentry2_card_label_e.kCardSix"],
            [SENTRY2_CARD_7, "sentry2_card_label_e.kCardSeven"],
            [SENTRY2_CARD_8, "sentry2_card_label_e.kCardEight"],
            [SENTRY2_CARD_9, "sentry2_card_label_e.kCardNine"],
            [SENTRY2_CARD_0, "sentry2_card_label_e.kCardZero"],
          ],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: "Boolean",
      inputsInline: true,
      message0: SENTRY2_DETECTEDCARD_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2Detected20Class"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "card",
          options: [
            [SENTRY2_CLASS20_AIRPLANE, "sentry_class20_label_e.kAirplane"],
            [SENTRY2_CLASS20_BICYCLE, "sentry_class20_label_e.kBicycle"],
            [SENTRY2_CLASS20_BIRD, "sentry_class20_label_e.kBird"],
            [SENTRY2_CLASS20_BOAT, "sentry_class20_label_e.kBoat"],
            [SENTRY2_CLASS20_BOTTLE, "sentry_class20_label_e.kBus"],
            [SENTRY2_CLASS20_BUS, "sentry_class20_label_e.kCar"],
            [SENTRY2_CLASS20_CAR, "sentry_class20_label_e.kCat"],
            [SENTRY2_CLASS20_CAT, "sentry_class20_label_e.kChair"],
            [SENTRY2_CLASS20_CHAIR, "sentry_class20_label_e.kCow"],
            [SENTRY2_CLASS20_COW, "sentry_class20_label_e.kTable"],
            [SENTRY2_CLASS20_TABLE, "sentry_class20_label_e.kDog"],
            [SENTRY2_CLASS20_DOG, "sentry_class20_label_e.kHorse"],
            [SENTRY2_CLASS20_HORSE, "sentry_class20_label_e.kMotorBike"],
            [SENTRY2_CLASS20_MOTORBIKE, "sentry_class20_label_e.kPerson"],
            [SENTRY2_CLASS20_PERSON, "sentry_class20_label_e.kPlant"],
            [SENTRY2_CLASS20_PLANT, "sentry_class20_label_e.kSheep"],
            [SENTRY2_CLASS20_SHEEP, "sentry_class20_label_e.kSheep"],
            [SENTRY2_CLASS20_SOFA, "sentry_class20_label_e.kSofa"],
            [SENTRY2_CLASS20_TRAIN, "sentry_class20_label_e.kTrain"],
            [SENTRY2_CLASS20_MONITOR, "sentry_class20_label_e.kMonitor"],
          ],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: "Boolean",
      inputsInline: true,
      message0: SENTRY2_DETECTED20CLASS_MESSAGE0,
    });
  },
};

// 初始化 Sentry
pythonGenerator.forBlock["Sentry2Begin"] = function (block) {
  var sentry = block.getFieldValue("sentry");
  var InitType = block.getFieldValue("InitType");
  var code = "sentry" + ".begin(" + InitType + ")\n";

  pythonGenerator.definitions_["import_iic"] = "from machine import I2C";
  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";
  pythonGenerator.definitions_["init_IIC"] = "i2c0 = I2C(0,freq=400000)";
  pythonGenerator.definitions_["init_Sentry2" + sentry] =
    "sentry" + " = Sentry(0x4,0x6" + sentry + ")";

  return code;
};

pythonGenerator.forBlock["Sentry2CameraSetAwb"] = function (block) {
  var awb = block.getFieldValue("awb");

  var code = "sentry" + ".CameraSetAwb(" + awb + ")\n";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return code;
};

// 启用
pythonGenerator.forBlock["Sentry2VisionSetStatus"] = function (block) {
  var VisionStatus = block.getFieldValue("VisionStatus");
  var VisionType = block.getFieldValue("VisionType");
  var code = "sentry" + ".Vision" + VisionStatus + "(" + VisionType + ")\n";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return code;
};

// 设置  参数
pythonGenerator.forBlock["Sentry2SetParamNum"] = function (block) {
  var VisionType = block.getFieldValue("VisionType");
  var max_num = pythonGenerator.valueToCode(
    block,
    "max_num",
    pythonGenerator.ORDER_NONE
  );
  var code = "sentry" + ".SetParamNum(" + VisionType + ", " + max_num + ")\n";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return code;
};

// Color   参数
pythonGenerator.forBlock["Sentry2SetColorParam"] = function (block) {
  var x =
    pythonGenerator.valueToCode(block, "x", pythonGenerator.ORDER_NONE) || "1";
  var y =
    pythonGenerator.valueToCode(block, "y", pythonGenerator.ORDER_NONE) || "1";
  var w =
    pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) || "1";
  var h =
    pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) || "1";
  var objid = pythonGenerator.valueToCode(
    block,
    "objid",
    pythonGenerator.ORDER_ATOMIC
  );
  var code =
    "sentry" +
    ".SetParam(" +
    "sentry2_vision_e.kVisionColor, [" +
    x +
    ", " +
    y +
    ", " +
    w +
    ", " +
    h +
    ", 0]" +
    ", " +
    objid +
    ")\n";

  return code;
};

// Blod   参数
pythonGenerator.forBlock["Sentry2SetBlodParam"] = function (block) {
  var w =
    pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) || "1";
  var h =
    pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) || "1";
  var lable = block.getFieldValue("lable");
  var objid = pythonGenerator.valueToCode(
    block,
    "objid",
    pythonGenerator.ORDER_ATOMIC
  );
  var code =
    "sentry" +
    ".SetParam(" +
    "sentry2_vision_e.kVisionBlob, " +
    "[0, 0, " +
    w +
    ", " +
    h +
    ", " +
    lable +
    "]" +
    ", " +
    objid +
    ")\n";

  return code;
};

//  参数
pythonGenerator.forBlock["Sentry2SetVisionParam"] = function (block) {
  var x =
    pythonGenerator.valueToCode(block, "x", pythonGenerator.ORDER_NONE) || "1";
  var y =
    pythonGenerator.valueToCode(block, "y", pythonGenerator.ORDER_NONE) || "1";
  var w =
    pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) || "1";
  var h =
    pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) || "1";
  var lable =
    pythonGenerator.valueToCode(block, "lable", pythonGenerator.ORDER_NONE) ||
    "1";
  var objid = pythonGenerator.valueToCode(
    block,
    "objid",
    pythonGenerator.ORDER_ATOMIC
  );
  var code =
    "sentry" +
    ".SetParam(" +
    "sentry2_vision_e.kVisionColor, [" +
    x +
    ", " +
    y +
    ", " +
    w +
    ", " +
    h +
    ", " +
    lable +
    "]" +
    ", " +
    objid +
    ")\n";

  return code;
};

pythonGenerator.forBlock["Sentry2Detected"] = function (block) {
  var VisionType = block.getFieldValue("VisionType");
  var code =
    "sentry" + ".GetValue(" + VisionType + ", sentry_obj_info_e.kStatus)";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sentry2GetValue"] = pythonGenerator.forBlock[
  "Sentry2GetValueNomal"
] = function (block) {
  var VisionType = block.getFieldValue("VisionType");
  var objinfo = block.getFieldValue("objinfo");
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) ||
    "0";
  var code =
    "sentry" + ".GetValue(" + VisionType + ", " + objinfo + ", " + objid + ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sentry2ColorRcgValue"] = function (block) {
  var objinfo = block.getFieldValue("objinfo");
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) ||
    "0";
  var code =
    "sentry" +
    ".GetValue(sentry2_vision_e.kVisionColor, " +
    objinfo +
    ", " +
    objid +
    ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sentry2QrRcgValue"] = function (block) {
  var objinfo = block.getFieldValue("objinfo");
  var code =
    "sentry" + ".GetValue(sentry2_vision_e.kVisionQrCode, " + objinfo + ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sentry2GetQrCodeValue"] = function (block) {
  var code = "sentry" + ".GetQrCodeValue()";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sentry2LineValue"] = function (block) {
  var objinfo = block.getFieldValue("objinfo");
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) ||
    "0";
  var code =
    "sentry" +
    ".GetValue(sentry2_vision_e.kVisionLine, " +
    objinfo +
    ", " +
    objid +
    ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sentry2DetectedColor"] = function (block) {
  var ColorLabel = block.getFieldValue("ColorLabel");
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) ||
    "0";

  var code =
    "(sentry" +
    ".GetValue(sentry2_vision_e.kVisionColor, sentry_obj_info_e.kLabel, " +
    objid +
    ") == " +
    ColorLabel +
    ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sentry2DetectedBlob"] = function (block) {
  var ColorLabel = block.getFieldValue("ColorLabel");
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) ||
    "0";

  var code =
    "(sentry" +
    ".GetValue(sentry2_vision_e.kVisionBlob, sentry_obj_info_e.kLabel, " +
    objid +
    ") == " +
    ColorLabel +
    ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sentry2DetectedCard"] = function (block) {
  var card = block.getFieldValue("card");
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) ||
    "0";

  var code =
    "(sentry" +
    ".GetValue(sentry2_vision_e.kVisionCard, sentry_obj_info_e.kLabel, " +
    objid +
    ") == " +
    card +
    ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sentry2Detected20Class"] = function (block) {
  var card = block.getFieldValue("card");
  var objid =
    pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) ||
    "0";

  var code =
    "(sentry" +
    ".GetValue(sentry2_vision_e.kVision20Classes, sentry_obj_info_e.kLabel, " +
    objid +
    ") == " +
    card +
    ")";

  pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

  return [code, pythonGenerator.ORDER_ATOMIC];
};
