class myIterator {
    private collection: Array<String | Number> = []
    pos: number

    constructor(collection: Array<String | Number>) {
        this.collection = collection
        this.pos = 0
    }

    next() {
        let done = this.pos >= this.collection.length
        if (!done) {
            const curPos = this.pos
            this.pos++
            return {
                value: this.collection[curPos],
                done
            }
        } else {
            return {
                value: null,
                done
            }
        }
    }

    rewind() {
        this.pos = 0
    }

}

let collection = [7, 'bravo', 'jons', 'Hello', 234, 0.3]

let newIterator = new myIterator(collection)

console.log(newIterator.next())
console.log(newIterator.next())
console.log(newIterator.rewind())
console.log(newIterator.next())
console.log(newIterator.next())
console.log(newIterator.next())
console.log(newIterator.next())
console.log(newIterator.next())
console.log(newIterator.next())
console.log(newIterator.next())
console.log(newIterator.rewind())
console.log(newIterator.next())