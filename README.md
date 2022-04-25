## Super Galactic Age Calculator

#### by _**(Evgeny Zbirun)**_

#### The application helps user to get how many years left to live based on a planet and user's lifestyle factors.



#### the project link to github: https://github.com/evegyzbirun/Super-Galactic-Age-Calculator

## Technologies Used:
* VS code
* Git console
* JavaScript
* HTML with image and css
* ES6

## Setup instructions

1. download from github link and open in VS Code.
2. run (npm install).
3. run (npm run start) to see the project.
4. run (npm run test) to see tests.
5. input your age to get how many years to live.


## Known bugs
 non
## Tests
  When entering Earthly years to get planets years
  **:(**

```js
 

  test('should divine earth years on mercury year to get how many mercury years in earth years', () => {
    expect(planets.getDivineMercury()).toEqual(100);

  });
  test('should divine earth years on Venus year to get how many Venus years in earth years', () => {
    expect(planets.getDivineVenus()).toEqual(0.387);

  });
  test('should divine earth years on Mars year to get how many Mars years in earth years', () => {
    expect(planets.getDivineMars()).toEqual(12.76);

  });
  test('should divine earth years on Jupiter year to get how many Jupiter years in earth years', () => {
    expect(planets.getDivineJupiter()).toEqual(2.023);

  });
  test('It should create a user with name and age input', () => {
    const user = new UserInput("John");

    expect(user.name).toEqual("John");

```

**:)**
## License

MIT

Copyright (c) 4/15/2022 Evgeny Zbirun
