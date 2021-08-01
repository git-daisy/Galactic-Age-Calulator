export default class Age {
  constructor (userAge,userLifeExpect) {
    this.userAge = userAge;
    this.userLifeExpect = userLifeExpect;
  }
  planetAge(planet) {
    if (planet === "Murcury") {
      return Math.floor(this.userAge / .24);
    } 
    else if (planet === "Venus") {
      return Math.floor(this.userAge  / .62);
    } 
    else if (planet === "Mars") {
      return Math.floor(this.userAge  / 1.88);
    } 
    else if (planet === "Jupiter") {
      return Math.floor(this.userAge / 11.86);
    }
  }

  lifeExpect(planet) {
    if(planet === "Murcury") {
      return Math.floor(this.userLifeExpect / .24);
    } 
    else if (planet === "Venus") {
      return Math.floor(this.userLifeExpect / .62);
    } 
    else if (planet === "Mars") {
      return Math.floor(this.userLifeExpect/ 1.88);
    } 
    else if (planet === "Jupiter") {
      return Math.floor(this.userLifeExpect / 11.86);
    }
  }
}