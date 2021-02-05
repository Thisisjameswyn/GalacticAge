export default class GalAge {
  constructor(userAge) {
    this.age = userAge;
  }

  getMerc()  {
    this.age /= .24;
    return Math.trunc(this.age);
  }

  getVenus()  {
    this.age /= .62;
    return Math.trunc(this.age);
  }

  getMars()  {
    this.age /= 1.88;
    return Math.trunc(this.age);
  }

  getJupiter()  {
    this.age /= 11.86;
    return Math.trunc(this.age);
  }
}