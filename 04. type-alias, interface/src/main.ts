// INTERFACE
interface AnimalA {
    name: string;
}

interface BearA extends AnimalA {
    honey: boolean;
}

const brear1: BearA = {
    name: 'honey bear',
    honey: true
}



// TYPE ALIAS
type AnimalB = {
    name: string;
}

type BearB = AnimalB & {
    honey: boolean;
}

const brear2: BearB = {
    name: 'honey bear',
    honey: true
}



// INTERFACE IMPLEMENTATION
interface IArticle {
    category: string;
    content: string;
}

class ArticleA implements IArticle {
    public category = '';
    public content = '';
}


// TYPE IMPLEMENTATION
type MyArticle = {
    category: string;
    content: string;
}

class ArticleB implements MyArticle {
    public category = '';
    public content = '';
}


// INTERFACE UNION
interface AnimalC {
    name: string;
}

interface BearC {
    honey: boolean;
}

type NewType1 = AnimalC | BearC;

const bear3: NewType1 = {
    name: 'honey bear',
    honey: true
}


// TYPE UNION
type AnimalD = {
    name: string;
}

type BearD = {
    honey: boolean;
}

type NewType2 = AnimalD | BearD;

const bear4: NewType2 = {
    name: 'honey bear',
    honey: true
}