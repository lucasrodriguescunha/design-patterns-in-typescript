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
var EmailNotifier = /** @class */ (function () {
    function EmailNotifier() {
    }
    EmailNotifier.prototype.send = function (message) {
        console.log('Sending E-MAIL: ', message);
    };
    return EmailNotifier;
}());
var NotifierDecorator = /** @class */ (function () {
    function NotifierDecorator(wrappee) {
        this.wrappee = wrappee;
    }
    NotifierDecorator.prototype.send = function (message) {
        this.wrappee.send(message);
    };
    return NotifierDecorator;
}());
var SMSNotifier = /** @class */ (function (_super) {
    __extends(SMSNotifier, _super);
    function SMSNotifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSNotifier.prototype.send = function (message) {
        _super.prototype.send.call(this, message);
        console.log('Sending SMS: ', message);
    };
    return SMSNotifier;
}(NotifierDecorator));
var PushNotifier = /** @class */ (function (_super) {
    __extends(PushNotifier, _super);
    function PushNotifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PushNotifier.prototype.send = function (message) {
        _super.prototype.send.call(this, message);
        console.log('Sending PUSH notification: ', message);
    };
    return PushNotifier;
}(NotifierDecorator));
var WhatsAppNotifier = /** @class */ (function (_super) {
    __extends(WhatsAppNotifier, _super);
    function WhatsAppNotifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WhatsAppNotifier.prototype.send = function (message) {
        _super.prototype.send.call(this, message);
        console.log('Sending WHATSAPP message: ', message);
    };
    return WhatsAppNotifier;
}(NotifierDecorator));
var SlackNotifier = /** @class */ (function (_super) {
    __extends(SlackNotifier, _super);
    function SlackNotifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlackNotifier.prototype.send = function (message) {
        _super.prototype.send.call(this, message);
        console.log('Sending SLACK message: ', message);
    };
    return SlackNotifier;
}(NotifierDecorator));
var TelegramNotifier = /** @class */ (function (_super) {
    __extends(TelegramNotifier, _super);
    function TelegramNotifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TelegramNotifier.prototype.send = function (message) {
        _super.prototype.send.call(this, message);
        console.log('Sending TELEGRAM message: ', message);
    };
    return TelegramNotifier;
}(NotifierDecorator));
var TeamsNotifier = /** @class */ (function (_super) {
    __extends(TeamsNotifier, _super);
    function TeamsNotifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeamsNotifier.prototype.send = function (message) {
        _super.prototype.send.call(this, message);
        console.log('Sending TEAMS message: ', message);
    };
    return TeamsNotifier;
}(NotifierDecorator));
var LoggingNotifier = /** @class */ (function (_super) {
    __extends(LoggingNotifier, _super);
    function LoggingNotifier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logs = [];
        return _this;
    }
    LoggingNotifier.prototype.send = function (message) {
        _super.prototype.send.call(this, message);
        this.logs.push(message);
        console.log('Log saved: ', message);
    };
    LoggingNotifier.prototype.getLogs = function () {
        return this.logs;
    };
    return LoggingNotifier;
}(NotifierDecorator));
var notifier = new EmailNotifier();
notifier = new SMSNotifier(notifier);
notifier = new PushNotifier(notifier);
notifier = new WhatsAppNotifier(notifier);
notifier = new SlackNotifier(notifier);
notifier = new TelegramNotifier(notifier);
notifier = new TeamsNotifier(notifier);
notifier = new LoggingNotifier(notifier);
notifier.send('Your order has been confirmed!');
var logger = notifier;
console.log('All logs:', logger.getLogs());
