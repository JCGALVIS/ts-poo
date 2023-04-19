interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnet(): void;
  isConnected(name: string): boolean;
}

class PostgresDriver implements Driver {
  database: string;
  password: string;
  port: number;

  constructor(database: string, password: string, port: number) {
    this.database = database;
    this.password = password;
    this.port = port;
  }
  disconnet(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }

  connect(): void {
    throw new Error('Method not implemented.');
  }
}
