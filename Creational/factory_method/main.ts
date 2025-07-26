interface Payment {
  pay(amount: number): void;
}

class PixPayment implements Payment {
  pay(amount: number): void {
    console.log(`💸 Pagando R$${amount} via PIX`);
  }
}

class CreditCardPayment implements Payment {
  pay(amount: number): void {
    console.log(`💳 Pagando R$${amount} no Cartão de Crédito`);
  }
}

class PaypalPayment implements Payment {
  pay(amount: number): void {
    console.log(`🌐 Pagando R$${amount} via PayPal`);
  }
}

class ApplePayPayment implements Payment {
  pay(amount: number): void {
    console.log(`🍎 Pagando R$${amount} via ApplePay`);
  }
}

abstract class PaymentCreator {
  abstract createPayment(): Payment;

  processPayment(amount: number) {
    const payment = this.createPayment();
    payment.pay(amount);
  }
}

class PixPaymentCreator extends PaymentCreator {
  createPayment(): Payment {
    return new PixPayment();
  }
}

class CreditCardPaymentCreator extends PaymentCreator {
  createPayment(): Payment {
    return new CreditCardPayment();
  }
}

class PaypalPaymentCreator extends PaymentCreator {
  createPayment(): Payment {
    return new PaypalPayment();
  }
}

class ApplePayPaymentCreator extends PaymentCreator {
  createPayment(): Payment {
    return new ApplePayPayment();
  }
}

const amount = 150.0;
let paymentCreator: PaymentCreator;

paymentCreator = new PixPaymentCreator();
paymentCreator.processPayment(amount);

paymentCreator = new CreditCardPaymentCreator();
paymentCreator.processPayment(amount);

paymentCreator = new PaypalPaymentCreator();
paymentCreator.processPayment(amount);

paymentCreator = new ApplePayPaymentCreator();
paymentCreator.processPayment(amount);