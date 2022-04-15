export default class Planets {

  constructor(earth, mercury) {
    this.earth = earth;
    this.mercury = mercury;

  }
  getdivine() {
    return this.earth % this.mercury;
  }

}