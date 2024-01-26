
// KEYOF + GENERIC
interface Person {
    name: string;
    age: number;
    address: string;
}

const person: Person = {
  name: 'John',
  age: 30,
  address: 'Seoul'
}

const age = getProperty(person, 'age');
const nameA = getProperty(person, 'name');
// const invalid = getProperty(person, 'invalid');


function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}