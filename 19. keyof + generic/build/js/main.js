"use strict";
const person = {
    name: 'John',
    age: 30,
    address: 'Seoul'
};
const age = getProperty(person, 'age');
const nameA = getProperty(person, 'name');
// const invalid = getProperty(person, 'invalid');
function getProperty(obj, key) {
    return obj[key];
}
