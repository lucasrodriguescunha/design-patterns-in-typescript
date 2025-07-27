interface PaymentProcessor {
  pay(amount: number): void;
}

class StripePaymentProcessor implements PaymentProcessor {
  pay(amount: number): void {
    console.log(`Pagando $${amount} com Stripe`);
  }
}

class MercadoPagoPaymentProcessor implements PaymentProcessor {
  pay(amount: number): void {
    console.log(`Pagando R$${amount} com Mercado Pago`);
  }
}

class PayPalSDK {
  makePayment(valueInDollars: number) {
    console.log(`Pagando R$${valueInDollars} via PayPal`);
  }
}

class PayPalAdapter implements PaymentProcessor {
  constructor(
    private paypal: PayPalSDK
  ) { }

  pay(amount: number): void {
    const usdValue = amount / 5;
    console.log('Convertendo BRL para USD antes do pagamento...');
    this.paypal.makePayment(usdValue);
  }
}

class Checkout {
  constructor(
    private paymentProcessor: PaymentProcessor
  ) { }

  processOrder(amount: number) {
    console.log('Processando pedido...');
    this.paymentProcessor.pay(amount);
    console.log('Pedido finalizado!\n');
  }
}

const stripeProcessor = new StripePaymentProcessor();
const checkout1 = new Checkout(stripeProcessor);
checkout1.processOrder(250);

const paypalSdk = new PayPalSDK();
const paypalAdapter = new PayPalAdapter(paypalSdk);
const checkout2 = new Checkout(paypalAdapter);
checkout2.processOrder(250);

const mercadoPagoProcessor = new MercadoPagoPaymentProcessor();
const checkout3 = new Checkout(mercadoPagoProcessor);
checkout3.processOrder(250);

