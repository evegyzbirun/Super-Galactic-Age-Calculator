// solar year 365 on Earth 
//
//A Mercury year is .24 Earth years.
//A Venus year is .62 Earth years.
//A Mars year is 1.88 Earth years.
//A Jupiter year is 11.86 Earth years.

import Years from '../src/js/index.js';

escribe(' Years', () => {

  let age;

  beforeEach(() => {
    age = new Years(3);
  });

  test('Should return age in Mercury years', () => {
    expect(age.inputMain).toEqual(3);
  });
});