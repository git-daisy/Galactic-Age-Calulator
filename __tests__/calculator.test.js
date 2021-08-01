import Age from '../src/calculator.js';
describe('Age', () => { 
  
  test("It should create an object for age and lifeExpectancy", () => {
    let ageKeeper = new Age(34,100);
    expect(ageKeeper.userAge).toEqual(34);
    expect(ageKeeper.userLifeExpect).toEqual(100)
  });

  test('It should calculate the age of a user on a given planet', () => {
    let ageKeeper = new Age(34,100);
    expect(ageKeeper.planetAge('Murcury')).toEqual(141);
    expect(ageKeeper.planetAge('Venus')).toEqual(54);
    expect(ageKeeper.planetAge('Mars')).toEqual(18);
    expect(ageKeeper.planetAge('Jupiter')).toEqual(2);
  });

  test('It should calculate the life expectancy of a user on a given planet', () => {
    let ageKeeper = new Age(34,100);
    expect(ageKeeper.lifeExpect('Murcury')).toEqual(416);
    expect(ageKeeper.lifeExpect('Venus')).toEqual(161);
    expect(ageKeeper.lifeExpect('Mars')).toEqual(53);
    expect(ageKeeper.lifeExpect('Jupiter')).toEqual(8);
  });
});