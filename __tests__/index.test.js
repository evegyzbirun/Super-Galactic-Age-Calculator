// solar year 365 on Earth 

//
//A Mercury year is .24 Earth years. mercury years age = Earth year/ Mecrucy year
//A Venus year is .62 Earth years.  venus years age = Earth year/ venus year
//A Mars year is 1.88 Earth years.  Mars years age = Earth year/ Mars year
//A Jupiter year is 11.86 Earth years.  Jupiter years age = Earth year/ Jupiter year

import Years from '../src/js/index.js';

escribe(' Years', () => {

  let age;

  beforeEach(() => {
    age = new Years(0, 0, 0, 0, 0);
  });

  test('Should return age in Mercury years', () => {
    expect(age.earth).toEqual(age.mercury);
  });
});