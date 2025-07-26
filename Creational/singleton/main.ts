class DatabaseConnection {
  private static instance: DatabaseConnection;

  private connectionId: string;

  private constructor() {
    this.connectionId = Math.random().toString(36).substring(2, 10);
    console.log(`Conexão criada! ID: ${this.connectionId}`);
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    } else {
      console.log(`Já existe uma conexão, reutilizando...`);
    }
    return DatabaseConnection.instance;
  }

  query(sql: string) {
    console.log(`[${this.connectionId}] Executando SQL: ${sql}`);
  }
}

const db1 = DatabaseConnection.getInstance();
db1.query('SELECT * FROM users');

const db2 = DatabaseConnection.getInstance();
db2.query('INSERT INTO users (name) VALUES (\'Lucas\')');

