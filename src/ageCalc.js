export default class GalAge {
  constructor(userAge) {
    this.age = userAge;
    this.averageAge = 80;
    this.ageArray = [this.age, this.averageAge];
  }

  getMerc()  {
    this.age /= .24;
    this.averageAge /= .24;
    // console.log(this.age);
    return Math.trunc(this.age, this.averageAge);
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