
// INFER TYPE
// Example 1
type AType<T> = T extends infer R ? R : null;

const a: AType<number> = 1;




// Example 2
type BType<T> = T extends {a: infer A; b: 1} ? A : any;

type Inferred1 = BType<{a: 'hi'; b: 1}>;




// Example 3
type CType<T> = T extends {a: infer A; b: infer B} ? A & B : any;

type Inferred2 = CType<{a: {someAProps: 1}; b: {someBProps: 2}}>;




// Example 4
// type MyReturnType = ReturnType    // 함수 T의 반환 타입으로 구성된 타입을 만든다.
type T0 = ReturnType<() => string>;
type T1 = ReturnType<(s: string) => void>

function fn(str: string) {
  return str;
}

type T2 = ReturnType<typeof fn>;