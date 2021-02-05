import GalAge from './../src/ageCalc.js';

describe('GalAge',() => {

  let testAge;

  beforeEach(() => {
    testAge = new GalAge(50);
  });

  test('should correctly construct an object with given age', () => {
    expect(testAge.age).toEqual(50);
  });

  test('should correctly construct an object with average age', () => {
    expect(testAge.averageAge).toEqual(80);
  });

  test('should correctly construct an object with an age and average age array', () => {
    expect(testAge.ageArray).toEqual([50, 80]);
  });

  test('should correctly convert given age and average age to mercury years', () => {
    expect(testAge.getMerc()).toEqual([208, 333]);
  });

  test('should correctly convert given age and average age to venus years', () => {
    expect(testAge.getVenus()).toEqual([80, 129]);
  });

  test('should correctly convert given age and average age to mars years', () => {
    expect(testAge.getMars()).toEqual([26, 42]);
  });

  test('should correctly convert given age and average age to jupiter years', () => {
    expect(testAge.getJupiter()).toEqual([4, 6]);
  });
});
