import Age from '../src/calculator.js';
describe('Age', () => { 
  
  test("It should create an object for age and lifeExpectancy", () => {
    let ageKeeper = new Age(34,100);
    expect(ageKeeper.age).toEqual(34);
    expect(ageKeeper.lifeExpect).toEqual(100)
  });

  test('It should calculate the age of a user on a given planet', () => {
    let ageKeeper = new Age(34,100);
    expect(ageKeeper.planetAge('Murcury')).toEqual(141);
    expect(ageKeeper.planetAge('Venus')).toEqual(54);
    expect(ageKeeper.planetAge('Mars')).toEqual(18);
    expect(ageKeeper.planetAge('Jupiter')).toEqual(2);
  });
});