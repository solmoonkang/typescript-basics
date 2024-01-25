
// PARTIAL TYPE
interface Address {
    email: string;
    address: string;
}

type MyEmail = Partial<Address>;
const me: MyEmail = {};
const you: MyEmail = { email: "you@example.com" };
const all: MyEmail = { email: "you@example.com", address: "all" };
