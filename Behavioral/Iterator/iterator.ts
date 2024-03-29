interface IIterator<T> {
    current(): T
    key(): number
    next (): T
    rewind(): void
    valid(): boolean
}

interface Aggregator {
    getIterator(): IIterator<string>
}

class myIterator implements IIterator<string> {
    private collection: WordsCollection
    private position: number = 0
    private reverse: boolean = false

    constructor(collection: WordsCollection, reverse: boolean = false) {
        this.collection = collection
        this.reverse = reverse

        if(reverse) {
            this.position = collection.getCount() -1
        }
    }

    next(): string {
        const item = this.collection.getItems()[this.position]
        this.position += this.reverse ? -1 : 1
        return item
    }

    rewind() {
        this.position = this.reverse ?
        this.collection.getCount() - 1 : 0
    }

    valid(): boolean {
        if (this.reverse) {
            return this.position >= 0
        }
        return this.position < this.collection.getCount()
    }
    
    current(): string {
        return this.collection.getItems()[this.position];
    }

    key(): number {
        return this.position;
    }

}

class WordsCollection implements Aggregator {
    private items: string[] = []

    getItems(): string[] {
        return this.items
    }

    getCount(): number {
        return this.items.length
    }

    addItem(item: string): void {
        this.items.push(item)
    }

    getIterator(): IIterator<string> {
        return new myIterator(this)
    }

    getReverseIterator(): IIterator<string> {
        return new myIterator(this, true)
    }
}

    
const collection = new WordsCollection()
collection.addItem('First')
collection.addItem('Second')
collection.addItem('Third')

const iterator = collection.getIterator()

console.log('Straight traversal:')
while (iterator.valid()) {
    console.log(iterator.next())
}

console.log('')
console.log('Reverse traversal:')
const reverseIterator = collection.getReverseIterator()
while (reverseIterator.valid()) {
    console.log(reverseIterator.next())
}

