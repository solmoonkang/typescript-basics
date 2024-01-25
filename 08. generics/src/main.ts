function getArrayLengthA(arr: number[] | string[] | boolean[]): number {
    return arr.length;
}

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, true];

getArrayLengthA(array1);
getArrayLengthA(array2);
getArrayLengthA(array3);


// GENERIC
function getArrayLengthB<T>(arr: T[]): number {
    return arr.length;
}

const array4 = [1, 2, 3];
const array5 = ["a", "b", "c"];
const array6 = [true, false, true];

getArrayLengthB<number>(array4);
getArrayLengthB<string>(array5);
getArrayLengthB<boolean>(array6);




// Generic Example
interface Vehicle<T> {
    name: string;
    color: string;
    option: T;
}

const car: Vehicle<{price: number}> = {
    name: 'Car',
    color: 'red',
    option: {
        price: 1000
    }
}

const bike: Vehicle<boolean> = {
    name: 'Bike',
    color: 'green',
    option: true
}