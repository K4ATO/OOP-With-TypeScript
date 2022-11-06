/*
    Interface is used to define an abstract type that contains no data or code,
    but defines behaviors as method signatures.
*/

/*
    interface defines the behavior shared by all classes that implement it.
    the interface doesn't define the details of each if its implementations.
*/

interface Weapon {
    tryHit(fromDistance: number): boolean;
}

/*
    An interface is a contract.
    We must follow its rules.
    Interface rules are the signatures of the methods and properties.
    Implementing an interface can be understood as signing a contract.
*/

class Katana implements Weapon {
    public tryHit(fromDistance: number): boolean {
        return fromDistance <= 2;
    }
}

class Shuriken implements Weapon {
    public tryHit(fromDistance: number): boolean {
        return fromDistance <= 15;
    }
}

const katana = new Katana();
console.log(katana.tryHit(3)); // false

const shuriken = new Shuriken();
console.log(shuriken.tryHit(14)); // true
