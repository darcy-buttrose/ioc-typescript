///<reference path="./typings/Systemjs.d.ts"/>
///<reference path="./FooBar.d.ts"/>
import m = require('./MFooBar');

    var b : MFooBar.Bar = new m.Bar(new m.BarStringProvider());
    var f : MFooBar.Foo = new m.Foo(new m.FooStringProvider());
    var fb : MFooBar.FooBar = new m.FooBar(f,b);

    fb.foo.log();
    fb.bar.log();
    fb.log();
