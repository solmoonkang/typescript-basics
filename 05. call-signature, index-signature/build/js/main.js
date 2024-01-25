"use strict";
const post1 = {
    id: 1,
    title: 'post 1',
    getLikeNumber(like) {
        return like;
    }
};
post1.getLikeNumber(1);
const post2 = {
    id: 2,
    title: 'post 2'
};
post2['description'] = 'post 2 description';
post2['pages'] = 300;
const userNames = ['John', 'Kim', 'Joe'];
userNames[0] == 'John';
