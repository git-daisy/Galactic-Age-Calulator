import Age from '../src/calculator.js';
describe('Age', () => { 
  
  test("It should create an object for age and lifeExpectancy", () => {
    let ageKeeper = new Age(34,100);
    expect(ageKeeper.age).toEqual(34);
    expect(ageKeeper.lifeExpect).toEqual(100)
  });
});