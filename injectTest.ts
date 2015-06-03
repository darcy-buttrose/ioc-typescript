/**
 * Created by Darcy on 30/05/2015.
 */
///<reference path="./typings/inversify/inversify.d.ts"/>
///<reference path="./FooBar.d.ts"/>

import inversify = require('npm:inversify@1.0.0/source/inversify');
import {Foo} from './Foo';
import {Bar} from './Bar';
import {FooBar} from './FooBar';
import {FooStringProvider} from './FooStringProvider';
import {BarStringProvider} from './BarStringProvider';

    // kernel
    var kernel : inversify.KernelInterface = new inversify.Kernel();

    // bind
    kernel.bind(new inversify.TypeBinding<MFooBar.IStringProvider>("fooMsgProvider", FooStringProvider));
    kernel.bind(new inversify.TypeBinding<MFooBar.IStringProvider>("barMsgProvider", BarStringProvider));
    kernel.bind(new inversify.TypeBinding<MFooBar.IFoo>("foo", Foo));
    kernel.bind(new inversify.TypeBinding<MFooBar.IBar>("bar", Bar));
    kernel.bind(new inversify.TypeBinding<MFooBar.IFooBar>("IFooBar", FooBar));

    var foobar : MFooBar.IFooBar = kernel.resolve<MFooBar.IFooBar>("IFooBar");

    foobar.foo.log();
    foobar.bar.log();
    foobar.log();
