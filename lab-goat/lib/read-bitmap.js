'use strict';

const Bitmap = require ('../model/bitmap');
const fs = require('fs');

module.exports = () => {
  fs.readFile(`${__dirname}/../../assets/palette-bitmap.bmp`, (err, data) => {
    if (err) console.err(err);
    let bmp = new Bitmap(data);
    console.log(bmp.pixelArray);
  });
};
