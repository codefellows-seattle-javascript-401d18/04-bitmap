'use strict';

const fs = require('fs');

let Bitmap = function(buffer) {
  this.allData = buffer;
  this.type = buffer.toString('utf-8', 0, 2);
  this.fileSize = buffer.readInt32LE(2);
  this.offset = buffer.readInt32LE(10);
  this.width = buffer.readInt32LE(18);
  this.height = buffer.readInt32LE(22);
  this.pixelArray = buffer.slice(54, this.offset);
};


fs.readFile(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
  if(err) console.error(err);

  let bmp = new Bitmap(data);
  let x = bmp.filesArray;
  console.log(bmp);
  for(let i = 0; i < this.length; i += 4) {
    // console.log(x[i], x[i + 1], x[i + 2], x[i + 3]);
    let greyVal = [(x[i])/3, (x[i + 1])/3, (x[i + 2])/3, (x[i + 3])/3];
    let greyPic = bmp.filterArray.val(greyVal);
    console.log(x);
    console.log(greyPic);
    fs.writeFile(`${__dirname}/../assets/greymap.bmp`, greyPic, (err) => {
      if (err) console.err(err);
    });
  }
});




//
// let greyOut = () => {
//     for(let i = 0; i < x.length; i += 4) {
//       if(x[i]);
//       // console.log(x[i], x[i + 1], x[i + 2], x[i + 3]);
//       let greyVal = [(x[i])/3, (x[i + 1])/3, (x[i + 2])/3, (x[i + 3])/3];
//       let x = greyVal;
//     }
//   };
