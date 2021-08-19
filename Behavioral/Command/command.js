var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Switch_commands, _Switch_history, _SwitchOnCommand_light, _SwitchOffCommand_light;
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.turnOn = function () {
        console.log('Light turned ON');
    };
    Light.prototype.turnOff = function () {
        console.log('Light turned OFF');
    };
    return Light;
}());
var Switch = /** @class */ (function () {
    function Switch() {
        _Switch_commands.set(this, void 0);
        _Switch_history.set(this, void 0);
        __classPrivateFieldSet(this, _Switch_commands, {}, "f");
        __classPrivateFieldSet(this, _Switch_history, [], "f");
    }
    Switch.prototype.showHistory = function () {
        __classPrivateFieldGet(this, _Switch_history, "f").forEach(function (row) {
            console.log(row[0] + " : " + row[1]);
        });
    };
    Switch.prototype.register = function (commandName, command) {
        __classPrivateFieldGet(this, _Switch_commands, "f")[commandName] = command;
    };
    Switch.prototype.execute = function (commandName) {
        if (commandName in __classPrivateFieldGet(this, _Switch_commands, "f")) {
            __classPrivateFieldGet(this, _Switch_commands, "f")[commandName].execute();
            __classPrivateFieldGet(this, _Switch_history, "f").push([Date.now(), commandName]);
        }
        else {
            console.log("Command [" + commandName + "] not recognised");
        }
    };
    Switch.prototype.replayLast = function (numberOfCommands) {
        var _this = this;
        var commands = __classPrivateFieldGet(this, _Switch_history, "f").slice(__classPrivateFieldGet(this, _Switch_history, "f").length - numberOfCommands, __classPrivateFieldGet(this, _Switch_history, "f").length);
        commands.forEach(function (command) {
            __classPrivateFieldGet(_this, _Switch_commands, "f")[command[1]].execute();
        });
    };
    return Switch;
}());
_Switch_commands = new WeakMap(), _Switch_history = new WeakMap();
var SwitchOnCommand = /** @class */ (function () {
    function SwitchOnCommand(light) {
        _SwitchOnCommand_light.set(this, void 0);
        __classPrivateFieldSet(this, _SwitchOnCommand_light, light, "f");
    }
    SwitchOnCommand.prototype.execute = function () {
        __classPrivateFieldGet(this, _SwitchOnCommand_light, "f").turnOn();
    };
    return SwitchOnCommand;
}());
_SwitchOnCommand_light = new WeakMap();
var SwitchOffCommand = /** @class */ (function () {
    function SwitchOffCommand(light) {
        _SwitchOffCommand_light.set(this, void 0);
        __classPrivateFieldSet(this, _SwitchOffCommand_light, light, "f");
    }
    SwitchOffCommand.prototype.execute = function () {
        __classPrivateFieldGet(this, _SwitchOffCommand_light, "f").turnOff();
    };
    return SwitchOffCommand;
}());
_SwitchOffCommand_light = new WeakMap();
var LIGHT = new Light();
var SWITCH_ON = new SwitchOnCommand(LIGHT);
var SWITCH_OFF = new SwitchOffCommand(LIGHT);
var SWITCH = new Switch();
SWITCH.register('ON', SWITCH_ON);
SWITCH.register('OFF', SWITCH_OFF);
SWITCH.execute('ON');
SWITCH.execute('OFF');
SWITCH.execute('ON');
SWITCH.execute('OFF');
SWITCH.showHistory();
SWITCH.replayLast(2);
