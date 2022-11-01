// Person Class
class Person {
    public name: string;
    public email: string;

    public constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    public greet(): void {
        console.log('hi!');
    }
}
/*
    Inheritance is one of OOP Pillars,
    allows us to create a new class (child class) that inherits all the properties and methods
    from an existing class (parent class).
    Child class can include additional properties and methods.
*/

/*
    Student class is a child class, extends Person class.
    So Student has name, email and greet like Person.
    Has additional property ( id ) and method ( study() ).
*/
class Student extends Person {
    // additional property
    public id: number;

    public constructor(name: string, email: string, id: number) {
        // Using super() to initialize the properties of the parent class.
        // must be before child class properties initialization.
        super(name, email);
        // student's property initialization
        this.id = id;
    }

    public study(): void {
        console.log("hi, I'm studying.");
    }
}

/*
    Instance from Student class that inherits
*/
const student = new Student('nelson', 'nelson@gmail.com', 123456);
student.study();

/*
    DIT: Depth of inheritance tree.
    We can make a new class that inherits from a class which is already inheriting from another class.
*/

class CsStudent extends Student {
    public course: string;

    // able to inherit from Student and Person classes.
    constructor(name: string, email: string, id: number, course: string) {
        super(name, email, id);
        this.course = course;
    }

    public attendCodingContest(): void {
        console.log('Iam going to attend a coding contest, wish me luck.');
    }
}

const csStudent = new CsStudent('nelson', 'nelson', 123456, 'OOP');
csStudent.attendCodingContest();
