## Super Galactic Age Calculator

#### by _**(Evgeny Zbirun)**_

#### The application helps user to get how many years left to live based on a planet and user's lifestyle with other factors



#### the project link to github: 

## Technologies Used:
* VS code
* Git console
* JavaScript
* Html with image and css
* ES6

## Setup instructions

1. download from github link
2. unzip
3. open with Visual Studio Code or some other editor that reads Html, Css and JavaScript.
4. open Language.html with live server
5. input your age to get how many years left to live


## Known bugs
 non
## Tests
  When entering Earthly years to get planets years
  **:(**

```js
 test('inputs for each planet', () => {
    expect(Planets.earth).toEqual();
    expect(Planets.mercury).toEqual(0.24);
    extent(Planets.venus).toEqual(0.62);
    extent(Planets.mars).toEqual(1.88);
    extent(Planets.jupiter).toEqual(11.86);
  });

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
```

**:)**
## License

MIT

Copyright (c) 4/15/2022 Evgeny Zbirun