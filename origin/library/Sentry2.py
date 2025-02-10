
from Sentry import SentryBase
from Sentry import LOG_ERROR,LOG_DEBUG
from Sentry import (sentry_obj_info_e,
                        sentry_mode_e,
                        sentry_led_color_e,
                        color_label_e,
                        apriltag_vision_mode_e,
                        class20_label_e)

# Sentry2 vision
class sentry2_vision_e:
    kVisionColor = 1
    kVisionBlob = 2
    kVisionAprilTag = 3
    kVisionLine = 4
    kVisionLearning = 5
    kVisionCard = 6
    kVisionFace = 7
    kVision20Classes = 8
    kVisionQrCode = 9
    kVisionObjTrack = 10
    kVisionMotionDetect = 11
    kVisionCustom= 12
    kVisionMaxType = 13

# Sentry card label
class sentry2_card_label_e:
    kCardForward = 1
    kCardLeft = 2
    kCardRight = 3
    kCardTurnAround = 4
    kCardPark = 5
    kCardGreenLight = 6
    kCardRedLight = 7
    kCardSpeed40 = 8
    kCardSpeed60 = 9
    kCardSpeed80 = 10
    kCardCheck = 11
    kCardCross = 12
    kCardCircle = 13
    kCardSquare = 14
    kCardTriangle = 15
    kCardPlus = 16
    kCardMinus = 17
    kCardDivide = 18
    kCardEqual = 19
    kCardZero = 20
    kCardOne = 21
    kCardTwo = 22
    kCardThree = 23
    kCardFour = 24
    kCardFive = 25
    kCardSix = 26
    kCardSeven = 27
    kCardEight = 28
    kCardNine = 29

class Sentry2(SentryBase):
    SENTRY2_DEVICE_ID = 0x04
    def __init__(self, address=0x60, log_level=LOG_ERROR):
        super().__init__(self.SENTRY2_DEVICE_ID,address,log_level, sentry2_vision_e.kVisionQrCode, sentry2_vision_e.kVisionMaxType)