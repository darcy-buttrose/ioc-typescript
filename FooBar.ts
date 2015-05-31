/**
 * Created by Darcy on 28/05/2015.
 */
///<reference path="./FooBar.d.ts"/>
export class FooBar implements MFooBar.IFooBar {
    public foo : MFooBar.IFoo;
    public bar : MFooBar.IBar;

    log():void {
        console.log('foobar');
    }

    constructor(IFoo : MFooBar.IFoo, IBar : MFooBar.IBar) {
        this.foo = IFoo;
        this.bar = IBar;
    }
}