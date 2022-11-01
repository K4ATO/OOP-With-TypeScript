/*
    Private
        By using private access modifier,
        properties and methods can only be accessed by the object that owns them.
*/

/*
    In Person, Student example we will redeclare email as a private property
*/
class Person {
    // private property
    private _email: string;

    public constructor(email: string) {
        this._email = email;
    }

    // a getter method to get the private property.
    public getEmail() {
        return this._email;
    }
}

class Student extends Person {
    public shareEmail(): void {
        //console.log(`My email is ${this._email}`);
        // This will give an error,because _email is private in Person class.

        // we can use getEmail() method to get the email.
        console.log(`My email is ${this.getEmail()}`);
    }
}

// Person instance
const person = new Person('nelson@gmail.com');
// accessing email property using Person instance.
// console.log(person._email); will give an error.

// Student instance
const student = new Student('nelson@gmail.com');
// accessing email property using Student instance.
// console.log(student._email); will give an error.
student.shareEmail();
