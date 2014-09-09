var five = require('johnny-five'),
    board = new five.Board();

var buffer = [];

var adafruitLogo = [
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80,
0x80, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x80, 0x80, 0xC0, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x80, 0xC0, 0xE0, 0xF0, 0xF8, 0xFC, 0xF8, 0xE0, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80, 0x80, 0x80,
0x80, 0x80, 0x00, 0x80, 0x80, 0x00, 0x00, 0x00, 0x00, 0x80, 0x80, 0x80, 0x80, 0x80, 0x00, 0xFF,
0xFF, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x80, 0x80, 0x80, 0x80, 0x00, 0x00, 0x80, 0x80, 0x00, 0x00,
0x80, 0xFF, 0xFF, 0x80, 0x80, 0x00, 0x80, 0x80, 0x00, 0x80, 0x80, 0x80, 0x80, 0x00, 0x80, 0x80,
0x00, 0x00, 0x00, 0x00, 0x00, 0x80, 0x80, 0x00, 0x00, 0x8C, 0x8E, 0x84, 0x00, 0x00, 0x80, 0xF8,
0xF8, 0xF8, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0xF0, 0xF0, 0xF0, 0xF0, 0xF0, 0xF0, 0xF0, 0xF0, 0xF0, 0xF0, 0xF0, 0xF0, 0xE0, 0xE0, 0xC0, 0x80,
0x00, 0xE0, 0xFC, 0xFE, 0xFF, 0xFF, 0xFF, 0x7F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFE, 0xFF, 0xC7, 0x01, 0x01,
0x01, 0x01, 0x83, 0xFF, 0xFF, 0x00, 0x00, 0x7C, 0xFE, 0xC7, 0x01, 0x01, 0x01, 0x01, 0x83, 0xFF,
0xFF, 0xFF, 0x00, 0x38, 0xFE, 0xC7, 0x83, 0x01, 0x01, 0x01, 0x83, 0xC7, 0xFF, 0xFF, 0x00, 0x00,
0x01, 0xFF, 0xFF, 0x01, 0x01, 0x00, 0xFF, 0xFF, 0x07, 0x01, 0x01, 0x01, 0x00, 0x00, 0x7F, 0xFF,
0x80, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0x7F, 0x00, 0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x01, 0xFF,
0xFF, 0xFF, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x03, 0x0F, 0x3F, 0x7F, 0x7F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xE7, 0xC7, 0xC7, 0x8F,
0x8F, 0x9F, 0xBF, 0xFF, 0xFF, 0xC3, 0xC0, 0xF0, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFC, 0xFC, 0xFC,
0xFC, 0xFC, 0xFC, 0xFC, 0xFC, 0xF8, 0xF8, 0xF0, 0xF0, 0xE0, 0xC0, 0x00, 0x01, 0x03, 0x03, 0x03,
0x03, 0x03, 0x01, 0x03, 0x03, 0x00, 0x00, 0x00, 0x00, 0x01, 0x03, 0x03, 0x03, 0x03, 0x01, 0x01,
0x03, 0x01, 0x00, 0x00, 0x00, 0x01, 0x03, 0x03, 0x03, 0x03, 0x01, 0x01, 0x03, 0x03, 0x00, 0x00,
0x00, 0x03, 0x03, 0x00, 0x00, 0x00, 0x03, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
0x03, 0x03, 0x03, 0x03, 0x03, 0x01, 0x00, 0x00, 0x00, 0x01, 0x03, 0x01, 0x00, 0x00, 0x00, 0x03,
0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
];

