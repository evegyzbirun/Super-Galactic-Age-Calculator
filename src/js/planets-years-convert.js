export class Planets {

  constructor(earth) {
    this.earth = earth;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;

  }
  getMercury() {
    return this.earth * this.mercury;

  }

  getVenus() {
    return this.earth * this.venus;

  }

  getMars() {

    return this.earth * this.mars;

  }

  getJupiter() {
    return this.earth * this.jupiter;

  }

  veryOld() {
    if (this.earth >= 50) {
      return this.earth = "too old"
    } else if (this.earth < 50 && 40 < this.earth) {
      return this.earth = "middle age"
    } else {
      return this.earth = "young"
    }
  }

}

export class UserInput {
  constructor(name, age, activity, food) {
    this.name = name;
    this.age = age;
    this.activity = activity;
    this.food = food;
  }

  //health is general age with life style. So we take health - input age and get lifeExpectancy years left

  lifeExpectancy() {
    const health = (this.activity + this.food) / 2
    return health - this.age
  }
  overlive() {
    const over = (((((this.activity + this.food) / 2) - this.age) + this.age))
    if (this.age > over) {
      return over;
    }
  }
}



