class CharacterStyle {
  constructor(
    public fontFamily: string,
    public fontSize: number,
    public color: string
  ) { }
}

class CharacterStyleFactory {
  private styles: { [key: string]: CharacterStyle } = {};

  getStyle(fontFamily: string, fontSize: number, color: string): CharacterStyle {
    const key = `${fontFamily}_${fontSize}_${color}`;
    if (!this.styles[key]) {
      console.log(`Criando novo estilo: ${key}`);
      this.styles[key] = new CharacterStyle(fontFamily, fontSize, color);
    }
    return this.styles[key];
  }
}

class Character {
  constructor(public char: string, public style: CharacterStyle) { }

  display(): void {
    console.log(
      `Caractere: ${this.char} | Fonte: ${this.style.fontFamily}, ${this.style.fontSize}px, Cor: ${this.style.color}`
    );
  }
}

const styleFactory = new CharacterStyleFactory();

const characters: Character[] = [];

characters.push(new Character('H', styleFactory.getStyle('Arial', 12, 'black')));
characters.push(new Character('e', styleFactory.getStyle('Arial', 12, 'black')));
characters.push(new Character('l', styleFactory.getStyle('Arial', 12, 'black')));
characters.push(new Character('l', styleFactory.getStyle('Arial', 12, 'black')));
characters.push(new Character('o', styleFactory.getStyle('Arial', 12, 'black')));

characters.push(new Character('!', styleFactory.getStyle('Times', 14, 'red')));

characters.forEach(c => c.display());