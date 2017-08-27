'use strict';
const Bitmap = require ('../model/bitmap');
const fs = require('fs');

let greyScale = () => {

  fs.readFile(`${__dirname}/../../assets/palette-bitmap.bmp`, (err, data) => {
    if (err) console.error(err);
    let bmp = new Bitmap(data);
    let x = bmp.filterArray;
  });
  fs.writeFile(`${__dirname}/../../assets/greyscale-bitmap.bmp`, greyObj), (err) => {
    if (err) console.error(err);

  }
let greyOut = () => {
    for(let i = 0; i < x.length; i += 4) {
      if(x[i]);
      // console.log(x[i], x[i + 1], x[i + 2], x[i + 3]);
      let greyVal = [(x[i])/3, (x[i + 1])/3, (x[i + 2])/3, (x[i + 3])/3];
      let x = greyVal;
    }
  };
let greyObj = greyOut(x);
};

greyScale();
