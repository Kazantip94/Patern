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
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.pay = function (orderPrice) {
        if (this.canPay(orderPrice)) {
            console.log("Paid " + orderPrice + " using " + this.name);
        }
        else if (this.incomer) {
            console.log("Cannot pay using " + this.name);
            this.incomer.pay(orderPrice);
        }
        else {
            console.log('Unfortunately, not enough money');
        }
    };
    Account.prototype.canPay = function (amount) {
        return this.balance >= amount;
    };
    Account.prototype.setNext = function (account) {
        this.incomer = account;
    };
    return Account;
}());
;
var Master = /** @class */ (function (_super) {
    __extends(Master, _super);
    function Master(balance) {
        var _this = _super.call(this) || this;
        _this.name = 'Master Card';
        _this.balance = balance;
        return _this;
    }
    return Master;
}(Account));
;
var Paypal = /** @class */ (function (_super) {
    __extends(Paypal, _super);
    function Paypal(balance) {
        var _this = _super.call(this) || this;
        _this.name = 'Paypal';
        _this.balance = balance;
        return _this;
    }
    return Paypal;
}(Account));
;
var Qiwi = /** @class */ (function (_super) {
    __extends(Qiwi, _super);
    function Qiwi(balance) {
        var _this = _super.call(this) || this;
        _this.name = 'Qiwi';
        _this.balance = balance;
        return _this;
    }
    return Qiwi;
}(Account));
;
var master = new Master(100);
var paypal = new Paypal(200);
var qiwi = new Qiwi(500);
master.setNext(paypal);
paypal.setNext(qiwi);
master.pay(438);
