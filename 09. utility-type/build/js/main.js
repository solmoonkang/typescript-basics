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
// User 타입에서 선택사항으로 만들었지만, Required로 구현하게 되면, 필수로 만들기 떄문에 에러가 발생한다.
// let secondUser: Required<User> = {
//     firstName: "John"
// }
