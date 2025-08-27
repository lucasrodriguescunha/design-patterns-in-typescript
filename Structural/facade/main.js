var PaymentService = /** @class */ (function () {
    function PaymentService() {
    }
    PaymentService.prototype.processPayment = function (amount) {
        console.log("Processing payment of $".concat(amount));
    };
    return PaymentService;
}());
var InventoryService = /** @class */ (function () {
    function InventoryService() {
    }
    InventoryService.prototype.reserveItem = function (itemId) {
        console.log("Reserving item ".concat(itemId, " in inventory"));
    };
    return InventoryService;
}());
var ShippingService = /** @class */ (function () {
    function ShippingService() {
    }
    ShippingService.prototype.scheduleDelivery = function (address) {
        console.log("Scheduling delivery to ".concat(address));
    };
    return ShippingService;
}());
var NotificationService = /** @class */ (function () {
    function NotificationService() {
    }
    NotificationService.prototype.sendConfirmation = function (userEmail) {
        console.log("Sending confirmation email to ".concat(userEmail));
    };
    return NotificationService;
}());
var OrderFacade = /** @class */ (function () {
    function OrderFacade() {
        this.payment = new PaymentService();
        this.inventory = new InventoryService();
        this.shipping = new ShippingService();
        this.notification = new NotificationService();
    }
    OrderFacade.prototype.placeOrder = function (itemId, amount, address, email) {
        console.log('Placing order...');
        this.inventory.reserveItem(itemId);
        this.payment.processPayment(amount);
        this.shipping.scheduleDelivery(address);
        this.notification.sendConfirmation(email);
        console.log('Order successfully placed!');
    };
    return OrderFacade;
}());
var order = new OrderFacade();
order.placeOrder('ABC123', 99.90, '123 Main St', 'customer@example.com');
