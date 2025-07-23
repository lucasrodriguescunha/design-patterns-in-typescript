var Order = /** @class */ (function () {
    function Order() {
        this.items = [];
        this.shippingCost = 0;
    }
    Order.prototype.summary = function () {
        console.log('Resumo do pedido:');
        console.log("Cliente: ".concat(this.customerName));
        console.log("Itens: ".concat(this.items.join(', ')));
        console.log("Entrega: ".concat(this.shippingAddress));
        console.log("Pagamento: ".concat(this.paymentMethod));
        console.log("Frete: R$".concat(this.shippingCost.toFixed(2)));
        if (this.discountCode) {
            console.log("Cupom aplicado: ".concat(this.discountCode));
        }
        console.log('Pedido pronto para processamento!\n');
    };
    return Order;
}());
var OnlineOrderBuilder = /** @class */ (function () {
    function OnlineOrderBuilder() {
        this.order = new Order();
    }
    OnlineOrderBuilder.prototype.setCustomer = function (name) {
        this.order.customerName = name;
        return this;
    };
    OnlineOrderBuilder.prototype.addItem = function (item) {
        this.order.items.push(item);
        return this;
    };
    OnlineOrderBuilder.prototype.setShippingAddress = function (address) {
        this.order.shippingAddress = address;
        return this;
    };
    OnlineOrderBuilder.prototype.setPaymentMethod = function (method) {
        this.order.paymentMethod = method;
        return this;
    };
    OnlineOrderBuilder.prototype.applyDiscount = function (code) {
        this.order.discountCode = code;
        return this;
    };
    OnlineOrderBuilder.prototype.setShippingCost = function (cost) {
        this.order.shippingCost = cost;
        return this;
    };
    OnlineOrderBuilder.prototype.build = function () {
        return this.order;
    };
    return OnlineOrderBuilder;
}());
var OrderDirector = /** @class */ (function () {
    function OrderDirector(builder) {
        this.builder = builder;
    }
    OrderDirector.prototype.constructBasicOrder = function (customer) {
        return this.builder
            .setCustomer(customer)
            .addItem('Produto padrão')
            .setShippingAddress('Endereço padrão')
            .setPaymentMethod('Pix')
            .setShippingCost(0)
            .build();
    };
    return OrderDirector;
}());
var builder = new OnlineOrderBuilder();
var customOrder = builder
    .setCustomer('Lucas Rodrigues Cunha')
    .addItem('Notebook Gamer')
    .addItem('Mouse sem fio')
    .setShippingAddress('Avenida Sinhô Drummond, 107')
    .setPaymentMethod('Pix')
    .applyDiscount('PROMO10')
    .setShippingCost(29.9)
    .build();
customOrder.summary();
var director = new OrderDirector(new OnlineOrderBuilder());
var basicOrder = director.constructBasicOrder('Maria Rodrigues');
basicOrder.summary();
