/**
 * Created by Darcy on 30/05/2015.
 */

export interface IPerson {
    Name : string;
    Age : number;
    Identity: string;
}

export class Person implements IPerson {
    _name : string;
    _age : number;

    constructor(name:string,age:number) {
        this._age = age;
        this._name = name;
    }

    get Name() {
        return this._name;
    }

    get Age() {
        return this._age;
    }

    get Identity() {
        return this._name + ' : ' + this._age;
    }
}

let p : IPerson = new Person('Darcy',45);
console.log(p.Identity);
