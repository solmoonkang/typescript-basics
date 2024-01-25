
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

