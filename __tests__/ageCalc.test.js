import GalAge from './../src/ageCalc.js';

describe('GalAge',() => {

  let testAge;

  beforeEach(() => {
    testAge = new GalAge(50);
  });

  test('should correctly construct an object with given age', () => {
    expect(testAge.age).toEqual(50);
  });

  test('should correctly convert given age to mercury years', () => {
    expect(testAge.getMerc()).toEqual(12);
  });
});
