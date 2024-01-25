"use strict";
const me = {};
const you = { email: "you@example.com" };
const all = { email: "you@example.com", address: "all" };
const todo = {
    title: "Clean Room",
    completed: false
};
const todo2 = {
    title: "Clean Room",
    completed: false,
    createdAt: Date.now()
};
let firstUser = {
    firstName: "John",
};
const cats = {
    miffy: { age: 10, breed: 'persian' },
    boris: { age: 10, breed: 'maine coon' },
    mordred: { age: 10, breed: 'british shorthair' }
};
function fn(str) {
    return str;
}
const a = 'Hello';
// const b: ReturnType<typeof fn> = true;   // ERROR
