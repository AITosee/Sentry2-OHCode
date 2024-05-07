
// Sentry Enable Disable
const SENTRY_ENABLE = '启用';
const SENTRY_DISABLE = '关闭';

// Sentry White Balance Type
const SENTRY_AWB_AUTO = '自动';
const SENTRY_AWB_LOCK = '锁定白平衡';
const SENTRY_AWB_WHITE_LIGHT = '白光模式';
const SENTRY_AWB_YELLOW_LIGHT = '黄光模式';

// Sentry State Value Type
const SENTRY_STATE_VALUE = '结果'
const SENTRY_STATE_VALUE_X = '横向坐标';
const SENTRY_STATE_VALUE_Y = '纵向坐标';
const SENTRY_STATE_VALUE_WIDTH = '宽度';
const SENTRY_STATE_VALUE_HEIGHT = '高度';
const SENTRY_STATE_VALUE_LABEL = '标签';

const SENTRY_STATE_VALUE_R = '红色通道';
const SENTRY_STATE_VALUE_G = '绿色通道';
const SENTRY_STATE_VALUE_B = '蓝色通道';

const SENTRY_STATE_LINE_EX = '线段终点X坐标';
const SENTRY_STATE_LINE_EY = '线段终点Y坐标';
const SENTRY_STATE_LINE_SX = '线段起点X坐标';
const SENTRY_STATE_LINE_SY = '线段起点Y坐标';
const SENTRY_STATE_LINE_A = '线段的倾斜角度';

// Sentry Color Type
const SENTRY_COLOR_BLACK = '黑色';
const SENTRY_COLOR_WHITE = '白色';
const SENTRY_COLOR_RED = '红色';
const SENTRY_COLOR_GREEN = '绿色';
const SENTRY_COLOR_BLUE = '蓝色';
const SENTRY_COLOR_YELLOW = '黄色';
const SENTRY_COLOR_UNKNOWN = '其他';

// Sentry Vision type
const SENTRY_VISION_VISIONCOLOR = '颜色识别';
const SENTRY_VISION_VISIONBLOB = '色块检测';
const SENTRY_VISION_VISIONBALL = '球体检测';
const SENTRY_VISION_VISIONAPRILTAG = 'AprilTag';
const SENTRY_VISION_VISIONLINE = '线段检测';
const SENTRY_VISION_VISIONLEARNING = '机器学习';
const SENTRY_VISION_VISIONCARD = '卡片识别';
const SENTRY_VISION_VISIONBODY = '人体检测';
const SENTRY_VISION_VISIONFACE = '人脸识别';
const SENTRY_VISION_VISION20CLASSES = '20分类识别';
const SENTRY_VISION_VISIONQRCODE = '二维码识别';
const SENTRY_VISION_VISIONOBJTRACK = '物体训练与追踪';
const SENTRY_VISION_VISIONMOTIONDETECT = '运动物体检测';
const SENTRY_VISION_VISIONCUSTOM = '自定义';

// Sentry 20 Class Type
const SENTRY_CLASS20_AIRPLANE = '✈️ 飞机';
const SENTRY_CLASS20_BICYCLE = '🚲 自行车';
const SENTRY_CLASS20_BIRD = '🐦 鸟';
const SENTRY_CLASS20_BOAT = '🚤 船';
const SENTRY_CLASS20_BOTTLE = '🍾 瓶子';
const SENTRY_CLASS20_BUS = ' 🚌 公交车';
const SENTRY_CLASS20_CAR = '🚗 小汽车';
const SENTRY_CLASS20_CAT = ' 🐱 猫';
const SENTRY_CLASS20_CHAIR = '🪑 椅子';
const SENTRY_CLASS20_COW = '🐄 奶牛';
const SENTRY_CLASS20_TABLE = '🔲 桌子';
const SENTRY_CLASS20_DOG = '🐕 狗';
const SENTRY_CLASS20_HORSE = '🐎 马';
const SENTRY_CLASS20_MOTORBIKE = '🏍️ 摩托车';
const SENTRY_CLASS20_PERSON = '🤵 人';
const SENTRY_CLASS20_PLANT = '🪴 植物';
const SENTRY_CLASS20_SHEEP = '🐏 羊';
const SENTRY_CLASS20_SOFA = '🛋 沙发';
const SENTRY_CLASS20_TRAIN = '🚆 火车';
const SENTRY_CLASS20_MONITOR = '🖥️ 显示器';

