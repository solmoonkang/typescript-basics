"use strict";
function getArrayLengthA(arr) {
    return arr.length;
}
const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, true];
getArrayLengthA(array1);
getArrayLengthA(array2);
getArrayLengthA(array3);
// GENERIC
function getArrayLengthB(arr) {
    return arr.length;
}
const array4 = [1, 2, 3];
const array5 = ["a", "b", "c"];
const array6 = [true, false, true];
getArrayLengthB(array4);
getArrayLengthB(array5);
getArrayLengthB(array6);
const car = {
    name: 'Car',
    color: 'red',
    option: {
        price: 1000
    }
};
const bike = {
    name: 'Bike',
    color: 'green',
    option: true
};
// Generic Example
const makeArr = (x, y) => {
    return [x, y];
};
const array7 = makeArr(4, 5);
const array8 = makeArr("a", "b");
// Generic Extends Example
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
makeFullName({ firstName: "John", lastName: "Doe", location: "Seoul" });
