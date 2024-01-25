"use strict";


// Boolean
let boolean;
let falseBoolean = false;


// Number
let number;
let integer = 6;
let float = 1.2345;


// String
let string;
let firstName = 'Doe';


// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ['John', 'Kim'];
let names2: Array<string> = ['John', 'Kim'];


// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1: (string | number)[] = ['John', 1, 2];
let array2: Array<string | number> = ['John', 1, 2];


// 여러 타입을 단언 X any 
let someArray: any[] = ['John', 1, [], {}, false];


// Interface, Type
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ['A', 'B'];
let numberArray:ReadonlyArray<number> = [1, 2];

// stringArray.push('C');   // 읽기 전용이므로 값을 추가할 수 없다.
// numberArray[0] = 3;


// Tuple
let tuple1: [string, number];
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2];   // string, number 형식으로만 작성해야 한다.
// tuple1 = [1, 'a'];      // string, number 순서가 다르므로 에러가 발생한다.


let users: [number, string][];
users = [[1, 'John'], [2, 'Doe']];

let tuple2: [string, number];
tuple2 = ['a', 1];
tuple2.push(2);
// tuple2.push(false);  // string, number에 맞지 않는 boolean 값을 넣으므로 에러가 발생한다.
console.log(tuple2);


// any: 어떠한 값들도 할당할 수 있다. 하지만 되도록 사용하지 않는 것이 좋다.
let any: any = 'abc';
any = 1;
any = [];


// unknown: 알 수 없는 타입
let unknown: unknown = false;
// let string1: string = unknown;           // unknown 타입은 값을 할당할 수 없다.
let string2: boolean = unknown as boolean;  // 단, 다음고 같이 as boolean 으로 사용할 경우 할당이 가능하다.


// Object 
let obj: object = {};
let arr: object = [];
// let nul: object = null;  // tsconfig에서 설정한 strict: true 모드를 설정했기 때문에, 에러가 발생한다. 따라서 타입 스크립트는 올바른 처리를 해주고 있는 것이다.
let date: object = new Date();

const obj1: { id: number, title: string, description: string } = {
    id: 1,
    title: 'title1',
    description: 'description1',
};


// Union
let union: (string | number);
union = 'hi';
union = 123;
// union = [];  // string, number 형식이 아닌 값은 할당할 수 없다.


// Function
let func1: (arg1: number, arg2: number) => number;  // 매개변수에 타입을 설정해줘야 한다.
func1 = function (x, y) {
    return x * y;
};

let func2: () => void;  // 만약, 매개변수가 없을 경우 void 타입을 설정해주면 된다.
func2 = function () {
    console.log('hi');
};


// Null, Undefined: 어떠한 타입에도 할당을 해줄 수 있다.
// let number1: number = undefined;    // tsconfig에서 strictNullChecks를 true로 설정할 경우, null 확인을 엄격하게 한다는 의미로 에러가 발생하게 된다.
// let string9: string = null;
// let object: { a: 10, b: false } = undefined;
// let array: any[] = null;
// let undefined1: undefined = null;
// let null1: null = undefined;
// let void1: void = null;

let void2: void = undefined;    // 단, void 타입의 경우는 undefined 할당이 가능하다.


// void
function greeting(): void {     // undefined로 설정하면 에러가 발생한다.
    console.log('hi');
}
const hi = greeting();
console.log(hi); // undefined


// never
function throwError(): never {
    throw new Error('[ERROR]');
}

function keepProcessing(): never {
    while (true) {
        console.log('hi');
    }
}

// number 형식의 값은 never 형식의 값에 할당할 수 없다라는 에러가 발생한다.
// const never: never[] = [];
// never.push(1);

const never: number[] = [];
never.push(1);