// Sentry Card Type
const SENTRY_CARD_FORWARD = '前进';
const SENTRY_CARD_LEFT = '左';
const SENTRY_CARD_RIGHT = '右';
const SENTRY_CARD_TURN_AROUND = '掉头';
const SENTRY_CARD_PARK = '暂停';
const SENTRY_CARD_GREEN_LIGHT = '绿灯';
const SENTRY_CARD_RED_LIGHT = '红灯';
const SENTRY_CARD_SPEED_40 = '速度40';
const SENTRY_CARD_SPEED_60 = '速度60';
const SENTRY_CARD_SPEED_80 = '速度80';
const SENTRY_CARD_CHECK = '对勾';
const SENTRY_CARD_CROSS = '叉号';
const SENTRY_CARD_CIRCLE = '圆圈';
const SENTRY_CARD_SQUARE = '正方形';
const SENTRY_CARD_TRIANGLE = '三角形';
const SENTRY_CARD_PLUS = '加号';
const SENTRY_CARD_MINUS = '减号';
const SENTRY_CARD_DIVIDE = '除号';
const SENTRY_CARD_EQUAL = '等于号';
const SENTRY_CARD_1 = '1';
const SENTRY_CARD_2 = '2';
const SENTRY_CARD_3 = '3';
const SENTRY_CARD_4 = '4';
const SENTRY_CARD_5 = '5';
const SENTRY_CARD_6 = '6';
const SENTRY_CARD_7 = '7';
const SENTRY_CARD_8 = '8';
const SENTRY_CARD_9 = '9';
const SENTRY_CARD_0 = '0';

// Sentry2模块文本
const SENTRY2_BEGIN_MESSAGE0 = '初始化 Sentry2 端口 %1 地址 %2';
const SENTRY2_SET_DEFAULT_MESSAGE0 = ' Sentry2 恢复默认参数';
const SENTRY2_VISION_SET_STATUS_MESSAGE0 = 'Sentry2 %1 算法 %2';
const SENTRY2_SET_PARAMNUM_MESSAGE0 = '设置 Sentry2 算法 %1 参数个数 %2';
const SENTRY2_COLORPARAM_MESSAGE0 = '设置 Sentry2 算法 %1 区域中心 横坐标 %2 纵坐标 %3 宽度 %4 高度 %5 索引 %6';
const SENTRY2_BOLDPARAM_MESSAGE0 = '设置 Sentry2 算法 %1 最小宽度 %2 高度 %3 检测标签 %4 索引 %5';
const SENTRY2_VISIONPARAM_MESSAGE0 = '设置 Sentry2 算法 %1 参数1 %2 参数2 %3 参数3 %4 参数4 %5 参数5 %6 索引 %7';
const SENTRY2_CAMERA_SET_AWB_MESSAGE0 = '设置 Sentry2 摄像头白平衡 %1';
const SENTRY2_DETECTED_MESSAGE0 = 'Sentry2 算法 %1 检测结果数量';
const SENTRY2_GET_VALUE_MESSAGE0 = 'Sentry2 算法 %1  %2 索引 %3';
const SENTRY2_COLORRCGVALUE_MESSAGE0 = 'Sentry2 颜色识别 %1 索引 %2';
const SENTRY2_QRRCGVALUE_MESSAGE0 = ' Sentry2 二维码识别 %1';
const SENTRY2_GET_QRCODEVALUE_MESSAGE0 = 'Sentry2 二维码识别结果字符串';
const SENTRY2_LINEVALUE_MESSAGE0 = 'Sentry2 线段检测结果 %1 索引 %2';
const SENTRY2_DETECTEDCOLOR_MESSAGE0 = 'Sentry2 颜色识别算法检测到 %1 索引 %2';
const SENTRY2_DETECTEDBLOB_MESSAGE0 = 'Sentry2 色块检测算法检测到 %1 索引 %2';
const SENTRY2_DETECTEDCARD_MESSAGE0 = 'Sentry2 卡片识别算法检测到 %1 索引 %2';
const SENTRY2_DETECTED20CLASS_MESSAGE0 = 'Sentry2 20分类识别算法检测到 %1 索引 %2';


const Sentry_SetupMode_Color = "#EF5411";
const Sentry_RunMode_Color = "#EAA20A";

