const bodyElement = document.querySelector('body');

// Type Guard
if (bodyElement) {
    bodyElement.innerText = "Hello";
}


// Wrong Example -> Cannot read properties of null 이라는 에러가 발생한다.
// function func(arg: string | null) {  // as string 으로 변환한다고 해도 마찬가지이다.
//     return arg?.toLocaleLowerCase();
// }

function func(arg: string | null) {
    if(arg) {
        return arg.toLowerCase();
    }
}

func('hello');
func(null);