export default class GalAge {
  constructor(userAge) {
    this.age = userAge;
  }

  getMerc()  {
    this.age *= .24;
    return this.age;
  }

  getVenus()  {
    this.age *= .62;
    return this.age;
  }

  getMars()  {

  }
}