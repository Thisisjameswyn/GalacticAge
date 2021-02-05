export default class GalAge {
  constructor(userAge) {
    this.age = userAge;
  }

  getMerc()  {
    this.age *= .24;
    return this.age;
  }
}