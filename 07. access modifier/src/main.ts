class Post {
    // public id: number = 0;
    // public title: string = '';
    // constructor(id: number, title: string) {
    //     this.id = id;
    //     this.title = title;
    // }

    // 위의 생성자를 다음과 같이 가독성 있게 구현할 수 있다.
    constructor(
        public id: number = 0, 
        public title: string = '') {
    }


    getPost() {
        return `postId ${this.id}, postTitle ${this.title}`;
    }
}

const post: Post = new Post(1, "title 1");


// PROTECTED
class PostB extends Post {
    getPost() {
        return this.title;
    }
}


console.log(post.id);
console.log(post.title);



// PRIVATE: 해당 클래스 내에서만 사용이 가능하다.