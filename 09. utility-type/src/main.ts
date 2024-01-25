
// PARTIAL TYPE
interface Address {
    email: string;
    address: string;
}

type MyEmail = Partial<Address>;
const me: MyEmail = {};
const you: MyEmail = { email: "you@example.com" };
const all: MyEmail = { email: "you@example.com", address: "all" };


// PICK TYPE
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean Room",
    completed: false
}


// OMIT TYPE
interface TodoB {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreviewB = Omit<TodoB, "description">;

const todo2: TodoPreviewB = {
    title: "Clean Room",
    completed: false,
    createdAt: Date.now()
}


// EXCLUDE TYPE


// REQUIRED TYPE
type User = {
    firstName: string;
    lastName?: string;
}

let firstUser: User = {
    firstName: "John",
}

// User 타입에서 선택사항으로 만들었지만, Required로 구현하게 되면, 필수로 만들기 떄문에 에러가 발생한다.
// let secondUser: Required<User> = {
//     firstName: "John"
// }


// RECORD TYPE
interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
    miffy: {age: 10, breed: 'persian'},
    boris: {age: 10, breed: 'maine coon'},
    mordred: {age: 10, breed: 'british shorthair'}
};


