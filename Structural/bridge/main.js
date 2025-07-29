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
var EmailSender = /** @class */ (function () {
    function EmailSender() {
    }
    EmailSender.prototype.sendMessage = function (to, message) {
        console.log("Enviando e-mail para ".concat(to, ": ").concat(message));
    };
    return EmailSender;
}());
var SMSSender = /** @class */ (function () {
    function SMSSender() {
    }
    SMSSender.prototype.sendMessage = function (to, message) {
        console.log("Enviando SMS para ".concat(to, ": ").concat(message));
    };
    return SMSSender;
}());
var PushNotificationSender = /** @class */ (function () {
    function PushNotificationSender() {
    }
    PushNotificationSender.prototype.sendMessage = function (to, message) {
        console.log("Enviando push para ".concat(to, ": ").concat(message));
    };
    return PushNotificationSender;
}());
var NotificationAbs = /** @class */ (function () {
    function NotificationAbs(sender) {
        this.sender = sender;
    }
    return NotificationAbs;
}());
var AlertNotification = /** @class */ (function (_super) {
    __extends(AlertNotification, _super);
    function AlertNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlertNotification.prototype.notify = function (user, content) {
        console.log('[ALERTA]');
        this.sender.sendMessage(user, content);
    };
    return AlertNotification;
}(NotificationAbs));
var ConfirmationNotification = /** @class */ (function (_super) {
    __extends(ConfirmationNotification, _super);
    function ConfirmationNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfirmationNotification.prototype.notify = function (user, content) {
        console.log('[CONFIRMAÇÃO]');
        this.sender.sendMessage(user, content);
    };
    return ConfirmationNotification;
}(NotificationAbs));
var WarningNotification = /** @class */ (function (_super) {
    __extends(WarningNotification, _super);
    function WarningNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WarningNotification.prototype.notify = function (user, content) {
        console.log('[AVISO');
        this.sender.sendMessage(user, content);
    };
    return WarningNotification;
}(NotificationAbs));
var emailSender = new EmailSender();
var smsSender = new SMSSender();
var pushSender = new PushNotificationSender();
var alertViaEmail = new AlertNotification(emailSender);
var confirmationViaSMS = new ConfirmationNotification(smsSender);
var warningViaPush = new WarningNotification(pushSender);
alertViaEmail.notify("lucas@email.com", "Sistema com falha crítica!");
confirmationViaSMS.notify("99999-9999", "Seu pedido foi confirmado!");
warningViaPush.notify("lucasApp", "Você está com notificações atrasadas.");
