/**
 * Created by Darcy on 28/05/2015.
 */
///<reference path="./FooBar.d.ts"/>
export class Bar implements MFooBar.IBar {
    private _message;
    constructor(barMsgProvider:MFooBar.IStringProvider) {
        this._message = barMsgProvider.getString();
    }
    public log() : void {
        console.log(this._message);
    }
}