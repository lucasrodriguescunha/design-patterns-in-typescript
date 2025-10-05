// Implementação concreta de um canal TCP
var TCPChannel = /** @class */ (function () {
    function TCPChannel() {
    }
    TCPChannel.prototype.connect = function () {
        console.log("Conectando via TCP...");
    };
    TCPChannel.prototype.send = function (data) {
        console.log("Enviando via TCP: ".concat(data));
    };
    TCPChannel.prototype.disconnect = function () {
        console.log("Desconectando TCP...");
    };
    return TCPChannel;
}());
// Implementação concreta de um canal UDP
var UDPChannel = /** @class */ (function () {
    function UDPChannel() {
    }
    UDPChannel.prototype.connect = function () {
        console.log("Conectando via UDP...");
    };
    UDPChannel.prototype.send = function (data) {
        console.log("Enviando via UDP: ".concat(data));
    };
    UDPChannel.prototype.disconnect = function () {
        console.log("Desconectando UDP...");
    };
    return UDPChannel;
}());
// Implementação concreta de um canal IP
var IPChannel = /** @class */ (function () {
    function IPChannel() {
    }
    IPChannel.prototype.connect = function () {
        console.log("Conectando via IP...");
    };
    IPChannel.prototype.send = function (data) {
        console.log("Enviando via IP: ".concat(data));
    };
    IPChannel.prototype.disconnect = function () {
        console.log("Desconectando IP...");
    };
    return IPChannel;
}());
// Fábrica estática - decide o tipo de canal a ser criado
var ChannelFactory = /** @class */ (function () {
    function ChannelFactory() {
    }
    ChannelFactory.create = function (type) {
        if (type === "TCP") {
            return new TCPChannel();
        }
        else if (type === "UDP") {
            return new UDPChannel();
        }
        else {
            return new IPChannel();
        }
    };
    return ChannelFactory;
}());
// Código cliente - não sabe qual canal está sendo usado
function sendMessage(message, protocol) {
    var channel = ChannelFactory.create(protocol);
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
