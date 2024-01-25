class Car {
    mileage = 0;
    price = 100;
    color = 'white';

    drive() {
        return 'drive';
    }

    brake() {
        return 'brake';
    }
}

interface Part {
    seats: number;
    tire: number;
}



// EXTENDS
class KIA extends Car {
    // 상속해서 사용하 수 있게 만들어준다.
}






// IMPLEMENTS
class Ford implements Car, Part {
    mileage = 1;
    price = 200;
    color = 'black';

    seats = 2;
    tire = 3;

    drive() {
        return 'drive';
    }

    brake() {
        return 'brake';
    }
}

const myFordCar = new Ford();
