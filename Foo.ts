/**
 * Created by Darcy on 28/05/2015.
 */
///<reference path="./FooBar.d.ts"/>
export class Foo implements MFooBar.IFoo {
    private _message;
    constructor(fooMsgProvider:MFooBar.IStringProvider) {
        this._message = fooMsgProvider.getString();
    }
    public log() : void {
        console.log(this._message);
    }
}