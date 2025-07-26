var DatabaseConnection = /** @class */ (function () {
    function DatabaseConnection() {
        this.connectionId = Math.random().toString(36).substring(2, 10);
        console.log("Conex\u00E3o criada! ID: ".concat(this.connectionId));
    }
    DatabaseConnection.getInstance = function () {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        else {
            console.log("J\u00E1 existe uma conex\u00E3o, reutilizando...");
        }
        return DatabaseConnection.instance;
    };
    DatabaseConnection.prototype.query = function (sql) {
        console.log("[".concat(this.connectionId, "] Executando SQL: ").concat(sql));
    };
    return DatabaseConnection;
}());
var db1 = DatabaseConnection.getInstance();
db1.query('SELECT * FROM users');
var db2 = DatabaseConnection.getInstance();
db2.query('INSERT INTO users (name) VALUES (\'Lucas\')');
