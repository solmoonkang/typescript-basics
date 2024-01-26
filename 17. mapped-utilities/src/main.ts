
// MAPPED TYPE
type Properties = 'propA' | 'propB';

type MyNewType = MyMappedType<{a: 'a', b: 'b'}>;

type MyMappedType<T> = {
  [P in keyof T]: T[P];
}



// PICK, RECORD


// PICK 만들기 => type Pick<T, K extends keyof T> = { [P in K]: T[P]; };
// type Pick1<{T, Properties extends keyof T}> = {
//   [P in Properties]: T[P];
// };

// typeMyNewType2 = Pick1<{ a: 'a', b: 'b', c: 'c' }, 'a'>;


// RECODR 만들기 => type Record1<K extends keyof any, T> = { [P in K]: T; };
// Record1<K extends keyof any, T> = {
//   [P in K]: T;
// }

// const MyNewRecord: Record1<string, number> = {};
// MyNewRecord.a = 10;
// MyNewRecord.b = 10;