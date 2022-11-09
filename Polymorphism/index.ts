/*
    Polymorphism is the third pillar of oop.
    Polymorphism is the ability to present the same interface for differing underlying forms(data types)
*/

/*
    From OCP example:
        Objects of the derived class (circle and rectangle) may be treated
        as objects of a base class ( shape ) in places such as method
        parameters ( area ) method.
        Base classed may define and implement abstract methods and derived classes
        can override them, which means they provide their definition and implementation. 
*/
abstract class Shape {
    public abstract area(): number;
}

class Rectangle extends Shape {
    public width!: number;
    public height!: number;

    public area(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    public radius!: number;

    public area(): number {
        return this.radius * this.radius * Math.PI;
    }
}
class AreaCalculator {
    public area(shapes: Shape[]): number {
        return shapes.reduce((p, c) => p + c.area(), 0);
    }
}
