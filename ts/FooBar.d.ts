/**
 * Created by Darcy on 31/05/2015.
 */
declare module MFooBar {
    interface IStringProvider {
        getString() : string;
    }
    class FooStringProvider implements IStringProvider {
        getString():string;
    }
    class BarStringProvider implements IStringProvider {
        getString():string;
    }
    interface IBar {
        log() : void;
    }
    class Bar implements IBar {
        constructor(barMsgProvider:IStringProvider);
        log() : void;
    }
    interface IFoo {
        log() : void;
    }
    class Foo implements IFoo {
        constructor(fooMsgProvider:IStringProvider);
        log() : void;
    }
    interface IFooBar {
        foo : IFoo;
        bar : IBar;
        log() : void;
    }
    class FooBar implements IFooBar {
        foo : IFoo;
        bar : IBar;
        log() : void;
    }
}
