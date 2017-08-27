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

<<<<<<< HEAD
    // console.log('This is the pixelArray', x)
    }
  callback(); 
  });
=======
    // console.log('This is the pixelArray', x);

    for(let i = 0; i < x.length; i += 4) {
      if(x[i]);
      let greyImg = [(x[i])/3, (x[i + 1])/3, (x[i + 2])/3, (x[i + 3])/3];
>>>>>>> b717491e7c7ae466abadb58e9d6ac720a44277f9

      // let greyScale = greyImg;
      // console.log('this is outside of the writeFile function:', greyImg);

      fs.writeFile(`${__dirname}/../../assets/greyscale-bitmap.bmp`, greyImg, (err) => {
        if (err) console.error(err);
        console.log('Isaiah was here', greyImg);
        return greyImg;
      });
    }
  });
  callback;
};
originalObj.readWrite();
