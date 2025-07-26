interface Prototype<T> {
  clone(): T;
}

class UIComponent implements Prototype<UIComponent> {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) { }

  clone(): UIComponent {
    return new UIComponent(this.width, this.height, this.color);
  }

  render() {
    console.log(
      `🎨 Renderizando componente [${this.width}x${this.height}] com cor ${this.color}`);
  }
}

class Button extends UIComponent {
  constructor(
    width: number,
    height: number,
    color: string,
    public label: string
  ) {
    super(width, height, color);
  }

  clone(): Button {
    return new Button(this.width, this.height, this.color, this.label);
  }

  render() {
    console.log(
      `🔘 Botão "${this.label}" [${this.width}x${this.height}] com cor ${this.color}`);
  }
}

class Card extends UIComponent {
  constructor(
    width: number,
    height: number,
    color: string,
    public title: string,
    public content: string
  ) {
    super(width, height, color);
  }

  clone(): Card {
    return new Card(
      this.width,
      this.height,
      this.color,
      this.title,
      this.content
    );
  }

  render() {
    console.log(
      `🗂️ Card "${this.title}" [${this.width}x${this.height}] cor ${this.color} → ${this.content}`);
  }
}

const originalButton = new Button(120, 40, "blue", "Comprar");
originalButton.render();

const clonedButton = originalButton.clone();
clonedButton.label = "Adicionar ao Carrinho";
clonedButton.render();

const originalCard = new Card(
  300,
  200,
  "white",
  "Promoção",
  "50% de desconto em todos os itens!"
);
originalCard.render();

const clonedCard = originalCard.clone();
clonedCard.title = "Novidade!";
clonedCard.render();
