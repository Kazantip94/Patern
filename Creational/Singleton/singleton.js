var Singleton = /** @class */ (function () {
    function Singleton(id) {
        this.id = id;
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
    return Singleton;
}());
var OBJECT1 = new Singleton(1);
var OBJECT2 = new Singleton(2);
console.log(OBJECT1 === OBJECT2);
console.log(OBJECT1.id);
console.log(OBJECT2.id);
