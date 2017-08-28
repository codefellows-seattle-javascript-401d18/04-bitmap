'use strict';

const originalObj = require('../lib/read-write-bitmap');


describe('test to see if greyscale works', () => {
  test('test image should equal greyscale image', () => {
    originalObj.greyOut();
    expect(`${__dirname}/../../assets/test-bitmap.bmp`).toEqual(`${__dirname}/../../assets/greyscale-bitmap.bmp`);
  });
  test('test image should equal white out image', () => {
    originalObj.whiteOut();
    expect(`${__dirname}/../../assets/test-bitmap.bmp`).toEqual(`${__dirname}/../../assets/white-bitmap.bmp`);
  });
});
