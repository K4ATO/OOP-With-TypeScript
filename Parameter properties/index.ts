/*
    We can use an alternative syntax of defining properties 
    and initializing them in TypeScript.
*/

/*
    We will rewrite Person class and define its properties with another syntax.
 */

class Person {
    /*
        This syntax allows us to declare the properties and initialize them
        using class constructor in a less verbose way.
    */
    public constructor(private name: string, private email: string) {}

    // greet method
    public greet() {
        console.log('hi!');
    }
}
