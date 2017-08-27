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

    // console.log('This is the pixelArray', x);

    for(let i = 0; i < x.length; i += 4) {
      if(x[i]);
      // console.log(x[i], x[i + 1], x[i + 2], x[i + 3]);
      let greyScale = [(x[i])/3, (x[i + 1])/3, (x[i + 2])/3, (x[i + 3])/3];
      console.log(greyScale);
      return greyScale;
    }
    callback();
  });

  fs.writeFile(`${__dirname}/../../assets/greyscale-bitmap.bmp`, originalObj, (err) => {
    if (err) console.error(err);

  });
};
originalObj.readWrite();
