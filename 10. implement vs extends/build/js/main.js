"use strict";
class Car {
    constructor() {
        this.mileage = 0;
        this.price = 100;
        this.color = 'white';
    }
    drive() {
        return 'drive';
    }
    brake() {
        return 'brake';
    }
}
// EXTENDS
class KIA extends Car {
}
// IMPLEMENTS
class Ford {
    constructor() {
        this.mileage = 1;
        this.price = 200;
        this.color = 'black';
        this.seats = 2;
        this.tire = 3;
    }
    drive() {
        return 'drive';
    }
    brake() {
        return 'brake';
    }
}
const myFordCar = new Ford();
