/**
 * Created by Darcy on 3/06/2015.
 */
export class BarStringProvider implements MFooBar.IStringProvider {
    getString():string {
        return 'bar';
    }
}
