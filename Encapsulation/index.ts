/*
    Encapsulation is the first pillar of oop principles.
    It works on increasing the level of abstraction of an object.
    Encapsulation is known as information hiding.
*/

/*
    Email validator example from SRP, apply encapsulation on it.
*/

/*
    we don't need to be aware of the existence of the validateEmail method.
    this method could be invisible from outside the Email class.
*/
class Email {
    private email: string;
    public constructor(email: string) {
        if (this.validateEmail(email)) {
            this.email = email;
        } else {
            throw new Error('Invalid email.');
        }
    }
    private validateEmail(email: string): boolean {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    }
}

class Person {
    public constructor(private email: Email) {}
    public greet(): void {
        console.log(`Hi!, this is my email: ${this.email}`);
    }
}

const person = new Person(new Email('person@gmail.com'));

person.greet();
