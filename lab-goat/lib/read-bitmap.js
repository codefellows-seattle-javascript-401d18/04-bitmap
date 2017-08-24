'use strict';

const Bitmap = require ('../model/bitmap');
const fs = require('fs');

fs.readFile(`${__dirname}/../../assets/palette-bitmap.bmp`), (err, data) => {
  if (err) console.err(err);
  let bmp = new Bitmap(data);
};
