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
var ToyotaFactory = /** @class */ (function () {
    function ToyotaFactory() {
    }
    ToyotaFactory.prototype.createPremium = function () {
        return new ToyotaPremium();
    };
    ToyotaFactory.prototype.createSport = function () {
        return new ToyotaSport();
    };
    return ToyotaFactory;
}());
var LexusFactory = /** @class */ (function () {
    function LexusFactory() {
    }
    LexusFactory.prototype.createPremium = function () {
        return new LexusPremium();
    };
    LexusFactory.prototype.createSport = function () {
        return new LexusSport();
    };
    return LexusFactory;
}());
var Premium = /** @class */ (function () {
    function Premium() {
        this.type = 'premium';
    }
    return Premium;
}());
var Sport = /** @class */ (function () {
    function Sport() {
        this.type = 'sport';
    }
    return Sport;
}());
var ToyotaPremium = /** @class */ (function (_super) {
    __extends(ToyotaPremium, _super);
    function ToyotaPremium() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheelPos = 'right';
        return _this;
    }
    return ToyotaPremium;
}(Premium));
var ToyotaSport = /** @class */ (function (_super) {
    __extends(ToyotaSport, _super);
    function ToyotaSport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheelPos = 'right';
        return _this;
    }
    return ToyotaSport;
}(Sport));
var LexusPremium = /** @class */ (function (_super) {
    __extends(LexusPremium, _super);
    function LexusPremium() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheelPos = 'left';
        return _this;
    }
    return LexusPremium;
}(Premium));
var LexusSport = /** @class */ (function (_super) {
    __extends(LexusSport, _super);
    function LexusSport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheelPos = 'left';
        return _this;
    }
    return LexusSport;
}(Sport));
var factory = new ToyotaFactory();
var vehicle1 = factory.createPremium();
var vehicle2 = factory.createSport();
console.log(vehicle1);
console.log(vehicle2);
var factory2 = new LexusFactory();
var vehicle3 = factory2.createPremium();
var vehicle4 = factory2.createSport();
console.log(vehicle3);
console.log(vehicle4);
