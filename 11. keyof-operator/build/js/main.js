"use strict";
// 객체로 구성된 user를 type으로 바꿔준 다음 keyof 키워드를 사용하면 된다.
const user = {
    name: 'John',
    age: 30,
    address: 'Seoul'
};
// enum의 경우도 마찬가지이다.
var UserRole;
(function (UserRole) {
    UserRole[UserRole["admin"] = 0] = "admin";
    UserRole[UserRole["manager"] = 1] = "manager";
})(UserRole || (UserRole = {}));
