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
var PixPayment = /** @class */ (function () {
    function PixPayment() {
    }
    PixPayment.prototype.pay = function (amount) {
        console.log("\uD83D\uDCB8 Pagando R$".concat(amount, " via PIX"));
    };
    return PixPayment;
}());
var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment() {
    }
    CreditCardPayment.prototype.pay = function (amount) {
        console.log("\uD83D\uDCB3 Pagando R$".concat(amount, " no Cart\u00E3o de Cr\u00E9dito"));
    };
    return CreditCardPayment;
}());
var PaypalPayment = /** @class */ (function () {
    function PaypalPayment() {
    }
    PaypalPayment.prototype.pay = function (amount) {
        console.log("\uD83C\uDF10 Pagando R$".concat(amount, " via PayPal"));
    };
    return PaypalPayment;
}());
var ApplePayPayment = /** @class */ (function () {
    function ApplePayPayment() {
    }
    ApplePayPayment.prototype.pay = function (amount) {
        console.log("\uD83C\uDF4E Pagando R$".concat(amount, " via ApplePay"));
    };
    return ApplePayPayment;
}());
var PaymentCreator = /** @class */ (function () {
    function PaymentCreator() {
    }
    PaymentCreator.prototype.processPayment = function (amount) {
        var payment = this.createPayment();
        payment.pay(amount);
    };
    return PaymentCreator;
}());
var PixPaymentCreator = /** @class */ (function (_super) {
    __extends(PixPaymentCreator, _super);
    function PixPaymentCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PixPaymentCreator.prototype.createPayment = function () {
        return new PixPayment();
    };
    return PixPaymentCreator;
}(PaymentCreator));
var CreditCardPaymentCreator = /** @class */ (function (_super) {
    __extends(CreditCardPaymentCreator, _super);
    function CreditCardPaymentCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreditCardPaymentCreator.prototype.createPayment = function () {
        return new CreditCardPayment();
    };
    return CreditCardPaymentCreator;
}(PaymentCreator));
var PaypalPaymentCreator = /** @class */ (function (_super) {
    __extends(PaypalPaymentCreator, _super);
    function PaypalPaymentCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaypalPaymentCreator.prototype.createPayment = function () {
        return new PaypalPayment();
    };
    return PaypalPaymentCreator;
}(PaymentCreator));
var ApplePayPaymentCreator = /** @class */ (function (_super) {
    __extends(ApplePayPaymentCreator, _super);
    function ApplePayPaymentCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplePayPaymentCreator.prototype.createPayment = function () {
        return new ApplePayPayment();
    };
    return ApplePayPaymentCreator;
}(PaymentCreator));
var amount = 150.0;
var paymentCreator;
paymentCreator = new PixPaymentCreator();
paymentCreator.processPayment(amount);
paymentCreator = new CreditCardPaymentCreator();
paymentCreator.processPayment(amount);
paymentCreator = new PaypalPaymentCreator();
paymentCreator.processPayment(amount);
paymentCreator = new ApplePayPaymentCreator();
paymentCreator.processPayment(amount);
