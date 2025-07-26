class Order {
  customerName!: string;
  items: string[] = [];
  shippingAddress!: string;
  paymentMethod!: string;
  discountCode?: string;
  shippingCost: number = 0;

  summary() {
    console.log('Resumo do pedido:');
    console.log(`Cliente: ${this.customerName}`);
    console.log(`Itens: ${this.items.join(', ')}`);
    console.log(`Entrega: ${this.shippingAddress}`);
    console.log(`Pagamento: ${this.paymentMethod}`);
    console.log(`Frete: R$${this.shippingCost.toFixed(2)}`);
    if (this.discountCode) {
      console.log(`Cupom aplicado: ${this.discountCode}`);
    }
    console.log('Pedido pronto para processamento!\n');
  }
}

interface OrderBuilder {
  setCustomer(name: string): OrderBuilder;
  addItem(item: string): OrderBuilder;
  setShippingAddress(address: string): OrderBuilder;
  setPaymentMethod(method: string): OrderBuilder;
  applyDiscount(code: string): OrderBuilder;
  setShippingCost(cost: number): OrderBuilder;

  build(): Order;
}

class OnlineOrderBuilder implements OrderBuilder {
  private order: Order;

  constructor() {
    this.order = new Order();
  }

  setCustomer(name: string): OrderBuilder {
    this.order.customerName = name;
    return this;
  }

  addItem(item: string): OrderBuilder {
    this.order.items.push(item);
    return this;
  }

  setShippingAddress(address: string): OrderBuilder {
    this.order.shippingAddress = address;
    return this;
  }

  setPaymentMethod(method: string): OrderBuilder {
    this.order.paymentMethod = method;
    return this;
  }

  applyDiscount(code: string): OrderBuilder {
    this.order.discountCode = code;
    return this;
  }

  setShippingCost(cost: number): OrderBuilder {
    this.order.shippingCost = cost;
    return this;
  }

  build(): Order {
    return this.order;
  }
}

class OrderDirector {
  constructor(private builder: OrderBuilder) { }

  constructBasicOrder(customer: string): Order {
    return this.builder
      .setCustomer(customer)
      .addItem('Produto padrão')
      .setShippingAddress('Endereço padrão')
      .setPaymentMethod('Pix')
      .setShippingCost(0)
      .build();
  }
}

const builder = new OnlineOrderBuilder();

const customOrder = builder
  .setCustomer('Lucas Rodrigues Cunha')
  .addItem('Notebook Gamer')
  .addItem('Mouse sem fio')
  .setShippingAddress('Avenida Sinhô Drummond, 107')
  .setPaymentMethod('Pix')
  .applyDiscount('PROMO10')
  .setShippingCost(29.9)
  .build();

customOrder.summary();

const director = new OrderDirector(new OnlineOrderBuilder());
const basicOrder = director.constructBasicOrder('Maria Rodrigues');
basicOrder.summary();