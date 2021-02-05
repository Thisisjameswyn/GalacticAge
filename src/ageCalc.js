export default class GalAge {
  constructor(userAge) {
    this.age = userAge;
    this.averageAge = 80;
    this.ageArray = [this.age, this.averageAge];
  }

  getMerc()  {
    this.age /= .24;
    this.averageAge /= .24;
    this.ageArray = [Math.trunc(this.age), Math.trunc(this.averageAge)]
    // console.log(this.age);
    return this.ageArray;
  }

  getVenus()  {
    this.age /= .62;
    // console.log(this.age);
    return Math.trunc(this.age);
  }

  getMars()  {
    this.age /= 1.88;
    // console.log(this.age);
    return Math.trunc(this.age);
  }

  getJupiter()  {
    this.age /= 11.86;
    // console.log(this.age);
    return Math.trunc(this.age);
  }
}