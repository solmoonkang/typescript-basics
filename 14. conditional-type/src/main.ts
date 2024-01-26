
// CONDITIONAL TYPE
// type SomeType = T extends U ? X : Y;
// Example 1
type SomeType = string;
type CoditionalType = SomeType extends string ? string: null;

function fn1<T>(value: T) {
    const fn2 = (
        arg: T extends boolean ? 'A' : 'B'
    ) => {};
    return fn2;
}

const result = fn1(true);




// Example 2
type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never;

const A: StringOrNot<string> = 'string';




// Example 3
// type Exclude<T, U> = T extends U ? never : T;
type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;  // 'a' | 'b' | 'c' == T, 'a' | 'b' == U가 된다.
/*
  'a' extends 'a' | 'b' ? never : 'a' ==> never
  'b' extends 'a' | 'b' ? never : 'b' ==> never
  'c' extends 'a' | 'b' ? never : 'c' ==> c
*/




// Example 4
type AType<T> = (() => T) extends () => string | number ? T : never;

type MyResult = AType<string | number | boolean>;