'use-strict';
const Bitmap = require('./lib/bitmap');
const index = require('./lib/index');
const writerReader = require(`./lib/read-write`);

let bmp;
let bmp2;
let bmp3;

const ColorTransform = module.exports = function() {};

ColorTransform.prototype.invertColors = function(data) {
  bmp = new Bitmap(data);
  for (var i = 0; i < bmp.pixelArray.length; i += 4) {
    let invertArr = [bmp.pixelArray[i], bmp.pixelArray[i + 1], bmp.pixelArray[i + 2], bmp.pixelArray[i + 3]];
    //create a new buffer off math'ed data;
    // let asdf = greyscalebuffer
    console.log(invertArr);
    //we have to then write it
    //then we pass it back up to write
  }
  index.writerReader.writeNew(`${__dirname}/assets/palette-invert-bitmap.bmp`, copied, exports.writeNew);
};


ColorTransform.prototype.greyscale = function(data) {
  for (var i = 0; i < bmp.pixelArray.length; i += 4) {
    bmp2 = new Bitmap(data);
    let greyscaleArr = [bmp2.pixelArray[i], bmp2.pixelArray[i + 1], bmp2.pixelArray[i + 2], bmp2.pixelArray[i + 3]];
    //create a new buffer off math'ed data;
    // let newnambuffer = invertbuffer
    console.log(greyscaleArr);
  }
  index.writerReader.writeNew(`${__dirname}/assets/palette-invert-bitmap.bmp`, copied1, exports.writeNew);
};

ColorTransform.prototype.blackOut = function(data) {

  for (var i = 0; i < bmp.pixelArray.length; i += 4) {
    bmp3 = new Bitmap(data);
    let blackOutArr = [bmp3.pixelArray[i], bmp3.pixelArray[i + 1], bmp3.pixelArray[i + 2], bmp3.pixelArray[i + 3]];
    //create a new buffer off math'ed data;
    // let newnambuffer = blackOut
    console.log(blackOutArr);
  }
  index.writerReader.writeNew(`${__dirname}/assets/palette-invert-bitmap.bmp`, copied2, exports.writeNew);
};
