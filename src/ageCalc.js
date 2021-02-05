export default class GalAge {
  constructor(userAge) {
    this.age = userAge;
    this.averageAge = 80;
  }

  getMerc()  {
    this.age /= .24;
    // console.log(this.age);
    return Math.trunc(this.age);
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