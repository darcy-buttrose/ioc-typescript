/**
 * Created by Darcy on 30/05/2015.
 */
///<reference path="./typings/Systemjs.d.ts"/>
///<reference path="./typings/inversify/inversify.d.ts"/>
///<reference path="./FooBar.d.ts"/>

import {Foo} from './Foo';
import {Bar} from './Bar';
import {FooBar} from './FooBar';

System.import('npm:inversify@1.0.0/source/inversify.ts!').then((m) => {
    // kernel
    var kernel : inversify.KernelInterface = new m.Kernel();

    // bind
    kernel.bind(new m.TypeBinding<MFooBar.IFoo>("IFoo", Foo));
    kernel.bind(new m.TypeBinding<MFooBar.IBar>("IBar", Bar));
    kernel.bind(new m.TypeBinding<MFooBar.IFooBar>("IFooBar", FooBar));

    var foobar : MFooBar.IFooBar = kernel.resolve<MFooBar.IFooBar>("IFooBar");

    foobar.foo.log();
    foobar.bar.log();
    foobar.log();
});