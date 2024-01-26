


type Colors = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number];

// SATISFIES OPERATOR
const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
  // bleu: [0, 0, 255]   // Error가 발생했다고 바로 알려준다.
  blue: [0, 0, 255]
  // platypus: false;   // 지정한 타입 외의 타입을 지정해서 Error가 발생한다.
} satisfies Record<Colors, string | RGB>

const redComponent = palette.red.at(0);   // at을 사용할 수 있다는 것은 red가 배열이라는 의미이다.
const greenComponent = palette.green.toUpperCase();   // string | RGB 형식으로 지정했기 때문에 toUpperCase 메서드를 사용하지 못한다.