interface NotificationSender {
  sendMessage(to: string, message: string): void;
}

class EmailSender implements NotificationSender {
  sendMessage(to: string, message: string): void {
    console.log(`Enviando e-mail para ${to}: ${message}`);
  }
}

class SMSSender implements NotificationSender {
  sendMessage(to: string, message: string): void {
    console.log(`Enviando SMS para ${to}: ${message}`);
  }
}

class PushNotificationSender implements NotificationSender {
  sendMessage(to: string, message: string): void {
    console.log(`Enviando push para ${to}: ${message}`);
  }
}

abstract class NotificationAbs {
  constructor(protected sender: NotificationSender) { }

  abstract notify(user: string, content: string): void;
}

class AlertNotification extends NotificationAbs {
  notify(user: string, content: string): void {
    console.log('[ALERTA]');
    this.sender.sendMessage(user, content);
  }
}

class ConfirmationNotification extends NotificationAbs {
  notify(user: string, content: string): void {
    console.log('[CONFIRMAÇÃO]');
    this.sender.sendMessage(user, content);
  }
}

class WarningNotification extends NotificationAbs {
  notify(user: string, content: string): void {
    console.log('[AVISO]');
    this.sender.sendMessage(user, content);
  }
}

const emailSender = new EmailSender();
const smsSender = new SMSSender();
const pushSender = new PushNotificationSender();

const alertViaEmail = new AlertNotification(emailSender);
const confirmationViaSMS = new ConfirmationNotification(smsSender);
const warningViaPush = new WarningNotification(pushSender);

alertViaEmail.notify("lucas@email.com", "Sistema com falha crítica!");
confirmationViaSMS.notify("99999-9999", "Seu pedido foi confirmado!");
warningViaPush.notify("lucasApp", "Você está com notificações atrasadas.");



