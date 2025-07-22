var LightButton = /** @class */ (function () {
    function LightButton() {
    }
    LightButton.prototype.render = function () {
        console.log('☀️ Renderizando botão CLARO');
    };
    return LightButton;
}());
var LightCheckbox = /** @class */ (function () {
    function LightCheckbox() {
    }
    LightCheckbox.prototype.render = function () {
        console.log('☀️ Renderizando checkbox CLARO');
    };
    return LightCheckbox;
}());
var DarkButton = /** @class */ (function () {
    function DarkButton() {
    }
    DarkButton.prototype.render = function () {
        console.log('🌙 Renderizando botão ESCURO');
    };
    return DarkButton;
}());
var DarkCheckbox = /** @class */ (function () {
    function DarkCheckbox() {
    }
    DarkCheckbox.prototype.render = function () {
        console.log('🌙 Renderizando checkbox ESCURO');
    };
    return DarkCheckbox;
}());
var LightUIFactory = /** @class */ (function () {
    function LightUIFactory() {
    }
    LightUIFactory.prototype.createButton = function () {
        return new LightButton();
    };
    LightUIFactory.prototype.createCheckbox = function () {
        return new LightCheckbox();
    };
    return LightUIFactory;
}());
var DarkUIFactory = /** @class */ (function () {
    function DarkUIFactory() {
    }
    DarkUIFactory.prototype.createButton = function () {
        return new DarkButton();
    };
    DarkUIFactory.prototype.createCheckbox = function () {
        return new DarkCheckbox();
    };
    return DarkUIFactory;
}());
var Application = /** @class */ (function () {
    function Application(factory) {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    }
    Application.prototype.renderUI = function () {
        this.button.render();
        this.checkbox.render();
    };
    return Application;
}());
var userTheme = 'dark';
var factory;
if (userTheme === 'light') {
    factory = new DarkUIFactory();
}
else {
    factory = new LightUIFactory();
}
var app = new Application(factory);
app.renderUI();
