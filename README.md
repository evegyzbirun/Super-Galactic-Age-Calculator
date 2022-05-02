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
  test('It should create a user with name and age', () => {
    const user = new UserInput("John", 30);

    expect(user.name).toEqual("John");
    expect(user.age).toEqual(30);

  });

```

**:)**
## License

MIT

Copyright (c) 4/15/2022 Evgeny Zbirun
