import { Connection,  createPool } from "mariadb";
require('dotenv').config();
export class MariaDBConnector {
  private connectionPool: any;

  constructor() {
    console.log(process.env.DB_PORT)
    this.connectionPool = createPool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }

  async getConnection(): Promise<Connection> {
    try {
      const connection = await this.connectionPool.getConnection();
      return connection;
    } catch (error) {
      console.error("Error getting connection from pool:", error);
      throw error; // Re-throw the error for further handling
    }
  }

  async close(): Promise<void> {
    await this.connectionPool.end();
  }
}