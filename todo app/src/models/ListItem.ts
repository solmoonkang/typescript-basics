export interface IListItem {
    id: string;
    item: string;
    checked: boolean;
}

export default class ListItem implements IListItem {

    constructor(
        private _id: string = '',
        private _item: string ='',
        private _checked: boolean = false
    ) { }

    // GET & SET ID
    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    // GET & SET ITEM
    get item(): string {
        return this._item;
    }

    set item(item: string) {
        this._item = item;
    }

    // GET & SET CHECKED
    get checked(): boolean {
        return this._checked;
    }

    set checked(checked: boolean) {
        this._checked = checked;
    }
}