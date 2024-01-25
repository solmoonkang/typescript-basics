
// 호출 시그니처, CALL SIGNATURE
interface getLikeNumber {
    (like: number): number;
}

interface PostA {
    id: number;
    title: string;
    getLikeNumber: getLikeNumber;
}

const post1 = {
    id: 1,
    title: 'post 1',
    getLikeNumber(like: number) {
        return like;
    }
}

post1.getLikeNumber(1);





// 객체를 위한 인덱스 시그니처, INDEX SIGNATURE
interface PostB {
    [key: string]: unknown;
    id: number;
    title: string;
}

const post2: PostB = {
    id: 2,
    title: 'post 2'
}

post2['description'] = 'post 2 description';
post2['pages'] = 300;



// 배열을 위한 인덱스 시그니처, INDEX SIGNATURE
interface Names {
    [item: number]: string;
}

const userNames: Names = ['John', 'Kim', 'Joe'];
userNames[0] == 'John';