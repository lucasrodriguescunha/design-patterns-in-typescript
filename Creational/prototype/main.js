var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UIComponent = /** @class */ (function () {
    function UIComponent(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    UIComponent.prototype.clone = function () {
        return new UIComponent(this.width, this.height, this.color);
    };
    UIComponent.prototype.render = function () {
        console.log("\uD83C\uDFA8 Renderizando componente [".concat(this.width, "x").concat(this.height, "] com cor ").concat(this.color));
    };
    return UIComponent;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(width, height, color, label) {
        var _this = _super.call(this, width, height, color) || this;
        _this.label = label;
        return _this;
    }
    Button.prototype.clone = function () {
        return new Button(this.width, this.height, this.color, this.label);
    };
    Button.prototype.render = function () {
        console.log("\uD83D\uDD18 Bot\u00E3o \"".concat(this.label, "\" [").concat(this.width, "x").concat(this.height, "] com cor ").concat(this.color));
    };
    return Button;
}(UIComponent));
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card(width, height, color, title, content) {
        var _this = _super.call(this, width, height, color) || this;
        _this.title = title;
        _this.content = content;
        return _this;
    }
    Card.prototype.clone = function () {
        return new Card(this.width, this.height, this.color, this.title, this.content);
    };
    Card.prototype.render = function () {
        console.log("\uD83D\uDDC2\uFE0F Card \"".concat(this.title, "\" [").concat(this.width, "x").concat(this.height, "] cor ").concat(this.color, " \u2192 ").concat(this.content));
    };
    return Card;
}(UIComponent));
var originalButton = new Button(120, 40, "blue", "Comprar");
originalButton.render();
var clonedButton = originalButton.clone();
clonedButton.label = "Adicionar ao Carrinho";
clonedButton.render();
var originalCard = new Card(300, 200, "white", "Promoção", "50% de desconto em todos os itens!");
originalCard.render();
var clonedCard = originalCard.clone();
clonedCard.title = "Novidade!";
clonedCard.render();
