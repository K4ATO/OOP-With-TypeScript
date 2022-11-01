/*
    Simple Class declaration and usage in TypeScript.
        - We use classes to represent the type of an object.
        - Composed of Properties (attributes), and Methods.
        - Properties are used to describe the object's characteristics.
        - Methods are used to describe its behavior.
*/

/*
    Person Class has:
        - 2 properties ( name and email )
        - 2 methods ( constructor and greet )
*/
class Person {
    // properties declaration with access modifiers.
    public name: string;
    public email: string;

    /*
        Constructor is a special method used to create instances of our class.
    */
    public constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    // greet method
    public greet() {
        console.log('hi!');
    }
}

/*
    - Creating and instance of Person class.
    - Passing our 2 properties ( name, email )
    - Calling greet() method with 'me' object.
*/
const me = new Person('nelson', 'nelson@gmail.com');
me.greet();
