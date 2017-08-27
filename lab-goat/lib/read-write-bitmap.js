'use strict';

const Bitmap = require ('../model/bitmap');
const fs = require('fs');


let originalObj = module.exports = {};

originalObj.readWrite = (callback) => {

  fs.readFile(`${__dirname}/../../assets/palette-bitmap.bmp`, (err, data) => {
    if (err) console.error(err);
    let bmp = new Bitmap(data);

    // console.log('Here is the constructor bmp:', bmp);
    // console.log('Here is the bmp constructor property pixelArray:', bmp.pixelArray);

    let x = bmp.pixelArray;

    // console.log('This is the pixelArray', x)
    }
  callback(); 
  });

  fs.writeFile(`${__dirname}/../../assets/greyscale-bitmap.bmp`, originalObj, (err) => {
    if (err) console.error(err);

  });
};
originalObj.readWrite();
