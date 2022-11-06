/*
    Single Responsibility Principle (SRP)
        This principle states that a class should focus on one unique task
            (have only one responsibility)
*/

/*
    Adding an Email validation to the Person class.
    so following SRP we need to make a class that is responsible for validating the email.
*/

class Email {
    public static validateEmail(email: string): boolean {
        const regex = /S+@S+.S+/;
        return regex.test(email);
    }
}
class Person {
    public email: string;

    public constructor(email: string) {
        if (Email.validateEmail(email) === false) {
            throw new Error('Invalid email.');
        }
        this.email = email;
    }
    public greet(): void {
        console.log(`Hi!, this is my email: ${this.email}`);
    }
}

const person = new Person('person@gmail.com');

person.greet();
