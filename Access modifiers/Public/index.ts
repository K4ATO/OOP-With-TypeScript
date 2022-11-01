/*
    Access modifiers allows us to restrict the access to
    the properties and methods of a class using:
        - public
        - private
        - protected
*/

/*
    Public
        By using the public access modifier,
        the method or property can be accessed by other objects.
 */

/*
    In Person, Student example we used Public with email property.
*/
class Person {
    public email: string;
    public constructor(email: string) {
        this.email = email;
    }
}

class Student extends Person {
    public id: number;

    public constructor(email: string, id: number) {
        super(email);
        this.id = id;
    }
}

/*
    When we create instance of Person and Student classes,
    we will be able to access 'email' and for example log it.
*/

// Person instance
const person = new Person('osama.s.abdelmoniem@gmail.com');
// accessing email property using Person instance
console.log(person.email);

// Student instance
const student = new Student('osama.s.abdelmoniem@gmail.com', 123456);
// accessing email property using Student instance
console.log(student.email);
