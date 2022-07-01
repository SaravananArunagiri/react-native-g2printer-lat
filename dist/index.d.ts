export declare const G2Printer: {
    printTestPage: (address: string) => void;
    printLabel: (options: any) => void;
    calibration: (address: string) => void;
    setCutOn: (address: string) => void;
    setCutOff: (address: string) => void;
    printReceipt: (options: string) => void;
    BITMAP_MODE: {
        OVERWRITE: number;
        OR: number;
        XOR: number;
    };
    DENSITY: {
        DNESITY0: number;
        DNESITY1: number;
        DNESITY2: number;
        DNESITY3: number;
        DNESITY4: number;
        DNESITY5: number;
        DNESITY6: number;
        DNESITY7: number;
        DNESITY8: number;
        DNESITY9: number;
        DNESITY10: number;
        DNESITY11: number;
        DNESITY12: number;
        DNESITY13: number;
        DNESITY14: number;
        DNESITY15: number;
    };
    BARCODETYPE: {
        CODE128: string;
        CODE128M: string;
        EAN128: string;
        ITF25: string;
        ITF25C: string;
        CODE39: string;
        CODE39C: string;
        CODE39S: string;
        CODE93: string;
        EAN13: string;
        EAN13_2: string;
        EAN13_5: string;
        EAN8: string;
        EAN8_2: string;
        EAN8_5: string;
        CODABAR: string;
        POST: string;
        UPCA: string;
        UPCA_2: string;
        UPCA_5: string;
        UPCE: string;
        UPCE_2: string;
        UPCE_5: string;
        CPOST: string;
        MSI: string;
        MSIC: string;
        PLESSEY: string;
        ITF14: string;
        EAN14: string;
    };
    FONTTYPE: {
        FONT_1: string;
        FONT_2: string;
        FONT_3: string;
        FONT_4: string;
        FONT_5: string;
        FONT_6: string;
        FONT_7: string;
        FONT_8: string;
        SIMPLIFIED_CHINESE: string;
        TRADITIONAL_CHINESE: string;
        KOREAN: string;
    };
    EEC: {
        LEVEL_L: string;
        LEVEL_M: string;
        LEVEL_Q: string;
        LEVEL_H: string;
    };
    ROTATION: {
        ROTATION_0: number;
        ROTATION_90: number;
        ROTATION_180: number;
        ROTATION_270: number;
    };
    MIRROR: {
        NORMAL: number;
        MIRROR: number;
    };
    DIRECTION: {
        FORWARD: number;
        BACKWARD: number;
    };
    FONTMUL: {
        MUL_1: number;
        MUL_2: number;
        MUL_3: number;
        MUL_4: number;
        MUL_5: number;
        MUL_6: number;
        MUL_7: number;
        MUL_8: number;
        MUL_9: number;
        MUL_10: number;
    };
    PRINT_SPEED: {
        SPEED1DIV5: number;
        SPEED2: number;
        SPEED3: number;
        SPEED4: number;
    };
};
