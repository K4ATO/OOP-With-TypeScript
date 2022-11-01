/*
    Protected
        By using protected access modifier,
        properties and methods can only be accessed by the object that owns them
        or instances of the derived classes.
*/

/*
    In Person, Student example we will redeclare email as a protected property
*/

class Person {
    // protected property
    protected _email: string;

    public constructor(email: string) {
        this._email = email;
    }
}

class Student extends Person {
    public shareEmail(): void {
        // accessing _email protected property and it works.
        console.log(this._email);
    }
}

/*
    If we create instance of Person and Student classes,
    _email can be access by shareEmail() method.
    We cant access _email with the object because its protected.
*/
const person = new Person('nelson@gmail.com');
// console.log(person._email); will give an error

const student = new Student('nelson@gmail.com');
// console.log(student._email) will give an error
student.shareEmail();
