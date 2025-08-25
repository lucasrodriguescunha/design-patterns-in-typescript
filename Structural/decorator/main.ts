interface Notifier {
    send(message: string): void;
}

class EmailNotifier implements Notifier {
    send(message: string): void {
        console.log('Sending E-MAIL: ', message);
    }
}

class NotifierDecorator implements Notifier {
    constructor(
        protected wrappee: Notifier
    ) {
    }

    send(message: string): void {
        this.wrappee.send(message);
    }
}

class SMSNotifier extends NotifierDecorator {
    send(message: string): void {
        super.send(message);
        console.log('Sending SMS: ', message);

    }
}

class PushNotifier extends NotifierDecorator {
    send(message: string): void {
        super.send(message);
        console.log('Sending PUSH notification: ', message);
    }
}

class WhatsAppNotifier extends NotifierDecorator {
    send(message: string): void {
        super.send(message);
        console.log('Sending WHATSAPP message: ', message);
    }
}

class SlackNotifier extends NotifierDecorator {
    send(message: string): void {
        super.send(message);
        console.log('Sending SLACK message: ', message);
    }
}

class TelegramNotifier extends NotifierDecorator {
    send(message: string): void {
        super.send(message);
        console.log('Sending TELEGRAM message: ', message);
    }
}

class TeamsNotifier extends NotifierDecorator {
    send(message: string): void {
        super.send(message);
        console.log('Sending TEAMS message: ', message);
    }
}

class LoggingNotifier extends NotifierDecorator {
    private logs: string[] = [];

    send(message: string): void {
        super.send(message);
        this.logs.push(message);
        console.log('Log saved: ', message);
    }

    getLogs(): string[] {
        return this.logs;
    }
}

let notifier: Notifier = new EmailNotifier();
notifier = new SMSNotifier(notifier);
notifier = new PushNotifier(notifier);
notifier = new WhatsAppNotifier(notifier);
notifier = new SlackNotifier(notifier);
notifier = new TelegramNotifier(notifier);
notifier = new TeamsNotifier(notifier);
notifier = new LoggingNotifier(notifier);

notifier.send('Your order has been confirmed!');

const logger = notifier as LoggingNotifier;
console.log('All logs:', logger.getLogs());