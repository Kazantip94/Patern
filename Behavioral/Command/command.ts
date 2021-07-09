interface ICommand {
    execute(): void
}

class Light {
    turnOn(): void {
        console.log('Light turned ON')
    }

    turnOff(): void {
        console.log('Light turned OFF')
    }
}

class Switch {
    #commands: { [id: string]: ICommand }
    #history: [number, string][]

    constructor() {
        this.#commands = {}
        this.#history = []
    }

    showHistory(): void {
        
        this.#history.forEach((row) => {
            console.log(`${row[0]} : ${row[1]}`)
        })
    }

    register(commandName: string, command: ICommand): void {
       
        this.#commands[commandName] = command
    }

    execute(commandName: string): void {
       
        if (commandName in this.#commands) {
            this.#commands[commandName].execute()
            this.#history.push([Date.now(), commandName])
        } else {
            console.log(`Command [${commandName}] not recognised`)
        }
    }

    replayLast(numberOfCommands: number): void {
        
        const commands = this.#history.slice(
            this.#history.length - numberOfCommands,
            this.#history.length
        )
        commands.forEach((command) => {
            this.#commands[command[1]].execute()
        })
    }
}

interface ISwitchCommand {
    execute(commandName: string): void
}

class SwitchOnCommand implements ISwitchCommand {
    #light: Light

    constructor(light: Light) {
        this.#light = light
    }

    execute(): void {
        this.#light.turnOn()
    }
}

class SwitchOffCommand implements ISwitchCommand {
    #light: Light

    constructor(light: Light) {
        this.#light = light
    }

    execute(): void {
        this.#light.turnOff()
    }
}

const LIGHT = new Light()

const SWITCH_ON = new SwitchOnCommand(LIGHT)
const SWITCH_OFF = new SwitchOffCommand(LIGHT)

const SWITCH = new Switch()
SWITCH.register('ON', SWITCH_ON)
SWITCH.register('OFF', SWITCH_OFF)

SWITCH.execute('ON')
SWITCH.execute('OFF')
SWITCH.execute('ON')
SWITCH.execute('OFF')

SWITCH.showHistory()

SWITCH.replayLast(2)

