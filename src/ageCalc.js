export default class GalAge {
  constructor(userAge) {
    this.savedAge = userAge;
    this.age = userAge;
    this.averageAge = 80;
    this.ageArray = [this.age, this.averageAge];
  }

  getMerc()  {
    this.age /= .24;
    this.averageAge /= .24;
    this.ageArray = [Math.trunc(this.age), Math.trunc(this.averageAge)];
    this.age = this.savedAge;
    this.averageAge = 80;
    return this.ageArray;
  }

  getVenus()  {
    this.age /= .62;
    this.averageAge /= .62;
    this.ageArray = [Math.trunc(this.age), Math.trunc(this.averageAge)];
    this.age = this.savedAge;
    this.averageAge = 80;
    return this.ageArray;
  }

  getMars()  {
    this.age /= 1.88;
    this.averageAge /= 1.88;
    this.ageArray = [Math.trunc(this.age), Math.trunc(this.averageAge)];
    this.age = this.savedAge;
    this.averageAge = 80;
    return this.ageArray;
  }

  getJupiter()  {
    this.age /= 11.86;
    this.averageAge /= 11.86;
    this.ageArray = [Math.trunc(this.age), Math.trunc(this.averageAge)];
    this.age = this.savedAge;
    this.averageAge = 80;
    return this.ageArray;
  }
}