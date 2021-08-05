var Documents = /** @class */ (function () {
    function Documents(name, array) {
        this.name = name;
        this.array = array;
    }
    Documents.prototype.clone = function (mode) {
        var array;
        if (mode === 2) {
            array = JSON.parse(JSON.stringify(this.array));
        }
        else {
            array = Object.assign([], this.array);
        }
        return new Documents(this.name, array);
    };
    return Documents;
}());
var ORIGINAL_DOCUMENT = new Documents('Original', [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
]);
console.log(ORIGINAL_DOCUMENT);
var DOCUMENT_COPY_1 = ORIGINAL_DOCUMENT.clone(1);
DOCUMENT_COPY_1.name = 'Copy 1';
DOCUMENT_COPY_1.array[1][2] = 200;
console.log(DOCUMENT_COPY_1);
console.log(ORIGINAL_DOCUMENT);
console.log();
var DOCUMENT_COPY_2 = ORIGINAL_DOCUMENT.clone(1);
DOCUMENT_COPY_2.name = 'Copy 2';
DOCUMENT_COPY_2.array[1] = [9, 10, 11, 12];
console.log(DOCUMENT_COPY_2);
console.log(ORIGINAL_DOCUMENT);
console.log();
var DOCUMENT_COPY_3 = ORIGINAL_DOCUMENT.clone(2);
DOCUMENT_COPY_3.name = 'Copy 3';
DOCUMENT_COPY_3.array[1][0] = 1234;
console.log(DOCUMENT_COPY_3);
console.log(ORIGINAL_DOCUMENT);
