interface IObservable {

    subscribe(observer: IObserver): void

    unsubscribe(observer: IObserver): void

    notify(...args: unknown[]): void
}

class Subject implements IObservable {
    
    #observers: Set<IObserver>
    constructor() {
        this.#observers = new Set()
    }

    subscribe(observer: IObserver) {
        this.#observers.add(observer)
    }

    unsubscribe(observer: IObserver) {
        this.#observers.delete(observer)
    }

    notify(...args: unknown[]) {
        this.#observers.forEach((observer) => {
            observer.notify(...args)
        })
    }
}

interface IObserver {

    notify(...args: unknown[]): void

}

class Observer implements IObserver {
    #id: number

    constructor(observable: IObservable) {
        this.#id = COUNTER++
        observable.subscribe(this)
    }

    notify(...args: unknown[]) {
        console.log(
            `OBSERVER_${this.#id} received ${JSON.stringify(args)}`
        )
    }
}

// The Client
let COUNTER = 1 

const SUBJECT = new Subject()
const OBSERVER_1 = new Observer(SUBJECT)
const OBSERVER_2 = new Observer(SUBJECT)

SUBJECT.notify('First Notification', [1, 2, 3])

SUBJECT.unsubscribe(OBSERVER_2)

SUBJECT.notify('Second Notification', { A: 1, B: 2, C: 3 })