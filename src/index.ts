import {NativeModules } from 'react-native';
const GPrinter2 = NativeModules.GPrinter2;

const DIRECTION = {
    FORWARD: 0,
    BACKWARD: 1
};
 
const DENSITY = {
    DNESITY0: 0,
    DNESITY1: 1,
    DNESITY2: 2,
    DNESITY3: 3,
    DNESITY4: 4,
    DNESITY5: 5,
    DNESITY6: 6,
    DNESITY7: 7,
    DNESITY8: 8,
    DNESITY9: 9,
    DNESITY10: 10,
    DNESITY11: 11,
    DNESITY12: 12,
    DNESITY13: 13,
    DNESITY14: 14,
    DNESITY15: 15
};
const BARCODETYPE = {
    CODE128: "128",
    CODE128M: "128M",
    EAN128: "EAN128",
    ITF25: "25",
    ITF25C: "25C",
    CODE39: "39",
    CODE39C: "39C",
    CODE39S: "39S",
    CODE93: "93",
    EAN13: "EAN13",
    EAN13_2: "EAN13+2",
    EAN13_5: "EAN13+5",
    EAN8: "EAN8",
    EAN8_2: "EAN8+2",
    EAN8_5: "EAN8+5",
    CODABAR: "CODA",
    POST: "POST",
    UPCA: "EAN13",
    UPCA_2: "EAN13+2",
    UPCA_5: "EAN13+5",
    UPCE: "EAN13",
    UPCE_2: "EAN13+2",
    UPCE_5: "EAN13+5",
    CPOST: "CPOST",
    MSI: "MSI",
    MSIC: "MSIC",
    PLESSEY: "PLESSEY",
    ITF14: "ITF14",
    EAN14: "EAN14"
};
const FONTTYPE = {
    FONT_1: "1",
    FONT_2: "2",
    FONT_3: "3",
    FONT_4: "4",
    FONT_5: "5",
    FONT_6: "6",
    FONT_7: "7",
    FONT_8: "8",
    SIMPLIFIED_CHINESE: "TSS24.BF2",
    TRADITIONAL_CHINESE: "TST24.BF2",
    KOREAN: "K"
};
const EEC = {
    LEVEL_L: "L",
    LEVEL_M: "M",
    LEVEL_Q: "Q",
    LEVEL_H: "H"

};
const ROTATION = {
    ROTATION_0: 0,
    ROTATION_90: 90,
    ROTATION_180: 180,
    ROTATION_270: 270
};
const FONTMUL = {
    MUL_1: 1,
    MUL_2: 2,
    MUL_3: 3,
    MUL_4: 4,
    MUL_5: 5,
    MUL_6: 6,
    MUL_7: 7,
    MUL_8: 8,
    MUL_9: 9,
    MUL_10: 10
};
const MIRROR = {
    NORMAL: 0,
    MIRROR: 1
};
const BITMAP_MODE = {
    OVERWRITE: 0,
    OR: 1,
    XOR: 2
};
const PRINT_SPEED = {
    SPEED1DIV5:1,
    SPEED2:2,
    SPEED3:3,
    SPEED4:4
};
export const G2Printer = {
    printTestPage : (address: string) : void =>{
        return GPrinter2.printTestPage(address); 
    },
    printLabel : (options : any) : void => {
        return GPrinter2.printLabel(options);
    },
    calibration : (address : string) :void =>{
        return GPrinter2.calibration(address);
    },
    setCutOn : (address : string) : void =>{
        return GPrinter2.setCutOn(address);
    },
    setCutOff : (address : string) : void =>{
        return GPrinter2.setCutOff(address);
    },
    printReceipt : (options : string) : void =>{
        return GPrinter2.printReceipt(options);
    },
    BITMAP_MODE:BITMAP_MODE,
    DENSITY:DENSITY,
    BARCODETYPE:BARCODETYPE,
    FONTTYPE:FONTTYPE,
    EEC:EEC,
    ROTATION:ROTATION,
    MIRROR:MIRROR,
    DIRECTION:DIRECTION,
    FONTMUL:FONTMUL,
    PRINT_SPEED:PRINT_SPEED
}