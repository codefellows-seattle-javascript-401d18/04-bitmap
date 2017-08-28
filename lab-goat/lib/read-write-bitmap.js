'use strict';

const Bitmap = require ('../model/bitmap');
const fs = require('fs');


let originalObj = module.exports = {};

originalObj.greyOut = (callback) => {

  fs.readFile(`${__dirname}/../../assets/palette-bitmap.bmp`, (err, data) => {
    if (err) console.error(err);
    let bmp = new Bitmap(data);

    // console.log('Here is the constructor bmp:', bmp);
    // console.log('Here is the bmp constructor property pixelArray:', bmp.pixelArray);

    let x = bmp.pixelArray;

    // console.log('This is the pixelArray', x);

    for(let i = 0; i < x.length; i += 4) {
      let greyImg = [(x[i]) + x[i+1] + x[i+2]/3];
      x[i] = x[i+1] = x[i+2] = greyImg;
      // let greyScale = greyImg;
      // console.log('this is outside of the writeFile function:', greyImg);

      fs.writeFile(`${__dirname}/../../assets/greyscale-bitmap.bmp`, bmp.allData, (err) => {
        if (err) console.error(err);
        console.log('Isaiah was here', greyImg);
        return greyImg;
      });
    }
  });
  callback;
};
originalObj.greyOut();

originalObj.invertColor = (callback) => {

  fs.readFile(`${__dirname}/../../assets/palette-bitmap.bmp`, (err, data) => {
    if (err) console.error(err);
    let bmp = new Bitmap(data);

    // console.log('Here is the constructor bmp:', bmp);
    // console.log('Here is the bmp constructor property pixelArray:', bmp.pixelArray);

    let x = bmp.pixelArray;

    // console.log('This is the pixelArray', x);

    for(let i = 0; i < x.length; i += 4) {
      x[i] = 255 - x[i];
      x[i+1] = 255 - x[i+1];
      x[i+2] = 255 - x[i+2];
      // let greyScale = greyImg;
      // console.log('this is outside of the writeFile function:', greyImg);

      fs.writeFile(`${__dirname}/../../assets/inverted-bitmap.bmp`, bmp.allData, (err) => {
        if (err) console.error(err);
      });
    }
  });
  callback;
};

originalObj.invertColor();


originalObj.whiteOut = (callback) => {

  fs.readFile(`${__dirname}/../../assets/palette-bitmap.bmp`, (err, data) => {
    if (err) console.error(err);
    let bmp = new Bitmap(data);

    // console.log('Here is the constructor bmp:', bmp);
    // console.log('Here is the bmp constructor property pixelArray:', bmp.pixelArray);

    let x = bmp.pixelArray;

    // console.log('This is the pixelArray', x);

    for(let i = 0; i < x.length; i += 4) {
      x[i] = 255;
      x[i+1] = 255;
      x[i+2] = 255;
      // let greyScale = greyImg;
      // console.log('this is outside of the writeFile function:', greyImg);

      fs.writeFile(`${__dirname}/../../assets/black-bitmap.bmp`, bmp.allData, (err) => {
        if (err) console.error(err);
      });
    }
  });
  callback;
};

originalObj.whiteOut();
