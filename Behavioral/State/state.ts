enum ExampleState {
    Initializing = 'Initializing',
    Started = 'Started',
    Running = 'Running',
    Finished = 'Finished',
}
    
interface IExampleState {
    request(): void
}

class StateContext implements IExampleState{
    #state: ExampleState

    constructor() {
        this.#state = ExampleState.Initializing
    }

    public get state() {
        return this.#state
    }

    public set state(value: ExampleState) {
        switch (value) {
            case ExampleState.Started:
                this.request = Started.prototype.request
                break
            case ExampleState.Running:
                this.request = Running.prototype.request
                break
            case ExampleState.Finished:
                this.request = Finished.prototype.request
                break
        }
        this.#state = value
    }

    request() {
    }
}

class Started implements IExampleState {
    request() {
        console.log(`I am now Started`)
    }
}

class Running implements IExampleState {
    request() {
        console.log(`I am now Running`)
    }
}

class Finished implements IExampleState {
    request() {
        console.log(`I am now Finished`)
    }
}

// The Client
const STATE_CONTEXT = new StateContext()
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state)
STATE_CONTEXT.state = ExampleState.Started
STATE_CONTEXT.request()
STATE_CONTEXT.state = ExampleState.Running
STATE_CONTEXT.request()
STATE_CONTEXT.state = ExampleState.Finished
STATE_CONTEXT.request()
STATE_CONTEXT.state = ExampleState.Started
STATE_CONTEXT.request()
STATE_CONTEXT.state = ExampleState.Running
STATE_CONTEXT.request()
STATE_CONTEXT.state = ExampleState.Finished
STATE_CONTEXT.request()