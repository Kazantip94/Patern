type dimension = {
    height: number
    width: number
    depth: number
}

interface IChair {
    height: number
    width: number
    depth: number
    getDimensions(): dimension
}

class Chair implements IChair {
    height = 0
    width = 0
    depth = 0

    createObject(): IChair {
        return this
    }

    getDimensions(): dimension {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        }
    }
}
class ChairFactory {
    static getChair(chair: string): IChair {
        if (chair == 'BigChair') {
            return new BigChair()
        } else if (chair == 'MediumChair') {
            return new MediumChair()
        } else {
            return new SmallChair()
        }
    }
}
class SmallChair extends Chair {
    constructor() {
        super()
        this.height = 40
        this.width = 40
        this.depth = 40
    }
}
class MediumChair extends Chair {
    constructor() {
        super()
        this.height = 60
        this.width = 60
        this.depth = 60
    }
}
class BigChair extends Chair {
    constructor() {
        super()
        this.height = 80
        this.width = 80
        this.depth = 80
    }
}

const CHAIR = ChairFactory.getChair('SmallChair')
console.log(CHAIR.getDimensions())