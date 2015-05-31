/**
 * Created by Darcy on 31/05/2015.
 */
declare module MFooBar {
    interface IBar {
        log() : void;
    }
    class Bar implements IBar {
        constructor(message:string);
        log() : void;
    }
    interface IFoo {
        log() : void;
    }
    class Foo implements IFoo {
        constructor(message:string);
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
