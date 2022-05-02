import { Planets, UserInput } from '../src/js/planets-years-convert.js';

describe('Planets', () => {

  let planets;

  beforeEach(() => {
    planets = new Planets(24);
  });
  test('It should multiply earth years on mercury year to get how many mercury years the user gets', () => {
    expect(planets.getMercury()).toEqual(5.76);

  });
  test('It should multiply earth years on Venus year to get how many Venus years the user gets', () => {
    expect(planets.getVenus()).toEqual(14.879999999999999);

  });
  test('It should multiply earth years on Mars year to get how many Mars years the user gets', () => {
    expect(planets.getMars()).toEqual(45.12);

  });
  test('It should multiply earth years on Jupiter year to get how many Jupiter years the user gets', () => {
    expect(planets.getJupiter()).toEqual(284.64);

  });
});

describe('Planets,veryOld', () => {
  test('It should return "too old" if age equals 50(earth years without lifeExpectancy) or more', () => {
    const age = new Planets(55);
    expect(age.veryOld()).toEqual("too old");
  });
  test('It should return "middle age" if age between 40 and 50 (earth years without lifeExpectancy)', () => {
    const age = new Planets(42);
    expect(age.veryOld()).toEqual("middle age");
  });
  test('It should return "young" if age equals 40 (earth years without lifeExpectancy) or less', () => {
    const age1 = new Planets(25);
    expect(age1.veryOld()).toEqual("young");
  });
});

//UserInput
describe('UserInput', () => {
  test('It should create a user with name and age', () => {
    const user = new UserInput("John", 30);

    expect(user.name).toEqual("John");
    expect(user.age).toEqual(30);

  });
  test('It should create users with names and ages', () => {
    const user1 = new UserInput("Alex", 35);
    const user2 = new UserInput("Ana", 40);

    expect(user1.name).toEqual("Alex");
    expect(user1.age).toEqual(35);
    expect(user2.name).toEqual("Ana");
    expect(user2.age).toEqual(40);
  });

});

describe('UserInput.lifeExpectancy', () => {
  test('It would take two life expectancy and calculate how many years left to live', () => {
    const user1 = new UserInput("Alex", 30);
    // we use age input this.earth
    user1.activity = 50;
    user1.food = 60;
    const finalAge = user1.lifeExpectancy();
    expect(finalAge).toEqual(25);
    expect(user1.activity).toEqual(50);
    expect(user1.food).toEqual(60);
  });
});


describe('Planets.getMercury', () => {

  test('It would take years and convert to Mercury years with expectancy and calculate how long the user will live on the planet ', () => {
    const user1Years = new Planets(25);
    const user1 = new UserInput("Alex", 30);
    user1.activity = 50;
    user1.food = 60;
    const finalAge = user1.lifeExpectancy();
    const MercuryFinalAge = user1Years.getMercury(finalAge);
    expect(MercuryFinalAge).toEqual(6);
  });
});

describe('Planets.getVenus', () => {

  test('It would take years and convert to Venus years with expectancy and calculate how long the user will live on the planet ', () => {
    const user1Years = new Planets(19);
    const user1 = new UserInput("Anna", 36);
    user1.activity = 50;
    user1.food = 60;
    const finalAge = user1.lifeExpectancy();
    const VenusFinalAge = user1Years.getVenus(finalAge);
    expect(VenusFinalAge).toEqual(11.78);
  });
});

describe('Planets.getMars', () => {

  test('It would take years and convert to Mars years with expectancy and calculate how long the user will live on the planet ', () => {
    const user1Years = new Planets(10);
    const user1 = new UserInput("Vanessa", 45);
    user1.activity = 50;
    user1.food = 60;
    const finalAge = user1.lifeExpectancy();
    const MarsFinaleAge = user1Years.getMars(finalAge);
    expect(MarsFinaleAge).toEqual(18.799999999999997);
  });
});

describe('Planets.getJupiter', () => {

  test('It would take years and convert to Jupiter years with expectancy and calculate how long the user will live on the planet ', () => {
    const user1Years = new Planets(33);
    const user1 = new UserInput("Marcus", 22);
    user1.activity = 50;
    user1.food = 60;
    const finalAge = user1.lifeExpectancy();
    const JupiterFinaleAge = user1Years.getJupiter(finalAge);
    expect(JupiterFinaleAge).toEqual(391.38);
  });
});

describe('UserInput.overLive', () => {
  test('It should show how many years user overlives', () => {
    const overlive = new UserInput("Alex", 70);
    overlive.activity = 50;
    overlive.food = 60;
    const overAge = overlive.overlive();
    expect(overAge).toEqual(00);
  })
});

