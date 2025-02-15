// 初始化 Sentry
export const Sentry2Begin = function (block) {
    var mode = block.getFieldValue("mode_obj");
    var addr = block.getFieldValue("addr_obj");

    if (mode == "uart2") {
        pythonGenerator.definitions_["import_UART"] =
            "from machine import UART";
        pythonGenerator.definitions_["init_UART"] =
            `${mode} = UART(2, baudrate=115200)`;
    } else {
        pythonGenerator.definitions_["import_IIC"] = "from machine import I2C";
        pythonGenerator.definitions_["init_IIC"] =
            `${mode} = I2C(1,freq=400000)\nif ${addr} not in ${mode}.scan():\n    ${mode} = I2C(0,freq=400000)`;
    }

    pythonGenerator.definitions_["import_Sentry2"] = "from Sentry2 import *";

    pythonGenerator.definitions_["init_Sentry2"] =
        `sentry2  = Sentry2(${addr})`;
    var code = `sentry2.begin(${mode})\n`;

    return code;
};

export const Sentry2CameraSetAwb = function (block) {
    var awb = block.getFieldValue("awb_obj");

    var code = "sentry2.CameraSetAwb(" + awb + ")\n";
    return code;
};

// 启用
export const Sentry2VisionSetStatus = function (block) {
    var VisionStatus = block.getFieldValue("VisionStatus");
    var vision_obj = block.getFieldValue("vision_obj");
    var code = "sentry2.Vision" + VisionStatus + "(" + vision_obj + ")\n";

    return code;
};

// 设置  参数
export const Sentry2VisionSetParamNum = function (block) {
    var vision_obj = block.getFieldValue("vision_obj");
    var max_num = pythonGenerator.valueToCode(
        block,
        "max_num",
        pythonGenerator.ORDER_NONE,
    );
    var code = "sentry2.SetParamNum(" + vision_obj + ", " + max_num + ")\n";

    return code;
};

// Color   参数
export const Sentry2VisionColorSetParam = function (block) {
    var x =
        pythonGenerator.valueToCode(block, "x", pythonGenerator.ORDER_NONE) ||
        "1";
    var y =
        pythonGenerator.valueToCode(block, "y", pythonGenerator.ORDER_NONE) ||
        "1";
    var w =
        pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) ||
        "1";
    var h =
        pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) ||
        "1";
    var index = pythonGenerator.valueToCode(
        block,
        "index",
        pythonGenerator.ORDER_ATOMIC,
    );
    var code =
        "sentry2" +
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
        index +
        ")\n";

    return code;
};

// Blod   参数
export const Sentry2VisionBlobSetParam = function (block) {
    var w =
        pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) ||
        "1";
    var h =
        pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) ||
        "1";
    var lable = block.getFieldValue("lable");
    var index = pythonGenerator.valueToCode(
        block,
        "index",
        pythonGenerator.ORDER_ATOMIC,
    );
    var code =
        "sentry2" +
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
        index +
        ")\n";

    return code;
};

export const Sentry2SetVisionParam = function (block) {
    var vision_obj = block.getFieldValue("vision_obj");

    var x =
        pythonGenerator.valueToCode(block, "x", pythonGenerator.ORDER_NONE) ||
        "1";
    var y =
        pythonGenerator.valueToCode(block, "y", pythonGenerator.ORDER_NONE) ||
        "1";
    var w =
        pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) ||
        "1";
    var h =
        pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) ||
        "1";
    var lable =
        pythonGenerator.valueToCode(
            block,
            "lable",
            pythonGenerator.ORDER_NONE,
        ) || "1";
    var index = pythonGenerator.valueToCode(
        block,
        "index",
        pythonGenerator.ORDER_ATOMIC,
    );
    var code =
        "sentry2.SetParam(" +
        vision_obj +
        ", [" +
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
        index +
        ")\n";

    return code;
};

export const Sentry2VisionDetectedCount = function (block) {
    var vision_obj = block.getFieldValue("vision_obj");
    var code =
        "sentry2.GetValue(" + vision_obj + ", sentry_obj_info_e.kStatus)";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sentry2GetValue = function (block) {
    var vision_obj = block.getFieldValue("vision_obj");
    var vision_res_obj = block.getFieldValue("vision_res_obj");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";
    var code =
        "sentry2" +
        ".GetValue(" +
        vision_obj +
        ", " +
        vision_res_obj +
        ", " +
        index +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sentry2VisionObjColor = function (block) {
    var vision_res_obj = block.getFieldValue("vision_res_obj");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";
    var code =
        "sentry2" +
        ".GetValue(sentry2_vision_e.kVisionColor, " +
        vision_res_obj +
        ", " +
        index +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sentry2VisionObjLine = function (block) {
    var vision_res_obj = block.getFieldValue("vision_res_obj");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";
    var code =
        "sentry2" +
        ".GetValue(sentry2_vision_e.kVisionLine, " +
        vision_res_obj +
        ", " +
        index +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sentry2VisionObjQr = function (block) {
    var vision_res_obj = block.getFieldValue("vision_res_obj");
    var code =
        "sentry2" +
        ".GetValue(sentry2_vision_e.kVisionQrCode, " +
        vision_res_obj +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sentry2GetQrValue = function (block) {
    var code = "sentry2.GetQrCodeValue()";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sentry2GetValueNomal = function (block) {
    var vision_obj = block.getFieldValue("vision_obj");
    var vision_res_obj = block.getFieldValue("vision_res_obj");
    var code = "sentry2.GetValue(" + vision_obj + ", " + vision_res_obj + ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sentry2DetectedColor = function (block) {
    var ColorLabel = block.getFieldValue("vision_card_obj");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";

    var code =
        "(sentry2.GetValue(sentry2_vision_e.kVisionColor, sentry_obj_info_e.kLabel, " +
        index +
        ") == " +
        ColorLabel +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sentry2DetectedBlob = function (block) {
    var ColorLabel = block.getFieldValue("vision_card_obj");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";

    var code =
        "(sentry2.GetValue(sentry2_vision_e.kVisionBlob, sentry_obj_info_e.kLabel, " +
        index +
        ") == " +
        ColorLabel +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sentry2DetectedCard = function (block) {
    var card = block.getFieldValue("vision_card_obj");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";

    var code =
        "(sentry2.GetValue(sentry2_vision_e.kVisionCard, sentry_obj_info_e.kLabel, " +
        index +
        ") == " +
        card +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sentry2Detected20Class = function (block) {
    var card = block.getFieldValue("vision_card_obj");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "1";

    var code =
        "(sentry2.GetValue(sentry2_vision_e.kVision20Classes, sentry_obj_info_e.kLabel, " +
        index +
        ") == " +
        card +
        ")";

    return [code, pythonGenerator.ORDER_ATOMIC];
};