var OLED = {};
OLED.HEIGHT = 32;
OLED.WIDTH = 128;
OLED.ADDRESS = 0x3C;
OLED.DISPLAY_OFF = 0xAE;
OLED.DISPLAY_ON = 0xAF;
OLED.SET_DISPLAY_CLOCK_DIV = 0xD5;
OLED.SET_MULTIPLEX = 0xA8;
OLED.SET_DISPLAY_OFFSET = 0xD3;
OLED.SET_START_LINE = 0x0;
OLED.CHARGE_PUMP = 0x8D;
OLED.EXTERNAL_VCC = false;
OLED.MEMORY_MODE = 0x20;
OLED.SEG_REMAP = 0xA0;
OLED.COM_SCAN_DEC = 0xC8;
OLED.COM_SCAN_INC = 0xC0;
OLED.SET_COM_PINS = 0xDA;
OLED.SET_CONTRAST = 0x81;
OLED.SET_PRECHARGE = 0xd9;
OLED.SET_VCOM_DETECT = 0xDB;
OLED.DISPLAY_ALL_ON_RESUME = 0xA4;
OLED.NORMAL_DISPLAY = 0xA6;
OLED.COLUMN_ADDR = 0x21;
OLED.PAGE_ADDR = 0x22;
OLED.INVERT_DISPLAY = 0xA7;

function writeI2C(type, val) {
  var control;
  if (type === 'data') {
    control = 0x40;
  } else if (type === 'cmd') {
    control = 0x00;
  } else {
    return;
  }
  // send control and actual val
  board.io.sendI2CWriteRequest(OLED.ADDRESS, [control, val]);
}

function init() {
  // enable i2C in firmata
  board.io.sendI2CConfig(0);

  var initSeq = [
    OLED.DISPLAY_OFF,
    OLED.SET_DISPLAY_CLOCK_DIV, 0x80,
    OLED.SET_MULTIPLEX, 0x1F,
    OLED.SET_DISPLAY_OFFSET, 0x0, // sets offset pro to 0
    OLED.SET_START_LINE,
    OLED.CHARGE_PUMP, 0x14, // charge pump val
    OLED.MEMORY_MODE, 0x00, // 0x0 act like ks0108
    OLED.SEG_REMAP, // screen orientation
    OLED.COM_SCAN_INC, // screen orientation
    OLED.SET_COM_PINS, 0x02, // com pins val
    OLED.SET_CONTRAST, 0x8F, // contrast val
    OLED.SET_PRECHARGE, 0xF1, // precharge val
    OLED.SET_VCOM_DETECT, 0x40, // vcom detect
    OLED.DISPLAY_ALL_ON_RESUME,
    OLED.NORMAL_DISPLAY,
    OLED.DISPLAY_ON
  ];

  var i, initSeqLen = initSeq.length;

  for (i = 0; i < initSeqLen; i ++) {
    writeI2C('cmd', initSeq[i]);
  }
}

function display() {
  var displaySeq = [
    OLED.COLUMN_ADDR, 0, OLED.WIDTH - 1, // column start and end address 
    OLED.PAGE_ADDR, 0, 3 // page start and end address
  ];
  var displaySeqLen = displaySeq.length,
      bufferLen = buffer.length,
      i, v;

  for (i = 0; i < displaySeqLen; i += 1) {
    writeI2C('cmd', displaySeq[i]);
  }

  for (v = 0; v < bufferLen; v += 1) {
    writeI2C('data', buffer[v]);
  }
}

function dimDisplay(bool) {
  var contrast;

  if (bool) {
    contrast = 0; // Dimmed display
  } else {
    contrast = 0xCF;
  }

  writeI2C('cmd', OLED.SET_CONTRAST);
  writeI2C('cmd', contrast);
}

function clearDisplay() {
  buffer = new Buffer(buffer.length);
  buffer.fill(0x00);
}

function invertDisplay(bool) {
  if (bool) {
    writeI2C('cmd', OLED.INVERT_DISPLAY);
  } else {
    writeI2C('cmd', OLED.NORMAL_DISPLAY);
  }
}

function drawPixel(x, y, color) {}

board.on('ready', function() {
  console.log('I see you, board');
  
  // send setup sequence to OLED
  init();

  buffer = adafruitLogo;
  display();

  //dimDisplay(true);

  // invert display
  //invertDisplay(true);

  // clear display
  //clearDisplay();

});  