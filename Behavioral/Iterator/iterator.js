var IteratorConcept = /** @class */ (function () {
    function IteratorConcept(aggregates) {
        this.index = 0;
        this.aggregates = aggregates;
    }
    IteratorConcept.prototype.next = function () {
        if (this.index < this.aggregates.length) {
            var aggregate = this.aggregates[this.index];
            this.index += 1;
            return aggregate;
        }
        throw new Error('At End of Iterator');
    };
    IteratorConcept.prototype.hasNext = function () {
        return this.index < this.aggregates.length;
    };
    return IteratorConcept;
}());
var Aggregate = /** @class */ (function () {
    function Aggregate() {
    }
    Aggregate.prototype.method = function () {
        console.log('This method has been invoked');
    };
    return Aggregate;
}());
// The Client
var AGGREGATES = [
    new Aggregate(),
    new Aggregate(),
    new Aggregate(),
    new Aggregate(),
];
var ITERABLE = new IteratorConcept(AGGREGATES);
while (ITERABLE.hasNext()) {
    ITERABLE.next().method();
}
