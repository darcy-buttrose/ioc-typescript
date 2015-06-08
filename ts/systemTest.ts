/**
 * Created by Darcy on 4/06/2015.
 */
export class Person {
    private _name;
    constructor(name : string) {
        this._name = name;
    }
    get Name() : string {
        return this._name;
    }
}
