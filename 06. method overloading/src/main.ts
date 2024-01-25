
// Method Add1 & Add2
function add1(a: string, b: string): string {
    return a + b;
}

function add2(a: number, b: number): number {
    return a + b;
}



// Method Overloading
function add(a: string, b: string): string;   // 타입 선언
function add(a: number, b: number): number;   // 타입 선언
function add(a: any, b: any): any {           // 함수 구현
		return a + b;
}

console.log(add1("Hello", "World!"));
console.log(add2(1, 2));








function saySomethingA(word: string): string {
    return word;
}

saySomethingA('hello');



function saySomethingB(word: string | string[]): string {
    if (typeof word === 'string') {
        return word;
    } else if (Array.isArray(word)) {
        return word.join(' ');
    }

    throw new Error("[ERROR] unable to say something");
}

saySomethingB(['hello', 'world']);




function saySomething(word: string): string
function saySomething(word: string[]): string
function saySomething(word: any): any {
    if (typeof word === 'string') {
        return word;
    } else if (Array.isArray(word)) {
        return word.join(' ');
    }

    throw new Error("[ERROR] unable to say something");
}