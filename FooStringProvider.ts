/**
 * Created by Darcy on 3/06/2015.
 */
///<reference path="./FooBar.d.ts"/>
export class FooStringProvider implements MFooBar.IStringProvider {
    getString():string {
        return "foo";
    }
}
