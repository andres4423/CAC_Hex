import { Connection, createConnection } from "mariadb";
import { Cita } from "../../domain/model/cita/cita";

export class MariaDBConnector {
  private connection: Connection | null = null;

  async connect(): Promise<void> {
    if (!this.connection) {
      this.connection = await createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
    }
  }

  async getConnection(): Promise<Connection> {
    if (!this.connection) {
      await this.connect();
    }
    return this.connection;
  }

  async close(): Promise<void> {
    if (this.connection) {
      await this.connection.end();
      this.connection = null;
    }
  }
}
