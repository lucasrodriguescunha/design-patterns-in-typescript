var CharacterStyle = /** @class */ (function () {
    function CharacterStyle(fontFamily, fontSize, color) {
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.color = color;
    }
    return CharacterStyle;
}());
var CharacterStyleFactory = /** @class */ (function () {
    function CharacterStyleFactory() {
        this.styles = {};
    }
    CharacterStyleFactory.prototype.getStyle = function (fontFamily, fontSize, color) {
        var key = "".concat(fontFamily, "_").concat(fontSize, "_").concat(color);
        if (!this.styles[key]) {
            console.log("Criando novo estilo: ".concat(key));
            this.styles[key] = new CharacterStyle(fontFamily, fontSize, color);
        }
        return this.styles[key];
    };
    return CharacterStyleFactory;
}());
var Character = /** @class */ (function () {
    function Character(char, style) {
        this.char = char;
        this.style = style;
    }
    Character.prototype.display = function () {
        console.log("Caractere: ".concat(this.char, " | Fonte: ").concat(this.style.fontFamily, ", ").concat(this.style.fontSize, "px, Cor: ").concat(this.style.color));
    };
    return Character;
}());
var styleFactory = new CharacterStyleFactory();
var characters = [];
characters.push(new Character('H', styleFactory.getStyle('Arial', 12, 'black')));
characters.push(new Character('e', styleFactory.getStyle('Arial', 12, 'black')));
characters.push(new Character('l', styleFactory.getStyle('Arial', 12, 'black')));
characters.push(new Character('l', styleFactory.getStyle('Arial', 12, 'black')));
characters.push(new Character('o', styleFactory.getStyle('Arial', 12, 'black')));
characters.push(new Character('!', styleFactory.getStyle('Times', 14, 'red')));
characters.forEach(function (c) { return c.display(); });
