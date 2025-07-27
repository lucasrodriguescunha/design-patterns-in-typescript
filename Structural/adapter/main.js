var StripePaymentProcessor = /** @class */ (function () {
    function StripePaymentProcessor() {
    }
    StripePaymentProcessor.prototype.pay = function (amount) {
        console.log("Pagando $".concat(amount, " com Stripe"));
    };
    return StripePaymentProcessor;
}());
var MercadoPagoPaymentProcessor = /** @class */ (function () {
    function MercadoPagoPaymentProcessor() {
    }
    MercadoPagoPaymentProcessor.prototype.pay = function (amount) {
        console.log("Pagando R$".concat(amount, " com Mercado Pago"));
    };
    return MercadoPagoPaymentProcessor;
}());
var PayPalSDK = /** @class */ (function () {
    function PayPalSDK() {
    }
    PayPalSDK.prototype.makePayment = function (valueInDollars) {
        console.log("Pagando R$".concat(valueInDollars, " via PayPal"));
    };
    return PayPalSDK;
}());
var PayPalAdapter = /** @class */ (function () {
    function PayPalAdapter(paypal) {
        this.paypal = paypal;
    }
    PayPalAdapter.prototype.pay = function (amount) {
        var usdValue = amount / 5;
        console.log('Convertendo BRL para USD antes do pagamento...');
        this.paypal.makePayment(usdValue);
    };
    return PayPalAdapter;
}());
var Checkout = /** @class */ (function () {
    function Checkout(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }
    Checkout.prototype.processOrder = function (amount) {
        console.log('Processando pedido...');
        this.paymentProcessor.pay(amount);
        console.log('Pedido finalizado!\n');
    };
    return Checkout;
}());
var stripeProcessor = new StripePaymentProcessor();
var checkout1 = new Checkout(stripeProcessor);
checkout1.processOrder(250);
var paypalSdk = new PayPalSDK();
var paypalAdapter = new PayPalAdapter(paypalSdk);
var checkout2 = new Checkout(paypalAdapter);
checkout2.processOrder(250);
var mercadoPagoProcessor = new MercadoPagoPaymentProcessor();
var checkout3 = new Checkout(mercadoPagoProcessor);
checkout3.processOrder(250);