const  sentry = [
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
          options: [
            ["i2c0", "i2c0"]
          ],
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

// 启用算法
Blockly.Blocks["Sentry2VisionSetStatus"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionStatus",
          options: [
            [SENTRY_ENABLE, "Begin"],
            [SENTRY_DISABLE, "End"],
          ],
          type: "field_dropdown",
        },
        {
          name: "VisionType",
          options: [
            [SENTRY_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
            [SENTRY_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
            [SENTRY_VISION_VISIONAPRILTAG, "sentry2_vision_e.kVisionAprilTag"],
            [SENTRY_VISION_VISIONLINE, "sentry2_vision_e.kVisionLine"],
            [SENTRY_VISION_VISIONLEARNING, "sentry2_vision_e.kVisionLearning"],
            [SENTRY_VISION_VISIONCARD, "sentry2_vision_e.kVisionCard"],
            [SENTRY_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
            [SENTRY_VISION_VISION20CLASSES, "sentry2_vision_e.kVision20Classes"],
            [SENTRY_VISION_VISIONQRCODE, "sentry2_vision_e.kVisionQrCode"],
            [SENTRY_VISION_VISIONCUSTOM, "sentry2_vision_e.kVisionCustom"],
            [SENTRY_VISION_VISIONMOTIONDETECT, "sentry2_vision_e.kVisionMotionDetect"],
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
            [SENTRY_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
            [SENTRY_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
            [SENTRY_VISION_VISIONAPRILTAG, "sentry2_vision_e.kVisionAprilTag"],
            [SENTRY_VISION_VISIONLINE, "sentry2_vision_e.kVisionLine"],
            [SENTRY_VISION_VISIONLEARNING, "sentry2_vision_e.kVisionLearning"],
            [SENTRY_VISION_VISIONCARD, "sentry2_vision_e.kVisionCard"],
            [SENTRY_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
            [SENTRY_VISION_VISION20CLASSES, "sentry2_vision_e.kVision20Classes"],
            [SENTRY_VISION_VISIONQRCODE, "sentry2_vision_e.kVisionQrCode"],
            [SENTRY_VISION_VISIONCUSTOM, "sentry2_vision_e.kVisionCustom"],
            [SENTRY_VISION_VISIONMOTIONDETECT, "sentry2_vision_e.kVisionMotionDetect"],
            
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
            [SENTRY_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
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
            [SENTRY_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
            [SENTRY_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
            [SENTRY_VISION_VISIONAPRILTAG, "sentry2_vision_e.kVisionAprilTag"],
            [SENTRY_VISION_VISIONLINE, "sentry2_vision_e.kVisionLine"],
            [SENTRY_VISION_VISIONLEARNING, "sentry2_vision_e.kVisionLearning"],
            [SENTRY_VISION_VISIONCARD, "sentry2_vision_e.kVisionCard"],
            [SENTRY_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
            [SENTRY_VISION_VISION20CLASSES, "sentry2_vision_e.kVision20Classes"],
            [SENTRY_VISION_VISIONQRCODE, "sentry2_vision_e.kVisionQrCode"],
            [SENTRY_VISION_VISIONCUSTOM, "sentry2_vision_e.kVisionCustom"],
            [SENTRY_VISION_VISIONMOTIONDETECT, "sentry2_vision_e.kVisionMotionDetect"],
            
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
          options: [
            [SENTRY_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
          ],
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
            [SENTRY_COLOR_BLACK, "sentry_color_label_e.kColorBlack"],
            [SENTRY_COLOR_WHITE, "sentry_color_label_e.kColorWhite"],
            [SENTRY_COLOR_RED, "sentry_color_label_e.kColorRed"],
            [SENTRY_COLOR_GREEN, "sentry_color_label_e.kColorGreen"],
            [SENTRY_COLOR_BLUE, "sentry_color_label_e.kColorBlue"],
            [SENTRY_COLOR_YELLOW, "sentry_color_label_e.kColorYellow"],
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
            [SENTRY_AWB_AUTO, "sentry_camera_white_balance_e.kAutoWhiteBalance"],
            [SENTRY_AWB_LOCK, "sentry_camera_white_balance_e.kLockWhiteBalance"],
            [SENTRY_AWB_WHITE_LIGHT, "sentry_camera_white_balance_e.kWhiteLight"],
            [SENTRY_AWB_YELLOW_LIGHT, "sentry_camera_white_balance_e.kYellowLight"],
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
            [SENTRY_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
            [SENTRY_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
            [SENTRY_VISION_VISIONAPRILTAG, "sentry2_vision_e.kVisionAprilTag"],
            [SENTRY_VISION_VISIONLINE, "sentry2_vision_e.kVisionLine"],
            [SENTRY_VISION_VISIONLEARNING, "sentry2_vision_e.kVisionLearning"],
            [SENTRY_VISION_VISIONCARD, "sentry2_vision_e.kVisionCard"],
            [SENTRY_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
            [SENTRY_VISION_VISION20CLASSES, "sentry2_vision_e.kVision20Classes"],
            [SENTRY_VISION_VISIONQRCODE, "sentry2_vision_e.kVisionQrCode"],
            [SENTRY_VISION_VISIONCUSTOM, "sentry2_vision_e.kVisionCustom"],
            [SENTRY_VISION_VISIONMOTIONDETECT, "sentry2_vision_e.kVisionMotionDetect"],
            
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
            [SENTRY_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
            [SENTRY_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
            [SENTRY_VISION_VISIONAPRILTAG, "sentry2_vision_e.kVisionAprilTag"],
            [SENTRY_VISION_VISIONLINE, "sentry2_vision_e.kVisionLine"],
            [SENTRY_VISION_VISIONLEARNING, "sentry2_vision_e.kVisionLearning"],
            [SENTRY_VISION_VISIONCARD, "sentry2_vision_e.kVisionCard"],
            [SENTRY_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
            [SENTRY_VISION_VISION20CLASSES, "sentry2_vision_e.kVision20Classes"],
            [SENTRY_VISION_VISIONQRCODE, "sentry2_vision_e.kVisionQrCode"],
            [SENTRY_VISION_VISIONCUSTOM, "sentry2_vision_e.kVisionCustom"],
            [SENTRY_VISION_VISIONMOTIONDETECT, "sentry2_vision_e.kVisionMotionDetect"],
            
          ],
          type: "field_dropdown",
        },
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
            [SENTRY_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
            [SENTRY_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
            [SENTRY_STATE_VALUE_HEIGHT, "sentry_obj_info_e.kHeightValue"],
            [SENTRY_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
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
            [SENTRY_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
            [SENTRY_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
            [SENTRY_VISION_VISIONAPRILTAG, "sentry2_vision_e.kVisionAprilTag"],
            [SENTRY_VISION_VISIONLINE, "sentry2_vision_e.kVisionLine"],
            [SENTRY_VISION_VISIONLEARNING, "sentry2_vision_e.kVisionLearning"],
            [SENTRY_VISION_VISIONCARD, "sentry2_vision_e.kVisionCard"],
            [SENTRY_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
            [SENTRY_VISION_VISION20CLASSES, "sentry2_vision_e.kVision20Classes"],
            [SENTRY_VISION_VISIONQRCODE, "sentry2_vision_e.kVisionQrCode"],
            [SENTRY_VISION_VISIONCUSTOM, "sentry2_vision_e.kVisionCustom"],
            [SENTRY_VISION_VISIONMOTIONDETECT, "sentry2_vision_e.kVisionMotionDetect"], 
          ],
          type: "field_dropdown",
        },
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [SENTRY_STATE_VALUE + '1', "sentry_obj_info_e.kXValue"],
            [SENTRY_STATE_VALUE + '2', "sentry_obj_info_e.kYValue"],
            [SENTRY_STATE_VALUE + '3', "sentry_obj_info_e.kWidthValue"],
            [SENTRY_STATE_VALUE + '4', "sentry_obj_info_e.kHeightValue"],
            [SENTRY_STATE_VALUE + '5', "sentry_obj_info_e.kLabel"],
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
            [SENTRY_STATE_VALUE_R, "sentry_obj_info_e.kRValue"],
            [SENTRY_STATE_VALUE_G, "sentry_obj_info_e.kGValue"],
            [SENTRY_STATE_VALUE_B, "sentry_obj_info_e.kBValue"],
            [SENTRY_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
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
            [SENTRY_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
            [SENTRY_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
            [SENTRY_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
            [SENTRY_STATE_VALUE_HEIGHT, "sentry_obj_info_e.kHeightValue"],
          ],
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
            [SENTRY_STATE_LINE_EX, "sentry_obj_info_e.kXValue"],
            [SENTRY_STATE_LINE_EY, "sentry_obj_info_e.kYValue"],
            [SENTRY_STATE_LINE_SX, "sentry_obj_info_e.kWidthValue"],
            [SENTRY_STATE_LINE_SY, "sentry_obj_info_e.kHeightValue"],
            [SENTRY_STATE_LINE_A, "sentry_obj_info_e.kLabel"],
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
            [SENTRY_COLOR_BLACK, "sentry_color_label_e.kColorBlack"],
            [SENTRY_COLOR_WHITE, "sentry_color_label_e.kColorWhite"],
            [SENTRY_COLOR_RED, "sentry_color_label_e.kColorRed"],
            [SENTRY_COLOR_GREEN, "sentry_color_label_e.kColorGreen"],
            [SENTRY_COLOR_BLUE, "sentry_color_label_e.kColorBlue"],
            [SENTRY_COLOR_YELLOW, "sentry_color_label_e.kColorYellow"],
            [SENTRY_COLOR_UNKNOWN, "sentry_color_label_e.kColorUnkown"],
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
            [SENTRY_COLOR_BLACK, "sentry_color_label_e.kColorBlack"],
            [SENTRY_COLOR_WHITE, "sentry_color_label_e.kColorWhite"],
            [SENTRY_COLOR_RED, "sentry_color_label_e.kColorRed"],
            [SENTRY_COLOR_GREEN, "sentry_color_label_e.kColorGreen"],
            [SENTRY_COLOR_BLUE, "sentry_color_label_e.kColorBlue"],
            [SENTRY_COLOR_YELLOW, "sentry_color_label_e.kColorYellow"],
            [SENTRY_COLOR_UNKNOWN, "sentry_color_label_e.kColorUnkown"],
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
            [SENTRY_CARD_FORWARD, "sentry2_card_label_e.kCardForward"],
            [SENTRY_CARD_LEFT, "sentry2_card_label_e.kCardLeft"],
            [SENTRY_CARD_RIGHT, "sentry2_card_label_e.kCardRight"],
            [SENTRY_CARD_TURN_AROUND, "sentry2_card_label_e.kCardTurnAround"],
            [SENTRY_CARD_PARK, "sentry2_card_label_e.kCardPark"],
            [SENTRY_CARD_GREEN_LIGHT, "sentry2_card_label_e.kCardGreenLight"],
            [SENTRY_CARD_RED_LIGHT, "sentry2_card_label_e.kCardRedLight"],
            [SENTRY_CARD_SPEED_40, "sentry2_card_label_e.kCardSpeed40"],
            [SENTRY_CARD_SPEED_60, "sentry2_card_label_e.kCardSpeed60"],
            [SENTRY_CARD_SPEED_80, "sentry2_card_label_e.kCardSpeed80"],
            [SENTRY_CARD_CHECK, "sentry2_card_label_e.kCardCheck"],
            [SENTRY_CARD_CROSS, "sentry2_card_label_e.kCardCross"],
            [SENTRY_CARD_CIRCLE, "sentry2_card_label_e.kCardCircle"],
            [SENTRY_CARD_SQUARE, "sentry2_card_label_e.kCardSquare"],
            [SENTRY_CARD_TRIANGLE, "sentry2_card_label_e.kCardTriangle"],
            [SENTRY_CARD_PLUS, "sentry2_card_label_e.kCardPlus"],
            [SENTRY_CARD_MINUS, "sentry2_card_label_e.kCardMinus"],
            [SENTRY_CARD_DIVIDE, "sentry2_card_label_e.kCardDivide"],
            [SENTRY_CARD_EQUAL, "sentry2_card_label_e.kCardEqual"],
            [SENTRY_CARD_1, "sentry2_card_label_e.kCardOne"],
            [SENTRY_CARD_2, "sentry2_card_label_e.kCardTwo"],
            [SENTRY_CARD_3, "sentry2_card_label_e.kCardThree"],
            [SENTRY_CARD_4, "sentry2_card_label_e.kCardFour"],
            [SENTRY_CARD_5, "sentry2_card_label_e.kCardFive"],
            [SENTRY_CARD_6, "sentry2_card_label_e.kCardSix"],
            [SENTRY_CARD_7, "sentry2_card_label_e.kCardSeven"],
            [SENTRY_CARD_8, "sentry2_card_label_e.kCardEight"],
            [SENTRY_CARD_9, "sentry2_card_label_e.kCardNine"],
            [SENTRY_CARD_0, "sentry2_card_label_e.kCardZero"],
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
            [SENTRY_CLASS20_AIRPLANE, "sentry_class20_label_e.kAirplane"],
            [SENTRY_CLASS20_BICYCLE, "sentry_class20_label_e.kBicycle"],
            [SENTRY_CLASS20_BIRD, "sentry_class20_label_e.kBird"],
            [SENTRY_CLASS20_BOAT, "sentry_class20_label_e.kBoat"],
            [SENTRY_CLASS20_BOTTLE, "sentry_class20_label_e.kBus"],
            [SENTRY_CLASS20_BUS, "sentry_class20_label_e.kCar"],
            [SENTRY_CLASS20_CAR, "sentry_class20_label_e.kCat"],
            [SENTRY_CLASS20_CAT, "sentry_class20_label_e.kChair"],
            [SENTRY_CLASS20_CHAIR, "sentry_class20_label_e.kCow"],
            [SENTRY_CLASS20_COW, "sentry_class20_label_e.kTable"],
            [SENTRY_CLASS20_TABLE, "sentry_class20_label_e.kDog"],
            [SENTRY_CLASS20_DOG, "sentry_class20_label_e.kHorse"],
            [SENTRY_CLASS20_HORSE, "sentry_class20_label_e.kMotorBike"],
            [SENTRY_CLASS20_MOTORBIKE, "sentry_class20_label_e.kPerson"],
            [SENTRY_CLASS20_PERSON, "sentry_class20_label_e.kPlant"],
            [SENTRY_CLASS20_PLANT, "sentry_class20_label_e.kSheep"],
            [SENTRY_CLASS20_SHEEP, "sentry_class20_label_e.kSheep"],
            [SENTRY_CLASS20_SOFA, "sentry_class20_label_e.kSofa"],
            [SENTRY_CLASS20_TRAIN, "sentry_class20_label_e.kTrain"],
            [SENTRY_CLASS20_MONITOR, "sentry_class20_label_e.kMonitor"],
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
pythonGenerator.forBlock['Sentry2Begin'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var InitType = block.getFieldValue('InitType');
  var code = 'sentry' + '.begin(' + InitType + ')\n';

  pythonGenerator.definitions_['import_iic'] = 'from machine import I2C';
  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';
  pythonGenerator.definitions_['init_IIC'] = 'i2c0 = I2C(0,freq=400000)';
  pythonGenerator.definitions_['init_Sentry2' + sentry] = 'sentry' + ' = Sentry(0x4,0x6' + sentry + ')';

  return code;
};

// 恢复默认设置
pythonGenerator.forBlock['Sentry2SetDefault'] = function (block) {

  var code = 'sentry' + '.SensorSetDefault()\n';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 启用算法
pythonGenerator.forBlock['Sentry2VisionSetStatus'] = function (block) {

  var VisionStatus = block.getFieldValue('VisionStatus');
  var VisionType = block.getFieldValue('VisionType');
  var code = 'sentry' + '.Vision' + VisionStatus + '(' + VisionType + ')\n';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 设置算法参数
pythonGenerator.forBlock['Sentry2SetParamNum'] = function (block) {

  var VisionType = block.getFieldValue('VisionType');
  var max_num = pythonGenerator.valueToCode(block, "max_num", pythonGenerator.ORDER_NONE);
  var code = 'sentry' + '.SetParamNum(' + VisionType + ', ' + max_num + ')\n';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

//算法参数
pythonGenerator.forBlock['Sentry2SetVisionParam'] = function (block) {
  var x = pythonGenerator.valueToCode(block, "x", pythonGenerator.ORDER_NONE) || '1';
  var y = pythonGenerator.valueToCode(block, "y", pythonGenerator.ORDER_NONE) || '1';
  var w = pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) || '1';
  var h = pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) || '1';
  var lable = pythonGenerator.valueToCode(block, "lable", pythonGenerator.ORDER_NONE) || '1';
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_ATOMIC);
  var code = 'sentry' + '.SetParam(' + 'sentry2_vision_e.kVisionColor, [' + x + ', ' + y + ', ' + w + ', ' + h + ', '+ lable +']' + ', ' + objid + ')\n';

  return code;
};

// Color 算法参数
pythonGenerator.forBlock['Sentry2SetColorParam'] = function (block) {
  var x = pythonGenerator.valueToCode(block, "x", pythonGenerator.ORDER_NONE) || '1';
  var y = pythonGenerator.valueToCode(block, "y", pythonGenerator.ORDER_NONE) || '1';
  var w = pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) || '1';
  var h = pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) || '1';
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_ATOMIC);
  var code = 'sentry' + '.SetParam(' + 'sentry2_vision_e.kVisionColor, [' + x + ', ' + y + ', ' + w + ', ' + h + ', 0]' + ', ' + objid + ')\n';

  return code;
};


// Blod 算法参数
pythonGenerator.forBlock['Sentry2SetBlodParam'] = function (block) {
  var w = pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) || '1';
  var h = pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) || '1';
  var lable = block.getFieldValue('lable');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_ATOMIC);
  var code = 'sentry' + '.SetParam(' + 'sentry2_vision_e.kVisionBlob, ' + '[0, 0, ' + w + ', ' + h + ', ' + lable + ']' + ', ' + objid + ')\n';

  return code;
};


pythonGenerator.forBlock['Sentry2CameraSetAwb'] = function (block) {


  var awb = block.getFieldValue('awb');

  var code = 'sentry' + '.CameraSetAwb(' + awb + ')\n';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

pythonGenerator.forBlock['Sentry2Detected'] = function (block) {

  var VisionType = block.getFieldValue('VisionType');
  var code = 'sentry' + '.GetValue(' + VisionType + ', sentry_obj_info_e.kStatus)';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry2GetValue'] = pythonGenerator.forBlock['Sentry2GetValueNomal'] = function (block) {

  var VisionType = block.getFieldValue('VisionType');
  var objinfo = block.getFieldValue('objinfo');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) || '0';
  var code = 'sentry' + '.GetValue(' + VisionType + ', ' + objinfo + ', ' + objid + ')';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry2ColorRcgValue'] = function (block) {

  var objinfo = block.getFieldValue('objinfo');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) || '0';
  var code = 'sentry' + '.GetValue(sentry2_vision_e.kVisionColor, ' + objinfo + ', ' + objid + ')';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry2QrRcgValue'] = function (block) {

  var objinfo = block.getFieldValue('objinfo');
  var code = 'sentry' + '.GetValue(sentry2_vision_e.kVisionQrCode, ' + objinfo + ')';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};


pythonGenerator.forBlock['Sentry2GetQrCodeValue'] = function (block) {

  var code = 'sentry' + '.GetQrCodeValue()';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry2LineValue'] = function (block) {

  var objinfo = block.getFieldValue('objinfo');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) || '0';
  var code = 'sentry' + '.GetValue(sentry2_vision_e.kVisionLine, ' + objinfo  + ', ' + objid + ')'

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry2DetectedColor'] = function (block) {

  var ColorLabel = block.getFieldValue('ColorLabel');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) || '0';

  var code = '(sentry' + '.GetValue(sentry2_vision_e.kVisionColor, sentry_obj_info_e.kLabel, ' + objid + ') == ' + ColorLabel + ')';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry2DetectedBlob'] = function (block) {

  var ColorLabel = block.getFieldValue('ColorLabel');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) || '0';

  var code = '(sentry' + '.GetValue(sentry2_vision_e.kVisionBlob, sentry_obj_info_e.kLabel, ' + objid + ') == ' + ColorLabel + ')';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry2DetectedCard'] = function (block) {

  var card = block.getFieldValue('card');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) || '0';

  var code = '(sentry' + '.GetValue(sentry2_vision_e.kVisionCard, sentry_obj_info_e.kLabel, ' + objid + ') == ' + card + ')';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};


pythonGenerator.forBlock['Sentry2Detected20Class'] = function (block) {

  var card = block.getFieldValue('card');
  var objid = pythonGenerator.valueToCode(block, "objid", pythonGenerator.ORDER_NONE) || '0';

  var code = '(sentry' + '.GetValue(sentry2_vision_e.kVision20Classes, sentry_obj_info_e.kLabel, ' + objid + ') == ' + card + ')';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};


pythonGenerator.forBlock['Sentry2GetQrCodeValue'] = function (block) {

  var code = 'sentry' + '.GetQrCodeValue()';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};


pythonGenerator.forBlock['Sentry2Rows'] = function (block) {

  var code = 'sentry' + '.Rows()';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock['Sentry2Cols'] = function (block) {

  var code = 'sentry' + '.Cols()';

  pythonGenerator.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, pythonGenerator.ORDER_ATOMIC];
};