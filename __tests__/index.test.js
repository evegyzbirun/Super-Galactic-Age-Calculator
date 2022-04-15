// solar year 365 on Earth 

//
//A Mercury year is .24 Earth years. mercury years age = Earth year/ Mecrucy year
//A Venus year is .62 Earth years.  venus years age = Earth year/ venus year
//A Mars year is 1.88 Earth years.  Mars years age = Earth year/ Mars year
//A Jupiter year is 11.86 Earth years.  Jupiter years age = Earth year/ Jupiter year


//  the user's life expectancy depends on: lifestyle, country of residence, activity level
// So we input age and pick your description about how we liv. it will show us how long we would able to live in Earth, Mercury, Venus, Mars, Jupiter years. 


//import Years from '../src/index.js';
import Planets from '../src/js/planets-years-convert.js';

describe('Planets', () => {

  let planets;

  beforeEach(() => {
    planets = new Planets(24, 0.24, 0.62, 1.88, 11.86);
  });

  test('earth year and mercury one eacth year', () => {
    expect(Planets.earth).toEqual(24);
    expect(Planets.mercury).toEqual(0.24);
    extent(Planets.venus).toEqual(0.62);
    extent(Planets.mars).toEqual(1.88);
    extent(Planets.jupiter).toEqual(11.86);
  });

  test('should divine earth years on mercury year to get how many mercury years in earth years', () => {
    expect(planets.getDivineMercury()).toEqual(100);

  });
  test('should divine earth years on Venus year to get how many Venus years in earth years', () => {
    expect(planets.getDivineVenus()).toEqual(100);

  });
  test('should divine earth years on Mars year to get how many Mars years in earth years', () => {
    expect(planets.getDivineMars()).toEqual(100);

  });
  test('should divine earth years on Jupiter year to get how many Jupiter years in earth years', () => {
    expect(planets.getDivineJupiter()).toEqual(100);

  });
});