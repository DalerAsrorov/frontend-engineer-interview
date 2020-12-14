class Car {
  constructor(yearModel, make) {
    this.yearModel = yearModel;
    this.make = make;
    this.speed = 0;
  }
  get mySpeed() {
    return this.speed;
  }
  set mySpeed(speed) {
    this.speed = speed;
  }
  get myModel() {
    return this.yearModel;
  }
  set myModel(model) {
    this.yearModel = model;
  }
  get myMake() {
    return this.myMake;
  }
  set myMake(make) {
    this.make = make;
  }
  accelerate(newSpeed = 5) {
    this.speed += newSpeed;
  }
  brake(decSpeed = 5) {
    this.speed -= decSpeed;
  }
  toString() {
    return `~~~~~~~~~~~\nCar of ${this.make}.\nMade in ${this.yearModel}.\nSpeed is ${this.speed}\n~~~~~~~~~~~`;
  }
}
const car1 = new Car(2005, "xs");
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();

car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();

console.log(`${car1}`);
