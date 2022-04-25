export class Planets {

  constructor(earth, convertedYears) {
    this.earth = earth;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;

  }
  getDivineMercury() {
    return this.earth / this.mercury;

  }

  getDivineVenus() {
    return this.earth / this.venus;

  }

  getDivineMars() {

    return this.earth / this.mars;

  }

  getDivineJupiter() {
    return this.earth / this.jupiter;

  }

}

export class UserInput {
  constructor(name, activity, food) {
    this.name = name;
    this.activity = activity;
    this.food = food;
  }

  lifeExpectancy() {
    const health = (this.activity + this.food)
    return health;
  }

}
}
