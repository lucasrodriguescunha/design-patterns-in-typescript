// Interface comum para qualquer tipo de canal
interface Channel {
    connect(): void;

    send(data: string): void;

    disconnect(): void;
}

// Implementação concreta de um canal TCP
class TCPChannel implements Channel {
    connect(): void {
        console.log("Conectando via TCP...");
    }

    send(data: string): void {
        console.log(`Enviando via TCP: ${data}`);
    }

    disconnect(): void {
        console.log("Desconectando TCP...");
    }
}

// Implementação concreta de um canal UDP
class UDPChannel implements Channel {
    connect(): void {
        console.log("Conectando via UDP...");
    }

    send(data: string): void {
        console.log(`Enviando via UDP: ${data}`);
    }

    disconnect(): void {
        console.log("Desconectando UDP...");
    }
}

// Implementação concreta de um canal IP
class IPChannel implements Channel {
    connect(): void {
        console.log("Conectando via IP...");
    }

    send(data: string): void {
        console.log(`Enviando via IP: ${data}`);
    }

    disconnect(): void {
        console.log("Desconectando IP...");
    }
}

// Fábrica estática - decide o tipo de canal a ser criado
class ChannelFactory {
    static create(type: "TCP" | "UDP" | "IP"): Channel {
        if (type === "TCP") {
            return new TCPChannel();
        } else if (type === "UDP") {
            return new UDPChannel();
        } else {
            return new IPChannel();
        }
    }
}

// Código cliente - não sabe qual canal está sendo usado
function sendMessage(message: string, protocol: "TCP" | "UDP" | "IP") {
    const channel = ChannelFactory.create(protocol);
    channel.connect();
    channel.send(message);
    channel.disconnect();
}

// Testando com protocolos diferentes
sendMessage("Olá servidor!", "TCP");
sendMessage("Olá servidor!", "IP");
console.log("-------------------------");
sendMessage("Ping!", "UDP");
sendMessage("Ping!", "IP");


