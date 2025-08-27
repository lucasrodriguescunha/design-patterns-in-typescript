class PaymentService {
    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount}`);
    }
}

class InventoryService {
    reserveItem(itemId: string): void {
        console.log(`Reserving item ${itemId} in inventory`);
    }
}

class ShippingService {
    scheduleDelivery(address: string): void {
        console.log(`Scheduling delivery to ${address}`);
    }
}

class NotificationService {
    sendConfirmation(userEmail: string): void {
        console.log(`Sending confirmation email to ${userEmail}`);
    }
}

class OrderFacade {
    private payment: PaymentService;
    private inventory: InventoryService;
    private shipping: ShippingService;
    private notification: NotificationService;

    constructor() {
        this.payment = new PaymentService();
        this.inventory = new InventoryService();
        this.shipping = new ShippingService();
        this.notification = new NotificationService();
    }

    placeOrder(itemId: string, amount: number, address: string, email: string): void {
        console.log('Placing order...');

        this.inventory.reserveItem(itemId);
        this.payment.processPayment(amount);
        this.shipping.scheduleDelivery(address);
        this.notification.sendConfirmation(email);

        console.log('Order successfully placed!');
    }
}

const order = new OrderFacade();
order.placeOrder('ABC123', 99.90, '123 Main St', 'customer@example.com');