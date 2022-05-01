import { Planets, UserInput } from '../src/js/planets-years-convert.js';

describe('Planets', () => {

  let planets;

  beforeEach(() => {
    planets = new Planets(24);
  });
  test('should divine earth years on mercury year to get how many mercury years in earth years', () => {
    expect(planets.getDivineMercury()).toEqual(100);

  });
  test('should divine earth years on Venus year to get how many Venus years in earth years', () => {
    expect(planets.getDivineVenus()).toEqual(38.70967741935484);

  });
  test('should divine earth years on Mars year to get how many Mars years in earth years', () => {
    expect(planets.getDivineMars()).toEqual(12.765957446808512);

  });
  test('should divine earth years on Jupiter year to get how many Jupiter years in earth years', () => {
    expect(planets.getDivineJupiter()).toEqual(2.0236087689713322);

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
  test('It should create a user with name and age input', () => {
    const user = new UserInput("John");

    expect(user.name).toEqual("John");

  });
  test('It should create users with names and ages inputs', () => {
    const user1 = new UserInput("Alex");
    const user2 = new UserInput("Ana");

    expect(user1.name).toEqual("Alex");
    expect(user2.name).toEqual("Ana");
  });

});

describe('UserInput.lifeExpectancy', () => {
  test('It would take two life expectancy and calculate how many years it adds to the user', () => {
    const user1 = new UserInput("Alex");
    // we use age input this.earth
    user1.activity = 25;
    user1.food = 20;
    const finalAge = user1.lifeExpectancy();
    expect(finalAge).toEqual(45);
  });
});


describe('Planets.getDivineMercury', () => {
  test('It would take years and convert to Mercury years with two live expectancy and calculate how long the user will live ', () => {
    const user1 = new UserInput("Alex");
    const user1Years = new Planets(30);
    // we use age input this.earth
    //our life expectancy are no earth years, so I have to convert them as well
    user1.activity = 25 / 0.24;
    user1.food = 20 / 0.24;

    const finalAge = user1.lifeExpectancy() + user1Years.getDivineMercury();

    expect(finalAge).toEqual(312.5);
  });
  test('How many years left to live', () => {
    const user1 = new UserInput("Alex");
    const user1Years = new Planets(30);
    user1.activity = 25 / 0.24;
    user1.food = 20 / 0.24;
    const finalAge = user1.lifeExpectancy() + user1Years.getDivineMercury();
    const yearsLeft = finalAge - user1Years.getDivineMercury();
    expect(yearsLeft).toEqual(187.5);
  });
});

