interface Button {
  render(): void;
}

interface Checkbox {
  render(): void;
}

class LightButton implements Button {
  render(): void {
    console.log('☀️ Renderizando botão CLARO');
  }
}

class LightCheckbox implements Checkbox {
  render(): void {
    console.log('☀️ Renderizando checkbox CLARO');
  }
}

class DarkButton implements Button {
  render(): void {
    console.log('🌙 Renderizando botão ESCURO');
  }
}

class DarkCheckbox implements Checkbox {
  render(): void {
    console.log('🌙 Renderizando checkbox ESCURO');
  }
}

interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class LightUIFactory implements UIFactory {
  createButton(): Button {
    return new LightButton();
  }
  createCheckbox(): Checkbox {
    return new LightCheckbox();
  }
}

class DarkUIFactory implements UIFactory {
  createButton(): Button {
    return new DarkButton();
  }
  createCheckbox(): Checkbox {
    return new DarkCheckbox();
  }
}

class Application {
  private button: Button;
  private checkbox: Checkbox;

  constructor(factory: UIFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }

  renderUI() {
    this.button.render();
    this.checkbox.render();
  }
}

const userTheme: string = 'dark';

let factory: UIFactory;

if (userTheme === 'light') {
  factory = new DarkUIFactory();
} else {
  factory = new LightUIFactory();
}

const app = new Application(factory);
app.renderUI();