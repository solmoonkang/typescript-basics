"use strict";
// Method Add1 & Add2
function add1(a, b) {
    return a + b;
}
function add2(a, b) {
    return a + b;
}
function add(a, b) {
    return a + b;
}
console.log(add1("Hello", "World!"));
console.log(add2(1, 2));
function saySomethingA(word) {
    return word;
}
saySomethingA('hello');
function saySomethingB(word) {
    if (typeof word === 'string') {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join(' ');
    }
    throw new Error("[ERROR] unable to say something");
}
saySomethingB(['hello', 'world']);
function saySomething(word) {
    if (typeof word === 'string') {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join(' ');
    }
    throw new Error("[ERROR] unable to say something");
}
