'use strict';

const Bitmap = require ('../model/bitmap');
const fs = require('fs');

// console.log(Bitmap());
fs.readFile(`${__dirname}/../../assets/palette-bitmap.bmp`, (err, data) => {
  if (err) console.error(err);
  console.log('data', data);
  let bmp = new Bitmap(data);
  console.log(bmp);
});
