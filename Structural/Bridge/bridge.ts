interface IShapeImplementor {
    drawImplementation(): void
}

class CircleImplementer implements IShapeImplementor {
    drawImplementation(): void {
        console.log('    ******')
        console.log('  **      **')
        console.log(' *          *')
        console.log('*            *')
        console.log('*            *')
        console.log(' *          *')
        console.log('  **      **')
        console.log('    ******')
    }
}

class SquareImplementer implements IShapeImplementor {
    drawImplementation(): void {
        console.log('**************')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('**************')
    }
}

interface IShape {
    draw(): void
}

class Circle implements IShape {
    #implementer: IShapeImplementor

    constructor(implementer: IShapeImplementor) {
        this.#implementer = implementer
    }

    draw(): void {
        this.#implementer.drawImplementation()
    }
}

class Square implements IShape {
    #implementer: IShapeImplementor

    constructor(implementer: IShapeImplementor) {
        this.#implementer = implementer
    }

    draw(): void {
        this.#implementer.drawImplementation()
    }
}

const CIRCLE = new Circle(new CircleImplementer())
CIRCLE.draw()

const SQUARE = new Square(new SquareImplementer())
SQUARE.draw()




