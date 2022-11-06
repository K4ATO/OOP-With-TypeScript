/*
    Abstract classes are base classes that can be extended by other classes and have abstract methods.
    Abstract functions cannot contain an implementation and must be implemented by the derived classes.
*/

abstract class Department {
    constructor(public name: string) {}

    public printName(): void {
        console.log(`This is ${this.name} Department`);
    }

    // Abstract function that must be implemented in derived classes.
    public abstract printMeeting(): void;
}

class ItDepartment extends Department {
    public constructor(name: string) {
        // constructors in derived classes must call super()
        super(name);
    }
    public printMeeting(): void {
        console.log('The IT Department meets each Monday at 10 am.');
    }

    public generateReports(): void {
        console.log('Generating IT reports...');
    }
}

/*
    not possible to create an instance of an abstract class.
*/

const department = new ItDepartment('IT');
department.printName();
department.printMeeting();
department.generateReports();
