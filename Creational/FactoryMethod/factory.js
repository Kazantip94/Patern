"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Chair = /** @class */ (function () {
    function Chair() {
        this.height = 0;
        this.width = 0;
        this.depth = 0;
    }
    Chair.prototype.createObject = function () {
        return this;
    };
    Chair.prototype.getDimensions = function () {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height
        };
    };
    return Chair;
}());
var ChairFactory = /** @class */ (function () {
    function ChairFactory() {
    }
    ChairFactory.getChair = function (chair) {
        if (chair == 'BigChair') {
            return new BigChair();
        }
        else if (chair == 'MediumChair') {
            return new MediumChair();
        }
        else {
            return new SmallChair();
        }
    };
    return ChairFactory;
}());
var SmallChair = /** @class */ (function (_super) {
    __extends(SmallChair, _super);
    function SmallChair() {
        var _this = _super.call(this) || this;
        _this.height = 40;
        _this.width = 40;
        _this.depth = 40;
        return _this;
    }
    return SmallChair;
}(Chair));
var MediumChair = /** @class */ (function (_super) {
    __extends(MediumChair, _super);
    function MediumChair() {
        var _this = _super.call(this) || this;
        _this.height = 60;
        _this.width = 60;
        _this.depth = 60;
        return _this;
    }
    return MediumChair;
}(Chair));
var BigChair = /** @class */ (function (_super) {
    __extends(BigChair, _super);
    function BigChair() {
        var _this = _super.call(this) || this;
        _this.height = 80;
        _this.width = 80;
        _this.depth = 80;
        return _this;
    }
    return BigChair;
}(Chair));
var CHAIR = ChairFactory.getChair('SmallChair');
console.log(CHAIR.getDimensions());
