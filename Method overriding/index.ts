/*
    In inheritance, sometimes we will need a child class to provide
    a specific implementation of a method that is already provided by 
    its parent class. 
*/

/*
    We will use Person, Student example.
*/

class Person {
    public constructor(protected _name: string, protected _email: string) {}

    public greet(): void {
        console.log(`Hi, iam ${this._name}, this is my email: ${this._email}`);
    }
}

class Student extends Person {
    public constructor(
        _name: string,
        _email: string,
        protected course: string
    ) {
        super(_name, _email);
        this.course = course;
    }

    /*
        Here we need to add student's course,
        so we use super() to provide Person class implementation of greet()
        then write our own implementation for Student's greet()
    */

    // if we don't need Person's greet implementation,
    // don't use super().
    public greet(): void {
        super.greet();
        console.log(`I'm learning ${this.course}`);
    }
}

const student = new Student('nelson', 'nelson@gmail.com', 'oop');
student.greet();
