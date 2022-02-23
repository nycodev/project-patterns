import { MyDatabasefunction } from './DB/my-database-function';
import { myDatabaseClassic as myDatabaseClassicFromModuleA} from './module_a'

const myDatabaseClassic = MyDatabasefunction;

myDatabaseClassic.add({ name: 'Juliano', age: 30 });
myDatabaseClassic.add({ name: 'Luana', age: 50 });
myDatabaseClassic.add({ name: 'Lisbella', age: 25 });


myDatabaseClassic.show()
console.log(myDatabaseClassic === myDatabaseClassicFromModuleA)