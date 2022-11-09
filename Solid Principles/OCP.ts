/*
    Open/Closed Principle (OCP)
        This principle states that software entities should be designed in mind to be open to extension,
        closed for modification.
        we design our classes and methods in a way that enables us to
        extend their behavior (open for extension) in the future without
        modifying their current behavior (closed for modification).
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
