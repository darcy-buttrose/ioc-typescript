///<reference path="./typings/Systemjs.d.ts"/>
///<reference path="./FooBar.d.ts"/>
/*
import {Bar} from './Bar';
import {IBar} from './IBar';
var b : IBar = new Bar();
*/

System.import('./MFooBar.ts!').then((m) => {
    var b : MFooBar.Bar = new m.Bar('first');
    var f : MFooBar.Foo = new m.Foo('second');
    var fb : MFooBar.FooBar = new m.FooBar(f,b);

    fb.foo.log();
    fb.bar.log();
    fb.log();
});