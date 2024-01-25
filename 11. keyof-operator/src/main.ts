
// KEYOF
interface IUser {
    name: string;
    age: number;
    address: string;
}

// 해당 인터페이스는 type으로 구성되어 있기 때문에 바로 keyof 키워드를 사용하면 된다.
type UserKeys = keyof IUser;    // 'name' | 'age' | 'address'




// 객체로 구성된 user를 type으로 바꿔준 다음 keyof 키워드를 사용하면 된다.
const user = {
    name: 'John',
    age: 30,
    address: 'Seoul'
}

type UsesrKeys = keyof typeof user;





// enum의 경우도 마찬가지이다.
enum UserRole {
    admin,
    manager
}

type UserRoleKeys = keyof typeof UserRole;