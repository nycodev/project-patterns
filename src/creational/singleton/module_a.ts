import { MyDatabasefunction } from "./DB/my-database-function";


const myDatabaseClassic = MyDatabasefunction;

myDatabaseClassic.add({ name: 'Luiz', age: 30 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Eduardo', age: 25 });


myDatabaseClassic.show()

export {myDatabaseClassic};