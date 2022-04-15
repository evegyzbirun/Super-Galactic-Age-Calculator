export default class Planets {

  constructor(earth, mercury, venus, mars, jupiter) {
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;

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
